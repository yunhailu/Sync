/**
 * Created by yunhailu on 2016/12/22.
 */

var Util = (function($, _){
    var ApiUri = 'http://127.0.0.1:3000';

    function insertTmpl(name){
        return $.ajax({
            url: ApiUri + '/get_' + name + '_tpl',
            dataType:'jsonp',
            data: '',
            jsonp: 'callback'
        });
    }

    function template(selector, tmpl, data){
        return insertTmpl(tmpl).then(function(resp){
            var t = resp.respData;
            var complied =_.template(t);
            return $(selector).html(complied({data:data}));
        });
    }

    return {
        ApiUri: ApiUri,
        template: template
    };
})($, _);