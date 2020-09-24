let $checkbox = [...document.querySelectorAll('.checkbox')];
let $resetBtn = document.getElementById('reset');
let checkboxNumber = $checkbox.length;
let checkedElement = 0;
let percentage = 0;

function updateProgressBar() {
    const $progressBar = document.getElementById('progress-bar');
    percentage = Math.round(Math.floor((checkedElement / checkboxNumber) * 100));
    $progressBar.setAttribute('value', percentage.toString());
}

function showMessage() {
    let $message = document.getElementById('message');
    if (percentage !== 100) {
        $message.innerText = '';
        return;
    }
    $message.innerText = 'Félicitations !';
}
function checked()
{
    if(this.checked) {
        checkedElement++;
    } else {
        checkedElement--;
    }
    updateProgressBar();
    showMessage();
}
$checkbox.map(chk => {
    chk.addEventListener('change', checked)
});

function reset() {
    $checkbox.map(chk => {
        chk.checked = false;
        checkedElement = 0;
        updateProgressBar();
    });
}
$resetBtn.addEventListener('mousedown', reset)
