const form = document.getElementById("contact-form");
const button = document.getElementById("submitBtn");
const status = document.getElementById("status");

let lastSubmit = 0;
const COOLDOWN = 60000;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const now = Date.now();

    if (now - lastSubmit < COOLDOWN) {
        status.innerText = "Please wait befor sending agin";
        status.style.color = "orange";
        return;
    }

    lastSubmit = now;

    const email = document.getElementById("email").value;
    const message = document.getElementById("msg").value;

    button.disabled = true;
    button.innerText = "Sending...";
    status.innerText = "Sending message...";
    status.style.color = "gray";

    try {
        const res = await fetch("https://coderxaronapi.vercel.app/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, message })
        });

        const data = await res.json();

        if (res.ok) {
            status.innerText = "Message sent successfully!";
            status.style.color = "green";
            form.reset();
        } else {
            status.innerText = data.error || "Failed to send meg";
            status.style.color = "red";
        }

    } catch (err) {
        console.error(err);
        status.innerText = "Network err";
        status.style.color = "red";
    }

    button.disabled = false;
    button.innerText = "Submit";
});



// small easter egg : ) 
let Buffer = "";
document.addEventListener('keydown', (e) => {
    
    if (e.key.length === 1) {
        Buffer += e.key.toLowerCase();
        if (coderxaronBuffer.length > 10) { coderxaronBuffer = coderxaronBuffer.slice(-10); }
        if (coderxaronBuffer === "fatal") { window.location.href = "https://realshadowledgend.github.io/FatalQuackers.github.io/"; }
    }
});

// shoutout do fatal! : ) 
