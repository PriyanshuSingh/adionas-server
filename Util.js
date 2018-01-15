/**
 * Created by WebStorm.
 * User: priyanshu.s
 * Date: 15/01/18
 * Time: 10:28 AM
 */


class Util {
    static isFunction(val) {
       return val && typeof (val) === 'function';
    }
}

module.exports = Util;