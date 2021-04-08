const age = 28;
const isFemale = true;
const driverStatus = "bob";
const name = "bramr";
const totalAmount = 126;

if (age >= 18) {
    console.log("je mag naar binnen");
}
else {
    console.log("je mag niet naar binen");
}
if (isFemale == true) {
    console.log("je bent een vrouw");
}
else {
    console.log("je bent een man");
}
if (driverStatus == "bob") {
    console.log("je bent de bob je mag rijden");
}
else {
    console.log("je mag niet rijden");
}
if (age >= 18 && age <= 25) {
    console.log("je krijgt 50% korting");
}
else {
    console.log("je krijgt geen kroting");
}
if (name === "bram" || name === "sarah") {
    console.log("je krijgt een gratis biertje");
}
else {
    console.log("helaas geen gratis bier");
}
if (totalAmount >= 25 && totalAmount <= 50)
    console.log("gratis bitterballen");
else if (totalAmount >= 50 && totalAmount <= 100)
    console.log("gartis nachos");
else if (totalAmount >= 100) {
    console.log("gratis champagne");
}

