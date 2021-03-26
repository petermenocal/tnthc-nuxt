<template>
  <div>
    <!-- hero main -->
    <section
      class="container"
      :style="{ backgroundImage: `url(${mainHero.mainHeroImage})` }"
    >
      <div id="hero-content">
        <nuxt-content :document="mainHero"></nuxt-content>
        <br />
        <NuxtLink to="/storeorder"
          ><button class="btn-cta">Order Now</button></NuxtLink
        >
      </div>
    </section>
    <!-- hero split -->
    <section class="hero-split">
      <div class="hero-split-image split">
        <img :src="splitHero.splitHeroImage" alt="" />
      </div>
      <div class="hero-split-content split">
        <nuxt-content :document="splitHero"></nuxt-content>
      </div>
    </section>
    <!-- subscribe bar -->
    <section class="subscribe-bar">
      <form name="topnotchSubscriber" method="POST" data-netlify="true" netlify>
        <div class="subscribe-form">
          <h3>Subscribe for Deals</h3>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              name="subscriberEmailAddress"
            />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </form>
    </section>
    <!-- skip the line -->
    <section class="skip-the-line">
      <div>
        <h1>Skip The Line!</h1>
        <p>Join our dispensary wait list!</p>
        <iframe
          src="https://www.waitlist.me/w/11409020060"
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
    <section
      class="delivery"
      :style="{ backgroundImage: `url(${homeDelivery.bgDeliverySectionHome})` }"
    >
      <div class="delivery-section">
        <nuxt-content :document="homeDelivery" />
        <NuxtLink to="/deliveryorder">
          <button class="btn-cta do-cta">ORDER NOW</button></NuxtLink
        >
      </div>
      <div class="delivery-section cards">
        <div class="card">
          <nuxt-content :document="homeDeliveryCard1" />
          <NuxtLink :to="{ path: '/delivery', hash: '#deliveryy' }"
            >Learn more</NuxtLink
          >
        </div>
        <div class="card">
          <nuxt-content :document="homeDeliveryCard2" />
          <NuxtLink :to="{ path: '/delivery', hash: '#curbsidee' }"
            >Learn more</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.split {
  width: 50%;
}

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

#hero-content .nuxt-content h1 {
  font-size: 5.188em;
  font-size: 12.18vw;
  line-height: 1;
}
#hero-content .nuxt-content h2 {
  line-height: 1;
  font-size: 1.9792em;
  font-size: 6vw;
}

.hero-split {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.do-cta {
  margin-top: 25px;
}
.hero-split-image img {
  width: 100%;
  height: 100%;
}
.hero-split-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-split-content p {
  font-size: 1.4rem;
}
.hero-split-content h1 {
  line-height: 1;
  margin-bottom: 15px;
}
.subscribe-bar {
  background: #304757;
  height: auto;
  padding: 20px 0 35px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscribe-form {
  position: relative;
}
.subscribe-bar form {
  margin: 0 auto;
}
.subscribe-form h3 {
  color: white;
}
.subscribe-form input {
  padding: 14px;
  font-size: 1rem;
  width: 100%;
  min-width: 420px;
  border-radius: 50px;
  border: 1px solid white;
  height: 50px;
}
.subscribe-form button {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 30%;
  min-width: 100px;
  padding: 14px;
  font-size: 1rem;
  border-radius: 50px;
  background: #379ba6;
  color: white;
  border: none;
}

.skip-the-line {
  min-height: 500px;
  background: #98bfc6 url("/img/hero-waitlist.webp") center center;
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
  margin-top: -20px;
  margin-left: -30%;
  text-align: center;
  color: #304757;
}
.skip-the-line h1 {
  font-size: 3rem;
  font-style: italic;
  color: #304757;
}
.skip-the-line iframe {
  margin: 25px 0 0 0;
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
  margin-right: 20px;
  width: 300px;
  min-width: 300px;
}
.delivery-section .card h1 {
  font-size: 2rem;
}
.card a {
  color: black;
}
.cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.subscribe-form {
  max-width: 500px !important;
  display: block;
  width: 100%;
}
@media (max-width: 768px) {
  .delivery-section h1 {
    font-size: 10vw;
  }
  .subscribe-bar form {
    width: 80%;
  }
  .delivery-section h2 {
    font-size: 7vw;
  }
  .delivery-section h3 {
    font-size: 4.5vw;
  }
  #hero-content .nuxt-content p {
    font-size: 4vw;
    margin-top: 5px;
  }
  .hero-split-image {
    max-height: 700px;
  }
  .container {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
      url("/img/hero.jpg");
    padding: 50px;
  }

  #hero-content {
    padding-bottom: 250px !important;
  }

  .subscribe-form {
    position: relative;
  }

  .skip-the-line {
    background: #98bfc6;
  }
  .skip-the-line div {
    margin-left: 0% !important;
  }
  .subscribe-form input {
    min-width: 70%;
  }
}
@media (max-width: 992px) {
  .split {
    width: 100%;
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
  .hero-split-content p {
    font-size: 1.25rem;
  }
}

@media (min-width: 1100px) {
  #hero-content .nuxt-content p {
    font-size: 1vw;
  }
  #hero-content .nuxt-content h1 {
    font-size: 5.188em;
    font-size: 10.18vw;
    line-height: 1;
  }
  #hero-content .nuxt-content h2 {
    line-height: 1;
    font-size: 1.9792em;
    font-size: 4vw;
  }
}
</style>
<script>
export default {
  async asyncData({ $content }) {
    const mainHero = await $content("home-main_hero").fetch();
    const splitHero = await $content("home-split_hero").fetch();
    const homeDelivery = await $content("home-delivery").fetch();
    const homeDeliveryCard1 = await $content("home-delivery-card_1").fetch();
    const homeDeliveryCard2 = await $content("home-delivery-card_2").fetch();
    return {
      mainHero,
      splitHero,
      homeDelivery,
      homeDeliveryCard1,
      homeDeliveryCard2
    };
  }
};
</script>
