import {
    getAgencies
} from './index.js';

async function main () {
    const data = await getAgencies({
        token: '1b204-25f04-4b78c-0b089-e27ea',
        params: { cruiseId: 47658, date: '2019-12-20', variantId: 2025100319, cityFrom: 1815, deptCity: 1397 },
    });

    console.log(JSON.stringify(data));
}

main();
