<script setup>
// imports
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { onMounted, ref } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase'

// tailwind imports
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'


const mobileMenuOpen = ref(false)


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


</script>

<template>

<header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mt-0">
      <div class="flex lg:flex-1">
        <RouterLink to='/'>
          <div class="pl-10">
            <img class="h-12 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/logo-standart-small.svg?alt=media&token=33e9c95c-fad9-4827-ae1e-5032e7d9070d" alt="" />
          </div>
          

        </RouterLink>
        
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <RouterLink to='/'>Events</RouterLink>
        <RouterLink to='/about'>Om Kanten</RouterLink>
        <RouterLink to='/volounteers'>De frivillige</RouterLink>
        <RouterLink to='/contact'>Kontakt</RouterLink>
        <RouterLink to='/feed'>Feed</RouterLink>
        <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
        <RouterLink to='/admin'>Admin</RouterLink>
      </PopoverGroup>

      
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink to='/sign-in'>Log ind</RouterLink>
        <RouterLink to='/register'>Register</RouterLink>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/logo-standart-small.svg?alt=media&token=33e9c95c-fad9-4827-ae1e-5032e7d9070d" alt="kanten-logo" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink to='/' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Events</RouterLink>
              <RouterLink to='/about' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Om Kanten</RouterLink>
              <RouterLink to='/volounteers' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">De frivillige</RouterLink>
              <RouterLink to='/contact' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Kontakt</RouterLink>
              <RouterLink to='/feed' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Feed</RouterLink>
              <button @click="handleSignOut" v-if="isLoggedIn" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Sign out</button>
              <RouterLink to='/admin' class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Admin</RouterLink>
            </div>

            <div class="py-6">
              <RouterLink to='/sign-in' class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log ind</RouterLink>
              <RouterLink to='/register' class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Register</RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>


















  <!-- <header>
    <img alt='Vue logo' class='logo' src='@/assets/logo.svg' width='125' height='125' />

    <div class='wrapper'>
      <HelloWorld msg='You did it!' />

      <nav>
        <RouterLink to='/'>Events</RouterLink>
        <RouterLink to='/about'>Om Kanten</RouterLink>
        <RouterLink to='/volounteers'>De frivillige</RouterLink>
        <RouterLink to='/contact'>Kontakt</RouterLink>
        <RouterLink to='/sign-in'>Log ind</RouterLink>
        <RouterLink to='/register'>Register</RouterLink>
        <RouterLink to='/feed'>Feed</RouterLink>
        <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
        <RouterLink to='/admin'>Admin</RouterLink>

      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
