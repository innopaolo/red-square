// Slides text up on scroll
window.addEventListener('scroll', reveal);
function reveal() {
    let slide = document.querySelectorAll('.slideUP');
    let slideways = document.querySelectorAll('.slideways')

    /* Loop through each element and get dynamic values for window height */
    for(var i = 0; i < slide.length; i++) {
        let viewportHeight = window.innerHeight;
        let showTop = slide[i].getBoundingClientRect().top;
        let revealPoint = 150;

        /* User's scroll position activates a new class */
        /* New class 'active' holds the Y-axis movement property in CSS */
        if(showTop < viewportHeight - revealPoint) {
            slide[i].classList.add('active');
        } 
        /* Ensures that scroll feature stays on if user scrolls back up then down again */
        else{
            slide[i].classList.remove('active');
        }
    }

    /* Same procedure as above but for objects coming in from the side */
    for(var i = 0; i < slideways.length; i++) {
        let viewportH = window.innerHeight;
        let showT = slideways[i].getBoundingClientRect().top;
        let revealP = 150;

        if(showT < viewportH - revealP) {
            slideways[i].classList.add('active2');
        } 
        else{
            slideways[i].classList.remove('active2');
        }
    }
}