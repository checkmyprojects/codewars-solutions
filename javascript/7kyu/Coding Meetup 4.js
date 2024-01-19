// https://www.codewars.com/kata/5827bc50f524dd029d0005f2

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

//     < firstName here >, < country here > of the first Python developer who has signed up; or
//     There will be no Python developers if no Python developer has signed up.

function getFirstPython(list) {
    for (var i=0; i<list.length; ++i)
      if (list[i].language=='Python')
        return list[i].firstName+', '+list[i].country;
    return 'There will be no Python developers';
  }