<template>
  <footer>
    <p>
      This website does not retain any files on its server. Rather, it solely
      provides links to media content hosted by third-party services.
    </p>
  </footer>
</template>

<style scoped>
footer {
  background: var(--bg1);
  border-top: 1px solid var(--bd0);
  box-sizing: border-box;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0;
}

p {
  width: 1200px;
  text-align: center;
}

@media (max-width: 1239px) {
  footer {
    height: 150px;
  }

  p {
    padding: 0 20px;
  }
}
</style>
