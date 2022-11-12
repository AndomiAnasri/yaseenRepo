import React from "react";
import ReportComponent from "./reportComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [organizationId, setOrganizationId] = useState("");
  const [userId, setUserId] = useState("");
  const [purchaseId, setPurchaseId] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    setOrganizationId("91BEDD36-A0D2-4609-8C0F-7DA942D04C0D");
    setUserId("1c565d11-dae3-4ec2-9f5a-1a7d5f23f03a");
    setPurchaseId("E9D43E9E-9062-4718-BF9E-D22ABDDAF9DE");
  }, []);

  const setValues = () => {
    // setOrganizationId("91BEDD36-A0D2-4609-8C0F-7DA942D04C0D");
    // setUserId("1c565d11-dae3-4ec2-9f5a-1a7d5f23f03a");
    // setPurchaseId("E9D43E9E-9062-4718-BF9E-D22ABDDAF9DE");

    if (!!organizationId && !!userId && !!purchaseId) {
      navigate("/report", {
        state: {
          organizationId,
          userId,
          purchaseId
        }
      });
    }

    //THIS CAN BE SECOND METHOD TO USE IF YOU WANT TO SET DATA THEN NAVIGATE

    // useEffect(() => {setOrganizationId("91BEDD36-A0D2-4609-8C0F-7DA942D04C0D");
    // setUserId("1c565d11-dae3-4ec2-9f5a-1a7d5f23f03a");
    // setPurchaseId("E9D43E9E-9062-4718-BF9E-D22ABDDAF9DE");}, []);
    // const setValues = () => { navigate("/report", {
    //     state: {
    //       organizationId,
    //       userId,
    //       purchaseId
    //     }}
  };

  return (
    <div className="App">
      {/* <DataList /> */}
      <button onClick={setValues}>get report</button>
    </div>
  );
}

export default Home;
