let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true; // change this to test
let age = 19; 

  if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly) {
  console.log(`Race number ${raceNumber}, you will race at 9:30 am.`);
} 
else if (age > 18 && !registeredEarly) {
  console.log(`Race number ${raceNumber}, you will race at 11:00 am.`);
} 
else if (age < 18) {
  console.log(`Race number ${raceNumber}, you will race at 12:30 pm.`);
} 
else {
  console.log(`Race number ${raceNumber}, please see the registration desk.`);
}