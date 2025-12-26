function calculateTime() {
  const pages = Number(document.getElementById("pages").value);
  const speed = Number(document.getElementById("speed").value);
  const hoursPerDay = Number(document.getElementById("hoursPerDay").value);

  if (!pages || !speed || !hoursPerDay) {
    document.getElementById("result").innerText =
      "Please fill all fields 🌸";
    return;
  }

  const totalHours = pages / speed;
  const days = Math.ceil(totalHours / hoursPerDay);

  document.getElementById("result").innerText =
    `⏳ Total reading time: ${totalHours.toFixed(1)} hours  
📅 Estimated completion: ${days} days  
✨ Grab a blanket and begin.`;
}
