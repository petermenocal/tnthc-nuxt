<template>
  <div>
    <div id="toolbar">
      <logo />
      <span>
        <NuxtLink to="/" class="link">HOME</NuxtLink>
        <NuxtLink to="/waitlist" class="link">WAIT LIST</NuxtLink>
        <NuxtLink to="/delivery" class="link">DELIVERY/CURBSIDE</NuxtLink>
        <NuxtLink to="/contact" class="link">CONTACT</NuxtLink>
        <a href="" class="btn-rounded link">ORDER NOW</a>
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
            <a href="">Wait List</a>
            <a href="">Delivery + Curbside</a>
            <a href="">Order Now</a>
            <a href="">Contact</a>
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
<style>
.text-center {
  text-align: center;
}
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.25rem;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.btn-rounded {
  background: #379ba6;
  padding: 10px;
  border-radius: 20px;
  border: 0px;
  color: white;
}
.btn-cta {
  background: #379ba6;
  padding: 10px;
  color: white;
  text-decoration: none;
  border: 1px solid white;
  font-size: 1.5rem;
}
.social {
  padding-top: 20px;
}
#toolbar {
  padding: 10px !important;
  height: 90px;
  background: #304757;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#toolbar .link {
  color: white;
  margin-left: 10px;
  text-decoration: none;
}
#footer {
  background: #304757;
  min-height: 300px;
  color: white;
}
#footer .content {
  min-height: 290px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}
#footer .footer-logo {
  width: 30%;
}
#footer .links {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#footer .links a {
  color: white;
  padding: 20px;
  text-decoration: none;
}

#footer .legal {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
}
</style>
