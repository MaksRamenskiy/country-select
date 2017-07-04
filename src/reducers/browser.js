import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);

const initialBrowserState = {
    deviceType: ''
}

const browser = (state=initialBrowserState, action) => {
    switch (action.type) {
        case 'CHECK_BROWSER_DEVICE':
            const browserType = md.mobile() ? 'Mobile' : 'Desktop'
            return {...state, deviceType: browserType};
        default:
            return state;
    }
}

export default browser;