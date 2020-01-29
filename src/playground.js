import {
    getAgencies
} from './index.js';

async function main () {
    const data = await getAgencies({
        params: { cruiseId: 69055, date: '2020-05-28', variantId: 2018229, deptCity: 1397, operatorId: 464 },
        token:  '1b204-25f04-4b78c-0b089-e27ea',
    });

    console.log(data);
}

main();
