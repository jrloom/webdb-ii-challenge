exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "1234",
          make: "Ford",
          model: "Fiesta",
          mileage: "90,000",
          transType: "Manual",
          titleStatus: "Available"
        },
        {
          id: 2,
          vin: "5678",
          make: "Fiat",
          model: "500",
          mileage: "120,000",
          transType: "Clutchless Manual",
          titleStatus: "Framed"
        },
        {
          id: 3,
          vin: "9012",
          make: "Kia",
          model: "Soul",
          mileage: "50,000",
          transType: "Automatic",
          titleStatus: "Eaten by dog"
        }
      ]);
    });
};
