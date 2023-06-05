var total = 0;
var hasilTotal = document.getElementById("hasilTotal");
var harga = 0;

const listBarang = document.querySelectorAll("#item");
// console.log(listBarang);

listBarang.forEach((item)=>
{
    item.addEventListener("click", function (e){
        var pilihMenu = e.target;
        // console.log(pilihMenu);
        harga = pilihMenu.querySelector("#cost");
        // console.log(harga);
        // console.log(harga.innerHTML); 
        if(pilihMenu.classList.contains("pilih")){
                pilihMenu.classList.remove("pilih");
                total -= parseFloat(harga.innerHTML);
        }else {
            pilihMenu.classList.add("pilih");
            total += parseFloat(harga.innerHTML);
        }
        // console.log(total);
        hasilTotal.innerHTML = "Total: Rp " + total + "K";
    });
});