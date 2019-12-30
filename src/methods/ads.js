import { endpoints } from '../config';
import { call } from '../fn';

export async function getAgencies ({ token, params }) {

    /*
     * Алгоритм нормализации агенств с эндпоинта export.otpusk.com/api/escursions/agency
     *
     * Нужно получить массив объектов офисов
     * В ответе эндпоинта в поле operators есть два поля - clickAgencies и
     * viewAgencies. Это два объекта в которых значения полей - это
     * агенства. В них есть поля offices - объекты офисов.
     *
     * Название для офиса берём из - объекта агенства, поле title
     * advertId - обьект агенства
     * agencyId - обьект агенства
     * url - объекта агенства, поле url
     * район (или метро) - объект офиса, поле rn
     * адрес - объект офиса, поле address
     * телефоны - объект офиса, поля fPhone1 - fPhone3,
     * фотография офиса - объект офиса, поле facade
     * есть ли у телефонов вайбер - объект офиса , поля phoneViber1 - phoneViber3
     * координаты - объект офиса, поля lat и lng
     * время работы - объект оффиса, поле workingTime
    */

    const rawData = await call(endpoints.getAgencies, { query: { ...params, 'access_token': token }, jsonp: true });

    const offices =
        // take all operators
        Object.values(rawData.operators)
            // return list of all agencies from viewAgencies and clickAgencies
            .flatMap((operator) => {
                return [...Object.values(operator.viewAgencies), ...Object.values(operator.clickAgencies)];
            })
            // return list of all offices
            .flatMap((agency) => {
                // get title and url from agency
                const { title = null, url = null, advertId = null, agencyId = null } = agency;
                // return array of offices with proper normalizing

                return Object.values(agency.offices).map((office) => {
                    const { rn: district = null, address = null, lat, lng, facade = null, workingTime = null, zoom = null, officeId } = office;

                    const rawContacts = [
                        { phone: office.fPhone1, hasViber: office.phoneViber1 || false },
                        { phone: office.fPhone2, hasViber: office.phoneViber2 || false },
                        { phone: office.fPhone3, hasViber: office.phoneViber3 || false }
                    ];

                    const contacts = rawContacts
                        .filter((contact) => Boolean(contact.phone))
                        .map((contact) => ({
                            phone:    contact.phone.replace(/[-() &nbsp;]/g, ''),
                            hasViber: contact.hasViber,
                        }));

                    return {
                        title,
                        url,
                        officeId: Number(officeId),
                        advertId: Number(advertId),
                        agencyId: Number(agencyId),
                        district,
                        address,
                        contacts,
                        lat:      Number(lat),
                        lng:      Number(lng),
                        zoom:     Number(zoom),
                        facade,
                        workingTime,
                    };
                });
            });

    const regions = rawData.regions;

    return { offices, regions };
}