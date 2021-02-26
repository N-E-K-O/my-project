module.exports = function create() {
    var o = {}
    var _construcator = [].shift.call(arguments)
    o.__proto__ = _construcator.prototype
    _construcator.apply(o, arguments)
    return o
}