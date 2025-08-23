<template>
    <!-- news letter section -->
  <div class="news-letter py-12 ten-percent">
    <div id="mc_embed_signup" class="news-letter-card primary-background-img grid grid-cols-12">
      <div class="col-span-8 news-letter-img">
        <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-6.jpg?alt=media&token=5f152216-7b1f-4e66-83e0-773373ca839e" alt="">
      </div>

      <form action="https://easv365.us21.list-manage.com/subscribe/post?u=3e04c9aa23d2cf67b4490960e&amp;id=27f0872f15&amp;v_id=112&amp;f_id=007f54e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate form-right col-span-4" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h3 class="uppercase">Nyhedsbrev</h3>

            <div class="mc-field-group news-letter-form">
              <span class="pb-1 text-sm">Dit navn</span>
              <input type="text" placeholder="Navn" value="" name="FNAME" class="" id="mce-FNAME">
            </div>

            <div class="mc-field-group">
              <span class="pb-1 text-sm">Din mail</span>
              <input type="email" placeholder="Mailadresse" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
            </div>

            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3e04c9aa23d2cf67b4490960e_27f0872f15" tabindex="-1" value=""></div>
            <div class="optionalParent">
              <div class="clear foot">
                <input type="submit" value="TILMELD" name="subscribe" id="mc-embedded-subscribe" class="button1">
              </div>
            </div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<script setup>

</script>

<style scoped>
.news-letter {
  width: 100%;
}

.news-letter-card {
  clip-path: var(--edge-box);
  justify-content: center;
  align-items: center;
}

.form-right {
  padding: 20px;
  margin: 0 !important;
}

#mc_embed_signup_scroll {
  max-width: 500px;
}

#mc_embed_signup_scroll h3 {
  font-size: 38px !important;
  margin: 0 !important;
  padding-bottom: 16px;
}

#mc_embed_signup .foot {
  grid-template-columns: 1fr !important;
  margin-top: 16px;
  width: 100%;
}

.indicates-required {
  color: var(--black-text);
  font-size: 14px !important;
  font-family: var(--text-font);
}

.mc-field-group {
  padding-bottom: 14px !important;
  color: var(--black-headline);
  font-family: var(--text-font);
}

.mc-field-group input {
  background-color: var(--white-headline) !important;
  outline: none !important;
  box-shadow: 0 !important;
  border: 1px solid var(--primary-color) !important;
  border-radius: 0 !important;
  font-size: 12px;
}

#mc-embedded-subscribe {
  margin: 0;
}

.news-letter-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#mc_embed_signup .mc-field-group {
    width: 100%;
  }




/* responsive  */
@media only screen and (max-width: 900px) {
  .news-letter {
    padding: 12px 5% 60px 5%;
  }

  .news-letter-card {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .form-right {
    width: 100%;
  }

  #mc_embed_signup .mc-field-group {
    width: 100%;
  }

  #mc_embed_signup .foot {
    grid-template-columns: 1fr !important;
  }

  #mc_embed_signup_scroll {
    max-width: 100%;
  }
}

@media only screen and (max-width: 780px) {
  .news-letter-form input {
    width: 80%;
  }

  .news-letter-buttom {
    flex-direction: column;
    gap: 12px;
  }
}

@media only screen and (max-width: 767px) {
  #mc_embed_signup_scroll h2 {
  font-size: 35px !important;
  }
}
</style>