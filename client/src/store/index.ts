import { reactive, readonly } from "vue";

const _state = reactive({
  token: null as string | null,
});

_state.token = localStorage.getItem("token");

const store = {
  state: readonly(_state),
  setToken: (token: string) => {
    localStorage.setItem("token", token);
    _state.token = token;
  },
  clearToken: () => {
    localStorage.removeItem("token");
    _state.token = null;
  },
};

export { store };
