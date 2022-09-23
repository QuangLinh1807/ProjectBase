<template>
  <div class="container-login">
    <div class="wallpaper-register"></div>
    <div class="form-login">
      <div class="card login" v-if="!registerActive">
        <h1>Sign In</h1>
        <form class="form-group" @submit.prevent="handleSubmit">
          <div class="form-group">
            <BaseInput
              :inputField="fieldEmail"
              v-model="valueEmail"
              @clickInput="handleValueEmail"
            />
          </div>
          <div class="form-group">
            <BaseInput
              v-model="valuePassWord"
              :inputField="fieldPassword"
              @clickInput="handleValuePass"
            />
          </div>
          <div v-if="!checkValueLogin" class="error">
            Login information is incorrect or not registered
          </div>
          <div class="form-group">
            <BaseButton
              :statusColor="'primary'"
              class="basic-button_child_disable"
              :text="'Login'"
              @clickButton="handleSubmit"
            />
          </div>
          <p>
            Don't have an account?
            <a href="#" @click="handleActive">Sign up here</a>
          </p>
        </form>
      </div>
      <div v-else class="card register">
        <h1>Sign Up</h1>
        <form>
          <div class="form-group">
            <BaseInput
              :inputField="fieldEmail"
              v-model="valueEmail"
              @clickInput="handleValueEmail"
            />
          </div>
          <div class="form-group">
            <BaseInput
              v-model="valuePassWord"
              :inputField="fieldPassword"
              @clickInput="handleValuePass"
            />
          </div>
          <div class="form-group">
            <BaseInput
              v-model="confirmPassWord"
              :inputField="fieldConfirmPassword"
              @clickInput="handleValueConfirmPass"
            />
          </div>
          <div v-if="!checkValueLogin" class="error">Email already used</div>
          <BaseButton
            :statusColor="'primary'"
            class="basic-button_child_disable"
            :text="'Sign in'"
            @clickButton="handleRegister"
          />
          <p>
            Already have an account?
            <a href="#" @click="handleActive">Sign in here</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/Input/InputBase.vue";
import BaseButton from "@/components/Button/BasicButton/BasicButton.vue";
export default {
  data() {
    return {
      submitted: false,
      fieldEmail: {
        type: "email",
        placeholder: "Email",
        name: "email",
        color: "primary",
        label: "Email",
        error: false,
      },
      fieldPassword: {
        type: "password",
        placeholder: "Password",
        name: "password",
        color: "primary",
        label: "Password",
        error: false,
      },
      fieldConfirmPassword: {
        type: "password",
        placeholder: "ConfirmPassword",
        name: "ConfirmPassword",
        color: "primary",
        label: "Confirm Password",
        error: false,
      },
      registerActive: false,
      checkValueLogin: true,
      valueEmail: "",
      valuePassWord: "",
      confirmPassWord: "",
    };
  },
  components: { BaseInput, BaseButton },
  watch: {
    valueEmail() {
      this.checkValidate();
    },
    valuePassWord() {
      this.checkValidate();
    },
    confirmPassWord() {
      this.checkValidate();
    },
  },
  methods: {
    handleValueEmail(val) {
      this.valueEmail = val;
    },
    handleValuePass(val) {
      this.valuePassWord = val;
    },
    handleValueConfirmPass(val) {
      this.confirmPassWord = val;
    },
    checkValidate() {
      const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      let isCheckEmail = regexEmail.test(this.valueEmail);

      if (!this.valueEmail || !isCheckEmail) {
        this.fieldEmail.error = true;
      } else {
        this.fieldEmail.error = false;
      }

      if (!this.valuePassWord) {
        this.fieldPassword.error = true;
      } else {
        this.fieldPassword.error = false;
      }

      if (
        !this.confirmPassWord ||
        this.confirmPassWord !== this.valuePassWord
      ) {
        this.fieldConfirmPassword.error = true;
      } else {
        this.fieldConfirmPassword.error = false;
      }
    },
    handleActive() {
      this.registerActive = !this.registerActive;
    },
    handleSubmit() {
      let validate = !this.fieldEmail.error && !this.fieldPassword.error;
      let valueRegister = JSON.parse(localStorage.getItem("login"))?.find(
        ({ email }) => email === this.valueEmail
      );
      this.checkValueLogin =
        this.valueEmail == valueRegister?.email &&
        this.valuePassWord == valueRegister?.password;
      setTimeout(() => (this.checkValueLogin = true), 8000);
      if (validate && valueRegister && this.checkValueLogin) {
        this.$router.push({ path: `/button` });
      }
    },
    handleRegister() {
      let validate =
        !this.fieldEmail.error &&
        !this.fieldPassword.error &&
        !this.fieldConfirmPassword.error;

      if (validate) {
        let informationLogin = encodeURIComponent(
          `email=${this.valueEmail}password=${this.valuePassWord}`
        );
        window.document.cookie = `login=${JSON.stringify(informationLogin)}`;

        let valueRegister = JSON.parse(localStorage.getItem("login"))
          ? JSON.parse(localStorage.getItem("login"))
          : [];

        //kiểm tra tài khoản có chưa
        const result = valueRegister.find(
          ({ email }) => email === this.valueEmail
        );
        if (!result) {
          valueRegister?.push({
            email: this.valueEmail,
            password: this.valuePassWord,
          });
          localStorage.setItem("login", JSON.stringify(valueRegister));
          alert("Success!!!");
          this.registerActive = false;
        } else {
          this.checkValueLogin = false;
          setTimeout(() => (this.checkValueLogin = true), 5000);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.container-login {
  align-items: center;
  display: flex;
  height: 96vh;
  a {
    text-decoration: none;
  }
  .wallpaper-register {
    background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
      no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .form-login {
    width: 392px;
    margin: auto;
    .card {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba (0, 0, 0, 0.125);
      border-radius: 0.25rem;
    }
    .login {
      padding: 20px;
      opacity: 0.8;
      .form-group {
        .btn {
          height: 42px;
        }
        .base-input {
          input {
            height: 42px;
          }
        }
      }
    }
    .register {
      padding: 20px;
      opacity: 0.8;
      .form-group {
        .btn {
          height: 42px;
        }
        .base-input {
          input {
            height: 42px;
          }
        }
      }
    }
  }
  .error {
    animation-name: errorShake;
    animation-duration: 0.3s;
    color: red;
    margin: 10px 0;
  }
}
</style>
