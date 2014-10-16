jQuery(document).ready(function($) {
   $('#login').click(function() {
       $.ajax({
           url: 'http://203.76.189.98:8000/api/v1/user/login/',
           type: 'POST',
           contentType:"application/json",
           data: JSON.stringify({username: $('#username').val(), password: $('#password').val()}),
           success:function(){
               window.open('chat_view.html','_self')
           }
       })
   }) 
});