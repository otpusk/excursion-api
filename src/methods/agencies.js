import { endpoints } from '../config';
import { call } from '../fn';

export async function getAgencies({ token, params }) {

    /*
     * Алгоритм нормализации агенств с эндпоинта export.otpusk.com/api/escursions/agency
     *
     * Нужно получить массив объектов офисов
     * В ответе эндпоинта в поле operators есть два поля - clickAgencies и
     * viewAgencies. Это два объекта в которых значения полей - это
     * агенства. В них есть поля offices - объекты офисов.
     *
     * Название для офиса берём из - объекта агенства, поле title
     * url - объекта агенства, поле url
     * район (или метро) - объект офиса, поле rn
     * адрес - объект офиса, поле address
     * телефоны - объект офиса, поля fPhone1 - fPhone3
     * координаты - объект офиса, поля lat и lng
    */

    const rawData = await call(endpoints.getAgencies, { query: { ...params, access_token: token }, jsonp: true });

    const offices =
        // take all operators
        Object.values(rawData.operators)
            // return list of all agencies from viewAgencies and clickAgencies
            .flatMap(operator => {
                return [...Object.values(operator.viewAgencies), ...Object.values(operator.clickAgencies)];
            })
            // return list of all offices
            .flatMap(agency => {
                // get title and url from agency
                const { title = null, url = null } = agency;
                // return array of offices with proper normalizing
                return Object.values(agency.offices).map(office => {
                    const { rn: district = null, address = null, lat, lng } = office;
                    const rawPhones = [office.fPhone1, office.fPhone2, office.fPhone3];
                    const phones = rawPhones.filter(phone => !!phone).map(phone => phone.replace(/[-() &nbsp;]/g, ''));
                    return { title, url, district, address, phones, lat: Number(lat), lng: Number(lng) };
                });
            });

    return offices;
}
