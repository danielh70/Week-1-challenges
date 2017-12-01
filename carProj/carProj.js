var car = {
  modelYear: "1990",
  modelMake: "Toyota",
  modelColor: "Black",
  carData: function () { return this.modelYear+"-"+this.modelMake+"-"+this.modelColor+"-"+this.speed },

  speed: 0,
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
      }
    }
}




   // this is the end of our object

console.log("accel: ", car.accelerate());
console.log("Brake: ", car.brake());
console.log("Data: ", car.carData());
