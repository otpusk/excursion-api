import {
    getExcursion
} from './index.js';

async function main () {
    try {
        const data = await getExcursion(70125);

    } catch (err) {
        console.log(err);
    }
}

main();
