const store = {
    state: {
        count: 0,
        gites: []
    },
    mutations: {
        increment (state) {
            state.count++
        },
        addGite (state, gite) {
            state.gites.push(gite)
        }
    }
};

export default store;
