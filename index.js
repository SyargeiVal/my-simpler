document.querySelectorAll('span').forEach(el => {
    el.addEventListener('click', move);
});

const selectedWords = [];
function move(e) {
    const fieldHeight = e.target.parentNode.parentNode.offsetHeight;
    const wordHeight = e.target.offsetHeight;
    const marginLeft = 10;
    const leftPadding = e.target.parentNode.firstElementChild.offsetLeft;
    const offsetLeftElem = e.target.offsetLeft - leftPadding;
    const positionX = selectedWords.reduce((ac, el) => ac - el.offsetWidth - marginLeft, 0);
    const moveX = positionX < offsetLeftElem ? '-' + offsetLeftElem - positionX : positionX - offsetLeftElem;
    const moveY = fieldHeight - wordHeight;

    if (e.target.classList.contains('move')) {
        e.target.style.transform = 'translateY(0)';
        e.target.classList.remove('move');
        selectedWords.pop();
    } else {
        e.target.style.transform = 'translate('+ moveX +'px, -'+ moveY +'px)';
        e.target.classList.add('move');
        selectedWords.push(e.target);
    }
}