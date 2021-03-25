<template>
  <div>
    <h1>Delivery</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://topnotch.wm.store​/static/js/embed.js"
    );
    document.body.appendChild(recaptchaScript);
  }
};
</script>
