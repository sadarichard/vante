// FOR LOOP

const universities = [ 
    "DELSU",
    "OAU", 
    "FUPRE", 
    "UNIPORT", 
    "UNIBEN", 
    "UNIZIK",
];

for(user of universities) {
    console.log(`Hi there, I am an alumnus of ${user}`);
};

for(user of universities) {
    if(user === "UNIBEN") {
        console.log(`Hi, welcome to the alumni page of UNIBEN Students`)
    };
};
