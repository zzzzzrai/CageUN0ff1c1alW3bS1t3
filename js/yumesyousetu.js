document.getElementById("GOTOHELL").onclick = function () {
  let formname = document.getElementById("name").value;
  let formgiftname = document.getElementById("giftName").value;

  var name = formname ? formname : "##NAME1##";
  var giftName = formgiftname ? formgiftname : "##NAME2##";

  var str = document.getElementById("honbun").innerHTML;
  str = str.replace("##NAME1##", name);
  str = str.replace("##NAME2##", giftName);
  document.getElementById("honbun").innerHTML = str;
  str.style.visibility = "visible";
};
