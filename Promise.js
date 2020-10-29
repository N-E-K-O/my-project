module.exports = function _Promise(f) {
    var __flag = {};
    var __state = "pending";
    Object.defineProperty(__flag, "state", {
        get: function() { return __state },
        set: function(v) {
            __state = v;
            if (v === "success") _success.apply(this, _args);
            else _error();
        }
    });
    var _args = undefined;
    var _resolve = function() {
        _args = Array.prototype.slice.call(arguments, 0);
        __flag.state = "success" 
    };
    var _reject = function() { __flag.state = "error" };
    var _success = function() {};
    var _error = function() {};
    f.call(this, _resolve, _reject);
    return {
        then: function(success, error) {
            _success = success;
            _error = error;
        }
    }
}
