import { getFilterDeparture, getFilterTransport, getFilterCategories,
    getFilterPrice, getFilterOperators, getSearchCount } from './index.js';

async function main () {
    console.log(await getFilterDeparture());
    console.log(await getFilterTransport());
    console.log(await getFilterCategories());
    console.log(await getFilterPrice());
    console.log(await getFilterOperators());
    console.log(await getSearchCount({}));
}

main();
