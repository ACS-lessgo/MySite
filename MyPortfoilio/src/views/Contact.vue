<template>
  <main class="contact-page">
    <UserForm></UserForm>
  </main>
</template>

<script setup>
import UserForm from "../components/UserForm.vue";
</script>

<style scoped lang="scss">
// page setting for max height
.contact-page {
  min-height: 100vh;
  margin-left: 10%;
}

// media query to reduce margin and form for responsiveness
@media (max-width: 768px) {
  .contact-page {
    margin-left: 0;
  }
}
</style>
