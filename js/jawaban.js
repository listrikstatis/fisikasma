var firebaseConfig = {
    apiKey: "AIzaSyAZDp9rrxItslIYMXyU2_7Y-eCr1sM63Qo",
    authDomain: "listrikstatis-b91fe.firebaseapp.com",
    projectId: "listrikstatis-b91fe",
    storageBucket: "listrikstatis-b91fe.appspot.com",
    messagingSenderId: "261164154927",
    appId: "1:261164154927:web:a273f977e8f6ef428246da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let kmplanId = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
// let sekolahfix = '';

let cek11 = 0;
kuisfix = kuisnya.value;


function readlah() {
    kuisfix = kuisnya.value;
    console.log(kuisfix);
    var task = firebase.database().ref(kuisfix);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "IX A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IX B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IX C";
    } else if (kelasnya.value == "4") {
        kelasfix = "IX D";
    } else if (kelasnya.value == "5") {
        kelasfix = "IX E";
    } else if (kelasnya.value == "6") {
        kelasfix = "IX F";
    } 

    // if (sekolah.value == "1") {
    //     sekolahfix = "SMPN";
    // } else if (sekolah.value == "2") {
    //     sekolahfix = "SMP Negeri";
    // }


    let jwbfixx = [];

    let jwb1 = ["c", "d", "b", "c", "c", "c", "a", "a", "b", "d"];
    if (kuisfix == "kuis1/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb1.length; i++) {
            hhh += `<td class="table-info"> ${jwb1[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb1;
    }

    let jwb2 = ["b", "c", "d", "c", "d", "d", "b", "d", "b", "a"];
    if (kuisfix == "kuis2/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class="table-info"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;
    }

    let jwb3 = ["a", "b", "b", "d", "a", "d", "a", "d", "a", "b"];
    if (kuisfix == "kuis3/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb3.length; i++) {
            hhh += `<td class="table-info"> ${jwb3[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb3;
    }

    let jwb4 = ["a", "b", "d", "d", "a", "b", "a", "c", "c", "b"];
    if (kuisfix == "kuis4/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb4.length; i++) {
            hhh += `<td class="table-info"> ${jwb4[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb4;
    }

    let jwb5 = ["b", "d", "a", "c", "d", "c", "c", "b", "a", "c"];
    if (kuisfix == "kuis5/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb5.length; i++) {
            hhh += `<td class="table-info"> ${jwb5[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb5;
    }

    let evaluasi = ["c", "b", "a", "b", "b", "a", "d", "b", "a", "c", "d", "c", "a", "b", "a", "b", "c", "c", "d", "d"];
    if (kuisfix == "evaluasi/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < evaluasi.length; i++) {
            hhh += `<td class="table-info"> ${evaluasi[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = evaluasi;
    }

    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();

            if (kelasfix == taskvalue.kelas) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabsiswa[0]);


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabsiswa[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabsiswa[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabsiswa[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
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

// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})