export default (state = null, data) => {
    switch (data.type) {
        case 'COUNTRIES_LIST_INIT':
            return data.payload
        case 'COUNTRIES_LIST_ERROR':
            return { error: data.payload }
        default:
            return state
    }
}