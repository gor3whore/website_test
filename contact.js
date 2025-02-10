document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const sendButton = document.getElementById("send-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
     
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const termsChecked = document.getElementById("terms-checkbox").checked;

        if (!name || !email || !phone || !message || !termsChecked) {
            alert("Please fill in all fields and agree to the Terms & Conditions.");
            return;
        }

        const formData = new FormData(form);

        fetch("email.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes("Message Sent Successfully")) {
                alert("Your enquiry has been sent successfully!");
                form.reset();
                sendButton.disabled = true; 
            } else {
                alert("Failed to send message. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
    });
});


function showTerms() {
    document.getElementById("terms-popup").style.display = "block";
    document.getElementById("terms-checkbox").checked = false;
}

function acceptTerms() {
    document.getElementById("terms-popup").style.display = "none";
    document.getElementById("terms-checkbox").checked = true;
    document.getElementById("send-button").disabled = false;
}
