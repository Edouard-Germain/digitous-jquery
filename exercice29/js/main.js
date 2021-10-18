$("button").click(function(){

    if($("input").length>5){
        $("input").addClass("is-valid")
    } else if($("input").length<5){
        $("input").addClass("is")
    }
    // $("input:text").val("Glenn Quagmire");
  });