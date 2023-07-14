// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

// https://www.codewars.com/kata/56a29b237e9e997ff2000048

const rooms = {
    bedroom: {
      name: 'Bedroom',
      description: 'For... sleeping',
      completed: true,
    },
    bathroom: {
      name: 'Bathroom',
      description: 'This will get you clean',
      completed: false,
    },
    kitchen: {
      name: 'Kitchen',
      description: 'Hungry? Why wait?',
      completed: true,
    },
  }