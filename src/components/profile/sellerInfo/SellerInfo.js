import React, { useState, useEffect } from "react";
import {
  useGetAuthQuery,
  useGetAuthUserQuery,
  useUpdateSellerMutation,
} from "../../../api/iKartApi";
import "./sellerInfo.scss";
import options from "../stateOption";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerInfo = () => {
  const { data: auth } = useGetAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // get user info
  const { isLoading, data: user } = useGetAuthUserQuery(undefined, {
    skip: !auth,
  });

  const seller = user?.sellerInfo;

  const [updateSeller] = useUpdateSellerMutation();

  const [disable, setDisable] = useState(true);
  const [action, setAction] = useState("Edit");

  const [organization, setOrganization] = useState("");
  const [gstin, setGstin] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [altMobile, setAltMobile] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setOrganization(seller?.organization || "");
      setGstin(seller?.gstin || "");
      setPan(seller?.pan || "");
      setEmail(seller?.email || "");
      setLogo(seller?.logo || "");
      setMobile(seller?.mobile || "");
      setPincode(seller?.pincode || "");
      setLocality(seller?.locality || "");
      setAddress(seller?.address || "");
      setCity(seller?.city || "");
      setState(seller?.state || "");
      setLandmark(seller?.landmark || "");
      setAltMobile(seller?.altMobile || "");
    }
  }, [seller, disable, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("organization", organization);
    formData.append("gstin", gstin);
    formData.append("pan", pan);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("pincode", pincode);
    formData.append("locality", locality);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("landmark", landmark);
    formData.append("altMobile", altMobile);

    try {
      const response = await updateSeller({
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
      toast("Seller Update Failed");
    }
  };

  return (
    <div className="profileInfo">
      <div className="infoHeader">
        <div className="head-left">
          <span className="head">Seller Account</span>
          <button type="submit" onClick={handleSubmit} className="save" hidden={disable}>
            SAVE
          </button>
        </div>
        <span
          className="button"
          onClick={() => {
            setDisable((pre) => !pre);
            setAction(disable ? "Cancel" : "Edit");
            setOrganization("");
            setGstin("");
            setPan("");
            setEmail("");
            setLogo("");
            setMobile("");
            setPincode("");
            setLocality("");
            setAddress("");
            setCity("");
            setState("");
            setLandmark("");
            setAltMobile("");
          }}
        >
          {action}
        </span>
      </div>
      <div className="pform">
        <form method="patch" encType="multipart/form-data">
          <div className="pinput">
            <label htmlFor="">Your Organization</label>
            <input
              type="text"
              placeholder="Organization Name"
              name="organization"
              value={organization}
              disabled={disable}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div className="pinput">
            <label htmlFor="">GSTIN</label>
            <input
              type="text"
              placeholder="GSTIN"
              name="gstin"
              value={gstin}
              disabled={disable}
              onChange={(e) => setGstin(e.target.value)}
            />
          </div>

          <div className="pinput">
            <label htmlFor="">PAN</label>
            <input
              type="text"
              placeholder="PAN"
              name="pan"
              value={pan}
              disabled={disable}
              onChange={(e) => setPan(e.target.value)}
            />
          </div>
        </form>
        <form className="logoBox" encType="multipart/form-data">
          <img src={seller?.logo} alt="logo" />
          <input
            className="imgButton"
            type="file"
            placeholder="orgImage"
            filename="orgImage"
            accept="image/*"
            autoComplete="none"
            multiple
            hidden={disable}
            disabled={disable}
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </form>
      </div>
      <div className="sform">
        <form encType="multipart/form-data">
          <div className="line">
            <div className="input">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                disabled={disable}
                onChange={(e) => setEmail(e.target.value)}
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
                type="text"
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
                  <option key={index} value={option.value}>
                    {option.label}
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
                type="text"
                placeholder="Alternate Mobile"
                name="altMobile"
                value={altMobile}
                disabled={disable}
                onChange={(e) => setAltMobile(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <span className="deactivate">Deactivate Account</span>
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

export default SellerInfo;
