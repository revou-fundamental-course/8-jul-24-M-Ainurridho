const form = document.querySelector("form");
const summary = document.querySelector(".summary");

form.addEventListener("submit", function (e) {
   e.preventDefault();
   summary.innerHTML = "";

   // input form data
   const formData = {
      gender: (e.target[0]?.checked && e.target[0].value) || (e.target[1]?.checked && e.target[1].value),
      weight: Number(e.target[2].value),
      age: Number(e.target[3].value),
      height: Number(e.target[4].value),
   };

   // Kalkulasi berat badan
   const weight = (formData.weight / (formData.height / 100) ** 2).toFixed(1);

   // kondisi berat badan
   if (weight < 18.5) {
      weightStatus(weight, "Anda kekurangan berat badan", "red");
      resultSummary("menaikan", "0.0 dan 18.0");
   } else if (weight > 18.5 && weight < 25.0) {
      weightStatus(weight, "Berat badan anda normal (ideal)", "green");
   } else if (weight > 25.0 && weight < 30.0) {
      weightStatus(weight, "Anda memiliki berat badan berlebih", "orange");
   } else {
      weightStatus(weight, "Anda menderita kegemukan (obesitas)", "red");
      resultSummary("menurunkan", "30.0 keatas");
   }
});

// Output: Berat badan dan Status kondisi
const weightStatus = (weight, status, color) => {
   const resultNumber = document.querySelector(".result-number");
   const resultStatus = document.querySelector(".result-status");

   resultNumber.innerHTML = weight;
   resultStatus.innerHTML = status;
   resultStatus.style.color = color;
};

// Ringkasan - Jika berat < 18.0 dan berat > 30.0
const resultSummary = (msg, limit) => {
   summary.innerHTML = `
      <div class="mb-3">
         <p class="mb-3">Hasil BMI diantara ${limit}</p>

         <p>Anda berada dalam kategori yang cukup mengkwatirkan.</p>
         <p>Cara terbaik untuk ${msg} berat badan berlebih adalah dengan mangatur kalori makanan yang dikonsumsi dan berolahraga.</p>
         <p>Jika BMI anda berada dalam kategori ini makan anda dianjurkan untuk ${msg} berat badan anda hingga batas normal.</p>
      </div>

      <div class="mb-3">
         <button class="btn btn-lightblue">Konsultasi Ahli Gizi Via Aplikasi</button>
         <button class="btn btn-lightblue">Registasi Online Ahli Gizi</button>
      </div>

      <div>
         <p>
            BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda.
         </p>
      </div>`;
};
