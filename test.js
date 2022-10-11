const { fromEuroToDollar, fromYenToPound,fromDollarToYen } = require('./app.js')


test("Euro a Dolar", function(){ 
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("Dolar a Yen", function(){
      expect(fromDollarToYen(2)).toBe(213.16666666666669); 
})

test("Yen a Libras", function(){
    expect(fromYenToPound(1000)).toBe(6.254886630179827); 
})