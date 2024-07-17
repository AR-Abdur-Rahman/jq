$(document).ready(function(){
    // show
    $("#btn_s").on("click", function(){
        $("h3").show();
    })
    // hide
    $("#btn_h").on("click", function(){
        $("h3").hide();
    });

    // timer fast
    $("#btn_show").on("click", function(){
        $("h5").show(500);
    });
    // timer fast
    $("#btn_hide").on("click", function(){
        $("h5").hide(500);
    });

    $("#btn_ow").on("click", function(){
        $("#hi").fadeIn("slow")
    });

    $("#btn_de").on("click", function(){
        $("#hi").fadeOut("slow")
    });
    // toggle
    $("#togg").on("click", function(){
        $('#tog').toggle();
    });
    // toggle fast
    $('#ogg').on("click", function(){
        $("#g").toggle("fast");
    });
    // toggle slow
    $("#og").on("click", function(){
        $("#o").fadeToggle("slow");
    });
    // slide down
    $("#slide").on("click", function(){
        $("#down_contant").slideDown();
    });
    // slide fats
    $("#sd").on("click", function(){
        $("#contant").slideDown("fast");
    });
    // slide slow
    $("#d").on("click", function(){
        $("#down").slideDown("slow");
    });
    // slide up
    $("#u_p").on("click", function(){
        $("#p").slideUp();
    });
    // fast slide up
    $("#d_e").on("click", function(){
        $("#p_p").slideUp("fast")
    });
    // slow slide up
    $("#s_u").on("click", function(){
        $("#s_p").slideUp("slow")
    });
    // Animation
    $("#a_n").on("click", function(){
        $("div").animate({left: '250px'})
    });
    // animation
    $("#a_t").on("click", function(){
        $("#ani").animate({
            left: '250px',
            opacity: '0.5',
            height: '120px',
            width: '120px'
        });
    });
    // animation stop
    $("#main_con").on("click", function(){
        $("#con").slideDown(5000);
    });
    $("#stop").on("click", function(){
        $("#con").stop();
    });
    // callback
    $("#call").on("click", function(){
        $("#p_two").hide(1000);
        alert("Hello I'm Abdur Rahman");
    });
    // Chaining
    $("#chai").on("click", function(){
        $("#best").css("color","red").slideUp("2000").slideDown("2000");
    });
    // get content
    $("#t_x").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#h_l").click(function(){
        alert("HTML: " + $("#test").html());
    });
    // Append
    $("#btn1").click(function(){
        $("Appended").append(" <b>Appended text</b>.");
    });
    
    $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
    });
    // removes
    $("#r_m").on("click", function(){
        $("#p_ph").remove();
    });
    // empty
    $("#e_y").on("click", function(){
        $("#p_pa").empty();
    });
    // removes the all elements
    $("#r_l").on("click",function(){
        $("p").remove(".test");
    });
    $("button").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    });
    $("button").click(function(){
        $("#div1").addClass("important blue");
    });
    $("button").click(function(){
        $("h2, p").removeClass("blue");
    });
    $("button").click(function(){
        $("h2, p").toggleClass("blue");
    });
    $("#b_u").on("click", function(){
        $("#p_aa").css("background-color", "red")
    });
    $("#f_t").on("click", function(){
        $("#f_o").css({"font-size": "50%"})
    });
    $("button").click(function(){
        $("#div1").load("demo_test.txt");
    });
    // toggle
    $("#t-t").on("click", function(){
        $("div").animate({
            height: 'toggle'
        });
    });
    // 
    $("#b_s").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
    // 
    $("#s_t").click(function(){
        var div = $("div");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
    // 
    $("#b_f").click(function(){
        $("div").animate({
          right: '250px',
          height: '+=150px',
          width: '+=150px'
        });
    });
    // double-click
    $("#b_d").on("doubleclick", function(){
        $("#p_ar").hide();
    });
    // mouseenter
    $("#b_m").mouseenter(function(){
        alert("You entered p1!");
    });
    // mouseleave
    $("#m_e").on("mouseleave", function(){
        alert("Hello")
    });
    // mousedown
    $("#b_e").on("mousedown", function(){
        alert("HMouse down over")
    });
    // mouseup
    $("#t_s").mouseup(function(){
        alert("Mouse up over");
    });
    // 
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
        $(this).css("background-color", "green");
    });
    // 
    $("#f_s").on("focus", function(){
        $("#ff").css({"font-size" : "50px"})
    })
    // 
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    // 
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    // 
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
    // after() Method
    $("#a_b").on("click", function(){
        $("p").after("<p>Hello world!</p>");
    });
    // befor method
    $("#b_b").on("click", function(){
        $("#b_bp").befor("<p>Hello world!</p>");
    });
    // appendTo() Method
    $("#a_pap").on("click", function(){
        $("<span>I'm ABdur Rahman</span>").appendTo("p");
    });
    // clone Method
    $("#c-m").on("click", function(){
        $("p").clone().appendTo("body");
    })
    $("#i_m").on("click", function(){
        $("img").attr("width", "500");
    });
    // change color
    $("#c_c").on("click", function(){
        $("p").css("color", "red");
    });
    // detach
    $("#p_d").on("click", function(){
        $("p").detach();
    }); 
});