import { getFilterDeparture } from './index.js';

getFilterDeparture().then(
    (payload) => {
        console.log('payload', payload);
    }
);
