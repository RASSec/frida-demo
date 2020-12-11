/*
frida -U  -l test.js -p pid
*/

setImmediate(function() {
    Java.perform(function() {
var  hookClass = Java.use("com.interfaceEncrypt.AESUtil");

        hookClass.Encrypt.overload('java.lang.String','java.lang.String').implementation = function(arg1,arg2) {
            console.log(arg1)
            console.log(arg2)
            var retval=this.Encrypt(arg1,arg2);
            console.log(retval)
            return retval;
        }


        hookClass.Decrypt.overload('java.lang.String','java.lang.String').implementation = function(arg1,arg2) {
            console.warn(arg1)
            console.warn(arg2)
            var retval=this.Decrypt(arg1,arg2);
            console.warn(retval)
            return retval;
        }


    });
});
