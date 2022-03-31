document.getElementById("btnNumber1").onclick = function () {
  var numberX = document.getElementById("txtNumber1").value;
  var count = "";

  for (var i = 1; i < numberX; i++) {
    if (ktSoNguyenTo(i) == 1) {
      count += i + " ";
    }
  }

  function ktSoNguyenTo(numberX) {
    if (numberX < 2) {
      return 0;
    }
    for (var i = 2; i < numberX; i++) {
      if (numberX % i == 0) {
        return 0;
      }
    }
    return 1;
  }

  document.getElementById("footerNumber1").innerHTML = count;
};
