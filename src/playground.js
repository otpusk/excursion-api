import {
    getAgencies
} from './index.js';

import FormData from 'form-data';

async function main () {
    try {
        const params = { cruiseId: 67935, operatorId: 641, date: '2020-03-07', variantId: 20721297 };
        const formdata = new FormData();

        formdata.append('s', JSON.stringify(params));

        const agencies = await getAgencies(formdata);

        console.log(agencies);
    } catch (err) {
        console.log(err);
    }
}

main();
