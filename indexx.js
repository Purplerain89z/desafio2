let invoice = {
    name: "felipe",
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecanico", 129.90],
        2: ["Monitor", 899.99],
    }
}
generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-------------------")
    for(let index in invoice.products){
        let[productName, productPrice] = invoice.products[index]
    
    console.log(`- ${productName}: R$ ${productPrice}`)
    }
}