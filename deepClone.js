const tools = {
    _toString: function(t) {
        return Object.prototype.toString.call(t)
    },
    isNull: function(t) {
        return tools._toString(t) === '[object Null]'
    },
    isArray: function(t) {
        return tools._toString(t) === '[object Array]'
    },
    isObject: function(t) {
        return tools._toString(t) === '[object Object]'
    }
}
module.exports = function _deepClone(t) {
    var o;
    if (   typeof t === 'string' 
        || typeof t === 'number' 
        || typeof t === 'boolean' 
        || typeof t === 'undefined'
    ) {
        o = t;
    } else if (typeof t === 'function' || typeof t === 'symbol') {
        o = 'unsupport'
    } else {
        if (tools.isNull(t)) o = null
        if (tools.isArray(t)) o = []
        if (tools.isObject(t)) o = {}
        for (var p in t) {
            o[p] = _deepClone(t[p])
        }
    }
    return o
}