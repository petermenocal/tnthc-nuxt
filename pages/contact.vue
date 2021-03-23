<template>
  <section>
    <iframe
      class="embedded-map"
      width="100%"
      height="450"
      loading="lazy"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBZTGHy_qckXAATMdKcQTH3nLyZ-fDVzAU&q=Top+Notch+The+Health+Center"
    ></iframe>
    <div class="contact-form-wrapper">
      <div class="contact-form">
        <div class="contact-form-section">
          <h2>Contact Us</h2>
          <p>We’re Open: Daily 8am-12am</p>
          <p>Phone: 702.418.0420</p>
          <p>Location: 5630 Stephanie St. Las Vegas, NV. 89122</p>
        </div>
        <div class="contact-form-section">
          <p class="text-center">
            <small
              >We’re always happy to hear from you. Drop us a note and we’ll do
              our best to get back to you quickly.</small
            >
            <br />
            <br />
          </p>
          <form action="" class="cf">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <textarea />
            <button class="btn-rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.cf {
  display: flex;
  flex-direction: column;
}
.cf input,
textarea {
  border-radius: 20px;
  height: 35px;
  padding: 20px;
  border: 1px solid rgb(170, 170, 170);
  margin-bottom: 5px;
  min-width: 400px;
}
textarea {
  height: 200px;
}
.cf button {
  font-size: 1.2rem;
}
.contact-form-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
.contact-form {
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
  width: 100%;
  display: flex;
}
.contact-form-section {
  width: 48%;
  min-width: 400px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
}
</style>
