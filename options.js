//find buttonDiv element
let page = document.getElementById('buttonDiv');
//provide some color for select
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
//construct options
constructOptions(kButtonColors);

/**
 * create option button element with different color , let user can select which color user like.
 * @param kButtonColors
 */
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log('color is ' + item);
            })
        });
        page.appendChild(button);
    }
}