import {
    getExcursion
} from './index.js';

async function main () {
    const excursion = await getExcursion(70440);

    console.log(excursion);
}

main();
