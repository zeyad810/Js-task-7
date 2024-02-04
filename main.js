let productName ="Iphone";
let productPrice=1500;
let isAvailable =true;
let canShipped = true;
let orderStatus = 1 
switch (orderStatus) {
    case 0:
        console.log("pending")
        break;
    case 1:
        console.log(`On Way ${productName}`);
        break;
    case 2:
        console.log("Delivered")
    default:
        console.log("Not Started")
        break;
}
switch (isAvailable && canShipped) {
    case true:
        console.log(`you can buy ${productName} `)
        break;
    case false:
        console.log(`Sorry it's not available `)
    default:

        break;
    }
    console.log(`order status ${orderStatus}`)