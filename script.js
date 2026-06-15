const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const invitation = document.getElementById("invitation");

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        invitation.classList.add("show");

        invitation.scrollIntoView({
            behavior: "smooth"
        });

    }, 1200);

});

const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {

    response.classList.add("show");

    yesBtn.innerText = "❤️";
    yesBtn.disabled = true;

});