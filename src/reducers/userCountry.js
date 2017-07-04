import COUNTRIES from './../countries';

const initialUserCountryState = {
    list: [],
    current: {}
}

const userCountry = (state=initialUserCountryState, action) => {
    switch (action.type) {
        case 'CHANGE_COUNTRY':
            const currentCountry = state.list.find(country => country.code === action.payload.code);
            return {...state, current: currentCountry}
        case 'GET_COUNTRIES':
            return {...state, list: COUNTRIES}
        default:
            return state;
    }
}

export default userCountry;