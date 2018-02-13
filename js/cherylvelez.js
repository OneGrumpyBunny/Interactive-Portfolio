function toggleSections(thisSection, thisArr) {
  
  for (var i = 0; i < thisArr.length; i++) {
    
    if ($(thisArr[i]).is(":visible")) {
      $(thisArr[i]).removeClass("showme");
    }
  $(thisSection).addClass("showme");
 }
}

$(document).ready(function() {
  $(".navlink div").click(function() {
    var arrNav = ["home","profile","portfolio","playground"];
    toggleSections($(this).attr("id"), arrNav);
  });
  
  $(".profileIcons i").click(function(){
     
    var arrProfile = ["profile1","profile2","profile3","profile4"]; 
    var clicked = $(this).attr("id");
    var thisProfile = "profile" + clicked;
    //console.log(thisProfile);
     toggleSections(thisProfile, arrProfile);    
  });
});