const values = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
])

function romanToInt(s) {
    const roman = Array.from(String(s))
    let pular = false;

    return roman.reduce((acc, at, i) => {
        if (pular) {
            pular = false
            return acc
        }

        if(values.get(roman[i]) < values.get(roman[i+1])){
            pular = true
            return acc += values.get(roman[i+1]) - values.get(roman[i])
        }

        return acc += values.get(roman[i])
    }, 0)
};