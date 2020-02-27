import {
    getExcursion
} from './index.js';

async function main () {
    const tour = await getExcursion(65491);

    console.log(tour);
}

main();
