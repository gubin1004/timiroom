<template>
  <div class="index-section">
    <div id="pm" @click="goProduct">제품관리</div>

    <div id="status" @click="goProgress">작업현황</div>

    <div id="ps" @click="goTarget">생산현황</div>

    <div id="cm" @click="goTotal">종합 모니터링</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "main",
  setup() {
    const router = useRouter();
    const goProgress = () => {
      router.push("/progress");
    };
    const goProduct = () => {
      router.push("/product");
    };
    const goTarget = () => {
      router.push("/target");
    };
    const goTotal = () => {
      router.push("/total");
    };
    return {
      goProduct,
      goProgress,
      goTarget,
      goTotal,
    };
  },
});
</script>

<style scoped>
.index-section {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  width: 100%;
  height: 100%;
  margin-left: 0;
}

.index-section #pm {
  margin-left: 0;
}

.index-section #status {
  margin-left: 0;
}

.index-section #ps {
  margin-left: 0;
}

.index-section #cm {
  margin-left: 0;
}
</style>
