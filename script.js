document.addEventListener("DOMContentLoaded", function() {
    console.log("Moni Pickle Website Loaded");

    const button = document.createElement("button");
    button.innerText = "Order Now";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#ff6b00";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    document.body.appendChild(button);

    button.addEventListener("click", function() {
        alert("Thanks for your interest! Order soon available.");
    });
});
