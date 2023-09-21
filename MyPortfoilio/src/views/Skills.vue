<template>
  <div id="skills-page">
    <div class="container">
      <!-- Production skills start -->
      <h2 class="title-text" style="font-size: 35px; color: gold">
        Production Level Skills
      </h2>
      <div class="skills-container">
        <SkillsCard
          v-for="(skill, index) in skills"
          :key="index"
          :skillImageUrl="skill.skillImageUrl"
          :skillName="skill.skillName"
        />
      </div>
      <hr class="small-hr" />
      <!-- end of production skills -->

      <!-- start of other skills -->
      <h2 class="title-text" style="font-size: 35px; color: gold">
        Other Relevant Skills
      </h2>
      <SkillsCard
        v-for="(skill, index) in otherskills"
        :key="index"
        :skillImageUrl="skill.skillImageUrl"
        :skillName="skill.skillName"
      />
      <hr class="small-hr" />
      <!-- end of other skills -->

      <!-- start of certificates -->
      <div class="my-certifications">
        <h2 class="title-text" style="font-size: 35px; color: gold">
          Certificates
        </h2>
        <CertificateCard
          v-for="(certificate, index) in certificates"
          :key="index"
          :certificateImageUrl="certificate.imageUrl"
          :certificateName="certificate.certificateName"
        />
      </div>
      <!-- end of certificates -->
    </div>
  </div>
</template>

<script setup>
import SkillsCard from "../components/SkillsCard.vue";
import CertificateCard from "../components/CertificateCard.vue";

import {
  bootstrap,
  css,
  github,
  html,
  java,
  mysql,
  nodejs,
  vuejs,
  typescript,
  python,
} from "../assets/skills/index.js";

import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
} from "../assets/Certificates/index.js";

// Create an array of objects to store skill information
const skills = [
  { skillImageUrl: bootstrap, skillName: "Bootstrap" },
  { skillImageUrl: css, skillName: "CSS" },

  { skillImageUrl: html, skillName: "HTML" },

  { skillImageUrl: mysql, skillName: "MySQL" },
  { skillImageUrl: nodejs, skillName: "Node.js" },
  { skillImageUrl: vuejs, skillName: "Vue.js" },
  { skillImageUrl: typescript, skillName: "TypeScript" },
];

const otherskills = [
  { skillImageUrl: github, skillName: "GitHub" },
  { skillImageUrl: python, skillName: "Python" },
  { skillImageUrl: java, skillName: "Java" },
];

const certificates = [
  {
    imageUrl: certificate1,
    certificateName: "Designing Network Systems",
  },
  {
    imageUrl: certificate2,
    certificateName: "Python (DSA)",
  },
  {
    imageUrl: certificate3,
    certificateName: "Machine Learning (Python)",
  },
  {
    imageUrl: certificate4,
    certificateName: "IOT and Embedded Systems",
  },
  {
    imageUrl: certificate5,
    certificateName: "Image Recognition (Python)",
  },
  {
    imageUrl: certificate6,
    certificateName: "DS and ML (Python)",
  },
];
</script>

<style scoped lang="scss">
// settings for the page container
#skills-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 20%;
  margin-top: 5%;
  margin-bottom: 50px;
}

.container {
  text-align: center;
  width: 100%;
}

// end of main container settings

// title text settings
.title-text {
  margin: 50px 0;
}

// border line for separation of skills
.small-hr {
  width: 50%;
  height: 2px;
  background-color: #333;
  margin: 20px auto;
}
// end of border

// start of media queries
// for reducing the scale so 2 skills per row in mobile view
@media (min-width: 768px) {
  .skills-container .item,
  .other-skills-container .item {
    /* 25% width with 20px margin between items */
    flex: 0 0 calc(25% - 20px);
  }
}

// for 1 certificate per row in mobile view
@media (max-width: 768px) {
  #skills-page {
    margin-right: 10px;
  }
  .skills-container .item,
  .other-skills-container .item {
    flex: 0 0 calc(50% - 20px); /* Two items per row on small screens */
  }

  .my-certificates-item {
    width: 100%; /* Full width on small screens */
  }

  .certificate-images {
    height: auto;
    max-width: 80%; /* Make images responsive */
    margin: 5px;
  }

  .title-text {
    font-size: 28px; /* Reduce text size on small screens */
  }

  .skill-label {
    font-size: 14px; /* Reduce text size on small screens */
  }
}
// end of media queries
</style>
