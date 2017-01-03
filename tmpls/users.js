<% for(var i = 0, len = data.length; i < len; i++){ %>
    <li id="<%= data[i].id %>">
        <img src="<%= data[i].avatar %>" />
        <span><%= data[i].title %></span>
    </li>
<% } %>