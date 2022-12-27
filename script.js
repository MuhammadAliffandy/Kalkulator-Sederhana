var clicknum = document.getElementsByClassName("tombol");

for (let i = 0; i < clicknum.length; i++) {
    clicknum[i].addEventListener("click", tekan);
}

function tekan(event) {
    var hasil = event.target.innerHTML;
    const eSpan = document.createElement("span");
    const eSpan1 = document.createElement("span");
    if (hasil == "x"){
        var vSpan = document.createTextNode("x");
        var vSpan1 = document.createTextNode("*");
        eSpan.appendChild(vSpan);
        eSpan1.appendChild(vSpan1);

        var value = document.getElementById("first-num")
        var value1 = document.getElementById("select-num")
    
        value.appendChild(eSpan);
        value1.appendChild(eSpan1);
        eSpan.classList.add("value");
    
        var cek = document.getElementsByClassName("value");
        if (cek.length > 10) {
            hapus();
            var sAngka = document.getElementsByClassName('value');
            sAngka.style.fontSize = "30px";
        }
    }else if (hasil == ":"){
        var vSpan = document.createTextNode(":");
        var vSpan1 = document.createTextNode("/");
        eSpan.appendChild(vSpan);
        eSpan1.appendChild(vSpan1);

        var value = document.getElementById("first-num")
        var value1 = document.getElementById("select-num")
    
        value.appendChild(eSpan);
        value1.appendChild(eSpan1);
        eSpan.classList.add("value");
    
        var cek = document.getElementsByClassName("value");
        if (cek.length > 10) {
            hapus();

            
        }
    }else{
        
        var vSpan = document.createTextNode(hasil);
        var vSpan1 = document.createTextNode(hasil);
        eSpan.appendChild(vSpan);
        eSpan1.appendChild(vSpan1);

        var value = document.getElementById("first-num")
        var value1 = document.getElementById("select-num")
    
        value.appendChild(eSpan);
        value1.appendChild(eSpan1);
        eSpan.classList.add("value");
    
        var cek = document.getElementsByClassName("value");
        if (cek.length > 10) {
            hapus();
        }
    }
 

};

// ini adalah fitur delete
 
function hapus() {
    var listnum = document.getElementById("first-num");
    listnum.removeChild(listnum.lastElementChild);

    var listnum1 = document.getElementById("select-num");
    listnum1.removeChild(listnum1.lastElementChild);


}

function removeall() {
    var listnum = document.getElementById("first-num");
    var child = listnum.firstElementChild

    while (child) {
        listnum.removeChild(child);
        child = listnum.firstElementChild;
    }
}

function removeall1() {
    var listnum = document.getElementById("select-num");
    var child = listnum.firstElementChild

    while (child) {
        listnum.removeChild(child);
        child = listnum.firstElementChild;
    }
}


var clicknum = document.getElementsByClassName("operator");
clicknum[1].addEventListener("click", operator);

function operator(event) {

    // var numOut = document.getElementById("first-num").innerText;
    var numIn = document.getElementById("select-num").innerText;
    
    var operasi = event.target.innerHTML;   
    
    if (operasi == "=") {

        removeall();
        removeall1();
        
        console.log("ini adalah gagal : " + numIn);
    
        var nilai = eval(numIn);

        console.log(nilai);

        const s = document.createElement("span");
        var n = document.createTextNode(nilai);
        s.appendChild(n);
        var wadah = document.getElementById("first-num");
        wadah.appendChild(s);

        const s1 = document.createElement("span");
        var n2 = document.createTextNode(nilai);
        s1.appendChild(n2);
        var wadah1 = document.getElementById("select-num");
        wadah1.appendChild(s1);


        }
    }



