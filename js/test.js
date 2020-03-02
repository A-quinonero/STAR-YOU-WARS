



let counter = 0;
[...respVal].forEach(item => {
  item.addEventListener("change", function(event) {
    counter += Number(event.currentTarget.value);
  });
});

btnResp.addEventListener("click", e => {
  e.preventDefault();
  open(`result.html?score=${counter}`);
});

window.addEventListener("load", e => {
  console.log(location.search);
  mostrarHeroe();
});

