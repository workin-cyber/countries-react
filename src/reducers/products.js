export default (state = [], data) => {

    switch (data.type) {
        case 'PRODUCTS_FETCHED':
            return data.payload

        case 'PRODUCTS_FETCHED_ERROR':
            return []
            
        default:
            return state;
    }

}