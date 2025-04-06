
function toggleSubServices(element) {
    const subServices = element.querySelector('.sub-services');
    subServices.classList.toggle('open');
}

function toggleSubSubServices(event, element) {
    const subSubServices = element.querySelector('.sub-sub-services');
    subSubServices.classList.toggle('active');
}