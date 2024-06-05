function calculateBMI() {
    const weight = document.getElementById('poids').value;
    const height = document.getElementById('taille').value;
    const bmi = weight / Math.pow(height, 2);
    let message = 'Vous êtes en état';

    if (bmi < 16.5) {
        message += ' de dénutrition';
    } else if (bmi >= 16.5 && bmi < 18.5) {
        message += ' de maigreur';
    } else if (bmi >= 18.5 && bmi < 25) {
        message = 'Vous avez un poids normal';
    } else if (bmi >= 25 && bmi < 30) {
        message += ' de surpoids';
    } else if (bmi >= 30 && bmi < 35) {
        message += " d'obésité modérée";
    } else if (bmi >= 35 && bmi < 40) {
        message += " d'obésité sévère";
    } else {
        message += " d'obésité morbide ou massive";
    }

    const interpretation = document.getElementById('interpretation');
    interpretation.innerHTML = `Votre IMC est : ${bmi.toFixed(2)}<hr>${message}`;
    interpretation.parentNode.hidden = false;
}
