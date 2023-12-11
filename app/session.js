document.addEventListener("DOMContentLoaded", () => {
  let sessionID = localStorage.getItem("sessionID");
  if (!sessionID) {
    // If the value is not present, get an id from the server
    fetch("/api/get-session")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const responseText = data.id;
        localStorage.setItem("sessionID", responseText);
        document.getElementById("test1").innerText = responseText + "";

        sessionID = responseText;
      })
      .catch((error) => {
        console.error("Error fetching session id: ", error);
      });
  } else {
    document.getElementById("test1").innerText = String(sessionID);
  }
});
