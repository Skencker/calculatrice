function calcul() {
  const nbr2 = document.querySelector("#deuxieme-nombre").value;
  let result = document.getElementById("somme");
  const nbr1 = document.getElementById("premier").value;

  let som = Number(nbr1) + Number(nbr2);
  console.log(som);
  result.innerHTML = som;
  
}
