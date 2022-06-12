// beginning of toggle
const toggleBtn = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

toggleBtn.addEventListener("click", function(){
    links.classList.toggle("show-links");
});
// end of toggle

// tabs
const btns = document.querySelectorAll('.btn__tab');
const about = document.querySelector('.feature__tab');
const contents = document.querySelectorAll('.feature__content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id) {
        // remove active from other btns
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active")
        });
        // hide other articles
        contents.forEach(function(content){
            content.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add("active")
    }
});
// end of tabs

// FAQ

// end of FAQ