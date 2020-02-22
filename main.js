/* Import & Export */

import { tinhTong, tinhHieu } from './test.js'

let tong = tinhTong();
console.log("Tổng: " + tong);

let hieu = tinhHieu();
console.log("Hiệu: " + hieu);

/* Import default */

import NhanViennnnnn from './NhanVien.js'

/* ------ */

var a = 10;
var a = 2; //có thể khai báo chèn lên giá trị cũ


/* khai báo kiểu ES6 */

let b = 2;
//let b = 3; -> sẽ báo lỗi, muốn gán đè lên chỉ cần viết b = 3;

const PI = 3.14; //khai báo hằng số, PHẢI có giá trị, ko thể thay đổi giá trị


/* Hoisting: gán giá trị vào biến trc rồi khai báo */
d = 5;
var d;

/* function scope */
var test = function () {
    var c = 12;
}
//console.log(c); -> báo lỗi, do c chỉ nằm trong phạm vi scope

/* block scope */
var foo = function () {
    var x = 10;

    // block
    if (true) {
        var x = 20;
        console.log(x); //20
    }
    console.log(x); //20 -> vẫn lấy giá trị trong block
}
foo();

var foo2 = function () {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); //20
    }
    console.log(x); //10 -> ko lấy giá trị bên trong block nữa
}
foo2();

for (var i = 0; i < 4; i++) {
    console.log(i);
}
console.log(i); //4

for (let i = 0; i < 4; i++) {
    console.log(i);
}
//console.log(i); -> lỗi

/* function() truyền thống */

var hello = function (name, lop) {
    console.log("Hello " + name + " lop " + lop);
}
hello("Hoa", "FE37");

var test1 = function () {
    return 5;
}

/* Arrow function trong ES6 thay thế cho function() */

let hello1 = (name, lop) => { //nếu function chỉ có 1 tham số thì ko cần khai báo trong ()
    console.log("Hello " + name + " lop " + lop);
}
hello1("Hoa", "FE37");

let test2 = () => 5 //khi bên trong function chỉ có 1 dòng ta có thể rút gọn ntn

/* Demo */

//function truyền thống
let hocVien = {
    hoTen: 'TQH',
    lop: 'FE37',
    layThongTinHocVien: function () {
        let _bind = this;
        function hienThiThongTin() {
            console.log(`Họ tên: ${_bind.hoTen} - Lớp: ${_bind.lop}`);
        }
        hienThiThongTin();
    }
};
hocVien.layThongTinHocVien();

//function ES6
let hocVien2 = {
    hoTen: 'TQHoa',
    lop: 'FE37',
    layThongTinHocVien: function () {
        let hienThiThongTin = () => { //không cần gán this
            console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);
        }
        hienThiThongTin();
    }
};
hocVien2.layThongTinHocVien();

/* Rest Params */

function sum(...numbers) { //...numbers đc xem như "mảng" với số lượng giá trị bên trong ko xác định
    let total = 0;

    for (let index = 0; index < numbers.length; index++) {
        total += numbers[index];
    }
    console.log(total);
}
sum(1, 2, 3, 5, 7, 9);

//khi numbers.map((element,i) => {...} thì numbers sẽ có thêm 1 bản sao, và mọi thay đổi sẽ chỉ đc thực hiện trên bản sao đó.

function sum2(...numbers) {
    let total = 0;
    numbers.forEach((element, i) => { //callback  function: tham số trong function là 1 function khác
        total += element;
    });
    console.log(total);
}
sum2(1, 2, 3, 5, 7, 9, 12);

/* Spread Operator */

/*
let mangA = [1,2,3];
let mangB = mangA;
console.log(mangB); // 1, 2, 3

mangB.push(4);
mangB.push(5);
console.log(mangB); // 1, 2, 3, 4, 5
console.log(mangA); // 1, 2, 3, 4, 5 => bị tham chiếu khi thêm giá trị vào mangB
*/

let mangA = [1, 2, 3];
let mangB = [...mangA, 4, 5]; //copy mangA và gán bản sao đó vào mangB => giải quyết v: ấn đề tham chiếu

console.log("mảng B: " + mangB); // 1, 2, 3, 4, 5
console.log("mảng A: " + mangA); // 1, 2, 3

let nguoi = {
    ten: "Quỳnh Hoa",
    lop: "fe37"
};

let nguoi2 = { ...nguoi }; //Do đây là object nên sd {} thay vì []
nguoi2.tuoi = 20;

console.log(nguoi2);
console.log(nguoi);

/* Default params */
//tham số mặc định: khai báo trực tiếp trên function
let getInfo = (ten, tuoi = 20) => console.log(`Tên: ${ten}, Tuổi: ${tuoi}`);

getInfo("Hoa", 19);
getInfo("Hoa");

/* Destructuring(*) */

let mang = [1, 2];
let [x, y] = mang; //gán x = 1, y = 2

console.log(x, y);

let obj = {
    ten: "Hoa",
    tuoi: "20",
    lop: "FE37"
};
let { ten, lop } = obj; //tên của giá trị phải trùng với tên trong obj

console.log(ten, lop);

/* Template Strings */

let getName = name => {
    let result = `Hello ${name}`; //Template Strings
    console.log(result);
};
getName("Hoa");

/* Object literals(*) */

let name = "Hoa";
let age = 20;

let student = {
    /* name: name,
       age: age */
    name,
    age
};
console.log(student);

let propHoTen = "hoTen";
let propLop = "lop";

let student2 = {
    [propHoTen]: "Nguyen",
    [propLop]: "FE37"
}
console.log(student2);

/* For of
   For in */

let mangPeople = ["J", "A", "S", "M", "I", "N", "E"];

for (let item of mangPeople) {
    console.log(item); //lấy các item trong mảng
}

for (let key in mangPeople) {
    console.log(key); //lấy vị trí item trong mảng
}