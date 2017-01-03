module.exports = {
    respCode: 0,
    respData: '<% for(var i = 0, len = data.length; i < len; i++){ %>'
                + '<li id="<%= data[i].id %>">'
                + '<% if(data[i].avatar){ %>'
                + '<img src="<%= data[i].avatar %>" />'
                + '<% } %>'
                + '<span><%= data[i].title %></span>'
                + '</li>'
                + '<% } %>'
};