import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { 
      count: useLocalStorage('count', 0), //useLocalStorage takes in a key of 'count' and default value of 0
     };
  },
  actions: {
    increment(value = 1) {
      this.count += value;
    },
    decrement(value = 1) {
      this.count -= value;
    },
    reset() {
      this.count = 0;
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
    squareCount: (state) => {
      return state.count ** 2;
    },
  },
  //persist: {
  //  storage: sessionStorage, // localStore to store data beyond the session.
  //}
});
