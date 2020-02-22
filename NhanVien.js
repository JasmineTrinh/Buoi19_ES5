/* Export Default */

//Có thể sửa tên khi import, ko thể E&I default cùng lúc nhiều biến

export default class NhanVien {
    constructor (_name) {
        this.name = _name;
    }
    getName(){
        console.log("Tên: " + this.name);
    }
}
let nhanVien = new NhanVien("Hoa");
nhanVien.getName();
//export default NhanVien;
