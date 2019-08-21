export default (state = [], data) => {

    switch (data.type) {
        case 'ADD_TO_CART':
            const index = state.findIndex(p => p.id == data.payload.id)
            if (index == -1)
                state.push(data.payload)
            else {
                if (data.payload.amount <= 0)
                    state.splice(index, 1)
                else
                    state[index] = data.payload
            }

            return [...state]
        case 'CLEAR_CART':
            return []

        default:
            return state;
    }

}