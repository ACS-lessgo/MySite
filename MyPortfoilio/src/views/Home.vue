<template>
  <main class="home-page">
    <div id="home-container">
      <div class="image-container">
        <img
          :src="currentImage"
          alt="my-emoji"
          @click="nextImage"
          class="rounded-image"
        />
      </div>
      <div class="content-container">
        <hr class="small-hr" />
        <h1 class="fade-in">I'm Ankush</h1>
        <h2 class="typing-text" style="color: gold">
          {{ typedText }}
          <span class="typing-cursor">|</span>
        </h2>
        <hr class="small-hr" />
        <p class="fade-in">
          "I'm a web developer with a strong coding background and a passion for
          creating beautiful, user-friendly websites. I'm dedicated to
          continuously improving my skills and applying them in a professional
          context."
        </p>
        <hr class="small-hr" />
        <ul class="no-bullets fade-in">
          <li>🚀 Passionate about exploring the edges of web applications.</li>
          <li>
            📚 Have a strong appetite to learn new technologies in a short span
            and implement independently.
          </li>
          <li>
            🔒 Proficient in Vue.js, JavaScript, and Java, committed to
            developing web applications with good coding standards.
          </li>
        </ul>
        <hr class="small-hr" />
      </div>
    </div>
    <Socials />
  </main>
</template>

<script setup>
import Socials from "../components/Socials.vue";
import { my1, my2, my3, my4 } from "../assets";
import { ref, onMounted } from "vue";
const images = [my1, my2, my3, my4];

let currentIndex = 0;

const currentImage = ref(images[currentIndex]);
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.value = images[currentIndex];
}
const fadeInElements = document.querySelectorAll(".fade-in");

fadeInElements.forEach((element, index) => {
  element.style.animation = `fadeIn 1s ease forwards ${index / 5 + 0.5}s`;
});

const typedText = ref("");
const textToType = "Software Engineer";
const typingSpeed = 100;
const backspaceDelay = 1000; // Delay before backspacing

function typeText(text, speed, delay) {
  let index = 0;
  let backspacing = false;

  function type() {
    if (!backspacing && index < text.length) {
      typedText.value += text[index];
      index++;
      setTimeout(type, speed);
    } else if (!backspacing && index === text.length) {
      backspacing = true;
      setTimeout(type, delay);
    } else if (backspacing && index > 0) {
      typedText.value = text.substring(0, index - 1);
      index--;
      setTimeout(type, speed);
    } else {
      backspacing = false;
      index = 0;
      setTimeout(type, speed);
    }
  }

  type();
}

onMounted(() => {
  typeText(textToType, typingSpeed, backspaceDelay);
});
</script>

<style scoped lang="scss">
//header alignment in content home page
h1,
h2 {
  text-align: center;
}

//home-page container settings
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  justify-content: flex-start;
  margin-bottom: 4%;
}

#home-container {
  text-align: center;
}

//end of home page container

//image container (the profile character image settings)
.image-container {
  margin-bottom: 20px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rounded-image {
  cursor: pointer;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}

// end of image container settings

//content container settings for list elements and about information
.content-container {
  max-width: 70%;
  margin: 20px auto;
  text-align: left;
}

// border separating the contents 
.small-hr {
  width: 50%;
  height: 2px;
  background-color: #333;
  margin: 20px auto;
}

//removing default bulletin from li elements
.no-bullets {
  list-style-type: none;
  padding-left: 0;
}

.no-bullets li {
  margin-bottom: 10px;
}
// end of editing li elements


// Define the fade-in animation loads at initial loading of the page lasts for 4s can be defined as any value
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 4s ease forwards;
  transform: translateY(20px);
}
// end of fade in animations


// Add a transition to the image for a smooth change 
.rounded-image {
  cursor: pointer;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

// Apply a scale transformation on hover
.rounded-image:hover {
  transform: scale(1.1);
}

// typing text cursor and removing smoothing transition settings
.typing-text {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid transparent; // Add a transparent border for the cursor effect 
}

.typing-cursor {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 1.2em; // Adjust the height to align the cursor with the text 
  //background-color: #4ade80; // Cursor color 
  animation: cursorBlink 0.7s infinite; // Blinking animation 
}

// Define the cursor blinking animation 
@keyframes cursorBlink {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: #4ade80; //Cursor color 
  }
}

// end of cursor animations of typing text

@media (max-width: 768px) {
  .typing-text {
    font-size: 20px;
  }
  .DriveBtn {
    margin-bottom: 30px;
  }
}
</style>
