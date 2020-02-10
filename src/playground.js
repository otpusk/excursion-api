import {
    getExcursion
} from './index.js';

async function main () {
    try {
        const data = await getExcursion(69824);

    } catch (err) {
        console.log(err);
    }
}

main();
