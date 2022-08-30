// Basics
class User {
  constructor(public name: string) {
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User('Grzegorz');
user.sayHello();

// Inheritance
class Vehicle {
  constructor(public numOfWheels: number) {
  }
}

class Car extends Vehicle {
  constructor(
    private abs: boolean,
    protected airbags: number,
    public brand: string,
    public readonly model: string,
  ) {
    super(4);
  }

  ride() {
    console.log(`I have ${this.numOfWheels} wheels!`);
  }
}

const c = new Car(true, 4, 'Volvo', 'XC90');
console.log(c.brand);
c.brand = 'XC60';
console.log(c.brand);
c.ride();

// abstract
abstract class Message {
  constructor(private text: string) {}
  abstract send(): void;
  log() {
    console.log(this.text);
  }
}

class Email extends Message {
  send(): void {
    console.log()
  }
}

const email = new Email('hello');
email.log();
