// JavaScript for the "Buy Now!" notification
document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll("button a");

    buyButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault(); // Prevent navigation for demo purposes
            const productName = button.closest(".card").querySelector("h2").textContent;
            alert(`You have clicked to buy "${productName}"!`);
        });
    });
});
