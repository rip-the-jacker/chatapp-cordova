jQuery(document).ready(function($) {
    $.ajax({
        url: 'http://203.76.189.98:8000/api/v1/message/?format=json&offset=0',
        type: 'GET',
        dataType: 'json',
        success: function(resp){
            $.each(resp.objects, function(index, val) {
                $('#chat_area').append('<div><span>'+val.user.username+'</span>:<span>'+val.message+'</span><div>');
            });
        }
    })
    
    $('#chat_enter').click(function(event) {
        var message = $('#input_area').val();
        $('#input_area').val('');
        $.ajax({
            url: 'http://203.76.189.98:8000/new_message',
            type: 'POST',
            dataType: 'json',
            data: {message: message},
                success: function(msg){
            }
        })
    })    
});
