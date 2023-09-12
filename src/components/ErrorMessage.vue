<template>
  <p class="error-message">{{ errorMessage }}</p>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: ["errorMessage"],
};
</script>

<style scoped>
p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 24px;
  font-weight: bold;
}
</style>
