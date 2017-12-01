var car = {
  modelYear: "1990",
  modelMake: "Toyota",
  modelColor: "Black",
  speed: 0,

  carData: function () { return this.modelYear + " " + this.modelMake +" "+ this.modelColor + " " + this.speed },

  getSpeed: function () { return this.speed },

  accelerate: function () {
      while (car.getSpeed() < 50) {
        this.speed += 10
          if (car.getSpeed() == 50) {
            break;
          }
      }
    },
   brake: function () {
      while (car.getSpeed() > 0) {
        this.speed -= 7
          if (car.getSpeed() < 7) {
            break;
          }
      }
    },
  slowBrake: function () {
    while (car.getSpeed() > 0 ) {
      this.speed -= 1
    }
  }
}

console.log("accel: ", car.accelerate());
console.log("Brake: ", car.brake());
console.log("slowBrake: ", car.slowBrake());
console.log("Data: ", car.carData());
