let pdfPages = 0;

document.getElementById("pdfFile").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const fileReader = new FileReader();

  fileReader.onload = function () {
    const typedarray = new Uint8Array(this.result);

    pdfjsLib.getDocument(typedarray).promise.then(pdf => {
      pdfPages = pdf.numPages;
      document.getElementById("result").innerText =
        `📄 PDF loaded with ${pdfPages} pages`;
    });
  };

  fileReader.readAsArrayBuffer(file);
});

function calculateTime() {
  // 🔐 SAFETY CHECK: PDF must be uploaded first
  if (pdfPages === 0) {
    document.getElementById("result").innerText =
      "Please upload a PDF first 📄";
    return;
  }

  const speed = Number(document.getElementById("speed").value);
  const hoursPerDay = Number(document.getElementById("hoursPerDay").value);

  // 🔐 SAFETY CHECK: Other inputs
  if (!speed || !hoursPerDay) {
    document.getElementById("result").innerText =
      "Please fill all fields 🌸";
    return;
  }

  const totalHours = pdfPages / speed;
  const days = Math.ceil(totalHours / hoursPerDay);

  document.getElementById("result").innerText =
    `⏳ Total reading time: ${totalHours.toFixed(1)} hours  
📅 Estimated completion: ${days} days  
✨ Grab a blanket and begin.`;
}
