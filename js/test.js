



let counter = 0;
[...respVal].forEach(item => {
  item.addEventListener("change", function(event) {
    counter ++;
  });
});

[...respVal1].forEach(item => {
  item.addEventListener("change", function(event) {
    counter --;
  });
});
[...respVal2].forEach(item => {
  item.addEventListener("change", function(event) {
    counter = counter + 2;
  });
});

btnResp.addEventListener("click", e => {
  e.preventDefault();
  open(`result.html?score=${counter}`,"_self");
});

window.addEventListener("load", e => {
  console.log(location.search);
  mostrarHeroe();
});

