<template>
  <div>
    <div class="wrapper-diag">
      <p>Rendered on {{ renderedOn }}</p>
    </div>
  </div>
</template>
<script>
export default {
  asyncData() {
    return {
      content: "Seconds: " + new Date().getSeconds(),
      renderedOn: process.client ? "client" : "server"
    };
  }
};
</script>

<style>
.wrapper-diag {
  padding: 40px;
  width: 90%;
  margin: 0 auto;
}
</style>
