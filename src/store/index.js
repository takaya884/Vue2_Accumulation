import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // グローバルな状態
    appName: 'Vue 2 Study App',
    version: '1.0.0'
  },
  mutations: {
    // 状態を変更する関数
    SET_APP_NAME(state, name) {
      state.appName = name
    }
  },
  actions: {
    // 非同期処理や複雑なロジック
    updateAppName({ commit }, name) {
      commit('SET_APP_NAME', name)
    }
  },
  getters: {
    // 状態から派生した値
    appInfo: state => {
      return `${state.appName} v${state.version}`
    }
  },
  modules: {
    // モジュール化されたストア
    todos
  }
}) 