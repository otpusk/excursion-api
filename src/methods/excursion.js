import { endpoints } from '../config';
import { call } from '../fn';
import { escapeHtml } from '../helpers';

export async function getExcursion (excursion) {
    const tour = await call(`${endpoints.getExcursion}/${excursion}`);

    // escaping unsafe characters in html response
    const { excursion : { description, days, showplaces }} = tour;

    Object.keys(description).forEach((key) => {
        if (description[key]) {
            description[key] = escapeHtml(description[key]);
        }
    });

    showplaces.forEach(({ description : showplaceDescription }, index) => {
        if (showplaceDescription) {
            showplaces[index].description = escapeHtml(showplaceDescription);
        }
    });

    days.forEach((day, index) => {
        const { description : dayDescription } = day;

        if (dayDescription) {
            days[index].description = escapeHtml(dayDescription);
        }

    });

    return tour;
}
