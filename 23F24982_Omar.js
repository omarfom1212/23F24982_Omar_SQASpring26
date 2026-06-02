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
    case "Finance":
        sectorName = "Finance";
        break;
    default:
        sectorName = "Invalid Sector";
}

if (growthRate >= 15) {
    demandLevel = "High Hiring Demand";
} else if (growthRate >= 5) {
    demandLevel = "Moderate Hiring Demand";
} else {
    demandLevel = "Low Hiring Demand";
}

console.log("Selected Sector: " + sectorName);
console.log("Predicted Result: " + demandLevel);
