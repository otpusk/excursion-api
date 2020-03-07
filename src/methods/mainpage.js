import { endpoints } from '../config';
import { call } from '../fn';
import { parseExcursions } from "../helpers";

export async function getMainpage () {
    const data = await call(endpoints.mainpage);

    data.forEach((section) => {
        const sectionType = section.showOptions.sqType;

        if (sectionType === 'excursion_1' || sectionType === 'excursion_2') {
            section.mainPageExcursions = parseExcursions(section.mainPageExcursions);
        }
    });

    return data;
}
