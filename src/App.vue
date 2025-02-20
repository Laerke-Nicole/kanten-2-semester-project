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
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

      <!-- logo in top left corner -->
      <div class="flex lg:flex-1">
        <RouterLink to='/'>
          <div>
            <img class="h-12 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/Standart%20small%20neg.png?alt=media&token=c3af2587-a422-41b9-8e98-70f2b91097a4" alt="kantens logo" />
          </div>
        </RouterLink>
      </div>

      <!-- hamburgebar icon -->
      <div class="flex lg:hidden">
        <button type="button" title="hamburgerbar" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 white-text" @click="mobileMenuOpen = true">
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- links in navigation -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 white-text" >
        <RouterLink to='/'>Events</RouterLink>
        <RouterLink to='/about'>Om Kanten</RouterLink>
        <RouterLink to='/contact'>Kontakt os</RouterLink>
      </PopoverGroup>

      
      <!-- right side with log in system -->
      <div class="log-in-system hidden lg:flex lg:flex-1 lg:justify-end">
        <button @click="handleSignOut" v-if="isLoggedIn" class="button1 signout mt-3">Log ud</button>
        <!-- <RouterLink to='/register'>Register</RouterLink> -->
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
          <button type="button" class="-m-2.5 rounded-md p-2.5 white-text" @click="mobileMenuOpen = false">
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- links in hamburger menu -->
        <div class="mt-6 flow-root">
          <div class="hamburgermenu-box -my-6 divide-y divide-gray-500/10">
            <div class="hamburgermenu-top-content space-y-2 py-6">
              <RouterLink to='/' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Events</RouterLink>
              <RouterLink to='/about' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Om Kanten</RouterLink>
              <RouterLink to='/contact' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Kontakt os</RouterLink>
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
          <p class="white-text text-sm">+45 28  97 11 85</p>
          <p class="white-text text-sm">Musikforeningenkanten@gmail.com</p>
          <p class="white-text text-sm">Gl Novrupvej 14, 6705 Esbjerg Ø</p>
        </div>
  
        <div class="flex flex-col gap-4">
          <h4 class="white-headline pb-4">ABOUT</h4>
          <RouterLink to='/about'><p class="white-text text-sm">Om Kanten</p></RouterLink>
          <RouterLink to='/contact'><p class="white-text text-sm">Kontakt os</p></RouterLink>
          <p class="white-text text-sm">Vilkår & betingelser</p>
          <p class="white-text text-sm">Privatlivspolitik</p>
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
}

nav a:hover {
  color: var(--white-headline);
}

nav a.router-link-exact-active {
  color: var(--white-headline);
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
  color: var(--white-text);
  font-family: var(--text-font);
  transition: 0.3s;
  font-size: 14px;
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


/* responsive */
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
