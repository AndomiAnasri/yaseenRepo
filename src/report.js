import React from "react";
import ReportComponent from "./reportComponent";
import { useLocation } from "react-router-dom";

function Report(props) {
  const location = useLocation();
  console.log(props, " props");
  
  const {organizationId,userId,purchaseId} = location.state
    return (
        
      <div>
        {organizationId ? (
          <ReportComponent
            organizationId={organizationId}
            userId={userId}
            purchaseId={purchaseId}
          />
        ) : (
          <h1>loading</h1>
        )}
      </div>
    );
}

export default Report;
