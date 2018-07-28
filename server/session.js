/**
 * Created by jaburur on 21-07-2017.
 */
// Model & session
var theApp = require('./app.js');
var sessionModel = function(data){
    var _data = data;
    console.log('session has been created');
    var $sessionTimer = null;
    var _setSessionTimeout = function (){
        console.log('session has been reset');
        clearTimeout($sessionTimer);
        $sessionTimer = setTimeout(function(){
            _data = null;
            console.log('session has been cleared');
        },theApp.sessionExpiresTime);
    };
    _setSessionTimeout();
    return {
        getUserName:function(){
            return _data ? (_data.username ? _data.username : undefined) : undefined;
        },
        getEmail:function(){
            return _data ? (_data.email ? _data.email : undefined): undefined;
        },
        isAdmin: function(){
            return _data ? (_data.role ? _data.role === 'admin' : undefined) : undefined;
        },
        getRawData:function(){
            return _data;
        },
        update:function(data){
            console.log('session has been updated');
            _data = data;
        },
        resetSession:function(){
            _setSessionTimeout();
        }
    }
};

module.exports = sessionModel;