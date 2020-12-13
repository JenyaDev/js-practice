'use strict';

// First
const countTypes = arr => {
    let obj = { boolean: 0, string: 0, number: 0 };
    for (const el of arr) {
        obj[typeof el]++;
    }
    return obj;
}
console.log(countTypes(['hey', 'bye', true, false, 5, 500, -500]));

// Second
const countTypesDynamic = arr => {
    let obj = {};
    for (const el of arr) {
        if (obj[typeof el]) {
            obj[typeof el]++;
        } else {
            obj[typeof el] = 1;
        }
    }
    return obj;
}
console.log(countTypesDynamic(['hey', 'bye', true, false, 5, 500, -500]));