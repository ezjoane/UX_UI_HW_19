console.log("index.js file is loaded correctly!")


  $(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });

  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }
}
  }