exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.integer("carID").unsigned();
    tbl.foreign("carID").references("sales.carID");
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("carID");
  });
};
