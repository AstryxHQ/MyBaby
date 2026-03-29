// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  const images = document.getElementsByClassName("img");
  const infop = document.getElementById("information-p");
  const infoh = document.getElementById("information-h");

  // Default text shown on mouse leave
  const defaultData = {
    date: "March 29, 2026, 42 days clean",
    text: "Hey baby!!! Its been me and you for a while now! 6 months is a big milestone, but do you wanna know whats even bigger? The milestone you just reached! I'm so proud of you baby. You don't know how much this means to me that you were able to stop yourself for this long. You really did it and I need you to know that everything was worth it."
  };

  // Data for each image
  const imageData = {
    "img-one": {
      date: "Feb 7, 2026, 7:40pm",
      text: "This was when we were on call joking with each other. We were really happy but I was still trying to make sure you were happy because I was scared that you would get sad. Everything worked out though even though I couldn't sleep..."
    },
    "img-two": { date: "Mar 27, 2026, 5:36pm", text: "You were handling your newborn chick in this picture and having fun while we were talking. We were really happy even though Josiah was being... Josiah" },
    "img-three": { date: "Feb 27, 2025, 10:20pm", text: "We were there doing the dishes and I was making jokes. We were happy but you were slightly annoyed by your aunt. I was so scared... Everything worked out though and I got this AMAZING picture of my baby girl" },
    "img-four": { date: "", text: "" },
    "img-five": { date: "", text: "" },
    "img-six": { date: "", text: "" },
    "img-seven": { date: "", text: "" },
    "img-eight": { date: "", text: "" },
    "img-nine": { date: "", text: "" },
  };

  let timeout; // to prevent animation stacking

  // Function to update info with fade animation
  function updateInfo(data) {
    clearTimeout(timeout);

    infoh.classList.add("fade-out");
    infop.classList.add("fade-out");

    timeout = setTimeout(() => {
      infoh.textContent = data.date;
      infop.textContent = data.text;

      infoh.classList.remove("fade-out");
      infop.classList.remove("fade-out");
    }, 200); // match CSS transition duration
  }

  // Attach event listeners to each image
  for (let img of images) {
    img.addEventListener("mouseenter", () => {
      const data = imageData[img.id];
      if (data) {
        updateInfo(data);
      }
    });

    img.addEventListener("mouseleave", () => {
      updateInfo(defaultData);
    });
  }

  // Initialize with default text
  updateInfo(defaultData);

});
