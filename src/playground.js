import {
    getAgencies,
    getDistricts
} from './index.js';

async function main () {
    const data = await getAgencies({
        token:  '1b204-25f04-4b78c-0b089-e27ea',
        params: {
            cruiseId:   40671,
            date:       '2019-12-28',
            operatorId: 465,
            variantId:  2022263105,
            cityFrom:   '1',
            deptCity:   '1397',
            hash:       '',
        },
    });

    const districts = await getDistricts({ token: '1b204-25f04-4b78c-0b089-e27ea', placeId: 1 });
}

main();
