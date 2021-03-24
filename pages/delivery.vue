<template>
  <div>
    <section class="delivery-container">
      <div id="delivery-hero-content">
        <h1 class="title">
          {{ page.mainHero.title }}
        </h1>
        <h2 class="subtitle">
          {{ page.mainHero.subtitle }}
        </h2>
        <h2 class="subtitle">
          {{ page.mainHero.caption }}
        </h2>
      </div>
    </section>

    <section id="delivery_overview" class="sameday">
      <div class="delivery_overview_title">
        <h1>{{ page.deliveryOverview.title }}</h1>
        <p>{{ page.deliveryOverview.subtitle }}</p>
      </div>
      <div class="delivery_overview_content">
        <div class="delivery_overview_text">
          {{ page.deliveryOverview.content }}
        </div>
        <div class="delivery_overview_image">
          <img
            :src="page.deliveryOverview.image"
            alt=""
            class="delivery_image"
          />
        </div>
      </div>
    </section>

    <section id="delivery_overview" class="samedaysm">
      <div class="delivery_overview_title">
        <h1>{{ page.deliveryOverview.title }}</h1>
        <p>{{ page.deliveryOverview.subtitle }}</p>
      </div>
      <div class="delivery_overview_content">
        <img :src="page.deliveryOverview.title" height="200px" alt="" />
        {{ page.deliveryOverview.content }}
      </div>
    </section>

    <section id="numbered">
      <div class="num-wrap">
        <div>
          <h1>
            <span class="number">01</span> {{ page.numberedOVerview.title01 }}
          </h1>
          {{ page.numberedOVerview.content01 }}
        </div>
        <div>
          <h1>
            <span class="number">02</span> {{ page.numberedOVerview.title02 }}
          </h1>
          {{ page.numberedOVerview.content02 }}
        </div>
        <div>
          <h1>
            <span class="number">03</span> {{ page.numberedOVerview.title03 }}
          </h1>
          {{ page.numberedOVerview.content03 }}
        </div>
        <div>
          <h1>
            <span class="number">04</span> {{ page.numberedOVerview.title04 }}
          </h1>
          <p>
            {{ page.numberedOVerview.content04 }}
          </p>
        </div>
      </div>
    </section>

    <section id="delivery_overview">
      <div class="delivery_overview_title">
        <h1>{{ page.curbsideOverview.title }}</h1>
        <p>{{ page.curbsideOverview.subtitle }}m</p>
      </div>
      <div class="delivery_overview_content">
        <div class="curbside-content">
          <CurbsideIcon />
          {{ page.curbsideOverview.contentCurbside }}
        </div>
        <div>
          <img
            :src="page.curbsideOverview.curbsideImage"
            alt=""
            height="500px"
          />
        </div>
      </div>
    </section>

    <section class="service">
      <div>
        <h1>{{ page.serviceBlurb.title }}</h1>
        {{ page.curbsideOverview.contentServiceBlurb }}
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
  padding: 40px;
  line-height: 1.8;
}
.num-wrap div h1 {
  color: #2a4759;
  margin-bottom: 40px;
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
  font-size: 4.5rem;
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
@media (max-width: 768px) {
  .sameday {
    display: none;
  }
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
@media (min-height: 992px) {
  #numbered {
    background: white;
    min-height: 700px;
    padding-top: 200px;
    margin-top: -200px;
  }
}
</style>
<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("delivery").fetch();
    return {
      page
    };
  }
};
</script>
