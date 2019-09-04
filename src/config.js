const host = 'https://new.otpusk.com/api';
const endpoints = Object.freeze({
    mainpage:        `${host}/excursions/mainpage`,
    countries:       `${host}/excursions/countries`,
    suggest:         `${host}/excursions/suggest`,
    filterDeparture: `${host}/excursions/filter/departure`,
});

export { endpoints };
