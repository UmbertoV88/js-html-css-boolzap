$(document).ready(function() {
    var lunghezzaInput = $(".new-message-inputs").val();


    $(".right-write-message-icon").click(function(){

        invioMessaggio();

    });

    $(".new-message-inputs").keypress(function(event){
        if(event.which == 13) {
            invioMessaggio();
        };
    });

    $(".new-message-inputs").focus(function (){
        $(".fa-microphone").addClass("disactive")
        $(".fa-paper-plane").removeClass("disactive")

    })
    $(".new-message-inputs").blur(function (){
        $(".fa-microphone").removeClass("disactive")
        $(".fa-paper-plane").addClass("disactive")

    })

    


});

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
