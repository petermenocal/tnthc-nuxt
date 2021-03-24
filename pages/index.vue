<template>
  <div>
    <!-- hero main -->
    <section class="container">
      <div id="hero-content">
        <h1 class="title">
          <!-- {{ page.mainHero.title }} -->
        </h1>
        <!-- <h2 class="subtitle">{{ page.mainHero.subtitle }}</h2> -->
        <div>
          <!-- {{ page.Content }} -->
          <nuxt-content :document="page"></nuxt-content>
        </div>
      </div>
    </section>
    <!-- hero split -->
    <section class="hero-split">
      <div class="hero-split-image">
        <img
          src="https://staging-topnotch.web.app/build/assets/model-tp-logo.jpg"
          alt=""
        />
      </div>
      <div class="hero-split-content">
        <h2>Nevada’s Premier</h2>
        <h1>Cannabis Dispensary</h1>
        <p>
          Top Notch THC located on Stephanie St. in Las Vegas NV, has been the
          go-to dispensary for cannabis connoisseurs who want the best products,
          friendliest service, and most comfortable shopping experience
          available anywhere in Las Vegas. Come in today and purchase the
          highest-quality cannabis products available at amazing prices!
        </p>
      </div>
    </section>
    <!-- subscribe bar -->
    <section class="subscribe-bar">
      <div class="subscribe-form">
        <h3>Subscribe for Deals</h3>
        <div>
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
    <!-- skip the line -->
    <section class="skip-the-line">
      <div>
        <h1>Skip The Line!</h1>
        <p>Join our dispensary wait list!</p>
        <iframe
          src="http://www.waitlist.me/w/11409020060"
          frameborder="0"
          height="200px"
        ></iframe>
        <p class="legal">
          <small
            >Complete the form above to receive a confirmation text message.
            When it's your turn, we will send a text that you can either Accept
            or Reject. You must be on the waitlist to shop in-store.</small
          >
        </p>
      </div>
    </section>
    <!-- delivery -->
    <section class="delivery">
      <div class="delivery-section">
        <h3>Free Delivery With Minimum Purchase</h3>
        <h1>Delivery + Curbside</h1>
        <h2>Curbside Pick-up: 7am - 8pm</h2>
        <h2>In-store Shopping: 8am - 12am</h2>
        <NuxtLink to="/deliveryorder">
          <button class="btn-cta">ORDER NOW</button></NuxtLink
        >
      </div>
      <div class="delivery-section cards">
        <div class="card">
          <h1>Delivery</h1>
          <p>
            Available with $50 minimum order plus a $10 delivery charge. Orders
            must be made before 12 (noon) for same day delivery. All delivery
            orders placed after 12 (noon) will be scheduled for next day
            delivery. We offer FREE delivery on orders of $150 or more.
          </p>
          <NuxtLink to="/delivery">Learn more</NuxtLink>
        </div>
        <div class="card">
          <h1>Curbside</h1>
          <p>
            Available daily from 7am-8pm. When shopping online make sure you are
            in the curbside menu area. Once your order is placed, we will enter
            you in our text based queue system. You’ll receive a text letting
            you know it’s time to drive in and pick up your order. Click the
            link in the text, then click “I’m coming”. After that, head on over.
          </p>
          <NuxtLink to="/delivery">Learn more</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.container {
  min-height: 800px;
  background: url("/img/hero.jpg") center center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#hero-content {
  padding-bottom: 250px !important;
}
.title {
  display: block;
  font-weight: 800;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 800;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.hero-split {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.hero-split div {
  width: 50%;
}
.hero-split-image img {
  max-width: 100%;
}
.hero-split-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-split-content p {
  font-size: 1.5rem;
  line-height: 2.5rem;
}
.subscribe-bar {
  background: #304757;
  height: 140px;
  display: flex;
  align-items: center;
  margin-top: -5px;
  justify-content: center;
}
.subscribe-bar h3 {
  color: white;
}
.subscribe-bar input {
  padding: 14px;
  font-size: 1rem;
  width: 100%;
  min-width: 420px;
  border-radius: 50px;
  border: 1px solid white;
  height: 50px;
}
.subscribe-bar button {
  height: 50px;
  padding: 14px;
  font-size: 1rem;
  border-radius: 50px;
  background: #379ba6;
  color: white;
  border: none;
  margin-left: -30.8%;
  width: 30%;
}

.skip-the-line {
  min-height: 500px;
  background: #98bfc6 url("/img/hero-waitlist.png") center center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding-top: 50px;
}
.skip-the-line div {
  height: 250px;
  width: 300px;
  margin-left: -30%;
  text-align: center;
}
.skip-the-line h1 {
  font-size: 2.4rem;
}
.skip-the-line iframe {
  margin: 20px 0;
}
.skip-the-line .legal {
  text-align: left;
}
.delivery {
  min-height: 640px;
  background: url("/img/hero-delivery.png") center center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
}
.delivery-section {
  width: 48%;
  flex-direction: row;
}
.delivery-section .card {
  background: white;
  color: black;
  padding: 20px;
  border-radius: 5px;
  height: 300px;
  width: 300px;
  min-width: 300px;
}
.delivery-section .card h1 {
  font-size: 2rem;
}
.cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .container {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
      url("/img/hero.jpg");
  }
  #hero-content {
    padding-bottom: 0px !important;
  }
  .hero-split div {
    width: 100%;
  }
  .subscribe-bar {
    padding: 30px 10px;
  }
  .subscribe-bar button {
    margin-left: -40%;
    width: 40%;
  }
  .skip-the-line {
    background: #98bfc6;
  }
  .skip-the-line div {
    margin-left: 0% !important;
  }
}
@media (max-width: 1300px) {
  .delivery-section {
    width: 100%;
    text-align: center;
    flex-direction: column;
  }
  .delivery-section .card {
    margin-top: 50px;
  }
  .delivery-section .card h1 {
    font-size: 2rem;
  }
}
</style>
<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    console.log(page);
    return {
      page
    };
  }
};
</script>
