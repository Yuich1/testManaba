let c;
window.onload = function () {
    c = window.open('https://ctat.ritsumei.ac.jp/attend/ctat?lang=ja', '_blank');
    /*c.onload = function () {
        c.document.getElementsByClassName("form-input-text")[0].value = 'SSS';
        console.log("onload")  
    }*/
    c.document.getElementsByClassName("form-input-text")[0].value = 'SSS';
    console.log("onload")
    console.log("!")
}