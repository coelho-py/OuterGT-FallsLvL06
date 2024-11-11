const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('touchstart', (event) => {
    event.preventDefault();
    const body = accordion.querySelector('.accordion-body');
    body.classList.toggle('active');
  });
});

//hover de mouse dentro da safona
function opentab(evt, cont) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cont).style.display = "block";

    evt.currentTarget.className += " active";
}


//hud overlay mobile
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }