/*
Given an a proposed seating arrangement, based on where you are seated, find the total number of seats behind you, in front of you, the entire area to your left and right.
0 represents a non-seat
1 represents an occupied seat
// 2 represents your location
[3,2]

const seatingArragement1 = [
  [0,0,1,1,1,1,0,0]  4
  [0,1,1,1,1,1,0,0]  5
  [1,1,1,1,1,1,1,1]  8
  [1,1,1,1,1,1,1,1]  8
  [0,1,1,1,1,1,1,0]  6
  [0,0,1,1,1,1,0,0]  5
]
findSeatingArea(seatingArrangement) => [6, 2, 3, 23]


*/

const seating = [
  [1,1,1],
  [1,1,1],
  [1,1,1]
]

const position = [2,2]

const findSeatingArea = (seating, position) => {
  let seats = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

  let countSeats = (coordinates) => {
    if(!!coordinate) {
      
    }
  }

  return seats;
}