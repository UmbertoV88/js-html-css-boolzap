$(document).ready(function() {
    var lunghezzaInput = $(".new-message-inputs").val();


    $(".right-write-message-icon").click(function(){
        invioMessaggio();
        setTimeout(rispostaComputer,1000);
    });

    $(".new-message-inputs").keypress(function(event){
        if(event.which == 13) {
            invioMessaggio();
            setTimeout(rispostaComputer,1000);
        };
    });

    $(".new-message-inputs").focus(function (){
        $(".fa-microphone").addClass("disactive")
        $(".fa-paper-plane").removeClass("disactive")
    });

    $(".new-message-inputs").blur(function (){
        $(".fa-microphone").removeClass("disactive")
        $(".fa-paper-plane").addClass("disactive")

    });

    $(".search").keyup(function(){
        carcaNomeChat();
    });


});



// ------------------------------------------
// -----------------FUNZIONI-----------------
// ------------------------------------------

function invioMessaggio() {
    var mexText = $(".new-message-inputs").val();
    if (mexText.length != 0) {
        var spazioCasella = $(".message.disactive.send").clone();
        spazioCasella.removeClass("disactive");
        spazioCasella.children(".testo-messaggio").text(mexText);
        $(".read-message").append(spazioCasella);
        $(".new-message-inputs").val('');
    };
};

function carcaNomeChat(){
    var cercaNome = $(".search").val();
    if(cercaNome.length !== 0) {
        $(".contact").each(function(){
            var nome = $(this).find('.name-contact').text();
            if (nome.toLowerCase().includes(cercaNome.toLowerCase())){
                $(this).show();
            }else{
                $(this).hide();
            };
        });
    }else{
        $(".contact").show();
    };
};
function rispostaComputer() {
    var messaggioComputer = $('.received.pippo').clone();
    messaggioComputer.children('.testo-messaggio').text('Ciao');
    messaggioComputer.removeClass("pippo");
    // messaggioComputer.addClass('active');
    $('.read-message').append(messaggioComputer);
}
