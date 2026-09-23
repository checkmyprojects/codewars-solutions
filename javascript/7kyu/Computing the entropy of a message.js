// https://www.codewars.com/kata/6925ba5fcee28ebed6e18e7d

// Computing the entropy of a message
// Information Theory

// In information theory, entropy is a measure of the uncertainty or randomness in a message. Entropy measures the average information per symbol: higher entropy means more unpredictability. Claude Shannon defined it in 1948. The Shannon entropy is calculated as:

// H=−∑pi⋅log2(pi)H = - \sum p_i \cdot log_2(p_i)H=−∑pi​⋅log2​(pi​)

// where pip_ipi​ is the probability of symbol iii in the message. To calculate pip_ipi​ count how many times each symbol appears in the message and divide by the total number of symbols. Each unique symbol should only be considered once in the sum. Note: spaces are not considered as informative symbols.

// For example in the message "foo" :

//     f appears 1 time out of 3 symbols: pf=1/3p_f = 1/3pf​=1/3
//     o appears 2 times out of 3 symbols: po=2/3p_o = 2/3po​=2/3

// Thus, the entropy is: −(1/3⋅log2(1/3)+2/3⋅log2(2/3))≈0.918295834 -( 1/3 \cdot log_2(1/3) + 2/3 \cdot log_2(2/3) ) \approx 0.918295834 −(1/3⋅log2​(1/3)+2/3⋅log2​(2/3))≈0.918295834

// Watch a video about Shannon entropy for more context.
// Use Case

// You are analyzing a collection of messages from different sources and want to determine which ones are more compressible. By calculating the entropy of each message, you can estimate their unpredictability: messages with lower entropy contain more repeated or predictable patterns and are therefore easier to compress, while messages with higher entropy are more random and less compressible. This allows you to prioritize storage or transmission strategies based on how efficiently each message can be handled.
// Task

// Write a function that receives a message (string) and returns the Shannon entropy (float) of the message.
// Notes

//     Use the math library for logarithm calculations
//     If the message is empty, return 0.0

function entropy(message) {
    const counts = new Map();
    let symbolCount = 0;
  
    for (const symbol of message) {
      if (symbol === " ") continue;
  
      symbolCount += 1;
      counts.set(symbol, (counts.get(symbol) || 0) + 1);
    }
  
    if (symbolCount === 0) return 0.0;
  
    let entropyValue = 0.0;
  
    for (const count of counts.values()) {
      const probability = count / symbolCount;
      entropyValue -= probability * Math.log2(probability);
    }
  
    return entropyValue;
}