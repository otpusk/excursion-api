import {
    getExcursion
} from './index.js';

async function main () {
    const excursion = await getExcursion(69711);

    console.log(excursion);
}

main();
