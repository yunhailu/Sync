/**
 * Created by yunhailu on 2016/12/22.
 */


(function($, _){
    /**
     * Simple Generator
     * */
    function * foo(x){
        const y = yield x + 1;
        const z = yield y + 2;
        return x + y + z;
    }
    // const f = foo(0);
    // debugger;
    // console.log(f.next(1));
    // console.log(f.next(2));
    // console.log(f.next(3));
    // console.log(f.next(4));


    // function * Square(){
    //     for(var i=1;;i++){
    //         yield i*i;
    //     }
    // }
    // var square = Square();
    // console.log(square.next());
    // console.log(square.next());
    // console.log(square.next());


    /**
     * Sync Generator
     * */
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

    function * Gen(){
        // {value: xxx, done: false}
        const users = yield myAjax('getList');
        const ids = _.map(users, user => user.id).join(',');
        const avatars = yield myAjax('getAvatar', {ids});
        console.log(avatars);
        return _.map(users, (user, index) => {
            user.avatar = _.find(avatars, avatar => (user.id == avatar.id)).avatar;
            return user;
        });
    }
    // const gen = Gen();
    // const promise = gen.next().value;
    // promise.then(resp => {
    //     return gen.next(resp.respData.list).value;
    // }).then(resp => {
    //     return gen.next(resp.respData.list).value;
    // }).then(users => {
    //     Util.template('#users', 'users', users);
    // });



    /**
     *  封装 Generator 调用
     * */
    function co(generator){
        return new Promise((resolve, reject) => {
            const gen = generator();
            function extv(al){
                // { value: 'xxxx', done: false }
                const g = gen.next(val);;
                if(g.done){
                    return resolve(g.value);
                }
                return g.value.then(resp => {
                    console.log(resp);
                    return ext(resp.respData.list);
                });
            }
            ext();
        });
    }
    // co(Gen).then(users => {
    //     console.log(users);
    //     Util.template('.users', 'users', users);
    // });


})($, _);