<template>
  <div>
    <section class="delivery-container">
      <div id="delivery-hero-content">
        <h1 class="title">
          DELIVERY + CURBSIDE
        </h1>
        <h2 class="subtitle">
          Curbside Pick-up: 7am - 8pm
        </h2>
        <h2 class="subtitle">
          In-store Shopping: 8am - 12am
        </h2>
      </div>
    </section>

    <section id="delivery_overview" class="sameday">
      <div class="delivery_overview_title">
        <h1>SAME DAY DELIVERY</h1>
        <p>On orders made before 12 (noon)</p>
      </div>
      <div class="delivery_overview_content">
        <div class="delivery_overview_text">
          <h2>Delivery</h2>
          <p>
            Delivery now available with $50 minimum order plus a $10 delivery
            charge. Orders must be made before 12 (noon) for same day delivery.
            All delivery orders placed after 12 (noon) will be scheduled for
            next day delivery. We offer FREE delivery on orders of $150 or more.
          </p>
        </div>
        <div class="delivery_overview_image">
          <img src="/img/bag2.png" alt="" class="delivery_image" />
        </div>
      </div>
    </section>

    <section id="delivery_overview" class="samedaysm">
      <div class="delivery_overview_title">
        <h1>SAME DAY DELIVERY</h1>
        <p>On orders made before 12 (noon)</p>
      </div>
      <div class="delivery_overview_content">
        <img src="/img/bag2.png" height="200px" alt="" />
        <h2>Delivery</h2>
        <p>
          Delivery now available with $50 minimum order plus a $10 delivery
          charge. Orders must be made before 12 (noon) for same day delivery.
          All delivery orders placed after 12 (noon) will be scheduled for next
          day delivery. We offer FREE delivery on orders of $150 or more.
        </p>
      </div>
    </section>

    <section id="numbered">
      <div class="num-wrap">
        <div>
          <h1><span class="number">01</span> Shop</h1>
          <p>
            Shop online and browse our wide variety of products. All orders must
            have a picture ID uploaded with it. For Medical Patients it must be
            a valid Medical Marijuana Card. For others a State or Federal
            picture id can be used. The person receiving the order must match
            the picture on the ID submitted with the order.
          </p>
        </div>
        <div>
          <h1><span class="number">02</span> Verify</h1>
          <p>
            When a delivery order is placed a team member will be in contact
            with you by phone to verify your order before scheduling it with the
            delivery vehicle. Once verified with all the delivery details the
            order will be sent to fulfillment for packaging and checkout.
          </p>
        </div>
        <div>
          <h1><span class="number">03</span> Update</h1>
          <p>
            When the order is ready to be delivered, we will assign it to a
            driver. That driver will call you prior to leaving our store to let
            you know they are on their way. They will tell you the final price.
            Please have as close to the actual amount as you can. We only accept
            Cash Payments.
          </p>
        </div>
        <div>
          <h1><span class="number">04</span> Receive</h1>
          <p>
            When the driver arrives, please try to maintain the required
            distance from them. They will hand you your order, collect payment,
            then have you sign the drivers app, and the required Nevada State
            Delivery Manifest. Note: Drivers do not carry change.
          </p>
        </div>
      </div>
    </section>

    <section id="delivery_overview">
      <div class="delivery_overview_title">
        <h1>Curbside Pick-up</h1>
        <p>Daily 7am - 8pm</p>
      </div>
      <div class="delivery_overview_content">
        <div class="curbside-content">
          <CurbsideIcon />
          <h2>Curbside Ordering</h2>
          <p>
            When shopping online make sure you are in the curbside menu area.
            Once your order is placed, we will enter you in our text based queue
            system. You’ll receive a text letting you know it’s time to drive in
            and pick up your order. Click the link in the text, then click “I’m
            coming”. After that, head on over. Please do do show up to the store
            until you have received the text telling you to come down.
          </p>
          <CurbsideIcon />
          <h2>Curbside Arrival</h2>
          <p>
            Please do not arrive until you have received a text prompting you to
            come in. You will not be allowed to come into the parking lot
            without a confirmation text. In order to not block traffic on
            Stephanie St, turn up Construction Ave and circle the block to come
            down Emerald Ave. Someone from Top Notch will be there to greet you.
            We will have cars Queue on Emerald until we clear you to come into
            the parking lot.
          </p>
        </div>
        <div>
          <img src="/img/store.jpg" alt="" height="500px" />
        </div>
      </div>
    </section>

    <section class="service">
      <div>
        <h1>Top Notch Service</h1>
        <p>
          Top Notch is focused on providing the best customer experience in the
          cannabis industry. We are working daily to make our curbside pick-up
          and delivery the best in Nevada. Go ahead and browse our wide variety
          of amazing cannabis products. When you are ready to order select
          either curbside pick-up or delivery and receive personalized updates
          throughout your ordering process.
        </p>
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
