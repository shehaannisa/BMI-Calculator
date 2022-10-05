var tinggi, berat, keterangan, bmi;
function hitung() {
  tinggi = parseFloat(document.getElementById('height').value);
  tinggi /= 100;
  berat = parseFloat(document.getElementById('weight').value);
  bmi = berat / (tinggi * tinggi);

  if (bmi > 30) {
    keterangan = 'Obesity';
  } else if ((bmi >= 25) & (bmi <= 29.9)) {
    keterangan = 'Overweight';
  } else if ((bmi >= 18.5) & (bmi <= 24.9)) {
    keterangan = 'Normal';
  } else {
    keterangan = 'Underweight';
  }
  document.getElementById('bmi').innerHTML = 'Your BMI is ' + bmi.toFixed(1) + ' which means You are ' + keterangan;
}
