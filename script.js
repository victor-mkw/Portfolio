const deroulantHeaders = document.getElementsByClassName("header-deroulant");
var i;

for (i = 0; i < deroulantHeaders.length; i++) {
  deroulantHeaders[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var deroulantContenu = this.nextElementSibling;
    if (deroulantContenu.style.maxHeight)deroulantContenu.style.maxHeight = null;
    else deroulantContenu.style.maxHeight = deroulantContenu.scrollHeight + "px";
  });
}

const observerM = new IntersectionObserver((entrees) => {
  entrees.forEach((entree) => {
    console.log(entree)
    if(entree.isIntersecting) entree.target.classList.add('show');
  });
});

const observerL = new IntersectionObserver((entrees) => {
  entrees.forEach((entree) => {
    console.log(entree)
    if(entree.isIntersecting) entree.target.classList.add('show_l');
  });
});

const moteursElements = document.querySelectorAll('.hide');
moteursElements.forEach((me) => observerM.observe(me));

const langageElement = document.querySelectorAll('.hide_l');
langageElement.forEach((le) => observerL.observe(le));