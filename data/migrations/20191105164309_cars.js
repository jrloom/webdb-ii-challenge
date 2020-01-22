exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("vin", 17)
      .unique()
      .notNullable();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.string("mileage", 7).notNullable();
    tbl.text("transType", 128);
    tbl.text("titleStatus", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
