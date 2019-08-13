import { getMainpage} from './index.js';

getMainpage().then(
    payload => {
        console.log(payload);
    }
);