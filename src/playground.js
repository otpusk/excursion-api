import {
    getAgencies
} from './index.js';

async function main () {
    const data = await getAgencies({
        token:  '1b204-25f04-4b78c-0b089-e27ea',
        params: {
            cruiseId:   69891,
            operatorId: 498,
            date:       '2020-01-04',
            variantId:  '2045690983',
            cityFrom:   1,
        },
    });

    console.log(data);
}

main();
