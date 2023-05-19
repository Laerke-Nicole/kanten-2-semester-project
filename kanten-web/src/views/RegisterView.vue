<template>
    <div class="login-page">
        <form class="form">
            <h3 class="form-title">Opret en bruger</h3>
            <div class="display: flex gap-1">
                <p>Allerede medlem?</p>
                <RouterLink to='/sign-in'><p class="underline">Log ind</p></RouterLink>
                
            </div>
            
            <div class="input-container">
                <p><input type="text" placeholder="E-mail" v-model="email"></p>
            </div>
            <div class="input-container">
                <p><input type="password" placeholder="Adgangskode" v-model="password"></p>
            </div>
            <p><button @click="register" class="button1">Registrer</button></p>
        </form>
    </div>








</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //import router

const email = ref("");
const password = ref("");
const router = useRouter() //get a reference to our vue router

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Successfuly Registered!');
        router.push('/feed') //redirect to the feed
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
};


</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    padding: 200px 10% 200px 10%;
}

.form {
  background-color: var(--secondary-color);
  display: block;
  padding: 1rem;
  max-width: 350px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 36px;
  margin-top: 16px;
}

.input-container {
  position: relative;
  width: 300px;
}

.input-container input, .form button {
  outline: none;
  margin: 8px 0;
}

.input-container input {
  padding: 1rem;
  padding-right: 3rem;
  width: 300px;
  background-color: var(--white-headline);
  outline: none;
  box-shadow: 0px 10px 20px -18px;
  border: 2px solid var(--primary-color);
  padding: 10px 0 10px 25px;
  margin: 12px 0;
}

.input-container input::placeholder {
    color: var(--black-text);
    font-family: var(--text-font);
}

.button1 {
    margin-top: 24px !important;
    width: 100%;
}




</style>