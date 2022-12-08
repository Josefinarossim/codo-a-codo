const valorTicket = 200;

function resumen() {
    var cantidadTickets=document.getElementById('cantidadTickets').value;
    var descuento=document.getElementById('categoria').value;
    var precioTotal = cantidadTickets * ((valorTicket*descuento)/100);
    document.getElementById("totalCompra").value = "Total a pagar $"+precioTotal
}

