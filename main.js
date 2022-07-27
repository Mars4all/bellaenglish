$(document).ready(function() {
	// when document loaded:

	$(".zahlen").on("mouseup",function() {

        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);

        let welche_Zahl = $(this).html();
        $(".zahlen").css("background-color" ,"rgb("+r+","+g+","+b+")");
        
        let r2 = Math.floor(Math.random()*255);
        let g2 = Math.floor(Math.random()*255);
        let b2 = Math.floor(Math.random()*255);

        $("body").css("background-color" ,"rgb("+r2+","+g2+","+b2+")");
        bildaendern();

        sprechen(welche_Zahl);
        
        setTimeout(sprechen2("in English"+ welche_Zahl), 1000);

	});

	function sprechen(text) {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = "de";
        msg.volume = 1; // 0 to 1
        msg.rate = 1.0; // 0.1 to 10
        msg.pitch = 0.75; //0 to 2
        speechSynthesis.speak(msg);
    }


    function sprechen2(text) {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = "en";
        msg.volume = 1; // 0 to 1
        msg.rate = 0.85; // 0.1 to 10
        msg.pitch = 0.75; //0 to 2
        speechSynthesis.speak(msg);
    }


    function bildaendern(){

        let zufallsbild = Math.floor(Math.random()*11);

       
        $("#img1").attr("src", "bild"+ zufallsbild+".jpg");
    }
});