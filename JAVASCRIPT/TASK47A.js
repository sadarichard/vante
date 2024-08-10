// OBJECT

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


