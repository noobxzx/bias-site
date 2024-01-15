function scrollToContainer(containerId) {
    var container = document.getElementById(containerId);

    if (container) {
        var offsetTop = container.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
