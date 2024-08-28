var cursor = document.querySelector('.pointer');

document.addEventListener('mousemove', function(mouse) {
    var x = mouse.clientX;
    var y = mouse.clientY;
    cursor.style.display = `flex`
    cursor.style.transform = `translate3d(calc(${mouse.clientX}px - 50%), calc(${mouse.clientY}px - 50%), 0)`
});