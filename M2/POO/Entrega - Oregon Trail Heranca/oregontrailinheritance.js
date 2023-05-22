class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }
    hunt(){
        this.food += 2
        return "Caçou"
    }
    eat(){
        if (this.food > 0) {
            this.food -= 1
            this.isHealthy = true
            return "Comeu"
        }
        this.isHealthy = false
        return "sem comida"
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
        if (this.capacity > 0 ) {
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

class Hunter extends Traveler{
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt(){
        this.food += 5
        return "caçou"
    }
    eat(){
        if (this.food > 1) {
            this.food -= 2
            this.isHealthy = true
            return "comeu 2"
        }else if(this.food < 2 && this.food > 0) {
            this.food -= 1
            this.isHealthy = false
            return "comeu 1"
        }
        this.isHealthy = false
        return  "sem comida"
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
            return `${traveler.name} recebeu ${numOfFoodUnits} de comida do ${this.name}`
        }
        return `${this.name} não tem comida suficiente`
    }
}

class Doctor extends Traveler{
    constructor(name) {
        super(name)
    }

    heal(traveler) {
        if (traveler.isHealthy === false) {
            traveler.isHealthy = true
            return `agora ${traveler.name} é tem saúde`
        }
        return traveler.isHealthy = true
    }
}

// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
 
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
 
wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
 
sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();
 
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
 
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)
 
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
 
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
 
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente
 
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);