import mutations from "../mutations";

const { SHOW_TOAST_NOTIFY } = mutations;

const notificationStore = {
  state: {
    messagePool: [],
  },
  getters: {
    messagesPool: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    [SHOW_TOAST_NOTIFY](state, msg) {
      state.messagePool.push(msg);
    },
  },
  actions: {
    showNotify({ commit }, msg) {
      commit(SHOW_TOAST_NOTIFY, msg);
    },
  },
};

export default notificationStore;
