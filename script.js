function generateBill() {
    const shirts = parseInt(document.getElementById('shirts').value) || 0;
    const pants = parseInt(document.getElementById('pants').value) || 0;
    const kurtas = parseInt(document.getElementById('kurtas').value) || 0;

    const rateShirt = parseFloat(document.getElementById('rateShirt').value) || 0;
    const ratePant = parseFloat(document.getElementById('ratePant').value) || 0;
    const rateKurta = parseFloat(document.getElementById('rateKurta').value) || 0;

    const total = (shirts * rateShirt) + (pants * ratePant) + (kurtas * rateKurta);

    const billText = `
        Shirts: ${shirts} × ₹${rateShirt} = ₹${shirts * rateShirt}<br>
        Pants: ${pants} × ₹${ratePant} = ₹${pants * ratePant}<br>
        Kurtas: ${kurtas} × ₹${rateKurta} = ₹${kurtas * rateKurta}<br>
        <hr>
        <strong>Total: ₹${total}</strong>
    `;

    document.getElementById('billDetails').innerHTML = billText;
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
