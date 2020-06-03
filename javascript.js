
    
    $(".arrow").hide();
    disableScroll();
    /*Logo*/
    setTimeout(function(){
        $(".text").removeClass("hidden");
    }, 70)
    $(function() {
        var text = $(".text");
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
      
          if (scroll >= 5) {
            text.addClass("hidden");
          } else {
            text.removeClass("hidden");
          }
        });
      });
    


    /*Intro*/
    setTimeout(function() {
    var content = "hey, welcome to my portfolio... I'll show you something right now.";
    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
    $(ele).hide().appendTo('.anim-title').each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 30);
    })
    }, 1000);



    /*Arrow*/
    setTimeout(()=>{
        enableScroll();
        requestAnimationFrame(()=>
        {
            $(".arrow-line").show();
        })
    }, 8700);
    setTimeout(()=>{
        requestAnimationFrame(()=>
        {
            $(".arrow-end").show();
        })
    }, 10500);


    function disableScroll() { 
        // Get the current page scroll position 
        scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
        
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
    } 
      
    function enableScroll() { 
        window.onscroll = function() {}; 
    } 
