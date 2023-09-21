<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Sidebar from "./components/SideBar.vue";
</script>

<style lang="scss">
//primary color scheme for the website
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --dark-new-alt: rgb(1, 1, 33);
  --dark-new-alt-nav: rgb(14, 14, 146);
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

// applying the font for all elements in the site
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
  color: white;
}
//body container starts
body {
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  background: var(--dark-new-alt);
}
html {
  background: var(--dark-new-alt);
}

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
