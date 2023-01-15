// $(document).ready(function(){
//   $("h1").css("color", "red");
// });

//style
// $("h1").css("color", "red");
console.log($("h1").css("color"));
console.log($("h1").css("font"));
console.log($("h1").css("font-size"));

setTimeout(function(){
  console.log("timeout");
  $("h1").text("Hello");
  // adding css class to tags
  $("h1").addClass("big-title margin-50");
  $("button").html("<em>Don't Click</em>");
  console.log($("h1").attr("class"));
  $("h1").prepend("<button>New</button>");
  $("h1").append("<button>New</button>");
}, 3000);

console.log($("h1").attr("class"));
$("a").attr("href", "yahoo.com");

//eventListener
$("button").click(function(){
  // animation
  $("h1").slideUp().slideDown().fadeOut().fadeIn().animate({opacity: 0.5});
  // can use multiple animation in order at same time
  // $("h1").slideToggle();
  //show() hide() toggle fadeOut() fadeIn() fadeToggle() slideUp() slideDown() slideToggle()
  // $("h1").animate({opacity: "50%"});
  // for above : for % pass as string and for numeric pass as it is and cannot pass any string like color: red
});
// $("button").click(function(){
//   $("h1").css("color", "purple");
// });


$("input").keypress(function(event){
  console.log(event.key);
  $("h1").text(event.key);
});

$(document).keypress(function(event){
  console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").addClass("onhov");
  console.log($("h1").css("color"));
  setTimeout(function(){
    $("h1").removeClass("onhov");
  }, 500);
});

// adding html code in context to some tag
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");

// $("h1").addClass("margin-50");
