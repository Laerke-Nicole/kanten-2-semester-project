<template>
    <div class="login-page">
        <form class="form">
            <h3 class="form-title">Log ind</h3>
            <div class="input-container">
                <p><input type="text" placeholder="E-mail" v-model="email"></p>
            </div>
            <div class="input-container">
                <p><input type="password" placeholder="Adgangskode" v-model="password"></p>
                <p v-if="errMsg">{{ errMsg }}</p>
                </div>
                <p><button @click="register" type="submit" class="button1">Log ind</button></p>
            <RouterLink to='/'><p class="underline text-right">Glemt adgangskode?</p></RouterLink>
            
            <p class="signup-link mt-7">Ingen bruger?</p>
            <RouterLink to='/'><p class="underline">Opret en bruger</p></RouterLink> 
        </form>
    </div>

</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //import router

const email = ref("");
const password = ref("");
const errMsg = ref() //ERROR MESSAGE
const router = useRouter() //get a reference to our vue router

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Successfuly signed in!');
        router.push('/feed') //redirect to the feed
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Vi fandt ingen bruger med denne e-mail";
                break;
            case "auth/user-not-found":
                errMsg.value = "Ingen bruger med den e-mail blev fundet";
                break;
            case "auth/wrong-password":
                errMsg.value = "Forkert password";
                break;
            default:
                errMsg.value = "E-mail eller adgangskode var forkert";
                break;
        }
        
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