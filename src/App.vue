<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "InitPage",
  setup() {
    const router = useRouter();
    const goMain = () => {
      router.push("/main");
    };
    return {
      goMain,
    };
  },
});
</script>

<template>
  <router-view></router-view>
  <div id="title" @click="goMain">Timiroom</div>
</template>

<style>
#title {
  font-size: 50px;
  position: absolute;
  top: 30px;
  left: 30px;
}
</style>
