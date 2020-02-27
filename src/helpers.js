export function escapeHtml (unsafe) {
    const unsafeCharacters = [
        { char: '\r\n', unicode: '&lt;br&gt;' },
        { char: '\n', unicode: '&lt;br&gt;' }
    ];

    return unsafeCharacters.reduce((acc, { char, unicode }) => {
        return acc.replace(new RegExp(char, 'g'), unicode);
    }, unsafe);
}
