export function escapeHtml (unsafe) {
    const unsafeCharacters = [
        { char: '&', unicode: '&amp;' },
        { char: '<', unicode: '&lt;' },
        { char: '>', unicode: '&gt;' },
        { char: '"', unicode: '&quot;' },
        { char: "'", unicode: '&#039;' },
        { char: '«', unicode: '&#171;' },
        { char: '»', unicode: '&#187;' },
        { char: '\n', unicode: '&#133;' },
        { char: '\r', unicode: '&#133;' }
    ];

    return unsafeCharacters.reduce((acc, { char, unicode }) => {
        return acc.replace(new RegExp(char, 'g'), unicode);
    }, unsafe);
}
