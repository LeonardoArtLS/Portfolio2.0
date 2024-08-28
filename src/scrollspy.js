(function () {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    
    // Mapear os offsets de cada seção
    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    // Selecionar os elementos li fora do loop
    var navLinks = document.querySelectorAll('nav ul li');

    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        // Iterar sobre as seções
        Object.keys(sections).forEach(function(sectionId) {
            if (sections[sectionId] <= scrollPosition) {
                // Remover a classe active de todos os elementos li
                navLinks.forEach(function(li) {
                    li.classList.remove('active');
                });
                // Adicionar a classe active ao elemento li correspondente
                var correspondingLink = document.querySelector('nav ul li a[href*=' + sectionId + ']');
                if (correspondingLink) {
                    correspondingLink.parentNode.classList.add('active');
                }
            }
        });
    };
})();