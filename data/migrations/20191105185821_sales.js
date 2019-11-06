exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments("carID");
    tbl.date("dateSold");
    tbl.float("price");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
