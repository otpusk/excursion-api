import Cookies from 'js-cookie';

const host = Cookies.get('excursion-api-host') || 'https://new.otpusk.com/api';
const exportOtpusk = 'https://export.otpusk.com/api';
const otpusk = 'https://www.otpusk.com';

const endpoints = Object.freeze({
    mainpage:           `${host}/excursions/mainpage`,
    countries:          `${host}/excursions/countries`,
    suggest:            `${host}/excursions/suggest`,
    filterDeparture:    `${host}/excursions/filter/departure`,
    filterTransport:    `${host}/excursions/filter/transport`,
    filterCategories:   `${host}/excursions/filter/categories`,
    filterPrice:        `${host}/excursions/filter/price`,
    filterOperators:    `${host}/excursions/filter/operators`,
    search:             `${host}/excursions/search`,
    searchCount:        `${host}/excursions/searchcount`,
    getExcursion:       `${host}/excursions/get_excursion`,
    getCountry:         `${host}/geo/country`,
    getCity:            `${host}/geo/city`,
    getCategory:        `${host}/excursions/category`,
    getLocationsInfo:   `${host}/excursions/locations_info`,
    getAgencies:        `${exportOtpusk}/excursions/agency`,
    sendExcursionOrder: `${otpusk}/tour/order`,
});

export { endpoints };
