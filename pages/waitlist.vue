<template>
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
          >Complete the form above to receive a confirmation text message. When
          it's your turn, we will send a text that you can either Accept or
          Reject. You must be on the waitlist to shop in-store.</small
        >
      </p>
    </div>
  </section>
</template>

<style>
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

@media (max-width: 768px) {
  .skip-the-line {
    background: #98bfc6;
  }
  .skip-the-line div {
    margin-left: 0% !important;
  }
}
</style>
