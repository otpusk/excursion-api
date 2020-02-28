import {
    getExcursion
} from './index.js';

async function main () {
    const tour = await getExcursion(69864);

    console.log(tour.excursion.days);
}

main();
