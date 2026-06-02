let sector = "IT";
let growthRate = 18;
let sectorName;
let demandLevel;

switch (sector) {
    case "IT":
        sectorName = "Information Technology";
        break;
    case "Healthcare":
        sectorName = "Healthcare";
        break;
    case "Education":
        sectorName = "Education";
        break;
    default:
        sectorName = "Invalid Sector";
}

if (growthRate >= 20) {
    demandLevel = "High Hiring Demand";
} else if (growthRate >= 10) {
    demandLevel = "Moderate Hiring Demand";
} else {
    demandLevel = "Low Hiring Demand";
}

console.log("Selected Sector: " + sectorName);
console.log("Predicted Result: " + demandLevel);
