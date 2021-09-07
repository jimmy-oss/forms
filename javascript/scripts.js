$(document).ready(function(){
    $("button#hello").click(function(){
         $(".he").prepend("<li>Hello!</li>");
         $(".webpage").append("<li>Why hello there!</li>");
         
         
    });
          
        $("button#goodbye").click(function(){
        $(".bye").prepend("<li>Goodbye!</li>");
        $(".see").append("<li>Goodbye, dear user!</li>");  
        
    });

    $("button#stop").click(function(){
        $(".top").prepend("<li>stop copying me!</li>");
        $(".tops").append("<li>pardon me.I meant no offence.</li>");
         
        
    });

});