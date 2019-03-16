function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
  
 function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

 return `Currently serving ${line.shift()}.`
}

function currentLine(line) {

 const whosInLine = []
 
  
 if (!line.length) {
return "The line is currently empty."
 }
  
 for (let i = 0, l = takeANumber; i < l; i++) {
    takeANumber.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${whosInLine.join(', ')}`

  }
  
  // 2 part: total current ticket number of tickets + current position in line
  
  

  
  
  function johnLennonFacts(facts) {
  const jlFacts = []

  let i = 0
  while (i < facts.length) {
    jlFacts.push(`${facts[i]}!!!`)
    i++
  }
  
  
  function positionInLine (line, number) {
  const TotalTickets = []
  
  let i = 0
  while (i < takeANumber) { 
    takeANumber.push(`Your order will be ready soon! Your ticket number is ${TodaysTickets(i)} and your currently ${currentLine} in line.`) 
  
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
  