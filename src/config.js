import Cookies from 'js-cookie';

const host = Cookies.get('excursion-api-host') || 'https://new.otpusk.com/api';
const endpoints = Object.freeze({
    mainpage:        `${host}/excursions/mainpage`,
    countries:       `${host}/excursions/countries`,
    suggest:         `${host}/excursions/suggest`,
    filterDeparture: `${host}/excursions/filter/departure`,
});

export { endpoints };
