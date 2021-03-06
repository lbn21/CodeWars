function solutionA(input, markers) {
    // split string by new line
    const parts = input.split('\n');
    //store clean string
    const clean = '';
    const regexParts = markers.map((marker) => `\\${marker}`);
    const regEx = new RegExp(`(${regexParts.join('|')}).*`, 'g');
    const cleanArr = parts.map((part) => {
        return part.replace(regEx, '').trim();
    });
    return cleanArr.join('\n');
}

console.log(
    solutionA('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']),
    'apples, plums\npears\noranges',
);
console.log(solutionA('Q @b\nu\ne -e f g', ['@', '-']), 'Q\nu\ne');
console.log(solutionA('a #b\nc\nd $e f g', ['#', '$']), 'a\nc\nd');
