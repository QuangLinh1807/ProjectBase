import { createStore } from "vuex";

const store = createStore({
  modules: {},
});

export function useStore() {
  return store;
}

export default store;
