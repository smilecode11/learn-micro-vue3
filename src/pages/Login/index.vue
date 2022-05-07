<template>
  <h3>Login Page</h3>
  <p>{{ messageRef }}</p>
  <form action="#">
    <input type="text" placeholder="用户名" v-model="loginForm.username" />
    &nbsp;
    <input
      type="password"
      placeholder="密码"
      v-model="loginForm.password"
    />&nbsp;
    <button type="submit" @click="login">登录</button>
  </form>
  <hr />
  <div>login user:{{loginUser.user || '未知'}} - role: {{loginUser.role}}</div>
</template>

<script>
import axios from "axios";
import { ref, reactive, defineComponent } from "vue";
export default defineComponent({
  name: "LoginPage",
  setup() {
    const messageRef = ref("This is a vue3.0 project with Login page.");
    const loginForm = reactive({
      username: "",
      password: "",
    });
    const login = (event) => {
      event.preventDefault();
      axios
        .post(`http://localhost:3000/vue3/login`, {
          username: loginForm.username,
          password: loginForm.password,
        })
        .then((resp) => {
          console.log("登录成功");
          if (resp.status === 200) {
            loginUser.user = resp.data.username;
          }
        });
    };
    const loginUser = reactive({
      user: "",
      role: 1,
    });

    return {
      messageRef,
      loginForm,
      login,
      loginUser,
    };
  },
});
</script>
