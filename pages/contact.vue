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
          <p>We’re Open: {{ page.hours }}m</p>
          <p>Phone: {{ page.phone }}</p>
          <p>Location: {{ page.address }}</p>
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
          <form name="contact" method="POST" netlify class="cf">
            <label for="name">
              <strong>Your name</strong>
              <input type="text" placeholder="Name" name="name" />
            </label>
            <label for="email">
              <strong>Your email</strong>
              <input type="email" placeholder="Email" name="email" />
            </label>
            <label for="message"
              ><strong>Message</strong><textarea name="message"
            /></label>
            <button type="submit" class="btn-rounded">Submit</button>
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
  padding: 0px 10px 0px 10px;
}
.cf input,
textarea {
  border-radius: 10px;
  height: 35px;
  padding: 20px;
  border: 1px solid rgb(170, 170, 170);
  margin-bottom: 10px;
  width: 100%;
  margin-top: 5px;
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
  min-width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
}
@media (max-width: 768px) {
  .contact-form {
    flex-direction: column;
  }
}
@media (min-width: 992px) {
  .cf input,
  textarea {
    min-width: 400px;
  }
  .contact-form-section {
    min-width: 400px;
    min-height: 300px;
  }
}
</style>
<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("contact").fetch();

    return {
      page
    };
  }
};
</script>
