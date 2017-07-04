const initialUserCountryState = {
    list: [],
    current: {}
}

const userCountry = (state=initialUserCountryState, action) => {
    switch (action.type) {
        case 'CHANGE_COUNTRY':
            const currentCountry = state.list.find(country => country.code === action.countryCode);
            return {...state, current: currentCountry}
        case 'COUNTRIES_LOADED':
            return {...state, list: action.payload}
        default:
            return state;
    }
}

export default userCountry;