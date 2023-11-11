<template>
  <footer>
    <span>© </span><strong>Hind</strong>ikutsikas, 2023
  </footer>
</template>

<script>

export default {
  name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
footer {
  height: 72px;
  width: 100%;
  background-color: #ccc;
  padding: 16px;
  display: flex;
  align-items: center;

  & span {
    margin-right: 4px;
  }
}
</style>
