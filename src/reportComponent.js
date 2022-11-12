import React from "react";
import Iframe from "react-iframe";
import { useState, useEffect } from "react";


function ReportComponent(props) {
    const {organizationId,userId,purchaseId}= props
    
  const [reportURL, setReportURL] = useState("");

  useEffect(
    () =>
      setReportURL(
        'http://192.168.18.63/ReportViewer.aspx?OrganizationId=' +
        organizationId +
        '&PurchaseId=' +
        purchaseId +
        '&UserId=' +
        userId +
        '&UserName=Admin&Report=PurchaseOrder' 
        // username +
        // '&Report=PurchaseOrder',
        // `http://192.168.18.63/ReportViewer.aspx?OrganizationId= 91BEDD36-A0D2-4609-8C0F-7DA942D04C0D&PurchaseId=E9D43E9E-9062-4718-BF9E-D22ABDDAF9DE&UserId=1c565d11-dae3-4ec2-9f5a-1a7d5f23f03a&UserName=Admin&Report=PurchaseOrder`
      ),
    []
  );

  return (
    <Iframe
      url={reportURL}
      width="99%"
      height="640px"
      loading="eager"
      id=""
      className=""
      display="block"
      position="relative"
    />
  );
}

export default ReportComponent;
