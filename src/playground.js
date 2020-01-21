import {
    getCategory
} from './index.js';

async function main () {
    const data = await getCategory('/excursion/c-catholic-christmas/');

    console.log(data);
}

main();
