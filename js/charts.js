function creerGraphiques(data) {
  // Par Année
  const labelsAnnee = [...new Set(data.map(d => d.Année))];
  const valuesAnnee = labelsAnnee.map(annee => 
    data.filter(d => d.Année===annee).reduce((acc,d)=>acc+d.Effectifs,0)
  );

  new Chart(document.getElementById("chartAnnee"), {
    type:'bar',
    data:{ labels: labelsAnnee, datasets:[{label:"Effectifs par année", data:valuesAnnee, backgroundColor:"#ff6600"}] }
  });

  // Par Département
  const labelsDept = [...new Set(data.map(d=>d.Département))];
  const valuesDept = labelsDept.map(dept => 
    data.filter(d=>d.Département===dept).reduce((acc,d)=>acc+d.Effectifs,0)
  );

  new Chart(document.getElementById("chartDept"), {
    type:'bar',
    data:{ labels: labelsDept, datasets:[{label:"Effectifs par département", data:valuesDept, backgroundColor:"#9c88ff"}] }
  });

  // Répartition Genre
  const totalM = data.filter(d=>d.Genre==="M").reduce((acc,d)=>acc+d.Effectifs,0);
  const totalF = data.filter(d=>d.Genre==="F").reduce((acc,d)=>acc+d.Effectifs,0);

  new Chart(document.getElementById("chartGenre"), {
    type:'pie',
    data:{ labels:["Masculin","Féminin"], datasets:[{data:[totalM,totalF], backgroundColor:["#00a8ff","#ff6600"]}] }
  });
}
