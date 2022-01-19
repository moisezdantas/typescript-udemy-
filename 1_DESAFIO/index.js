function plus(_a) {
    var params1 = _a.params1, params2 = _a.params2;
    return params1 + params2;
}
var value = plus({ params1: 13, params2: 20 });
console.log("Soma de valores ".concat(value));
