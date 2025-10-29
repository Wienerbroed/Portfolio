document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMsg = document.getElementById("responseMsg");

  responseMsg.textContent = "Sending message...";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      responseMsg.style.color = "lightgreen";
      responseMsg.textContent = data.message;
      document.getElementById("contactForm").reset();
    } else {
      responseMsg.style.color = "red";
      responseMsg.textContent = data.error || "Something went wrong.";
    }
  } catch (err) {
    console.error(err);
    responseMsg.style.color = "red";
    responseMsg.textContent = "Failed to send message. Please try again later.";
  }
});