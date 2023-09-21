<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/"
        ><span class="material-icons">home</span
        ><span class="text">Home</span></router-link
      >
      <router-link class="button" to="/skills"
        ><span class="material-icons">hourglass_full</span
        ><span class="text">Skills</span></router-link
      >
      <router-link class="button" to="/contact"
        ><span class="material-icons">perm_contact_calendar</span
        ><span class="text">Contact</span></router-link
      >
    </div>
    <div class="flex"></div>
    <div class="menu">
      <div class="button" @click="toggleDarkMode">
        <span
          v-if="darkMode == false"
          class="material-symbols-outlined"
          :style="{ color: 'var(--primary)' }"
        >
          light_mode
        </span>
        <span
          v-if="darkMode == true"
          class="material-symbols-outlined"
          style="color: gold"
        >
          dark_mode
        </span>
        <span class="text">View Mode</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref,defineEmits } from "vue";
import logoURL from "../assets/icons8-a-50.png";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const darkMode = ref(false);

const emit = defineEmits('toggleViewMode')

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  emit('toggleViewMode',darkMode.value)
};

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
// main side bar container --> aside settings
aside {
  // main settings for rounded bar with 10px margin from the left
  min-height: 50vh;
  position: fixed;
  display: flex;
  flex-direction: column;

  background: var(--dark-sidebar-background-color);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  // min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;
  margin-top: 10%;
  margin-bottom: 10%;
  // position: fixed;
  margin-left: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  // toggle for full view or default view
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    // animation for transition from default to full view
    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: gold;
        transition: 0.2s ease-out;
      }

      // changing the icon after transition
      &:hover {
        .material-icons {
          color: gold;
          transform: translateX(0.5rem);
        }
      }
    }
  }

  // side bar text scaling after full view
  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  // menu --> all the icons in the side bar
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      margin-bottom: 20px;

      .material-icons {
        font-size: 2rem;
        color: gold;
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
        margin-left: 9px;
      }

      &:hover {
        background: var(--dark-sidebar-alternate-color);

        .material-icons,
        .text {
          color: gold;
        }
      }

      // when clicked on a icon highlights the background
      &.router-link-exact-active {
        background: var(--dark-sidebar-alternate-color);
        border-right: 5px solid gold;

        .material-icons,
        .text {
          color: gold;
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  // expanded
  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      // rotate the expand icon
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  // for expanded view it comes up above the content for small screen instead of pushing them away
  @media (max-width: 1024px) {
    z-index: 99;
    // position: relative;
  }
}
</style>
