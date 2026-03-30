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
    "img-three": { date: "Feb 27, 2026, 10:20pm", text: "We were there doing the dishes and I was making jokes. I was so scared... Everything worked out though and I got this AMAZING picture of my baby girl" },
    "img-four": { date: "Feb 23, 2026, 9:33pm", text: "We were about to go to bed and I was flashbanging you with facetime photos, and as always, I was extremely scared. We were having fun though. Alot of fun" },
    "img-five": { date: "Mar 6, 2026, 3:13pm", text: "You were on the way or leaving the marriage I think. It was very hot so you took your jacket off, but of course, you had to put it back on before going in. We were talking and you were kinda in a good mood but kinda not at the same time so I was very scared again!" },
    "img-six": { date: "Mar 27, 2026, 5:37pm", text: "We were having alot of fun while you were dealing with your chicken. Even though I was jealous of the chicken. But chicken none the less..." },
    "img-seven": { date: "Mar 21, 2026, 1:03pm", text: "You were at the church eating from when I remember. This was the day that Matthew was having a hard time if I remember correctly, but you were happy at the church"},
    "img-eight": { date: "Mar 21, 2026, 1:03pm", text: "You looked very good that day, I was really staring at you even though I dont think you noticed alot. :)" },
    "img-nine": { date: "Mar 27, 2026, 5:37pm", text: "You look like you were going to eat me alive... I was so scared :'( Devious ahh becky" },
    "img-ten": { date: "Feb 16, 2026, 12:08pm", text: "You were studying while I was distracting you. I was so scared though so I needed to do something you know. I was happy talking to you though baby. It was really nice." }
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
