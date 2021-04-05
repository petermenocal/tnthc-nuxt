<template>
  <div>
    <div class="wmheading">
      <p>
        <span style="padding-right: 20px;">Ordering for <em>pickup</em></span>
        <NuxtLink to="deliveryorder">Change to delivery</NuxtLink>
      </p>
    </div>
    <iframe
      src="/order-pickup.html"
      height="100%"
      width="100%"
      marginwidth="0"
      marginheight="0"
      hspace="0"
      vspace="0"
      frameborder="0"
      style="position:fixed; top:130px; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; margin-bottom: 100px !important; padding:0; overflow:hidden;"
    />
  </div>
</template>
<style>
body {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
