import {
    getShowplace
} from './index.js';

async function main () {
    try {
        const showplace = await getShowplace('/excursion/france/parizh/showplace-the-louvre/');

        console.log(showplace);
    } catch (err) {
        console.log(err);
    }
}

main();
