<template>
  <div>
    <script src="https://topnotch.wm.store​/static/js/embed.js"></script>
  </div>
</template>
<script>
// Add script tag to head
export default {
  mounted() {
    if (process.browser) {
      let script = document.createElement("script");
      script.async = true;
      script.id = "weedmaps";
      script.src = "https://topnotch.wm.store​/static/js/embed.js";
      document.body.appendChild(script);
    }
  }
};
</script>
