<template>
  <div class="social-buttons">
    <div class="social">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ACS-lessgo"
        class="social-link"
      >
        <i class="fab fa-github green-icon"></i>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/ankush-c-s-7b9305241/"
        class="social-link"
      >
        <i class="fab fa-linkedin green-icon"></i>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/_gipsyDang4r"
        class="social-link"
      >
        <i class="fab fa-twitter-square green-icon"></i>
      </a>
      <a href="mailto:ankushcs3327@gmail.com" class="social-link">
        <i class="fas fa-envelope green-icon"></i>
      </a>
    </div>
    <hr class="small-hr" />
    <div class="site-buttons">
      <button type="button" class="DriveBtn">
        <a
          href="https://drive.google.com/file/d/16Lo-KFX9FXvQ4BozJCqHEIPyHTvnKTva/view?usp=sharing"
          target="_blank"
        >
          <span class="BtnText">RESUME</span>
        </a>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
// container for social buttons in home page
.social-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.site-buttons {
  margin-bottom: 30%;
}
// end of container settings

// override by gold inline style
.green-icon {
  color: gold;
}

// site button settings
.DriveBtn {
  background-color: gold;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  margin-bottom: 30px;
}

.DriveBtn:hover {
  background-color: rgba(255, 217, 0, 0.692);
}

.DriveBtn a {
  text-decoration: none;
  color: white;
}

.BtnText {
  color: var(--dark-background-color);
  text-decoration: none;
}
// end of site buttons settings

// button link animations
.social a {
  margin-left: 10px;
}
.social-link:hover .green-icon {
  font-size: 30px; /* Increase the icon size on hover */
  transition: font-size 0.3s ease; /* Add a smooth transition */
}
// end of animations

//border for separating

.small-hr {
  width: 50%;
  height: 2px;
  background-color: #333;
  margin: 20px auto;
}

//reduce icon size for mobile displays
@media (min-width: 768px) {
  .green-icon {
    font-size: 24px;
  }
  .DriveBtn {
    margin-bottom: 30px;
  }
}
</style>
