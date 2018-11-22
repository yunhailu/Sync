/**
 * Created by yunhailu on 2016/12/22.
 */
(function($, _){
    var Api = {
        url: Util.ApiUri
    };

    $(function(){
        /**
         * JQuery Deferred
         * */
        function getList01(){
            var def = $.Deferred();
            $.ajax({
                url: Api.url + '/getList',
                dataType:'jsonp',
                data: '',
                jsonp: 'callback',
                success: function(resp){
                    def.resolve(resp);
                },
                error: function(err){
                    def.reject(err);
                }
            });
            return def.promise();
        }
        // getList01().then(data => {
        //     console.log('getList01: ', data);
        //     const users = data.respData.list;
        //     Util.template('.users', 'users', users);
        // }, err => {});


        /**
         * JQuery Ajax
         * */
        function getList02(){
            return $.ajax({
                url: Api.url + '/getList',
                dataType:'jsonp',
                data: '',
                jsonp: 'callback'
            });
        }
        // getList02().then(data => {
        //     Util.template('#users', 'users', data.respData.list);
        // });


        /**
         * JQuery Promise
         * */
        function getAvatar(){
            return $.ajax({
                url: Api.url + '/getAvatar',
                dataType:'jsonp',
                data: '',
                jsonp: 'callback'
            });
        }
        // let users = [];
        // getList02().then(data => {
        //     users = data.respData.list;
        //     return getAvatar();
        // }).then(resp => {
        //     const avatars = resp.respData.list;
        //     users = _.map(users, (user, index) => {
        //         user.avatar = avatars[index].avatar;
        //         return user;
        //     });
        //     Util.template('#users', 'users', users);
        // });


        /**
         * ES6 Promise
         * */
        function getList03(){
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: Api.url + '/getList',
                    dataType:'jsonp',
                    data: '',
                    jsonp: 'callback',
                    success(resp){ resolve(resp); },
                    error(err) { reject(err); }
                });
             });
        }
        function getAvatar02(){
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: Api.url + '/getAvatar',
                    dataType:'jsonp',
                    data: '',
                    jsonp: 'callback',
                    success(resp){ resolve(resp); },
                    error(err) { reject(err); }
                });
            });
        }
        // let users = new Array();
        // getList03().then(data => {
        //     users = data.respData.list;
        //     return getAvatar02();
        // }).then(function(resp){
        //     var avatars = resp.respData.list;
        //     users = _.map(users, function(user, index){
        //         user.avatar = avatars[index].avatar;
        //         return user;
        //     });
        //     Util.template('#users', 'users', users);
        // });

    });
})($, _);