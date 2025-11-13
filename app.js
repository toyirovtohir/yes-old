// Dropdownlarga kun va oylarni to‘ldirish
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const result = document.getElementById('result');
const calcBtn = document.getElementById('calcBtn');

for (let i = 1; i <= 31; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  daySelect.appendChild(option);
}

const oylar = [
  "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
  "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
];

oylar.forEach((oy, index) => {
  const option = document.createElement('option');
  option.value = index + 1;
  option.textContent = oy;
  monthSelect.appendChild(option);
});

// Tugma bosilganda yoshni hisoblash
calcBtn.addEventListener('click', () => {
  const day = daySelect.value;
  const month = monthSelect.value;
  const year = document.getElementById('year').value;

  if (!day || !month || !year) {
    result.innerText = "Iltimos, barcha maydonlarni to‘ldiring!";
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  result.innerText = `Sizning yoshingiz: ${age} yosh`;
});