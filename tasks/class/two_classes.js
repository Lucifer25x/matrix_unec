// Class for clothing
class Cloth {
    constructor(price, color, size){
        this.price = price;
        this.color = color;
        this.size = size;
    }

    printDetails(){
        return `Price: $${this.price}\nColor: ${this.color}\nSize: ${this.size}`;
    }
}

// Class for the types of clothing
class ClothType extends Cloth {
    constructor(price, color, size, cloth_type){
        super(price, color, size);
        this.cloth_type = cloth_type;
    }

    printAllDetails(){
        return `${this.cloth_type}\n----------\n${this.printDetails()}`;
    }
}

// Usage
const trousers = new ClothType(123, "blue", "XL", "Trousers");
console.log(trousers.printAllDetails());