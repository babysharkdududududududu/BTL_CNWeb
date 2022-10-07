function tinhtien()
{
    let slsp1 = document.getElementById("sl1").value;
    let slsp2 = document.getElementById("sl2").value;

    let giasp1 = Number(document.getElementById("gia1").innerHTML);
    let giasp2 = Number(document.getElementById("gia2").innerHTML);

    let tongtien = slsp1 * giasp1 + slsp2 * giasp2;

    thanhtien.innerHTML = tongtien;
}