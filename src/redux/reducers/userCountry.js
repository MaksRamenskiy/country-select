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
            const sortedCountries = action.payload.sort((a,b) => {
                return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
            });
            return {...state, list: sortedCountries}
        default:
            return state;
    }
}

export default userCountry;