import {
    getShowplace
} from './index.js';

async function main () {
    const test = { country: 'france', city: 'parizh', showplace: 'luvr' };
    const data = await getShowplace(test);

    console.log(data);
}

main();
