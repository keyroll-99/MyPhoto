$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
        if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
            // Only send the token to relative URLs i.e. locally.
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});
function unlike(id,pk) {
    id_q = '#'+id;
//    alert(pk);
    // alert(id_q);
    $(id_q).removeClass('like').addClass('unlike');
    $(id_q).removeAttr('onclick');
    $(id_q).attr('onclick','like('+id+')');

    val = $('#like' + id).html();
    val = parseInt(val)
    val--;
    $('#like' + id).text(val);

    $.ajax
    ({
        url:'.',
        data: {
            'id': pk,
            'f' : 'unlike'
        },
        dataType: 'json',
        type: 'POST',

        success: function(data){
            console.log(data)
        }

    });

}
function like(id,pk) {
    id_q = '#'+id;
//     alert(pk);
    // alert(id_q);
    $(id_q).removeClass('unlike').addClass('like');
    $(id_q).removeAttr('onclick');
    $(id_q).attr('onclick', 'unlike(' + id + ')');

    val =  $('#like'+id).html();
    val = parseInt(val)
    val++;
    $('#like' + id).text(val);

    $.ajax
        ({
            url: '.',
            data: {
                'id': pk,
                'f': 'like'
            },
            dataType: 'json',
            type: 'POST',

            success: function (data) {
                console.log(data)
            }

        });
}
