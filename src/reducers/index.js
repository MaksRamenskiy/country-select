import {combineReducers} from 'redux';
import COUNTRIES from './../countries';
import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);

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

const browser = (state='', action) => {
    switch (action.type) {
        case 'CHECK_BROWSER_DEVICE':
            const browserType = md.mobile() ? 'Mobile' : 'Desktop'
            return browserType;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    userCountry,
    browser,
})

export default rootReducer;