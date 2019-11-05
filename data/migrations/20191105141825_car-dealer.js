
exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();

        table.string('VIN', 128).notNullable();
        table.string('make', 128).notNullable();
        table.string('model', 128).notNullable();
        table.integer('mileage', 64).notNullable();
        table.string('transmission', 128)
        table.string('title staus', 128)
        table.timestamps();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists(cars)
};
