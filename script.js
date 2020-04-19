$(document).ready(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    heures = urlParams.getAll('heures')
    minutes = urlParams.getAll('minutes')
    secondes = urlParams.getAll('secondes')

    if(urlParams != "")
    {
        $("body").empty();
        timer(heures,minutes,secondes)
    }

    $("#valider").on('click',function(){
        valeurHeure = parseInt($('#heure option:selected').val())
        valeurMinute = parseInt($('#minute option:selected').val())
        valeurSeconde = parseInt($('#seconde option:selected').val())
        countDownDate = new Date();
        url = window.location.protocol + "//" + window.location.host + window.location.pathname
        +"?heures="+valeurHeure+"&minutes="+valeurMinute +"&secondes="+valeurSeconde

        if($('#urlGenerated').length == 0)
        {
            $('#createTimer').after("<textarea id='urlGenerated' readonly='readonly'>")
            $('#createTimer').after("<p>Reglage conseillé : Largeur:300 , Hauteur:50</p>")
            $('#urlGenerated').text()
            $('#urlGenerated').css("resize","none").css("width","500px")
            $('#urlGenerated').text(url)
        }
        else
        {
            $('#urlGenerated').empty()
            $('#urlGenerated').text(url)
        }
    })
})

function timer(heure = 0,minute = 0,seconde = 0)
{
    valeurHeure = parseInt(heure)
    valeurMinute = parseInt(minute)
    valeurSeconde = parseInt(seconde)
    countDownDate = new Date();
    countDownDate.setHours(countDownDate.getHours() + valeurHeure);
    countDownDate.setMinutes(countDownDate.getMinutes() + valeurMinute);
    countDownDate.setSeconds(countDownDate.getSeconds() + valeurSeconde);
    Interval = setInterval(function(){
        var now = new Date();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        total = (days + hours + minutes + seconds);

        $("body").empty();
        $("body").html(days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ").css("font-size","50px").css("background-color","rgba(0, 0, 0, 0)");
        if(total <= 0)
        {
            clearInterval(Interval)
            $("body").empty();
        }
    }, 1000);
}