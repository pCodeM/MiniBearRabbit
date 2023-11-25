import { defineStore } from "pinia";
import { reqC1, reqC2, reqC3 } from "@/api/products/attr/index";
const UseAttrStore = defineStore("AttrStore", {
  state: () => {
    return {
      C1Data: <any>[],
      c1id: "",

      C2Data: <any>[],
      c2id: "",

      C3Data: <any>[],
      c3id: "",
    };
  },
  actions: {
    async getC1Data() {
      let res = await reqC1();
      if (res.code == 200) {
        this.C1Data = res.data;
      } else {
        ElMessage.error(res?.message);
      }
    },
    async getC2Data(c1id) {
      let res: any = await reqC2(c1id);
      if (res.code == 200) {
        this.C2Data = res.data;
      } else {
        ElMessage.error(res?.message);
      }
    },
    async getC3Data(c2id) {
      let res: any = await reqC3(c2id);
      if (res.code == 200) {
        this.C3Data = res.data;
      } else {
        ElMessage.error(res?.message);
      }
    },
  },
});
export default UseAttrStore;
