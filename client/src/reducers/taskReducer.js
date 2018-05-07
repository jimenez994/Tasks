const initialSate = {
    isAuthenticated: false,
    tasks: {}
}

export default function(state = initialSate, action){
    switch (action.key) {
        default:
            return state;
    }
}
