//OBJECT

const person = {
    firstName: "Eseoghene",
    middleName: "Richard",
    lastName: "Sada-Okpaka",
    age: 33,
    status: "Married",
    occupation: "Pharmacist",
    properties: ["phones", "TVs", "Wrist watches"],

    fullName: function() {
        console.log(this.firstName + " " + this.middleName + " " + this.lastName);
    }
};

console.log(person);
person.fullName();


// FOR LOOP

let churches = [
    "GKS",
    "GKM",
    "LIVING FAITH",
    "REDEEMED",
    "MOUNTAIN OF FIRE",
];

for(user of churches) {
    console.log(`I am a member of ${user}`);
};

for(user of churches) {
    if(user === "GKS") {
        console.log(`I am a proud member of GKS`)
    };
};
