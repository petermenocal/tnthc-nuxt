<template>
  <div>
    <div id="toolbar">
      <logo />
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
        <NuxtLink to="/waitlist" class="link">WAIT LIST</NuxtLink>
        <NuxtLink to="/delivery" class="link">DELIVERY/CURBSIDE</NuxtLink>
        <NuxtLink to="/contact" class="link">CONTACT</NuxtLink>
        <NuxtLink to="/storeorder" class="btn-rounded link">ORDER NOW</NuxtLink>
      </span>
    </div>
    <nuxt />
    <div id="footer">
      <div class="content">
        <div class="legal">
          <logo />
        </div>
        <div class="links">
          <div>
            <NuxtLink to="/waitlist">Wait List</NuxtLink>
            <NuxtLink to="/delivery">Delivery + Curbside</NuxtLink>
            <NuxtLink to="/storeorder">Order Now</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </div>
          <div class="social">
            <a href="">Weedmaps</a>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
          </div>
        </div>
        <div class="legal">
          <p>© 2021 Top Notch The Health Center All rights reserved.</p>
          <p>
            Products sold on this site are cannabis products. Keep out of reach
            of children. For use only by adults 21 years of age and older.
            Purchase outside of Nevada is prohibited.
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
            <h4 id="sidebar-no-header-title"><logo /></h4>
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item href="/" active @click="hide">Home</b-nav-item>
                <b-nav-item href="/waitlist" @click="hide"
                  >Wait List</b-nav-item
                >
                <b-nav-item href="/delivery" @click="hide"
                  >Delivery/Curbside</b-nav-item
                >
                <b-nav-item href="/contact" @click="hide">Contact</b-nav-item>
                <b-nav-item href="/storeorder" @click="hide"
                  >Order Now</b-nav-item
                >
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

export default {
  components: {
    Logo
  }
};
</script>
