<template>
  <div class="wrapd">
    <section class="delivery-container">
      <div id="delivery-hero-content">
        <nuxt-content :document="mainHero" />
      </div>
    </section>

    <section id="delivery_overview" class="sameday">
      <a id="deliveryy"></a>
      <div class="delivery_overview_title">
        <h1>SAME DAY DELIVERY</h1>
        <p>On orders made before 12 (noon)</p>
      </div>
      <div class="delivery_overview_content">
        <div class="delivery_overview_text">
          <nuxt-content :document="overviewDelivery" />
        </div>
        <div class="delivery_overview_image">
          <img
            :src="overviewDelivery.deliveryOverviewImage"
            alt=""
            class="delivery_image"
          />
        </div>
      </div>
    </section>

    <section id="delivery_overview" class="samedaysm">
      <div class="delivery_overview_title">
        <h1>SAME DAY DELIVERY</h1>
        <p>On orders made before 12 (noon)</p>
      </div>
      <div class="delivery_overview_content">
        <img
          :src="overviewDelivery.deliveryOverviewImage"
          alt=""
          height="200px"
        />
        <nuxt-content :document="overviewDelivery" />
      </div>
    </section>

    <section id="numbered">
      <div class="num-wrap">
        <div>
          <h1><span class="number">01</span> Shop</h1>
          <p>{{ overviewNumbered.slot1 }}</p>
        </div>
        <div>
          <h1><span class="number">02</span> Verify</h1>
          <p>{{ overviewNumbered.slot2 }}</p>
        </div>

        <div>
          <h1><span class="number">03</span> Update</h1>
          <p>{{ overviewNumbered.slot3 }}</p>
        </div>
        <div>
          <h1><span class="number">04</span> Receive</h1>
          <p>{{ overviewNumbered.slot4 }}</p>
        </div>
      </div>
    </section>
    <a name="curbsidee" id="curbsidee"></a>
    <section id="delivery_overview">
      <div class="delivery_overview_title">
        <h1>Curbside Pick-up</h1>
        <p><CurbsideIcon /></p>
        <p>Daily 7am - 8pm</p>
      </div>
      <div class="delivery_overview_content curb">
        <div class="curbside-content">
          <nuxt-content :document="overviewCurbside" />
        </div>
        <div class="curbsde-image">
          <img
            :src="overviewCurbside.curbsideOverviewImage"
            alt=""
            height="500px"
          />
        </div>
      </div>
    </section>

    <section class="service">
      <div>
        <nuxt-content :document="overviewService" />
      </div>
    </section>
  </div>
</template>
<script>
import CurbsideIcon from "~/components/CurbsideIcon.vue";

export default {
  components: {
    CurbsideIcon
  }
};
</script>
<style>
.wrapd {
  overflow-x: hidden;
}
section {
  display: block;
}
.service div {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 20px;
}
.service div h1 {
  color: #379ba6;
}
.curbside-icon {
  width: 70px;
}
.curbside-content h2 {
  color: #8bd9d9;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 10px;
}
.curbside-content {
  max-width: 800px;
  padding: 20px 5%;
}
.curbside-content p {
  margin-bottom: 25px;
}

.num-wrap {
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.number {
  color: #8bd9d9;
  border-bottom: 7px solid #2a4759;
}
.num-wrap div {
  min-width: 320px;
  width: 20%;
  min-height: 400px;
  display: flex !important;
  padding: 0 20px 0 20px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  line-height: 1.8;
}
.num-wrap div h1 {
  color: #2a4759;
  margin-bottom: 40px;
}
.samedaysm .delivery_overview_content .nuxt-content-container {
  padding: 20px;
}
.samedaysm .delivery_overview_content .nuxt-content-container .nuxt-content h1 {
  text-align: center;
}
.delivery-container {
  min-height: 600px;
  background: url("/img/tp-delivery-and-curbside-banner.png") center center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#hero-content {
  padding-bottom: 0px;
}
#delivery_overview {
  background: #304757;
  min-height: 500px;
  color: white;
}
.delivery_overview_title {
  text-align: center;
}
.delivery_overview_title p {
  color: #8bd9d9 !important;
}
.delivery_overview_title h1 {
  font-size: 4.2rem;
  padding-top: 20px;
  line-height: 1;
}

.delivery_overview_content {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.delivery_image {
  max-height: 900px;
  margin-right: -220px;
}
.delivery_overview_text {
  width: 40%;
  padding-left: 10%;
  margin-top: -200px;
}
#numbered {
  background: white;
  min-height: 700px;
}
.samedaysm p {
  padding: 20px;
}
.samedaysm {
  display: none;
}
.samdedaysm {
  padding: 40px;
}
.curbside-content .nuxt-content h2 {
  font-weight: 200;
  font-family: "Open Sans", sans-serif;
  color: #8bd9d9;
}
#delivery-hero-content {
  padding: 20px;
}
#delivery-hero-content .nuxt-content h1 {
  font-size: 4em !important;
}
@media (max-width: 768px) {
  .num-wrap {
    flex-direction: column;
  }
  .delivery_overview_content {
    flex-direction: column;
  }
  .delivery_overview_title h1 {
    font-size: 3rem;
    padding-top: 20px;
  }
}
@media (max-width: 992px) {
  .sameday {
    display: none;
  }
  .samedaysm {
    display: block;
  }
  .num-wrap {
    padding-top: 75px;
    justify-content: flex-start;
  }
  .num-wrap div {
    width: 100%;
    min-height: auto;
    padding-bottom: 75px;
  }
  .curb {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 1400px) {
  .num-wrap {
    flex-wrap: wrap;
  }
  .num-wrap div {
    width: 50%;
  }
}
@media (min-width: 992px) {
  #numbered {
    background: white;
    min-height: 700px;
    padding-top: 200px;
    margin-top: -200px !important;
  }
}
@media (min-width: 992px) and (max-width: 1185px) {
  .sameday {
    padding-left: 20px;
  }
  .delivery_image {
    max-height: 900px;
    margin-right: -800px;
  }
}
</style>
<script>
import CurbsideIcon from "~/components/CurbsideIcon.vue";
export default {
  components: { CurbsideIcon },
  async asyncData({ $content }) {
    const mainHero = await $content("delivery-main_hero").fetch();
    const overviewCurbside = await $content(
      "delivery-overview_curbside"
    ).fetch();
    const overviewDelivery = await $content(
      "delivery-overview_delivery"
    ).fetch();
    const overviewNumbered = await $content(
      "delivery-overview_numbered"
    ).fetch();
    const overviewService = await $content("delivery-overview_service").fetch();
    return {
      mainHero,
      overviewCurbside,
      overviewDelivery,
      overviewNumbered,
      overviewService
    };
  }
};
</script>
