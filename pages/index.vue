<script setup>

</script>

<template>
  <div class="container">
    <img class="image is-fullwidth" src="@/assets/img/background.jpg" alt="main image" />
    <section class="hero is-medium is-purple">
  <div class="hero-body">
    <p class="title">
      My name is Tiffany, I look forward to taking care of your babies!!!
    </p>
    <p class="subtitle">
      You can reach me at <a href="tel:5555555555">555-555-5555</a> or via email <a
        href="#contact">schedule now</a>
    </p>
  </div>
</section>
    <section id="about" class="section">
     <h2 class="title">About me</h2>
      <p>Why should your fur baby stay in a boarding facility when they can have all the comforts and amenities of home
        with an overnight petsitter!! sleepovers, mental and physical stimulation endless pictures and videos to keep
        mom and dad at ease. i’ve been in the animal business for 15yrs and are well diverse in Handling all types of
        personalities of fur babies, it is really a passion of mine. I currently work at a veterinary clinic and have
        been for 16yrs so i am well diversified in medication administration, subcutaneous fluids, insulin, restraint
        and anxious fur babies. </p>
    </section>
    <section id="rates" class="section">
      <h2 class="title">Rates</h2>
      <table class="table is-bordered is-striped">
        <tr>
          <td>Pet</td>
          <td>Overnights(Single Pet)</td>
          <td>Hourly (Single Pet) up to 8hrs</td>
          <td>Hourly (Sigle Pet) past 8hrs</td>
          <td>Additional cost per pet over 1</td>
          <td>Medication administration </td>
          <td>Holiday Extra Daily Fee</td>
        </tr>
        <tr>
          <td>Dog</td>
          <td>$95</td>
          <td>$35 hourly</td>
          <td>$19 hourly</td>
          <td>$25</td>
          <td>$15</td>
          <td>$15</td>
        </tr>
        <tr>
          <td>Cat</td>
          <td>$60**</td>
          <td>N/A</td>
          <td></td>
          <td>$15</td>
          <td>$15</td>
          <td>$15</td>
        </tr>
        <tr>
          <td colspan="7">
            <table>
              <tr>
                <h1>*Overnight package for dogs include:</h1>
                <p>3/4 Walks per day, pics and video for every night w/pet comforts of home VS Boarding</p>
              </tr>
              <tr>
                <h1>**Overnight package for cats include:</h1>
                <p> Play sessions, litter cleaning, pics and videos for every
                  night w/pet comforts of home VS Boarding Facility
                </p>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </section>
    <section id="contact" class="section">
    <h2 class="title">Contact Form</h2>
      <form name="contact" method="POST" data-netify="true">
        <div class="field">
          <label>Name</label>
            <input class="input" type="text" placeholder="Enter Name" name="name" />

        </div>
        <div class="field">
          <label>email</label>
            <input class="input" type="email" placeholder="Enter Email" name="email" />

        </div>
        <div class="field">
          <select>
            <option value="general question">General Questions</option>
            <option value="schedule">Schedule</option>
            <option value="question about rates">Question about rates</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="field">
          <label>Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Write Message" name="message"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>

      </form>

    </section>
  </div>
</template>

<style lang="scss" scoped>

.button.is-link {
  background-color: var(--purple);
  color: var(--pink);
}

</style>

