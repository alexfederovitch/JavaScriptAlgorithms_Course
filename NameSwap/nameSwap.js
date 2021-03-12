// Name Swap
 
// Challenge
  // Reverse the order of two provided strings.
 
// Examples
  // "Abraham Lincoln" ➞ "Lincoln Abraham"
  // "Hank Aaron" ➞ "Aaron Hank"

const nameSwap = (name) => {
  let newName = name.split(" ").reverse().join(" ")
  return newName
}
