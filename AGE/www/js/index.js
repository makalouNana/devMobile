function calculerAge() {
  const anneeNaissance = Number(naissance.value);
  const age = new Date().getFullYear() - anneeNaissance;
  const resultat = document.getElementById('resultat');
  resultat.innerHTML = `Vous avez ${age} ans !`;

  const resultatArea = document.querySelector('fieldset');
  resultatArea.hidden = false;
  setTimeout(() => {
      resultatArea.classList.add('show');
  }, 15);
}
