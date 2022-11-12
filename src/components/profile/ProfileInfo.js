import React, { useState, useEffect } from "react";
import {
  useGetAuthQuery,
  useGetAuthUserQuery,
  useUpdateUserMutation,
} from "../../api/iKartApi";
import "./profileInfo.scss";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileInfo = () => {
  const { data: auth } = useGetAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // get user info
  const { isLoading, data: user } = useGetAuthUserQuery(undefined, {
    skip: !auth,
  });

  const [updateUser] = useUpdateUserMutation();

  const [disable, setDisable] = useState(true);
  const [action, setAction] = useState("Edit");
  const [uname, setUname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setUname(user?.uname);
      setGender(user?.gender);
      setEmail(user?.email);
      setUserImage(user?.image);
    }
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uname", uname);
    formData.append("gender", gender);
    formData.append("image", userImage);

    try {
      const response = await updateUser({
        body: formData,
      });
      if (response) {
        // setUname("");
        // setEmail("");
        // setUserImage("");
        // setGender("");
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
    <div className="profileInfo">
      <div className="infoHeader">
        <div>
          <span className="head">Profile Information</span>
          <button
            type="submit"
            onClick={handleSubmit}
            className="save"
            hidden={disable}
          >
            SAVE
          </button>
        </div>
        <span
          className="button"
          onClick={() => {
            setDisable((pre) => !pre);
            setAction(disable ? "Cancel" : "Edit");
          }}
        >
          {action}
        </span>
      </div>
      <div className="form">
        <form method="patch">
          <div className="input">
            <label>Your Name</label>
            <input
              type="text"
              placeholder={user?.uname}
              name="uname"
              value={uname}
              disabled={disable}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Your Gender</label>
            <div className="gender">
              <input
                id="male"
                type="radio"
                value="Male"
                name="gender"
                checked={gender === "Male"}
                disabled={disable}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>
              <input
                id="female"
                type="radio"
                value="Female"
                name="gender"
                disabled={disable}
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              placeholder={user?.email}
              name="email"
              value={email}
              disabled
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="">Account Type</label>
            <input type="text" placeholder={user?.role} name="type" disabled />
          </div>
        </form>
        <div className="imageBox">
          <img src={user?.image} alt="user image" />
          <input
            type="file"
            placeholder="userImage"
            filename="userImage"
            accept="image/*"
            autoComplete="none"
            multiple
            hidden={disable}
            disabled={disable}
            onChange={(e) => setUserImage(e.target.files[0])}
          />
        </div>
      </div>
      <div className="instruction">
        <div className="FAQ">FAQs</div>
        <div className="para">
          What happens when I update my email address (or mobile number)?
        </div>
        <div className="para">
          Your login email id (or mobile number) changes, likewise. You'll
          receive all your account related communication on your updated email
          address (or mobile number).
        </div>
        <div className="para">
          When will my ikart account be updated with the new email address (or
          mobile number)? It happens as soon as you confirm the verification
          code sent to your email (or mobile) and save the changes.
        </div>
        <div className="para">
          What happens to my existing ikart account when I update my email
          address (or mobile number)? Updating your email address (or mobile
          number) doesn't invalidate your account. Your account remains fully
          functional. You'll continue seeing your Order history, saved
          information and personal details.
        </div>
        <div className="para">
          Does my Seller account get affected when I update my email address?
        </div>
        <div className="para">
          ikart has a 'single sign-on' policy. Any changes will reflect in your
          Seller account also.
        </div>
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

export default ProfileInfo;
