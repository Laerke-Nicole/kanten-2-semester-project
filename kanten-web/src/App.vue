<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'


import { onMounted, ref } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase'


//adding database for events
const todos = ref([
  {
    id: 'id1',
    content: 'content 1',
    done: false,
  },
  {
    id: 'id2',
    content: 'content 2',
    done: false,
  },
])

// get ...
onMounted(() => {
  onSnapshot(collection(db, 'cities'), (querySnapshot) => {
    const dbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      dbTodos.push(todo)
    });
    todos.value = fbTodos
  });
})

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

  <header>
    <img alt='Vue logo' class='logo' src='@/assets/logo.svg' width='125' height='125' />

    <div class='wrapper'>
      <HelloWorld msg='You did it!' />

      <nav>
        <RouterLink to='/'>Home</RouterLink>
        <RouterLink to='/register'>Register</RouterLink>
        <RouterLink to='/sign-in'>Sign-in</RouterLink>
        <RouterLink to='/feed'>Feed</RouterLink>
        <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
      </nav>
    </div>
  </header>

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
