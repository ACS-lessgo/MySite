<template>
  <div class="item">
    <div class="rounded-image-container">
      <img class="shadow-rounded-circle" :src="skillImageUrl" alt="image" />
    </div>
    <p class="skill-label">{{ skillName }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  skillImageUrl: String,
  skillName: String,
});
</script>

<style scoped lang="scss">
.item {
  margin: 10px;
  text-align: center;
  display: inline-block; /* Display skills in a row */
  width: calc(25% - 20px); /* 25% width with margin between items */
  margin-right: 20px; /* Adjust margin to your preference */
  margin-left: 20px; /* Adjust margin to your preference */
}

.rounded-image-container {
  width: 100px; /* Adjust the container size */
  height: 100px; /* Adjust the container size */
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  background-color: rgb(14,14,64);
}

.shadow-rounded-circle {
  cursor: pointer;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
}

/* Hover effect */
.item:hover .shadow-rounded-circle {
  transform: scale(1.1); /* Scale up the image on hover */
}

@media (max-width: 768px) {
  .item {
    width: calc(33.33% - 20px); /* Three skills per row on small screens */
  }

  .skill-label {
    font-size: 14px; /* Reduce text size on small screens */
  }
}

@media (max-width: 576px) {
  .item {
    width: calc(50% - 20px); /* Two skills per row on extra-small screens */
  }
}
</style>
