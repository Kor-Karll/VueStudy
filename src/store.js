import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        ref: {
            name: "",
            age: "",
            job: "",
        },
        count: 0,
    },
    mutations: {
        setRefData: function(state, payload) {
            state.ref = payload
        },
    },
    actions: {
        setRefData: function(context, payload) {
            context.commit('setRefData', payload)
        }
    }
});

