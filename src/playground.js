import {
    // getFilterDeparture,
    // getFilterTransport,
    // getFilterCategories,
    // getFilterPrice,
    // getFilterOperators,
    // getSearchCount,
    // getExcursion,
    getAgencies
} from './index.js';

async function main () {
    // console.log(await getFilterDeparture());
    // console.log(await getFilterTransport());
    // console.log(await getFilterCategories());
    // console.log(await getFilterPrice());
    // console.log(await getFilterOperators());
    // console.log(await getSearchCount({}));
    // console.log(await getExcursion(68831));
    const data = await getAgencies({
        token: '1b204-25f04-4b78c-0b089-e27ea',
        params: { cruiseId: 47658, date: '2019-12-20', variantId: 2025100319, cityFrom: 1815, deptCity: 1397 },
    });

}

main();
