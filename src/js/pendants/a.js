let products1 = require("./../Data/data-pendants.js").products;
let products2 = require("./../Data/data-pendants.js").products2;
 let a = function () { 
        let Link=location.pathname;
        let arr = Link.split("-");
        let number = arr[1]
        let products;
        switch(number) {
          case "2":
            products=products2;
            break;
          case "1":
            products=products1;
            break;
          
        }
}
export default a;