import {
    getAgencies
} from './index.js';

async function main () {
    const data = await getAgencies({
        params: { cruiseId: 65091, date: '2020-01-26', variantId: 2041690, cityFrom: 1, deptCity: 1397, operator: 464 },
        token:  '1b204-25f04-4b78c-0b089-e27ea',
    });

    console.log(data);
}

main();
