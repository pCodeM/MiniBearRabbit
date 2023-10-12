import { defineStore } from "pinia";
const useTabbarStore = defineStore('Tabbar',{
    state: ()=>{
        return {
            currentRoute: {}
        }
    }
})
export default useTabbarStore