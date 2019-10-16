<template>
<div class="login-page" v-show="showLogin">
  <div class="form">
      <h3>ChatAja Test</h3>
    <form class="login-form">
      <input type="text" placeholder="email" v-model="email"/>
      <input type="password" placeholder="password" v-model="password"/>
      <p style="color:red">{{messagesError}}</p>
      <button @click="login()">login</button>
      <!-- <router-link to="/chat" tag="button" @click="login()">Login</router-link> -->
    </form>
  </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            messagesError: ''
        }
    },
    computed: {
        user_1 () {
            let obj = {
                'email': this.$store.state.user.user_1.email,
                'password': this.$store.state.user.user_1.password
            }
            return obj
        },
        user_2 () {
            let obj = {
                'email': this.$store.state.user.user_2.email,
                'password': this.$store.state.user.user_2.password
            }
            return obj
        },
        showLogin () {
            return this.$store.state.user.login_page
        }
    },
    methods: {
        login () {
            if (this.email !== this.user_1.email && this.password !== this.user_1.password || this.email !== this.user_2.email && this.password !== this.user_2.password) {
                this.messagesError = "Kombinasi Username dan Password Tidak Ditemukan"
            } else {
                if (this.email === this.user_1.email) {
                    this.$store.dispatch('user/firstUser')
                } else {
                    this.$store.dispatch('user/secondUser')
                }
                this.$router.push("/chat")
            }
        }
    }
}
</script>
<style lang="css">
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}

</style>