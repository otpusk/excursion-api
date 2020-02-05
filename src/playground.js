import {
    getLocationsInfo
} from './index.js';

async function main () {
    const data = await getLocationsInfo(
        {
            cities: ['2878'],
        }
    );

    console.log(data);
}

main();
