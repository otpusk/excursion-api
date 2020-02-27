import { endpoints } from '../config';
import { call } from '../fn';
import { escapeHtml } from '../helpers';

export async function getExcursion (excursion) {
    const tour = await call(`${endpoints.getExcursion}/${excursion}`);

    // escaping unsafe characters in html response
    const sanitizeStringProperties = (obj) => {
        Object.keys(obj).forEach((key) => {
            if (!obj[key]) {
                return;
            }

            if (typeof obj[key] === 'string') {
                obj[key] = escapeHtml(obj[key]);
            }

            if (typeof obj[key] === 'object') {
                sanitizeStringProperties(obj[key]);
            }

        });

        return obj;
    };

    return sanitizeStringProperties(tour);
}
