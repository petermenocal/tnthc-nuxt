<template>
  <div>
    <div id="toolbar">
      <NuxtLink to="/"><logo /></NuxtLink>
      <b-button v-b-toggle.sidebar-no-header class="menutoggle"
        ><svg viewBox="0 0 100 80" width="40" height="40">
          <rect style="fill:rgb(255,255,255);" width="100" height="20"></rect>
          <rect
            style="fill:rgb(255,255,255);"
            y="30"
            width="100"
            height="20"
          ></rect>
          <rect
            style="fill:rgb(255,255,255);"
            y="60"
            width="100"
            height="20"
          ></rect></svg
      ></b-button>
      <span class="largelinks">
        <NuxtLink to="/" class="link">HOME</NuxtLink>
        <NuxtLink to="/delivery" class="link">DELIVERY/CURBSIDE</NuxtLink>
        <NuxtLink to="/contact" class="link">CONTACT</NuxtLink>
        <NuxtLink to="/storeorder" class="btn-rounded link">ORDER NOW</NuxtLink>
      </span>
    </div>
    <div class="page-wrap">
      <nuxt />
    </div>
    <div id="footer">
      <div class="content">
        <div class="legal">
          <NuxtLink to="/"><logo /></NuxtLink>
        </div>
        <div class="links">
          <div class="link-btns">
            <NuxtLink to="/delivery">Delivery + Curbside</NuxtLink>
            <NuxtLink to="/storeorder">Order Now</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </div>
          <div class="social">
            <a
              href="https://weedmaps.com/dispensaries/top-notch-thc-2"
              class="social-icon"
              ><IconWeedmaps
            /></a>
            <a
              href="https://www.instagram.com/topnotchdispensaries/"
              class="social-icon"
              ><IconInstagram
            /></a>
            <a href="https://www.facebook.com/topnotchthc" class="social-icon"
              ><IconFacebook
            /></a>
          </div>
        </div>
        <div class="legal">
          <p>
            <strong
              >© 2021 Top Notch The Health Center. All rights reserved.</strong
            >
          </p>
          <p class="disclaimer">
            <small
              >Products sold on this site are cannabis products. Keep out of
              reach of children. For use only by adults 21 years of age and
              older. Purchase outside of Nevada is prohibited.</small
            >
          </p>
        </div>
      </div>
    </div>
    <!-- sidebar -->
    <div>
      <b-sidebar
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow
      >
        <template #default="{ hide }">
          <div class="p-3">
            <b-button variant="primary" block @click="hide" id="close-btn"
              >X</b-button
            >
            <nav class="mt-10 mb-3">
              <b-nav vertical class="navitems">
                <NuxtLink to="/" @click="hide">Home</NuxtLink>
                <NuxtLink to="/delivery" @click="hide"
                  >Delivery/Curbside</NuxtLink
                >
                <NuxtLink to="/contact" @click="hide">Contact</NuxtLink>
                <NuxtLink to="/storeorder" @click="hide">Order Now</NuxtLink>
              </b-nav>
            </nav>
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconFacebook from "~/components/LogoFacebook.vue";
import IconInstagram from "~/components/LogoInstagram.vue";
import IconWeedmaps from "~/components/LogoWeedmaps.vue";

export default {
  components: {
    Logo,
    IconFacebook,
    IconInstagram,
    IconWeedmaps
  }
};
</script>
<style>
.page-wrap {
  margin-top: 90px;
}
#toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
}
.social-icon {
  height: 60px !important;
}
.disclaimer {
  max-width: 870px;
}
.legal {
  padding: 20px;
}
.navitems {
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .link-btns {
    display: none;
  }
}
</style>
