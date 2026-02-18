document.addEventListener("DOMContentLoaded", () => {
  fetch("data/fsgf.xlsx")
    .then(res => res.arrayBuffer())
    .then(buffer => {
      const workbook = XLSX.read(buffer, { type: "array" });
      const sheet = workbook.Sheets["Donnees"]; // nom exact de la feuille
      const allData = XLSX.utils.sheet_to_json(sheet);

      updateCards(allData);
      creerGraphiques(allData);
    });
});

function updateCards(data) {
  const total = data.reduce((acc,d)=>acc+d.Effectifs,0);
  const totalM = data.filter(d=>d.Genre==="M").reduce((acc,d)=>acc+d.Effectifs,0);
  const totalF = data.filter(d=>d.Genre==="F").reduce((acc,d)=>acc+d.Effectifs,0);

  document.querySelector("#totalEtudiants p").textContent = total;
  document.querySelector("#totalMasculin p").textContent = totalM;
  document.querySelector("#totalFeminin p").textContent = totalF;
}
