export function escapeHtml (unsafe) {
    const unsafeCharacters = [
        { char: "\r\n", unicode: "<br />" },
        { char: "\n", unicode: "<br />" },
        { char: "\\\\", unicode: '' },
        { char: "&", unicode: "&amp;" },
        { char: '"', unicode: "&quot;" },
        { char: '“', unicode: "&quot;" },
        { char: '”', unicode: "&quot;" },
        { char: "'", unicode: "&#039;" },
        { char: "«", unicode: "&#171;" },
        { char: "»", unicode: "&#187;" },
        { char: '„', unicode: "&quot;" },
        { char: '	', unicode: ' ' }
    ];

    return unsafeCharacters.reduce((acc, { char, unicode }) => {
        return acc.replace(new RegExp(char, "g"), unicode);
    }, unsafe);
}

export function parseExcursions (excursions) {
    if (excursions && Array.isArray(excursions)) {
        return excursions.map((excursion) => {
            const {
                excursionCategories = [],
                excursionDestinations = [],
                prices = {},
                images = [],
                title = "",
                titleTranslit = "",
                id = "",
                length = null,
                departureCity : { nameInGenitiveCase : departureCity = '' } = {},
                transport = null,
            } = excursion;

            let coverPhoto = null;

            const [mainCategory] = excursionCategories
                .filter(({ priority }) => priority > 0)
                .sort(({ priority: a }, { priority: b }) => a - b)
                .map((category) => {
                    const {
                        name = "",
                        showOptions: { iconSmall: icon = null } = {},
                    } = category;

                    return {
                        name,
                        icon,
                    };
                });

            const destinations = [
                ...new Set(
                    excursionDestinations
                        .sort(
                            ({ city: { priority: p1 = 0 }}, { city: { priority: p2 = 0 }}) =>
                                p2 - p1
                        )
                        .map(({ city }) => city.name)
                )
            ];

            if (images && images.length && images[0].thumbs) {
                const appropriatePhoto = images[0].thumbs.find((ph) =>
                    ph.format.endsWith("desktop_card")
                );

                if (appropriatePhoto && appropriatePhoto.url) {
                    coverPhoto = appropriatePhoto.url;
                }
            }

            return {
                coverPhoto,
                title,
                titleTranslit,
                excursionId: id,
                length,
                prices,
                destinations,
                mainCategory,
                departureCity,
                transport,
            };
        });
    }

    return [];
}
