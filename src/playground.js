import {
    getTransportExcursionMeta
} from './index.js';

async function main () {
    const data = await getTransportExcursionMeta({
        transport: 'bus',
        country:   'spain',
        city:      'madrid',
    });

    console.log(data);
}

main();
