<script setup>
// imports
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

// tailwind imports
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

//register/sign in 
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter(); //get a reference to our vue router
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    }
    else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

const mobileMenuOpen = ref(false)

</script>

<template>

<header class="bg-white">

    <!-- navigation on big screen -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

      <!-- logo in top left corner -->
      <div class="flex lg:flex-1">
        <RouterLink to='/'>
          <div>
            <img class="h-12 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/logo-standart-small.svg?alt=media&token=03ab941d-07ea-4ea2-b81c-8b21fcd2725e" alt="kantens logo" />
          </div>
        </RouterLink>
      </div>

      <!-- hamburgebar icon -->
      <div class="flex lg:hidden">
        <button type="button" title="hamburgerbar" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- links in navigation -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12" >
        <RouterLink to='/'>Events</RouterLink>
        <RouterLink to='/about'>Om Kanten</RouterLink>
        <RouterLink to='/volounteers'>De frivillige</RouterLink>
        <RouterLink to='/contact'>Kontakt</RouterLink>
      </PopoverGroup>

      
      <!-- right side with log in system -->
      <div class="log-in-system hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink to='/sign-in'>Log ind</RouterLink>
        <button @click="handleSignOut" v-if="isLoggedIn" class="button1 signout mt-3">Log ud</button>
        <!-- <RouterLink to='/register'>Register</RouterLink> -->
      </div>
    </nav>

    
    <!-- mobile navigation -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

        <!-- top part with Kantens logo -->
        <div class="flex items-center justify-between">
          <RouterLink to='/' class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/logo-standart-small.svg?alt=media&token=33e9c95c-fad9-4827-ae1e-5032e7d9070d" alt="kantens logo" />
          </RouterLink>

          <!-- x button to close menu -->
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- links in hamburger menu -->
        <div class="mt-6 flow-root">
          <div class="hamburgermenu-box -my-6 divide-y divide-gray-500/10">
            <div class="hamburgermenu-top-content space-y-2 py-6">
              <RouterLink to='/' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Events</RouterLink>
              <RouterLink to='/about' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Om Kanten</RouterLink>
              <RouterLink to='/volounteers' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">De frivillige</RouterLink>
              <RouterLink to='/contact' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Kontakt</RouterLink>
            </div>

            <!-- log in in hamburger menu -->
            <div class="hamburgermenu-buttom-content py-6">
              <RouterLink to='/sign-in' class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log ind</RouterLink>
              <!-- <RouterLink to='/register' class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Register</RouterLink> -->
              <button @click="handleSignOut" v-if="isLoggedIn" class="button1 mt-3">Log ud</button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  
  <RouterView />


  <!-- footer -->
  <footer>
    <div class="footer primary-background-img">
      <div class="footer-information">
        <h2>Kanten</h2>
        <p>GL NOVRUPVEJ 14, 6705 ESBJERG Ø</p>
        <p>+45 28  97 11 85</p>
        <p>MUSIKFORENINGENKANTEN@GMAIL.COM</p>
        <p class="last-p">COPYRIGHT KANTEN 2022</p>
      </div>

      <div class="footer-socials">
        <RouterLink to='/'>
          <div class="footer-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/logo-standart.svg?alt=media&token=44a06326-7c9a-47a5-bc7b-cc03f6a6af6f" alt="kantens logo footer">
          </div>
        </RouterLink>
        
        <div>
          <div class="socials-logo">
            <RouterLink to="//www.facebook.com/kanten.esbjerg/" target="_blank">
              <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/facebook-logo.svg?alt=media&token=7d6d5851-a412-4c26-9a61-2f63764b2285" alt="facebook logo">
            </RouterLink>
            <RouterLink to="//www.instagram.com/kanten_esbjerg/" target="_blank">
              <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/instagram-logo.svg?alt=media&token=d5cc537a-36c3-455c-80f0-4427def5fad5" alt="instagram logo">
            </RouterLink>
            <RouterLink to="//discord.gg/Q7zUx2kjZF" target="_blank">
              <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/discord-logo.svg?alt=media&token=7e359cc2-56f9-4186-9edf-6806f4f3f0d1" alt="discord logo">
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped>
header {
  z-index: 100;
  position: fixed;
  width: 100%;
}

nav a {
  color: var(--black-headline);
  font-family: var(--text-font);
  transition: 0.3s;
}

nav a:hover {
  color: var(--hover-color);
}

nav a.router-link-exact-active {
  color: var(--hover-color);
  text-decoration: underline;
  font-weight: bold;
}

.log-in-system {
  gap: 16px;
  align-items: center;
}

.signout {
  margin: 0;
}

.hamburgermenu-box a {
  color: var(--black-headline);
  font-family: var(--text-font);
  transition: 0.3s;
}

.hamburgermenu-box a:hover {
  color: var(--hover-color);
}

.hamburgermenu-box a.router-link-exact-active {
  color: var(--hover-color);
}

.hamburgermenu-top-content {
  padding-top: 40px;
}

.hamburgermenu-buttom-content {
  font-size: 16px;
  color: var(--black-text);
  font-family: var(--text-font);
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 70px;
  padding-top: 50px;
}

.footer-information {
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  width: 50%;
}

.footer-information h2 {
  color: var(--black-headline);
  font-size: 60px;
  line-height: 1;
}

.footer-information p {
  padding-bottom: 8px;
}

.last-p {
  padding: 0 !important;
}

.footer-socials {
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-logo {
  padding-bottom: 50px;
}

.footer-logo img {
  height: 70px;
}

.socials-logo {
  display: flex;
  gap: 14px;
}

.socials-logo img {
  height: 45px;
  transition: 0.3s;
}

.socials-logo img:hover {
  scale: 1.1;
}


/* responsive  */

@media only screen and (max-width: 680px) {
    .footer {
      flex-direction: column;
      padding: 10%;
      align-items: flex-start;
    }

    .footer-information {
      padding: 0;
    }

    .footer-socials {
      padding-top: 60px;
      padding-left: 0;
      margin: 0 auto;
    }

    .footer-logo {
      padding-bottom: 32px;
    }
}

@media only screen and (max-width: 500px) {
    .footer {
      padding: 10%;
      align-items: flex-start;
    }
}

@media only screen and (max-width: 400px) {
    .footer-information p {
      font-size: 14px;
    }
}

/* responsive end */

</style>
