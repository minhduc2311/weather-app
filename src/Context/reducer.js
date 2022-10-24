export const initState = {
    city: '',
    currentWeather: '',
    hourlyWeather: '',
    dailyWeather: '',
    timezone: ''
}

function reducer(state, action) {
    switch(action.type) {
        case 'SET_CITY':
            return {
                ...state, city: action.payload
            };
        case 'SET_CURRENT':
            return {
                ...state, currentWeather: action.payload
            };
        case 'SET_HOURLY':
            return {
                ...state, hourlyWeather: action.payload
            };
        case 'SET_DAILY':
            return {
                ...state, dailyWeather: action.payload
            };
        case 'SET_TIMEZONE':
            return {
                ...state, timezone: action.payload
            };
        default:
            return {...state}
    }
}

export default reducer;