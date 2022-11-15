import React, { useState, useEffect } from "react";
import {
  useGetAuthQuery,
  useGetAuthUserQuery,
  useUpdateUserAddressMutation,
} from "../../../api/iKartApi";
import "./address.scss";
import options from "../stateOption";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = () => {
  const { data: auth } = useGetAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // get user info
  const { isLoading, data: user } = useGetAuthUserQuery(undefined, {
    skip: !auth,
  });

  const [updateUserAddress] = useUpdateUserAddressMutation();

  const [disable, setDisable] = useState(true);
  const [action, setAction] = useState("Edit");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [altMobile, setAltMobile] = useState("");
  const [addType, setAddType] = useState("Home");

  useEffect(() => {
    if (!isLoading) {
      setName(user?.name || "");
      setMobile(user?.mobile || "");
      setPincode(user?.pincode || "");
      setLocality(user?.locality || "");
      setAddress(user?.address || "");
      setCity(user?.city || "");
      setState(user?.state || "");
      setLandmark(user?.landmark || "");
      setAltMobile(user?.altMobile || "");
      setAddType(user?.addType || "Home");
    }
  }, [user, disable, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("pincode", pincode);
    formData.append("locality", locality);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("landmark", landmark);
    formData.append("altMobile", altMobile);
    formData.append("addType", addType);

    try {
      const response = await updateUserAddress({
        body: formData,
      });
      if (response) {
        setDisable((pre) => !pre);
        setAction(disable ? "Cancel" : "Edit");
        toast(response?.data?.message);
      } else {
        toast(response?.error?.data?.message);
      }
    } catch (error) {
      toast("User Update Failed");
    }
  };

  return (
    <div className="profileAdd">
      <div className="addHeader">
        <div>
          <span className="head">Manage Address</span>
        </div>
        <span
          className="button"
          onClick={() => {
            setDisable((pre) => !pre);
            setAction(disable ? "Cancel" : "Edit");
            setName("");
            setMobile("");
            setPincode("");
            setLocality("");
            setAddress("");
            setCity("");
            setState("");
            setLandmark("");
            setAltMobile("");
            setAddType("");
          }}
        >
          {action}
        </span>
      </div>
      <div className="form">
        <form method="patch" encType="multipart/form-data">
          <div className="line">
            <div className="input">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                disabled={disable}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <label>Mobile No.</label>
              <input
                type="number"
                placeholder="Mobile No."
                name="mobile"
                value={mobile}
                disabled={disable}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="line">
            <div className="input">
              <label>Pincode</label>
              <input
                type="number"
                placeholder="Pin Code"
                name="pincode"
                value={pincode}
                disabled={disable}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="input">
              <label>Locality</label>
              <input
                type="text"
                placeholder="Locality"
                name="locality"
                value={locality}
                disabled={disable}
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>
          </div>
          <div className="textArea">
            <label>Address</label>
            <textarea
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              disabled={disable}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="line">
            <div className="input">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={city}
                disabled={disable}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="input">
              <label>State</label>
              <select
                name="state"
                id="state"
                disabled={disable}
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {options.map((option, index) => (
                  <option key={index} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="line">
            <div className="input">
              <label>Landmark (Optional)</label>
              <input
                type="text"
                placeholder="Landmark"
                name="landmark"
                value={landmark}
                disabled={disable}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
            <div className="input">
              <label>Alternate Phone (Optional)</label>
              <input
                type="number"
                placeholder="Alternate Mobile"
                name="altMobile"
                value={altMobile}
                disabled={disable}
                onChange={(e) => setAltMobile(e.target.value)}
              />
            </div>
          </div>

          <div className="input">
            <label>Address Type</label>
            <div className="addType">
              <input
                id="home"
                type="radio"
                value="Home"
                name="address"
                checked={addType === "Home"}
                disabled={disable}
                onChange={(e) => setAddType(e.target.value)}
              />
              <label htmlFor="home">Home</label>
              <input
                id="work"
                type="radio"
                value="Work"
                name="address"
                disabled={disable}
                checked={addType === "Work"}
                onChange={(e) => setAddType(e.target.value)}
              />
              <label htmlFor="work">Work</label>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} className="save" hidden={disable}>
            SAVE
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Address;
