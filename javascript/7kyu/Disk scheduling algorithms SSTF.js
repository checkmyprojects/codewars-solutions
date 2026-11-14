// https://www.codewars.com/kata/63e50629be9fe90024f3a749

// Disk scheduling algorithms are techniques used by operating systems to determine the order in which read and write requests are serviced by a hard disk drive (HDD). Their primary objective is to reduce seek time, which is the time required for the disk head to move between tracks, thereby improving overall system performance and throughput.
// The SSTF disk scheduling algorithm

// The shortest seek time first (SSTF) disk scheduling algorithm services the I/O request that is closest to the current position of the disk head. By always selecting the request with the shortest seek distance, it reduces the total head movement and generally provides better performance than other methods. However, requests that are far from the current head position may experience long waiting times, potentially leading to starvation.

// Your task is to implement this algorithm. The function will take two parameters as input: a request queue, a list of integers representing the disk locations that must be accessed to fulfill the pending I/O requests, and the initial head position, an integer representing the starting position of the disk head. At each step, the function should select and service the pending request that is closest to the current head position. This process continues until all requests have been serviced. When two or more pending requests are at the same distance from the current head position, the algorithm should service the one that appears first in the request queue.

// The expected output is the total head movement, represented as an integer corresponding to the sum of all head movements required to service the requests in the queue.
// Example:

// Given:

//     REQUEST QUEUE = [98, 183, 37, 122, 14, 124, 65, 67],
//     INITIAL HEAD POSITION = 53,

// The head moves from 53 to 65 -> +12 head movement;
// The head moves from 65 to 67 -> +2 head movement;
// The head moves from 67 to 37 -> +30 head movement;
// The head moves from 37 to 14 -> +23 head movement;
// The head moves from 14 to 98 -> +84 head movement;
// The head moves from 98 to 122 -> +24 head movement;
// The head moves from 122 to 124 -> +2 head movement;
// The head moves from 124 to 183 -> +59 head movement;
// The total head movement is 236.

function sstf(requestQueue, initialHeadPosition) {
  const queue = [...requestQueue];
  let head = initialHeadPosition;
  let total = 0;
  
  while (queue.length > 0) {
    let minDist = Infinity;
    let minIdx = 0;
    for (let i = 0; i < queue.length; i++) {
      const dist = Math.abs(queue[i] - head);
      if (dist < minDist) {
        minDist = dist;
        minIdx = i;
      }
    }
    total += minDist;
    head = queue[minIdx];
    queue.splice(minIdx, 1);
  }
  
  return total;
}