// Problem: Parking Lot
// Assumptions:
// - 3 floors
// - Limited spots per vehicle type
// - Nearest available spot
// - First come first serve
// - Entry + Exit + simple billing

// entry flow
// 1.first vehicle comes check available spot in parking floor
// 2.assign nearest spot
// 3.if available spot then generate ticket with entry time mentioned

// exit flow
// vehicle comes and check exit time
// calculate billing time (exit-entry)
// make that vehicle spot available


// classes
// parking floor
// parking lot
// parking spot
// ticket
// billing service
// vehicle

// decide responsiblity of each class
// parking floor-find availble spots
// parking lot-orchestrates everything parking and unparking
// parking spot-available or not
// ticket-generate ticket with entry time
// billing service - calculate bill with the help of entry and exit time
// vehicle-types of vehicles with number plate


//ticket class
class Ticket{
    constructor(floorNumber,spot,vehicle){
        this.entryTime=Date.now()
        this.vehicle=vehicle
        this.floorNumber=floorNumber
        this.exitTime=null
        this.spot=spot
    }
}
//vehicle class
class Vehicle{
    constructor(type,number){
        this.type=type
        this.vehicleNumber=number
    }
}

//class parking spot with methods canfit,assign vehicle and remove vehicle
class ParkingSpot{
    constructor(spotId,type){
        this.spotId=spotId
        this.type=type
        this.isAvailable=true
    }
    canFit(vehicle){
        return this.isAvailable && this.type===vehicle.type
    }
    assignVehicle(vehicle){
        this.vehicle = vehicle;
        this.isAvailable=false
    }
    removeVehicle(){
        this.vehicle = null
        this.isAvailable=true
    }
}

//parking floor and responsibilities
class ParkingFloor {
  constructor(floorNumber, spots) {
    this.floorNumber = floorNumber;
    this.spots = spots; // array of ParkingSpot
  }
  findAvailableSpot(vehicle){
      for(const spot of this.spots){
          if(spot.canFit(vehicle)){
              return spot
          }
      }
      return null
  }
}

//billing service
class BillingService{
     static calculateBill(entryTime, exitTime) {
    const hours = Math.ceil((exitTime - entryTime) / (1000 * 60 * 60));
    return hours * 50;
  }
}

//parking lot
class ParkingLot{
    constructor(floors){
        this.floors=floors
    }
    parkVehicle(vehicle){
      for(const floor of this.floors){
          const spot=floor.findAvailableSpot(vehicle)
          if(spot){
              spot.assignVehicle(vehicle)
              const ticket=new Ticket(floor.floorNumber,spot,vehicle)
              return ticket
              console.log("Ticket",ticket)
          }else{
              console.log("No parking spot found")
          }
      }
        
    }
    unparkVehicle(ticket){
        ticket.exitTime=Date.now()
        const amount=BillingService.calculateBill(ticket.entryTime,ticket.exitTime)
        ticket.spot.removeVehicle()
        return amount
        
    }
}


//testing 
const carSpot1=new ParkingSpot(1,"CAR")
const bikeSpot1=new ParkingSpot(2,"BIKE")
const carSpot2=new ParkingSpot(3,"CAR")



const floor1=new ParkingFloor(1,[carSpot1, bikeSpot1])
const floor2=new ParkingFloor(2,[carSpot2])

console.log("floor1",floor1)

const parkingLot=new ParkingLot([floor1,floor2])
console.log("parking lot",parkingLot)

const vehicle=new Vehicle("CAR","APO212345")

const ticket=parkingLot.parkVehicle(vehicle)
console.log("ticket",ticket)



setTimeout(() => {
  const amount = parkingLot.unparkVehicle(ticket);
  console.log("Amount to pay:", amount);
}, 2000);
