exports.up = function(knex, Promise) {

	return Promise.all([

				knex.schema.createTable('Utilisateurs', function(table) {
						table.increments('IdUser').primary();
						table.string('Login',50).unique().notNullable();
						table.string('Password',50).notNullable();
						table.string('Role');
						table.integer('AgentMatricule');

				}),

        knex.schema.createTable('Agents', function(table) {
            table.string('Matricule',50).unique().primary();
						table.string('Nom',50).notNullable();
						table.string('Prenom',50).notNullable();
				}),

        knex.schema.createTable('ActionMcdOP', function(table) {
            table.integer('IdAction',50).unique().primary();
						table.string('Decision',250).notNullable();
						table.string('Observation',50).notNullable();
						table.dateTime('Date');
						table.integer('Id_Utilisateur')
								 .unsigned()
                 .references('IdUser')
                 .inTable('Utilisateurs');
				}),
				knex.schema.createTable('CongeMcdOP', function(table) {
            table.string('IdConge',50).unique().primary();
						table.dateTime('DateOP');
						table.integer('EtatOP');
				}),

        knex.schema.createTable('CongeMcd', function(table){
            table.increments('IdCongeMCD').primary();
            table.string('Medecin',50).notNullable();
						table.string('FichierCertificat',250).notNullable();
						table.integer('JourCongeAnnee');
						table.integer('JourMoitieMois');
						table.integer('JourMoitieEmol');
						table.integer('JourSansEmol');
						table.integer('JourFullEmol');
            table.integer('Id_Agent')
								 .unsigned()
                 .references('IdUser')
                 .inTable('Agents');
            table.dateTime('DatePremierConge');
            table.dateTime('DateEffet');
			 			table.dateTime('DateFin');
			 			table.dateTime('DateDepot');
        })
    ])

};

exports.down = function(knex, Promise) {

	return Promise.all([
        knex.schema.dropTable('Agents'),
        knex.schema.dropTable('Certificats')
    ])

};
