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

<header class="black-bg">

    <!-- navigation on big screen -->
    <nav class="five-percent flex items-center justify-between">
      <!-- logo on left -->
      <div class="flex lg:flex-1 py-2">
        <RouterLink to='/'>
          <img class="h-12 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/Standart%20small%20neg.png?alt=media&token=c3af2587-a422-41b9-8e98-70f2b91097a4" alt="kantens logo" />
        </RouterLink>
      </div>

      <!-- everything else on right -->
      <div class="hidden lg:flex lg:items-center gap-6">
        <PopoverGroup class="flex white-text">
          <RouterLink to='/'>Events</RouterLink>
          <RouterLink to='/about'>Om Kanten</RouterLink>
          <RouterLink to='/contact'>Kontakt os</RouterLink>
        </PopoverGroup>


        <!-- login button -->
        <div class="log-in-system">
          <button @click="handleSignOut" v-if="isLoggedIn" class="button1 signout mt-3">Log ud</button>
        </div>
      </div>

      <div class="login-icon">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
        </a>
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </a>
      </div>

      <!-- mobile hamburger button -->
      <div class="flex lg:hidden">
        <button type="button" title="hamburgerbar" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 white-text" @click="mobileMenuOpen = true">
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>

    
    <!-- mobile navigation -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto black-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

        <!-- top part with Kantens logo -->
        <div class="flex items-center justify-between">
          <RouterLink to='/' class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/logo-standart-small.svg?alt=media&token=33e9c95c-fad9-4827-ae1e-5032e7d9070d" alt="kantens logo" />
          </RouterLink>

          <!-- x button to close menu -->
          <button type="" class="p-4" @click="mobileMenuOpen = false">
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- links in hamburger menu -->
        <div class="mt-6 flow-root">
          <div class="hamburgermenu-box -my-6 divide-y divide-gray-500/10">
            <div class="hamburgermenu-top-content space-y-2 py-6">
              <RouterLink to='/' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">Events</RouterLink>
              <RouterLink to='/about' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">Om Kanten</RouterLink>
              <RouterLink to='/contact' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">Kontakt os</RouterLink>
            </div>


            <!-- icons on mobile -->
            <div class="menu-login-icon">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                Din profil
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                Din kurv
              </a>
            </div>


            <!-- log in in hamburger menu -->
            <div class="hamburgermenu-buttom-content py-6">
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
  <footer class="pt-20">
    <div class="footer-container black-bg flex justify-around">
      <div>
        <RouterLink to='/'>
          <div class="footer-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/Logo%20Standart%20neg.png?alt=media&token=a5d87678-3172-4ecf-b13f-417f5b9f6b4b" alt="kantens logo footer">
          </div>
        </RouterLink>
      </div>

      <div class="footer-content-container flex gap-24">
        <div class="flex flex-col gap-4">
          <h4 class="white-headline pb-4">KANTEN</h4>
          <p class="footer-link">+45 28  97 11 85</p>
          <p class="footer-link">Musikforeningenkanten@gmail.com</p>
          <p class="footer-link">Gl Novrupvej 14, 6705 Esbjerg Ø</p>
        </div>
  
        <div class="flex flex-col gap-4">
          <h4 class="white-headline pb-4">ABOUT</h4>
          <RouterLink to='/about'><p class="footer-link">Om Kanten</p></RouterLink>
          <RouterLink to='/contact'><p class="footer-link">Kontakt os</p></RouterLink>
          <p class="footer-link">Vilkår & betingelser</p>
          <p class="footer-link">Privatlivspolitik</p>
          <div class="flex gap-4 pt-4">
            <RouterLink to="//www.facebook.com/kanten.esbjerg/" target="_blank">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/facebook-logo.svg?alt=media&token=7d6d5851-a412-4c26-9a61-2f63764b2285" alt="facebook logo" class="h-7">
              </RouterLink>
              <RouterLink to="//www.instagram.com/kanten_esbjerg/" target="_blank">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/instagram-logo.svg?alt=media&token=d5cc537a-36c3-455c-80f0-4427def5fad5" alt="instagram logo" class="h-7">
              </RouterLink>
              <RouterLink to="//discord.gg/Q7zUx2kjZF" target="_blank">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/discord-logo.svg?alt=media&token=7e359cc2-56f9-4186-9edf-6806f4f3f0d1" alt="discord logo" class="h-7">
              </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- copyright -->
    <div class="five-percent pt-16">
      <hr class="footer-hr">
      <p class="text-center text-xs pt-4 pb-4 light-text">Copyright © 2024 Kanten</p>
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
  color: var(--white-text);
  font-family: var(--text-font);
  transition: 0.3s;
  font-size: 14px;
  padding: 10px;
}

nav a:hover {
  color: var(--white-headline);
}

nav a.router-link-exact-active {
  color: var(--white-headline);
  text-decoration: underline;
  font-weight: bold;
}

.login-icon {
  display: flex;
}

.login-icon a:last-child {
  padding-right: 0;
}

.menu-login-icon {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 0;
}

.menu-login-icon a {
  display: flex;
  align-items: center;
  font-size: 13px !important;
  gap: 8px;
  padding: 10px;
  border-radius: 0.5rem;
}

.menu-login-icon a:hover {
  background-color: var(--white-headline);
}


.log-in-system {
  gap: 16px;
  align-items: center;
}

.signout {
  margin: 0;
}

.hamburgermenu-box a {
  color: var(--white-text);
  font-family: var(--text-font);
  transition: 0.3s;
  font-size: 16px;
}

.hamburgermenu-box a:hover {
  color: var(--black-headline);
}

.hamburgermenu-box a.router-link-exact-active {
  color: var(--white-headline);
}

.hamburgermenu-box a.router-link-exact-active:hover {
  color: var(--black-headline);
}

.hamburgermenu-top-content {
  padding-top: 40px;
}

.hamburgermenu-buttom-content {
  font-size: 16px;
  color: var(--black-text);
  font-family: var(--text-font);
}


/* footer */
.footer-logo img {
  height: 100px;
}

.footer-link {
  font-size: 15px;
  color: var(--white-text);
}


/* responsive */
@media only screen and (max-width: 1024px) {
  .login-icon {
    display: none;
  }
}

@media only screen and (max-width: 900px) {
  footer {
    padding: 60px 5% 0 5%;
  }

  .footer-container {
    flex-direction: column;
    gap: 60px;
  }

  .footer-content-container {
    flex-direction: column;
    gap: 60px;
  }
}
</style>
