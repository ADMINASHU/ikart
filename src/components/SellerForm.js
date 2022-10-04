import React, { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const SellerForm = () => {
  const { auth, setAuth } = useAuth();
  const [gstin, setGstin] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [line1, line2, line3, city, state, pincode]); // useEffect for set Error
  const navigate = useNavigate();

  // functions define ...................................................

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Urole = "Seller";
      const response = await axios.post(
        "/seller",
        {
          uname: auth.username,
          role: Urole,
          gstin: gstin,
          line1: line1,
          line2: line2,
          line3: line3,
          city: city,
          state: state,
          pincode: pincode,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: auth.accessToken,
          },
        }
      );
      console.log(response?.data);
      const username = auth.username;
      const email = auth.email;
      const role = response?.data?.role;
      const accessToken = auth.accessToken;
      const seller = response?.data?.seller;
      setAuth({ username, email, role, accessToken, seller });
      setGstin("");
      setLine1("");
      setLine1("");
      setLine2("");
      setLine3("");
      setCity("");
      setState("");
      setPincode("");
      navigate("/profile");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("Server not responding");
      } else {
        setErrMsg("Seller registration failed");
      }
    }
  };
  //   const priColor = "#040480";
  //   const insColor = "040480";

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>GSTIN: </label>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="gstin"
            name="gstin"
            value={gstin}
            autoComplete="none"
            required
            onChange={(e) => setGstin(e.target.value)}
          />
        </div>
        <label>Office Address: </label>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="Line 1"
            name="line 1"
            value={line1}
            autoComplete="none"
            required
            onChange={(e) => setLine1(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="Line 2"
            name="line 2"
            value={line2}
            autoComplete="none"
            required
            onChange={(e) => setLine2(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="Line 3"
            name="line 3"
            value={line3}
            autoComplete="none"
            required
            onChange={(e) => setLine3(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="City"
            name="city"
            value={city}
            autoComplete="none"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="State"
            name="state"
            value={state}
            autoComplete="none"
            required
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="Pin Code"
            name="pincode"
            value={pincode}
            autoComplete="none"
            required
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-seller" type="submit">
          Join
        </button>
        <br />
        <span className="invalidError">{errMsg}</span>
        <br />
      </form>
    </>
  );
};

export default SellerForm;
