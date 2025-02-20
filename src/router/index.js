import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/event/:id',
      name: 'event',
      component: () => import('../views/EventView.vue'),
      props:true

    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/SigninView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // if the user goes back orforward then get the saved position
    if (savedPosition) {
      return savedPosition;
    }
    // or scroll to the top of the page
    return { top: 0 };
  },
});


//register/log in
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },

      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    }
    else {
      alert("you dont have access!");
      next("/");
    }
  }
  else {
    next();
  }
});


export default router