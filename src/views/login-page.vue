<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Axios from "axios";
export default defineComponent({
  name: "loginPage",
  setup() {
    const router = useRouter();
    const userInput = ref({
      id: "",
      pw: "",
    });

    const getApiClient = () => {
      const instance = Axios.create({
        baseURL: "http://13.209.84.2:4000",
        timeout: 1000 * 60 * 2,
        headers: { "Content-Type": "application/json" },
      });

      return instance;
    };

    const ApiClient = async (url, data) => {
      return await getApiClient()
        .post(url, data)
        .then((res) => {
          return res.data;
        })
        .catch(() => {
          console.error();
        });
    };

    const openPopup = async () => {
      // if (!userInput.value.id) {
      //   window.alert("아이디를 입력하세요");
      //   return false;
      // } else if (!userInput.value.pw) {
      //   window.alert("비밀번호를 입력하세요");
      //   return false;
      // } else {
      //   const result = await ApiClient(
      //     "/Admin/Register",
      //     JSON.stringify(userInput.value)
      //   );
      //   console.log(result);
      //
      //   if (result) {
      //     // if (result.message === "성공") {
      //     // window.alert("로그인 확인");
      router.push("/main");
      //     // } else {
      //     // }
      //   }
      // }
    };
    return {
      openPopup,
      userInput,
    };
  },
});
</script>

<template>
  <div class="input-section">
    <div id="login">로그인</div>

    <div id="id">
      아이디
      <input type="email" placeholder="아이디" v-model="userInput.id" />
    </div>

    <div id="password">
      비밀번호
      <input type="password" placeholder="비밀번호" v-model="userInput.pw" />
    </div>

    <div class="login-button">
      <button @click="openPopup">로그인 확인</button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.input-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 280%;
}

.input-section #login {
  font-size: 70px;
  line-height: 100px;
  text-align: center;
}

.input-section #id {
  font-size: 20px;
  text-align: center;
}

.input-section #password {
  font-size: 20px;
  text-align: center;
  padding: 5px;
}

.input-section .login-button button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 130px;
  font-size: 15px;
  border-radius: 10px;
  background-color: cornflowerblue;
  color: white;
}
</style>
