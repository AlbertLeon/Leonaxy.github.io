window.addEventListener('DOMContentLoaded', function() {
    var linkButtons = document.querySelectorAll('.link-buttons a');
    var wrapper = document.getElementById('wrapper');
    var backgrounds = {
        default: 'background1.gif',
        instagram: 'instagram.gif',
        tiktok: 'tiktok.gif',
        etsy: 'etsy.gif',
    };

    var currentBackground = backgrounds.default;
    var activeLink = null;

    // Set default background on page load
    wrapper.style.backgroundImage = 'url("' + currentBackground + '")';

    // Change background on link hover
    linkButtons.forEach(function(linkButton) {
        linkButton.addEventListener('mouseenter', function() {
            var linkBackground = linkButton.dataset.background;
            wrapper.style.backgroundImage = 'url("' + backgrounds[linkBackground] + '")';
        });

        linkButton.addEventListener('mouseleave', function() {
            if (activeLink) {
                var activeLinkBackground = activeLink.dataset.background;
                wrapper.style.backgroundImage = 'url("' + backgrounds[activeLinkBackground] + '")';
            } else {
                wrapper.style.backgroundImage = 'url("' + currentBackground + '")';
            }
        });

        linkButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (linkButton.classList.contains('active')) {
                window.open(linkButton.href, '_blank');
            } else {
                linkButtons.forEach(function(button) {
                    button.classList.remove('active');
                    button.textContent = button.dataset.originalText;
                });
                linkButton.classList.add('active');
                activeLink = linkButton;
                linkButton.textContent = 'Open ' + linkButton.textContent;
            }
        });
    });
});
