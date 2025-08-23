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
          <RouterLink to='/'>Hjem</RouterLink>
          <RouterLink to='/eventlist'>Kommende events</RouterLink>
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
          <RouterLink to='/' class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
            <img class="h-8 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/logo-standart-small.svg?alt=media&token=33e9c95c-fad9-4827-ae1e-5032e7d9070d" alt="kantens logo" @click="mobileMenuOpen = false" />
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
              <RouterLink to='/eventlist' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">Kommende events</RouterLink>
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
        <div class="flex flex-col gap-1 footer-content-container-info">
          <div class="pb-4">
            <h4 class="white-headline pb-4">KANTEN</h4>
            <p class="footer-link"><span class="font-bold">Tlf: </span>+45 28  97 11 85</p>
            <p class="footer-link"><span class="font-bold">Mail: </span>Musikforeningenkanten@gmail.com</p>
          </div>

          <div>
            <p class="footer-link">Gl Novrupvej 14</p>
            <p class="footer-link">6705 Esbjerg</p>
          </div>
        </div>
  
        <div>
          <h4 class="white-headline pb-4">ABOUT</h4>
          <div class="flex flex-col gap-4">
            <RouterLink to='/about'><p class="footer-link">Om Kanten</p></RouterLink>
            <RouterLink to='/contact'><p class="footer-link">Kontakt os</p></RouterLink>
            <p class="footer-link">Vilkår & betingelser</p>
            <p class="footer-link">Privatlivspolitik</p>
            <div class="flex gap-4 pt-4 white-text">
              <RouterLink to="//www.facebook.com/kanten.esbjerg/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
                </RouterLink>
                <RouterLink to="//www.instagram.com/kanten_esbjerg/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                </RouterLink>
                <RouterLink to="//discord.gg/Q7zUx2kjZF" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                </svg>
                </RouterLink>
            </div>
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
  padding: 10px 15px;
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

.footer-content-container-info p {
  font-size: 13px;
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
    gap: 48px;
  }

  .footer-content-container {
    flex-direction: column;
    gap: 32px;
  }
  .footer-logo img {
    height: 50px;
  }
}
</style>
