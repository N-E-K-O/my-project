module.exports = function _call(_this) {
    _this.fn = this
    var args = []
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    var res = _this.fn(args.join(','))
    delete _this.fn
    return res
}
Function.prototype._call = _call