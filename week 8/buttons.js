var imgArray = ["http://i.imgur.com/W7Tpxcl.jpg","http://i.imgur.com/tAUkQBu.jpg", "https://pbs.twimg.com/profile_images/269279233/llama270977_smiling_llama_400x400.jpg"]; 

$('#btn-1').click(function(){
    $('.container').css({
    "background-image" : "url('" + imgArray[0] + "')",
    "background-size" : "cover",
      "background-position" : "center"
});
  });

$('#btn-2').click(function(){
    $('.container').css({
    "background-image" : "url('" + imgArray[1] + "')",
    "background-size" : "cover",
      "background-position" : "center"
});
  });

$('#btn-3').click(function(){
    $('.container').css({
    "background-image" : "url('" + imgArray[2] + "')",
    "background-size" : "cover",
      "background-position" : "center"
});
  });


//$('#btn-1').click(function(){
//    $('.container').addClass('cat');
//  });

// $('#btn-2').click(function(){
//    $('.container').addClass('dog');
//  });

// $('#btn-3').click(function(){
//    $('.container').addClass('llama');
//  });