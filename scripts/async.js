/**
 * Created by yunhailu on 2016/12/22.
 */

(function($, _){
    function myAjax(name, data){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: Util.ApiUri + '/' + name,
                dataType:'jsonp',
                data: data,
                jsonp: 'callback',
                success(resp){ resolve(resp); },
                error(err) { reject(err); }
            });
        });
    }
    //var fn = function(){}; fn();
    //const fn = (fucntion())();
    const promise = (async () => {
        const usersResp = await myAjax('getList');
        let users = usersResp.respData.list;

        const ids = _.map(users, user => user.id).join(',');
        const avatarsResp = await myAjax('getAvatar', { ids });
        let avatars = avatarsResp.respData.list;

        return _.map(users, user => {
            user.avatar = _.find(avatars, avatar => (user.id == avatar.id)).avatar;
            return user;
        });
    })();

    promise.then(users => {
        Util.template('.users', 'users', users);
    });

})($, _);