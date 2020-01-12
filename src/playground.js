import {
    getCategory
} from './index.js';

async function main () {
    const data = await getCategory('popular-cities');

    console.log(data);
}

main();
