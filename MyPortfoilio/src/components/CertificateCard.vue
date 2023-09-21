<template>
  <div class="my-certificates-item">
    <img class="certificate-images" :src="certificateImageUrl" alt="image" />
    <!-- <div class="hr-like"></div> -->
    <h2 class="skill-label">{{ certificateName }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  certificateImageUrl: String,
  certificateName: String,
});
</script>

<style scoped lang="scss">
.certificate-images {
  height: 200px;
  width: 300px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 40px;
}

.certificate-images:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.hr-like {
  width: 100%;
  height: 0.5px;
  background-color: white;
  margin: 20px auto;
}

.my-certificates-item {
  margin: 10px;
  text-align: center;
  display: inline-block;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
  border-radius: 5px;
  padding: 4px; /* Add padding for spacing */
  background: var(--dark-sidebar-background-color); /* Set a background color */
}

.skill-label {
  position: relative; /* Change to relative positioning */
  z-index: 1; /* Make sure it's above the card content */
  //background-color: rgb(19, 16, 16);
  transition: 0.6s;
  opacity: 0; /* Initially hide the skill name */
}

.my-certificates-item:hover .skill-label {
  opacity: 1; /* Show the skill name on hover */
}

@media (max-width: 768px) {
  .my-certificates-item {
    width: 50%;
  }
}

@media (max-width: 576px) {
  .my-certificates-item {
    width: 100%;
  }
}
</style>