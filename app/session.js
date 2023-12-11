let sessionID = localStorage.getItem("sessionID");
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionID) {
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
        sessionID = responseText;
      })
      .catch((error) => {
        console.error("Error fetching session id: ", error);
      });
  }
});
const idPayload = { id: sessionID };
document
  .getElementById("tasks")
  .setAttribute("hx-vals", JSON.stringify(idPayload));
