let mobiles = {camera: "12px"};
let Tablet = {
    size : "5inches",
    color :"blue",
}
Object.setPrototypeOf(Tablet,mobiles);
console.log('tablet',Object.getPrototypeOf(Tablet));



