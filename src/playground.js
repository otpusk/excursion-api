import {
    getCity
} from './index.js';

async function main () {
    const data = await getCity('spain', 'barselona');

    console.log(data);
}

main();
