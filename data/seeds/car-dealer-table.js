
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, VIN: '321ADSF564', make: 'chrystler', model: '300', mileage: 140325, transmission: 'strong like bull', title_status: 'salvage' }
      ]);
    });
};
