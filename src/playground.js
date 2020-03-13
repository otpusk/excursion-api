import {
    getExcursionMeta
} from './index.js';

async function main () {
    const excursion = await getExcursionMeta(68558);

    console.log(excursion);
}

main();
