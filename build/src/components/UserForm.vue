<template>
  <h1 style="color: gold;">Get In Touch</h1>
  <div class="user-form">
    <span class="input-text">Email<span style="color: red">*</span></span>
    <input
      type="text"
      placeholder="Your Email"
      v-model="email"
      class="inputFields"
      :class="{ error: emailError }"
    />
    <span class="error-message" v-if="emailError">Incorrect email format</span>
    <span class="input-text">Name<span style="color: red">*</span></span>
    <input
      class="inputFields"
      type="text"
      placeholder="Your Name"
      v-model="name"
      :class="{ error: nameError }"
    />
    <span class="error-message" v-if="nameError">Name is required</span>
    <span class="input-text">Message</span>
    <textarea placeholder="Your Message" class="inputFields" v-model="message"></textarea>
    <div :class="{ shake: disabled }" @click="warnDisabled">    <button class="SubmitBtn" @click="onVerify">Submit</button></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getDatabase, ref as firebaseRef, push } from "firebase/database";
const message = ref("");
const email = ref("");
const name = ref("");
const emailError = ref(false);
const nameError = ref(false);
// const disabled = ref(false);

const onVerify = () => {
  emailError.value = !isValidEmail(email.value);
  nameError.value = !name.value.trim();

  if (!emailError.value && !nameError.value) {
    // Data verification successful, send data to Firebase
    const db = getDatabase();
    const formDataRef = firebaseRef(db, "formData");

    const newFormData = {
      email: email.value,
      name: name.value,
      message: message.value,
      timestamp: new Date().toISOString(),
    };

    push(formDataRef, newFormData);

    // Clear the fields after submission
    email.value = "";
    name.value = "";
    message.value = "";
  }
};

function isValidEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}
const disabled = ref(false)

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}
</script>

<style scoped lang="scss">
// title settings
h1 {
  text-align: left;
  margin-bottom: 3%;
  margin-left: 10%;
}

// user-form main container settings
.user-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  color: #333;
  background-color:rgb(14, 14,64);
  border-radius: 10px;
  margin: 0 auto;
  max-width: 80%;
}

// input fields settings
textarea,
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin: 1%;
  border: 1px solid #333;
  border-radius: 5px;
  background-color:rgb(1, 1,32);
  color: white;
  text-align: left;
}

.input-text {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  color: gold;
  width: 100%;
  margin: 1%;
}

input[type="text"]:focus {
  border-color: #4ade80;
}

.inputFields {
  &:focus {
    border: none;
    outline: 1px solid #334155;
  }
}
// end of input fields settings



// page buttons
.SubmitBtn {
  background-color: gold;
  color: rgb(1, 1,32);
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
}

.SubmitBtn:hover {
  background-color: rgba(255, 217, 0, 0.712);
}

// end of page buttons

// shake animation for submit button
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
// end of animations

// error spans for validations
.error {
  border-color: #ff6347;
}

.error-message {
  color: #ff6347;
  font-size: 12px;
}
.error {
  border-color: #ff6347;
}

.error-message {
  color: #ff6347;
  font-size: 12px;
}
// end of validations





// start media query
@media (max-width: 768px) {
  .SubmitBtn {
    font-size: 14px;
  }
}
// end of query

</style>
