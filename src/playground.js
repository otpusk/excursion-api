import {
    getMainpage
} from './index.js';

async function main () {
    const mp = await getMainpage();

    console.log(JSON.stringify(mp));
}

main();
