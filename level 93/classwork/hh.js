function citrusebi(fruits) {

    let citrus = fruits.slice(1, 3);

    fruits.splice(-2, 2, "ლეღვი");
    
    
    let fruitString = fruits.join("-");
    
    return fruitString;
}

let fruits = ["ვაშლი", "ფორთოხალი", "მანდარინი", "ბანანი", "ატამი"];
console.log(citrusebi(fruits));
