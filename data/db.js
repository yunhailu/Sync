var fs = require('fs');
var dbjson = function(){
    return{
        'getList':require('./api/getList.js'),
        'getAvatar':require('./api/getAvatar.js'),
        'getName':require('./api/getName.js'),
        'get_users_tpl': require('./api/userTpl.js'),
    }
};
// fs.writeFile('./db.json', JSON.stringify(dbjson(),null,4))
module.exports = dbjson;
