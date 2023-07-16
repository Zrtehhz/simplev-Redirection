function openGoogleSheet() {
  var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1cTsiT62wHuVR5JQiPhiWyGgGs_aDHQRY9YX2yheAnDE/edit";
  var sheetIframe = document.getElementById("sheet-iframe");
  sheetIframe.src = googleSheetUrl;
  document.getElementById("sheet-container").style.display = "block";
}
