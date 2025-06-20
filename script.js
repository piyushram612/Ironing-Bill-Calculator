function generateBill() {
  const shirtCount = parseInt(document.getElementById("shirts").value) || 0;
  const pantCount = parseInt(document.getElementById("pants").value) || 0;
  const kurtaCount = parseInt(document.getElementById("kurtas").value) || 0;
  const otherCount = parseInt(document.getElementById("others").value) || 0;

  const rateShirt = parseFloat(document.getElementById("rateShirt").value) || 0;
  const ratePant = parseFloat(document.getElementById("ratePant").value) || 0;
  const rateKurta = parseFloat(document.getElementById("rateKurta").value) || 0;
  const rateOther = parseFloat(document.getElementById("rateOther").value) || 0;

  const total =
    shirtCount * rateShirt +
    pantCount * ratePant +
    kurtaCount * rateKurta +
    otherCount * rateOther;

  const now = new Date();
  const timestamp = now.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  let billDetails = `
    <p>👔 Shirts: ${shirtCount} × ₹${rateShirt} = ₹${shirtCount * rateShirt}</p>
    <p>👖 Pants: ${pantCount} × ₹${ratePant} = ₹${pantCount * ratePant}</p>
    <p>🧥 Kurtas: ${kurtaCount} × ₹${rateKurta} = ₹${kurtaCount * rateKurta}</p>
    <p>👗 Other: ${otherCount} × ₹${rateOther} = ₹${otherCount * rateOther}</p>
    <strong>Total: ₹${total}</strong>
    <p style="font-size: 14px; color: #666; margin-top: 10px;">🕒 ${timestamp}</p>
  `;

  document.getElementById("billDetails").innerHTML = billDetails;
}


function downloadReceipt() {
  const billElement = document.getElementById("bill");

  html2canvas(billElement).then(canvas => {
    const link = document.createElement('a');
    link.download = 'laundry-receipt.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
function resetForm() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });

  document.getElementById("billDetails").innerHTML = `<p>Enter details and click "Generate Bill".</p>`;
}
