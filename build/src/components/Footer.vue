<template>
      <footer>
        <p class="footer-text">@2023 By Ankush</p>
      </footer>
</template>

<style scoped lang="scss">
//footer container settings
footer{
  background-color:rgb(14, 14,64);
  padding:5px 0 2px;
  text-align: center;
  border-top: 1px solid #334155;
  position: fixed;
  bottom: 0;
  width: 100%;
  /* margin-top: 5%; */
}

// footer text settings
.footer-text{
  color: gold;
}

// reduce the size for mobile displays
@media screen and (max-width: 768px) {
  footer {
    padding: 10px 0;
  }
  .footer-text{
    font-size: smaller;
  }
}
/* @media only screen
and (min-width : 320px)
and (max-width : 480px) {
    footer{
      margin-top: 25%;
    }
} */
</style>