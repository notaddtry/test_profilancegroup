You can test this SPA at => https://notaddtry.github.io/test_profilancegroup/

In this case I reilized auth+role actions,such as admin/user/notlogged

Admin can agree news and delete news. User can only add news(admin cant do it). And not logged only can view an AGREED(!) news.

You can test this:

Admin {
login : admin,
password : 123123
},

User {
login : user,
password: 123
}

//Check newsSlice.js
