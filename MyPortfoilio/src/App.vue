<template>
  <div class="app" :style="appStyles">
    <Sidebar @toggleViewMode="handleToggle" />
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Sidebar from "./components/SideBar.vue";

import { ref, computed } from "vue";

const darkMode = ref(true);

const appStyles = computed(() => {
  const styles = {};
  if (darkMode.value) {
    styles['--background-color'] = 'var(--dark-background-color)';
    styles['--text-color'] = 'var(--dark-text-color)';
    styles['--sidebar-background-color'] = 'var(--dark-sidebar-background-color)';
    styles['--sidebar-alternate-color'] = 'var(--dark-sidebar-alternate-color)';
  } else {
    styles['--background-color'] = 'var(--light-background-color)';
    styles['--text-color'] = 'var(--light-text-color)';
    styles['--sidebar-background-color'] = 'var(--light-sidebar-background-color)';
    styles['--sidebar-alternate-color'] = 'var(--light-sidebar-alternate-color)';
  }
  console.log("Computed appStyles:", styles);
  return styles;
});

const handleToggle = (value) => {
  darkMode.value = value;
  console.log("Updated darkMode value:", darkMode.value);
};
</script>

<style lang="scss">
// primary color scheme for the website
:root {
  // default width
  --sidebar-width: 300px;

  // constant colors
  --primary: gold;
  --primary-alt: rgba(255, 217, 0, 0.712);

  // dark mode colors
  --dark-background-color: rgb(1, 1, 33);
  --dark-text-color: white;
  --dark-sidebar-background-color: rgb(14, 14, 64);
  --dark-sidebar-alternate-color: rgb(14, 14, 146);

  // light mode colors
  --light-background-color: beige;
  --light-text-color: black;
  --light-sidebar-background-color: rgba(182, 106, 19, 0.863);
  --light-sidebar-alternate-color: rgb(64, 61, 14);
}

// applying the font for all elements in the site
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
  color: var(--dark-text-color);
}

// body container starts
body {
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: var(--dark-background-color);
}

// html {
//   background: var(--dark-new-alt);
// }

// end of body container

//button hover pointer for all buttons

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

// media query for whole webpage for responsiveness

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
