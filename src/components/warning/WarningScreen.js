import React, { useEffect, useState } from "react";
import App from "../../App";
import WarningService from "../../services/WarningService";

function WarningScreen() {
  const [backendWorking, setBackendWorking] = useState(true);
  useEffect(() => {
    // Check backend status using an HTTP request to a health check endpoint
    async function check() {
      try {
        const warning = await WarningService.generateWarning();
        const warnData = await warning.data;
        debugger;
        if (!warnData.message === 'OK') {
          throw new Error("Backend not working");
        }
      } catch (error) {
        console.error(error);
        setBackendWorking(false);
      }
    }
    check();
  }, []);

  if (!backendWorking) {
    return (
      <div>
        <h1>Error: Backend is not working. Please try again later.</h1>
      </div>
    );
  } else {
    return (
      <>
        <App />
      </>
    )
  }
}

export default WarningScreen;
