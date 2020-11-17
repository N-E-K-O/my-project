var _Promise = require("./Promise");

var p = new _Promise(function(resolve, reject) {
    setTimeout(function() { resolve("promise success") }, 5000)
});

p.then(
    function(rs) { console.log(rs); },  //promise success
    function(e) {}
);

var _deepClone = require('./deepClone')
var target = {
    str: "abc",
    num: 123,
    bool: true,
    undef: undefined,
    _null: null,
    _symbol: Symbol('_symbol'),
    func: function f() {},
    _array: ['edf', 456, true, undefined, null, Symbol('_array'), function f_array() {}, []],
    obj: {
        o_str: 'ghk',
        o_num: 789,
        o_bool: false,
        o_undef: undefined,
        o_null: null,
        o_symbol: Symbol('_obj'),
        o_func: function f_obj() {},
        son: {
            grand_son: {}
        }
    } 
}
var rs = _deepClone(target)
console.log('rs: ', rs)