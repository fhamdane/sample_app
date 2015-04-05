function fizzBuzz(n){
    if(n>1) return "1,2"; // pour le 2 on fait un code le plus simplement
    return"1";
}

describe("FizzBuzz", function(){
    it("commence simplement", function()  {
       expect(fizzBuzz(1)).toBe("1");        
    });      
    it("avance d'un pas", function(){
       expect(fizzBuzz(2)).toBe("1,2");
    });  
});



//Etape 2

  // if(n>1) return "1,2"; // pour le 2 on fait un code le plus simplement
  //   return"1";

//Etape 3 //on evite la duplication

  //var resultat="1";
  // if(n>1) {
  	//resulatat+=",2";
  	//} // pour le 2 on fait un code le plus simplement
  //   return resultat;


  //on ajoute 
  // it("tombe sur fizz", function(){
  //      expect(fizzBuzz(3)).toBe("1,2,Fizz");
  //   });  


//Etape2

// if(n>1) {
  	//resulatat+=",2";
  	//} // pour le 2 on fait un code le plus simplement
  //   return resultat;


