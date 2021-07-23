var firebaseConfig = {
    apiKey: "AIzaSyAhKXoyKcsbwP2vXcyDEmLvCIJ9I_6YIns",
    authDomain: "listrik-da7f7.firebaseapp.com",
    databaseURL: "https://listrik-da7f7-default-rtdb.firebaseio.com",
    projectId: "listrik-da7f7",
    storageBucket: "listrik-da7f7.appspot.com",
    messagingSenderId: "569158504829",
    appId: "1:569158504829:web:75d834f0bf739b7fb63c14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.load = function () {

}

let idnya = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
// datahasil = kuisnya.value;


function mencari() {
    datahasil = kuisnya.value;
    // console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "XII A";
    } else if (kelasnya.value == "2") {
        kelasfix = "XII B";
    } else if (kelasnya.value == "3") {
        kelasfix = "XII C";
    } else if (kelasnya.value == "4") {
        kelasfix = "XII D";
    } else if (kelasnya.value == "5") {
        kelasfix = "XII E";
    } else if (kelasnya.value == "6") {
        kelasfix = "XII F";
    } 

    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();
           
            if (kelasfix == taskvalue.kelas) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                            <td class="hps" onclick ="hapus(${taskvalue.id})"><button type="button" class="btn btn-outline-danger">Hapus</button></td>
                        </tr>`;
                idnya.push(taskvalue.id);
            }

            if (cek11 == 0) {
                let ssps = document.querySelector('.center');
                ssps.innerHTML += '';
                ssps.innerHTML += `<button type="button" class="btn btn-danger deleted"><i class="fas fa-user-minus"></i>&nbsp;&nbsp;Hapus Semua Data</button>`;
                cek11 += 1;

                let klikkkk = document.querySelector('.deleted');
                klikkkk.addEventListener('click', function () {
                    hapussemua(idnya);
                })
            }

        });
    } else {
        alert('Tentukan filter pencarian');
    }
}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}



function hapus(id) {
    var yakin = confirm("Apakah kamu yakin menghapus data ?");
    if (yakin) {
        deletetask(id);
    } else {

    }
}

function deletetask(id) {
    var task = firebase.database().ref(datahasil + id);
    task.remove();
    tmp.innerHTML = "";
    mencari();
}


function hapussemua(id) {
    var yakin = confirm("Apakah kamu yakin menghapus semua data ?");
    if (yakin) {
        deletesemua(id);
    } else {

    }
}

function deletesemua(id) {
    for (let i = 0; i < id.length; i++) {
        var task = firebase.database().ref(datahasil + id);
        task.remove();
    }
    tmp.innerHTML = "";
    mencari();
}


// download data
function downloadfile(){
document.querySelector('.download');
// download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
}