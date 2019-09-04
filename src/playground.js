import { getFilterDeparture } from './index.js';

async function main () {
    const departures = await getFilterDeparture();

    console.log('departures', departures);
}

main();
