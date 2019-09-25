import { getSearch } from './index.js';

async function main () {
    const tours = await getSearch();

    console.log('departures', JSON.stringify(tours));
}

main();
