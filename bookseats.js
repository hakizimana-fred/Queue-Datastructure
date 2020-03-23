        /*This script sits passengers in order
        * lets say, a passenger books first, he gets the first seat and so on...
        */
       function Bookings(){
        this.bookings = []
    }

    Bookings.prototype.serveSeats = function(seatNumber){
        return this.bookings.push(seatNumber)
    }

    Bookings.prototype.serveInOrder = function(){
        return this.bookings.shift()
    }

    function Passenger(name, seatNumber){
        this.name = name
        this.seatNumber = seatNumber
    }

    
  function IssueTickets(passenger){
      this.passenger = new Bookings()
  }  

  
  IssueTickets.prototype.orderBookSeats = function(passenger){
      this.passenger.serveSeats(passenger)
  }

  IssueTickets.prototype.readInOrder = function(){
      console.log(this.passenger.serveInOrder().name, 'ticket has been issued')
  }

  const issueTicket = new IssueTickets()
  const passenger1 = new Passenger('Hacky', 1)
  const passenger2 = new Passenger('Sally', 2)
  const passenger3 = new Passenger('Urther', 3)

  issueTicket.orderBookSeats(passenger1)
  issueTicket.orderBookSeats(passenger2)
  issueTicket.orderBookSeats(passenger3)

  issueTicket.readInOrder()
  issueTicket.readInOrder()
  issueTicket.readInOrder()