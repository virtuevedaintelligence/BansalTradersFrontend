import React, { useEffect, useState } from "react";

function App() {
  const [backendWorking, setBackendWorking] = useState(true);

  useEffect(() => {
    // Check backend status using an HTTP request to a health check endpoint
    fetch("/health-check")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Backend not working");
        }
      })
      .catch((error) => {
        console.error(error);
        setBackendWorking(false);
      });
  }, []);

  if (!backendWorking) {
    console.log(backendWorking);
    return (
      <div>
        <h1>Error: Backend is not working. Please try again later.</h1>
      </div>
    );
  }
}

export default App;
