let maDon = "";
let hopLe = false;
let chon;
do {
    console.log("\n=====MENU=====");
    console.log("1. Nhap ma don hang");
    console.log("2. In hoa don");
    console.log("3. Thoat");
    chon = prompt("Nhap lua chon: ");
    switch (chon){
        case "1":
            maDon = prompt("Nhap ma don hang: ");
            maDon = maDon.trim().toUpperCase();
            if (maDon.length >= 8){
                hopLe = true;
                console.log("Ma don hop le:", maDon);
            } else {
                hopLe = false;
                console.log("Ma don phai co it nhat 8 ky tu");
            }
            break;
        case "2":
            if (hopLe == false){
                console.log("Chua co ma don hang hop le");
                break;
            }
            let shaker = 2;
            let gloves = 1;
            let strap = 1;
            let tienShaker = shaker * 120000;
            let tienGloves = gloves * 180000;
            let tienStrap = strap * 150000;
            let tong = tienShaker + tienGloves + tienStrap;
            console.log("\n" + "-".repeat(40));
            console.log("HOA DON PHU KIEN GYM");
            console.log("-".repeat(40));
            console.log("San pham".padEnd(20) + "SL".padStart(5) + "Tien".padStart(15));
            console.log(
                "Binh lac".padEnd(20) +
                shaker.toString().padStart(5) +
                tienShaker.toString().padStart(15)
            );
            console.log(
                "Gang tay".padEnd(20) +
                gloves.toString().padStart(5) +
                tienGloves.toString().padStart(15)
            );
            console.log(
                "Day keo lung".padEnd(20) +
                strap.toString().padStart(5) +
                tienStrap.toString().padStart(15)
            );
            console.log("-".repeat(40));
            console.log("Tong tien:", tong);
            let vip = prompt("Khach co the VIP khong? (Y/N): ");
            vip = vip.trim().toUpperCase();
            if (vip == "Y"){
                let giam = tong * 10 / 100;
                tong = tong - giam;
                console.log("Giam 10%:", giam);
            }
            console.log("Thanh tien:", tong);
            console.log("Ma don:", maDon);
            console.log("-".repeat(40));
            break;
        case "3":
            console.log("Thoat chuong trinh");
            break;
        default:
            console.log("Nhap sai! Chi duoc chon 1, 2 hoac 3");
    }
} while (chon != "3");
