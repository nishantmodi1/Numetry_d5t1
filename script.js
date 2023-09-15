// script.js
const thumbnails = document.querySelectorAll(".thumbnails img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.createElement("img");
const lightboxCaption = document.createElement("div");
const closeButton = document.createElement("span");
closeButton.classList.add("close-button");
closeButton.innerHTML = "&times;";

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImage.src = thumbnail.src;
        lightboxCaption.textContent = `Image ${index + 1} Caption`; // Customize captions
        lightbox.appendChild(lightboxImage);
        lightbox.appendChild(lightboxCaption);
        lightbox.appendChild(closeButton);
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightbox.innerHTML = ""; // Clear the lightbox content
});
