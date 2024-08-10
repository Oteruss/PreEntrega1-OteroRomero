const servicePrices = {
    logo: 100,
    web: 300,
    flyer: 50
};

function calculatePrice() {
    const serviceType = document.getElementById('serviceType').value;
    const numRevisions = parseInt(document.getElementById('numRevisions').value);
    
    if (numRevisions < 1 || numRevisions > 10) {
        alert('El número de revisiones debe estar entre 1 y 10.');
        return;
    }

    let basePrice = servicePrices[serviceType];
    let totalPrice = basePrice;

    for (let i = 1; i <= numRevisions; i++) {
        totalPrice += 10;
    }

    let discountMessage = "";
    if (numRevisions > 5) {
        totalPrice *= 0.9; 
        discountMessage = "¡Se ha aplicado un descuento del 10% por más de 5 servicios!";
    } else {
        discountMessage = "No se ha aplicado ningún descuento.";
    }

    document.getElementById('result').innerText = `El precio total es: $${totalPrice.toFixed(2)}`;
    document.getElementById('discountMessage').innerText = discountMessage;
}
