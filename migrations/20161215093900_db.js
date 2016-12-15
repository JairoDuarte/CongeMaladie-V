
exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.table('CongeMcd', function(table) {
            table.dropColumn('JourMoitieMois');
            table.renameColumn('JourCongeAnnee', 'JoursCongeAnnee');
        })

    ]);
};

exports.down = function(knex, Promise) {

    return Promise.all([
        knex.schema.table('CongeMcd', function(table) {
            table.integer('JourMoitieMois');
            table.renameColumn('JoursCongeAnnee', 'JourCongeAnnee')
        })
    ])

};
