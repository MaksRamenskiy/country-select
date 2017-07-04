import {getCountries} from './../../api';

const loadCountriesAction = () => ({
    type: 'PROMISE',
    actions: ['COUNTRIES_LOADING', 'COUNTRIES_LOADED', 'COUNTRIES_LOAD_FAILURE'],
    promise: getCountries()
});

const changeCountryAction = (countryCode) => ({
    type: 'CHANGE_COUNTRY',
    countryCode
});

const checkBrowserDeviceAction = () => ({
    type: 'CHECK_BROWSER_DEVICE'
})

export {
    loadCountriesAction,
    changeCountryAction,
    checkBrowserDeviceAction
};