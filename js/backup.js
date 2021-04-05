// menghubungkan ke database firebase

let selanjutnya = document.querySelector('.lanjut');
let datadiri = document.querySelector('.data_diri');
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let sekolahfix = '';
let kelasfix = '';

selanjutnya.addEventListener('click', function () {

    let cek = 0;
    if (namanya.value == "") {
        if (namanya.className.indexOf('tt_salah') == -1) {
            namanya.className += ' tt_salah';
        }
    } else {
        namanya.className = namanya.className.replace('tt_salah', '');
        cek += 1;

    }

    if (kelasnya.value == "0") {
        if (kelasnya.className.indexOf('tt_salah') == -1) {
            kelasnya.className += ' tt_salah';
        }
    } else {
        kelasnya.className = kelasnya.className.replace('tt_salah', '');
        if (kelasnya.value == "1") {
            kelasfix = "7A";
        } else if (kelasnya.value == "2") {
            kelasfix = "7B";
        } else if (kelasnya.value == "3") {
            kelasfix = "7C";
        } else if (kelasnya.value == "4") {
            kelasfix = "7D";
        } else if (kelasnya.value == "5") {
            kelasfix = "7E";
        } else if (kelasnya.value == "6") {
            kelasfix = "7F";
        } else if (kelasnya.value == "7") {
            kelasfix = "7G";
        } else if (kelasnya.value == "8") {
            kelasfix = "7H";
        } else if (kelasnya.value == "9") {
            kelasfix = "7I";
        }
        cek += 1;
    }

    if (sekolah.value == "0") {
        if (sekolah.className.indexOf('tt_salah') == -1) {
            sekolah.className += ' tt_salah';
        }
    } else {
        sekolah.className = sekolah.className.replace('tt_salah', '');

        if (sekolah.value == "1") {
            sekolahfix = "SMP Negeri 2 Banjarmasin";
        } else if (sekolah.value == "2") {
            sekolahfix = "SMP Negeri 9 Banjarmasin";
        }
        cek += 1;
    }

    // console.log(sekolahfix);

    if (cek != 3) {
        alert("lengkapi dulu data dari anda");
    } else if (cek == 3) {
        datadiri.className += ' hilang';
        document.getElementById('data').className += ' hilang';
        document.getElementById('kiri').className = document.getElementById('kiri').className.replace('hilang', '');
        document.getElementById('kanan').className = document.getElementById('kanan').className.replace('hilang', '');

    }


    MathJax.typeset();
});

// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {


    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let nih = data[nilai]["soal" + nilai]["ket"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3, nih];

            jwbs.push(bnr);

            // ---------------------------------
            // rangkai konten soal;
            let bg_pertanyaan = document.createElement('div');
            bg_pertanyaan.setAttribute('class', 'bg_pertanyaan');
            if (i != 0) {
                bg_pertanyaan.className += " hilang";
            }

            let no = document.createElement('div');
            no.setAttribute('class', 'no');

            let soal = document.createElement('p');
            let text_soal = document.createTextNode('Soal ke ');

            let span = document.createElement('span');
            let text_span = document.createTextNode(i + 1);

            span.appendChild(text_span);
            soal.appendChild(text_soal);
            soal.appendChild(span);
            no.appendChild(soal);
            bg_pertanyaan.appendChild(no);

            // ---------------------------------

            let inti_pertanyaan = document.createElement('div');
            inti_pertanyaan.setAttribute('class', 'inti_pertanyaan');

            let pertanyaannya = document.createElement('div');
            pertanyaannya.setAttribute('class', 'pertanyaannya');

            let new_p = document.createElement('p');
            let text_p = document.createTextNode(soaldata);

            new_p.appendChild(text_p);
            pertanyaannya.appendChild(new_p);
            inti_pertanyaan.appendChild(pertanyaannya);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let batas = document.createElement('div');
            batas.setAttribute('class', 'batas');

            inti_pertanyaan.appendChild(batas);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let soall = document.createElement('div');
            soall.setAttribute('class', 'soall');

            for (let ii = 0; ii < 4; ii++) {
                let bg_pilihan = document.createElement('label');
                bg_pilihan.setAttribute('class', 'bg_pilihan');

                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'radio' + i);
                if (ii == 0) {
                    input.setAttribute('value', 'a');
                } else if (ii == 1) {
                    input.setAttribute('value', 'b');
                } else if (ii == 2) {
                    input.setAttribute('value', 'c');
                } else {
                    input.setAttribute('value', 'd');
                }

                let textnya = document.createElement('span');
                textnya.setAttribute('class', 'textnya');

                let nav_pilihan = document.createElement('span');
                nav_pilihan.setAttribute('class', 'nav_pilihan');

                let new_p1 = document.createElement('p');
                let text_p1 = document.createTextNode(jwb[ii]);

                new_p1.appendChild(text_p1);
                textnya.appendChild(nav_pilihan);
                textnya.appendChild(new_p1);
                bg_pilihan.appendChild(input);
                bg_pilihan.appendChild(textnya);
                soall.appendChild(bg_pilihan);
            }

            // ---------------------------------

            inti_pertanyaan.appendChild(soall);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_sebelum = document.createElement('div');
            nav_sebelum.setAttribute('class', 'nav_sebelum');
            if (i == 0) {
                nav_sebelum.className += " disable";
            }

            let new_p2 = document.createElement('p');
            let text_p2 = document.createTextNode('Sebelumnya');

            new_p2.appendChild(text_p2);
            nav_sebelum.appendChild(new_p2);
            inti_pertanyaan.appendChild(nav_sebelum);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_ragu = document.createElement('div');
            nav_ragu.setAttribute('class', 'nav_ragu');

            let new_p3 = document.createElement('p');
            let text_p3 = document.createTextNode('Ragu-Ragu');

            new_p3.appendChild(text_p3);
            nav_ragu.appendChild(new_p3);
            inti_pertanyaan.appendChild(nav_ragu);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_selanjut = document.createElement('div');
            nav_selanjut.setAttribute('class', 'nav_selanjut');
            if (i == (cek.length - 1)) {
                nav_selanjut.className += " disable";
            }

            let new_p4 = document.createElement('p');
            let text_p4 = document.createTextNode('Selanjutnya');

            new_p4.appendChild(text_p4);
            nav_selanjut.appendChild(new_p4);
            inti_pertanyaan.appendChild(nav_selanjut);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let div_jawaban = document.createElement('div');
            div_jawaban.setAttribute('class', 'pertanyaannya hilang');


            let new_pp = document.createElement('p');
            let text_pp = document.createTextNode("Jawaban  = " + nih);

            new_pp.appendChild(text_pp);
            div_jawaban.appendChild(new_pp);

            inti_pertanyaan.appendChild(div_jawaban);

            // ---------------------------------

            let clear = document.createElement('div');
            clear.setAttribute('class', 'clear');
            inti_pertanyaan.appendChild(clear);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // letakkan di 
            const bd = document.getElementById('kiri');
            bd.appendChild(bg_pertanyaan);
        }

        // akhir if
        // perintah tombol selanjutnya
        // ---------------------------------

        let bg_pertanyaannya = document.querySelectorAll('.bg_pertanyaan');
        let tmbl_selanjutnya = document.querySelectorAll('.nav_selanjut');
        for (let i = 0; i < tmbl_selanjutnya.length - 1; i++) {
            tmbl_selanjutnya[i].addEventListener('click', function () {

                let bgnya = tmbl_selanjutnya[i].parentElement.parentElement;
                // menghilangkan bg_sekarang
                bgnya.className += " hilang";
                // menampilkan bg_pertanyaan selanjutnya
                bg_pertanyaannya[i + 1].className = bg_pertanyaannya[i + 1].className.replace("hilang", "");
            });

        }

        // ---------------------------------
        // perintah tombol kembali
        let tmbl_sebelumnya = document.querySelectorAll('.nav_sebelum');
        for (let i = 0; i < tmbl_sebelumnya.length; i++) {
            tmbl_sebelumnya[i].addEventListener('click', function () {
                if (i != 0) {
                    let bgnya = tmbl_sebelumnya[i].parentElement.parentElement;
                    bgnya.className += " hilang";
                    // menampilkan bg_pertanyaan selanjutnya
                    bg_pertanyaannya[i - 1].className = bg_pertanyaannya[i - 1].className.replace("hilang", "");
                }
            });
        }

        // ---------------------------------
        // tangkap soall pilihan yang dklik dan beri warna di nav soal
        let soallnya = document.querySelectorAll('.soall');
        let soal_navnya = document.querySelectorAll('.soal_nav');

        for (let i = 0; i < soallnya.length; i++) {
            soallnya[i].addEventListener('click', function () {

                let pilihannya = document.querySelectorAll('.bg_pilihan input');
                for (let j = 0; j < pilihannya.length; j++) {
                    pilihannya[j].addEventListener('click', function () {
                        soal_navnya[i].className = soal_navnya[i].className.replace("belum", " sudah");
                    });
                }


            });
        }

        // ---------------------------------
        // nav_ragu beri warna saat tombol ragu diklik
        let tmbl_ragu = document.querySelectorAll('.nav_ragu');
        for (let i = 0; i < tmbl_ragu.length; i++) {
            tmbl_ragu[i].addEventListener('click', function () {
                if (soal_navnya[i].className.indexOf('sudah') == -1) {
                    alert("Pilih Dulu Jawaban Anda, Baru Tekan Kembali Tombol Ragu, Atau Lewati Soal Ini. . . !");
                } else {
                    if (soal_navnya[i].className.indexOf('ragu') == -1) {
                        soal_navnya[i].className += ' ragu';
                    } else {
                        soal_navnya[i].className = soal_navnya[i].className.replace('ragu', '');
                    }
                }

            });
        }

        // ---------------------------------
        // cek jawaban
        let selesai = document.querySelector('.selesai');
        let pil_user = [];
        new_jwb_urut = [];
        new_jwb_urut_no = [];

        selesai.addEventListener('click', function () {
            let sarat = 0;

            for (let t = 0; t < jwbs.length; t++) {
                if ((soal_navnya[t].className.indexOf('sudah') == 10)) {
                    sarat = sarat + 1;
                }
            }

            if (sarat == jwbs.length) {
                // array kunci
                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;

                let pils_soal = document.querySelectorAll('input');


                for (let i = 0; i < jwbs.length; i++) {
                    for (let j = 0; j < pils_soal.length; j++) {

                        if (j == 0) {

                        } else {
                            // menonaktifkan pilihan
                            // pils_soal[j].setAttribute('disabled', 'true');

                            if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                                if (pils_soal[j].checked == true) {
                                    // cek jawaban dengan kunci
                                    console.log(pils_soal[j].value);
                                    console.log(jwbs[i]);
                                    pil_user.push(pils_soal[j].value);
                                    if (pils_soal[j].value == jwbs[i]) {
                                        hasilakhir = hasilakhir + 10;
                                        benarr = benarr + 1;
                                    } else {
                                        hasilakhir = hasilakhir;
                                    }
                                }
                            }
                        }


                    }

                }

                for (let i = 0; i < cek.length; i++) {
                    for (let j = 0; j < cek.length; j++) {
                        if (i == cek[j]) {
                            new_jwb_urut.push(pil_user[j]);
                            new_jwb_urut_no.push(cek[j]);
                        }
                    }
                }
                console.log("jwb_user_urut_no :" + new_jwb_urut_no);
                console.log("jwb_user_urut :" + new_jwb_urut);
                // simpan kedatabase----------
                console.log(namanya.value);
                console.log(sekolahfix);
                console.log(kelasfix);
                console.log(hasilakhir);
                
                let namainput = document.querySelector('.nama');
                namainput.innerText = namanya.value.toUpperCase();

                let sekolahinput = document.querySelector('.sekolah');
                sekolahinput.innerText = sekolahfix;

                let kelasinput = document.querySelector('.kelas');
                kelasinput.innerText = kelasfix;

            

                let hasillinput = document.querySelector('.hasill');
                hasillinput.innerText = hasilakhir;

                let kirihilang = document.querySelector('.kiri');
                kirihilang.className += ' hilang';

                let kananhilang = document.querySelector('.kanan');
                kananhilang.className += ' hilang';

                let datanya = document.querySelector('.dataaa');
                datanya.className = datanya.className.replace('hilang', '');


                // ---------------------------------
                //tampilkan semua soal dan jawaban benar

                // let hilang_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
                // let tampil_pertanyaann = document.querySelectorAll('.inti_pertanyaan .pertanyaannya');
                // for (let k = 0; k < hilang_bgsoalnya.length; k++) {
                //     if (hilang_bgsoalnya[k].className.indexOf('hilang') == -1) {

                //     } else {
                //         hilang_bgsoalnya[k].className = hilang_bgsoalnya[k].className.replace("hilang", " ");
                //     }
                // }
                // for (let k = 0; k < tampil_pertanyaann.length; k++) {
                //     //tampilkan jawaban

                //     if (tampil_pertanyaann[k].className.indexOf('hilang') == -1) {} else {
                //         tampil_pertanyaann[k].className = tampil_pertanyaann[k].className.replace("hilang", " ");
                //     }
                // }

                //
            } else {
                alert('Masih Ada Soal Yang Belum Dijawab, Periksa Kembali . . . !');
            }


        });


        // ---------------------------------
        // nav_soal diklik
        let klik_nav_soal = document.querySelectorAll('.soal_nav');
        for (let l = 0; l < klik_nav_soal.length; l++) {
            klik_nav_soal[l].addEventListener('click', function () {
                let pindah_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
                for (let k = 0; k < pindah_bgsoalnya.length; k++) {

                    if (k == l) {
                        pindah_bgsoalnya[k].className = pindah_bgsoalnya[k].className.replace(" hilang", " ");
                    } else {
                        if (pindah_bgsoalnya[k].className.indexOf('hilang') == -1) {
                            pindah_bgsoalnya[k].className += ' hilang';
                        }
                    }
                }
            });
        }




    }

}
dat.open('GET', '../../json/latihan1.json', true);
dat.send();


// [{
//     "soal0": {
//         "soal": "Sebuah atom dikatakan netral jika ....",
//         "a": "jumlah inti sama dengan jumlah elektron",
//         "b": "jumlah proton sama dengan jumlah neutron",
//         "c": "jumlah elektron sama dengan jumlah proton",
//         "d": "jumlah neutron sama dengan jumlah elektron",
//         "benar": "c"
//     }
// },{
//     "soal1": {
//         "soal":"Suatu atom disebut bermuatan positif karena atom tersebut ....",
//         "a": "kelebihan elektron",
//         "b": "kekurangan elektron",
//         "c": "kekurangan proton",
//         "d": "kelebihan neutron",
//         "benar": "b"        
//     }        
// },{
//     "soal2": {
//         "soal": "Dua buah muatan akan tarik-menarik jika ....",
//         "a": "muatan kedua benda tidak sama",
//         "b": "muatan kedua benda sama",
//         "c": "kedua benda tidak bermuatan",
//         "d": "salah satu benda bermuatan",
//         "benar": "a"
//     }
// },{
//     "soal3": {
//         "soal": "Penggaris yang digosok dengan kain wol akan menarik sobekan kertas karena ....",
//         "a": "kertas bermuatan negatif",
//         "b": "kertas bermuatan positif",
//         "c": "kertas berada di permukaan bumi",
//         "d": "benda yang digosok cenderung menetralkan muatannya",
//         "benar": "b"
//     }
// },{
//    "soal4": {
//         "soal": "Menurut deret tribolistrik, jika emas (Au) digosok dengan kain wol, maka emas akan ....",
//         "a": "bermuatan positif",
//         "b": "bermuatan negatif",
//         "c": "netral",
//         "d": "mungkin positif, mungkin negatif",
//         "benar": "b"
//     }
// },{    
//     "soal5": {
//         "soal": "Dua keping logam bermuatan yang terpisah sejauh 50 cm saling tarik-menarik dengan gaya 12 Newton.  Jika jarak kedua muatan diperbesar menjadi dua kali semula, gaya tarik-menarik antar logam tersebut adalah  ....",
//         "a": "3 N",
//         "b": "6 N",
//         "c": "12 N",
//         "d": "24 N",
//         "benar": "a"
//     }
// },{ 
//     "soal6": {
//         "soal": "Dua buah benda masing-masing bermuatan listrik sebesar \\(–4 \\times 10^{–10}\\) C dan \\(6 \\times 10^{–6}\\) C terpisah sejauh 2 cm. Apabila k = \\(9 \\times 10^9\\; Nm^2/C^2\\), besarnya gaya tarik-menarik kedua benda adalah ....",
//         "a": "\\(5,4 \\times 10^{–5}\\) N",
//         "b": "\\(5,4 \\times 10^{–4}\\) N",
//         "c": "\\(5,4 \\times 10^5\\) N",
//         "d": "\\(5,4 \\times 10^{–2}\\) N",
//         "benar": "d"
//     }
// },{ 
//     "soal7": {
//         "soal": "Dua benda P dan Q masing-masing bermuatan \\(6 \\times 10^{-7}\\) C dan \\(-4 \\times 10^{-8}\\) C, dipisahkan pada jarak 0,02 m. Jika k = \\(9 \\times 10^9\\; Nm^2/C^2\\) gaya tarik-menarik antara kedua benda itu adalah ....",
//         "a": "0,054 N",
//         "b": "0,54 N ",
//         "c": "5,4 N",
//         "d": "54 N",
//         "benar": "b"
//     }
// },{ 
//     "soal8": {
//         "soal": "Benda A menarik benda B, benda B menolak benda C, dan benda C menarik benda D. Jika A bermuatan listrik negatif, muatan benda D adalah ....",
//         "a": "negatif",
//         "b": "positif",
//         "c": "netral",
//         "d": "bisa positif atau negatif",
//         "benar": "a"
//     }
// },{
//     "soal9": {
//         "soal": "Daerah di sekitar benda yang bermuatan listrik dan masih mendapat pengaruh listrik disebut ....",
//         "a": "muatan listrik",
//         "b": "potensial listrik",
//         "c": "medan listrik",
//         "d": "induksi listrik",
//         "benar": "c"
//     }
// },{
//     "soal10": {
//         "soal": "Untuk memindahkan 24 coulomb muatan listrik diperlukan energi 120 joule. Berapakah beda potensial sumber tegangan itu ....",
//         "a": "0,2 V",
//         "b": "0,5 V",
//         "c": "2 V",
//         "d": "5 V",
//         "benar": "d"
//     }
// },{
//     "soal11": {
//         "soal": "Bagian utama penangkal petir dibuat dari batang logam berujung runcing. Hal ini dibuat dengan maksud agar ....",
//         "a": "mudah dialiri listrik",
//         "b": "mudah melepas elektron",
//         "c": "mudah menangkap elektron",
//         "d": "mudah terinduksi",
//         "benar": "c"
//     }
// },{
//     "soal12": {
//         "soal": "Untuk memindahkan muatan listrik sebesar 5 C, dari titik A ke titik B diperlukan usaha sebesar 25 J. Beda potensial antara titik A dan titik B adalah....",
//         "a": "5 V",
//         "b": "20 V",
//         "c": "10 V",
//         "d": "30 V",
//         "benar": "a"
//     }
// },{
//     "soal13": {
//         "soal": "Untuk memindahkan 10 coulomb muatan listrik dari A ke B diperlukan energi 50 joule. Beda potensial antara A dan B adalah ....",
//         "a": "2 V",
//         "b": "5 V",
//         "c": "50 V",
//         "d": "500 V",
//         "benar": "b"
//     }
// },{
//     "soal14": {
//         "soal": "Pada cuaca buruk supaya tidak kena sambaran petir, sebaiknya ....",
//         "a": "Berteduh di bawah pohon besar",
//         "b": "Berlari ke lapangan yang luas",
//         "c": "Memakai topi dari baja",
//         "d": "Berteduh ke rumah yang ada penangkal petirnya",
//         "benar": "d"
//     }
// }]


//Halaman 2 bawah
// function cekjwbn(){
//   document.getElementById("no1").value = document.getElementById("no1").value.toLowerCase();
//   var aaa= document.getElementById("no1").value;
//   var cek1 = document.getElementById("cek1");

//   if (aaa == "negatif") {
//     cek1.src = "../../img/benar.png";
//     document.getElementById("no1").style="border: 2px solid green";
//   } else {
//     cek1.src = "../../img/salah.png";
//     document.getElementById("no1").style="border: 2px solid red";
//   }
// }

// function cekjwbn2(){
//   document.getElementById("no2").value = document.getElementById("no2").value.toLowerCase();
//   var aaa= document.getElementById("no2").value;
//   var cek2 = document.getElementById("cek2");

//   if (aaa == "negatif") {    
//     cek2.src = "../../img/benar.png";
//     document.getElementById("no2").style="border: 2px solid green";
//   } else {
//     cek2.src = "../../img/salah.png";
//     document.getElementById("no2").style="border: 2px solid red";
//   }
// }

// function cekjwbn3(){
//   document.getElementById("no3").value = document.getElementById("no3").value.toLowerCase();
//   var aaa= document.getElementById("no3").value;
//   var cek3 = document.getElementById("cek3");

//   if (aaa == "positif") {
//     cek3.src = "../../img/benar.png";
//     document.getElementById("no3").style="border: 2px solid green";
//   } else {
//     cek3.src = "../../img/salah.png";
//     document.getElementById("no3").style="border: 2px solid red";
//   }
// }

// function cekjwbn4(){
//   document.getElementById("no4").value = document.getElementById("no4").value.toLowerCase();
//   var aaa= document.getElementById("no4").value;
//   var cek4 = document.getElementById("cek4");

//   if (aaa == "negatif") {    
//     cek4.src = "../../img/benar.png";
//     document.getElementById("no4").style="border: 2px solid green";
//   } else {
//     cek4.src = "../../img/salah.png";
//     document.getElementById("no4").style="border: 2px solid red";
//   }
// }

// function cekjwbn5(){
//   document.getElementById("no5").value = document.getElementById("no5").value.toLowerCase();
//   var aaa= document.getElementById("no5").value;
//   var cek5 = document.getElementById("cek5");

//   if (aaa == "positif") {
//     cek5.src = "../../img/benar.png";
//     document.getElementById("no5").style="border: 2px solid green";
//   } else {
//     cek5.src = "../../img/salah.png";
//     document.getElementById("no5").style="border: 2px solid red";
//   }
// }

// $('.inputan').bind('keyup blur',function(){ 
//     var node = $(this);
//     node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
// );