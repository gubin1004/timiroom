<script>
import { defineComponent, onMounted, ref } from "vue";
import TableComponent from "../components/tableComponent.vue";
import Axios from "axios";

export default defineComponent({
  name: "InitPage",
  components: { TableComponent },
  setup() {
    const productHeader = {
      name: "설비명",
      number: "품번",
      item: "품목",
      createDate: "생산 일자",
      isDefect: "불량 여부",
    };
    const productList = ref < Array > [];

    const getApiClient = () => {
      return Axios.create({
        baseURL: "http://13.209.84.2:4000",
        timeout: 1000 * 60 * 2,
        headers: { "Content-Type": "application/json" },
      });
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

    onMounted(async () => {
      const result = await ApiClient("/Product", {});
      console.log(result);
    });

    return {
      productHeader,
      productList,
    };
  },
});
</script>

<template>
  <table-component
    :header="productHeader"
    :item-list="productList ? productList : []"
  ></table-component>
</template>
