const Paras = document.getElementsByTagName("p");
const noOfParas = Paras.length;

for (i = 0; i < noOfParas; i++) {
    if (Paras[i].textContent.includes("Warning") == true) {
        Paras[i].style.color = "red";
    }
}