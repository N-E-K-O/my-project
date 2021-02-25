module.exports = function _instanceof(t, c) {
    while(t) {
        if (t.__proto__ === c.prototype) return true
        t = t.__proto__
    }
    return false
}