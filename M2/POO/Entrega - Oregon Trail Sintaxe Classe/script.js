class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }
    hunt(){
        this.food += 2
    }
    eat(){
        if(this.food > 0) {
            this.food -= 1
            return
        }
        this.isHealthy = false
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {

        return this.capacity
    }

    join(passageiro) {
        if(this.capacity > 0 ) {
            this.passengers.push(passageiro)  
            this.capacity -= 1
        }
    }

    shouldQuarantine() {
        return this.passengers.some((passageiro) => {
            return passageiro.isHealthy === false
        })
    }

    totalFood() {
        return this.passengers.reduce((acc, passageiro) => {
            return acc += passageiro.food
        }, 0)
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2)
// Criar três viajantes
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan');
let maude = new Traveler('Maude')
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`)
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`)
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`)
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`)
console.log(`${wagon.totalFood()} should be 3`);
