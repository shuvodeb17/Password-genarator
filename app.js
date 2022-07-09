var pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

var inputText = document.getElementById('input-text');
var genarateBtn = document.getElementById('genarate-btn');
genarateBtn.addEventListener('click', function () {
    var genaratePass = '';
    for (var i = 0; i < 10; i++) {
        var gp = Math.floor(Math.random() * pass.length);
        genaratePass += pass.substring(gp, gp + 1);

    }
    document.getElementById('input-text').value = genaratePass;
});

var copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', function () {

    if (inputText.value == '') {
        alert('Please genarate password');
    } else {
        navigator.clipboard.writeText(inputText.value);
        copyBtn.innerHTML = 'Copied!!'
    }

});
