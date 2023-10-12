import { defineStore } from "pinia";
let useSettingStore = defineStore('settingStore',{
    state: ()=>{
        return {
            isFold: false
        }
    }
})
export default useSettingStore