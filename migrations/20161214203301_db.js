
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
            table.string('Matricule',50).primary();
						table.string('Nom',50).notNullable();
						table.string('Prenom',50).notNullable();
						table.integer('IdCongeMCDActuel');

				}),
				knex.schema.createTable('CongeMcd', function(table){
            table.increments('IdCongeMCD').primary();
            table.string('Medecin',50).notNullable();
						table.string('FichierCertificat',250);
						table.integer('JourCongeAnnee');
						table.integer('JourMoitieMois');
						table.integer('JourMoitieEmol');
						table.integer('JourSansEmol');
						table.integer('JourFullEmol');
            table.string('MatriculeAgent')

                 .references('Matricule')
                 .inTable('Agents');
            table.dateTime('DatePremierConge');
            table.dateTime('DateEffet');
			 			table.dateTime('DateFin');
			 			table.dateTime('DateDepot');
        }),

				knex.schema.createTable('CongeMcdOP', function(table) {
            table.increments('IdConge').primary();
						table.dateTime('DateOP');
						table.integer('EtatOP');
						table.integer('IdCongeMcdAncien')
								 .unsigned()
                 .references('IdCongeMCD')
                 .inTable('CongeMcd');
					  table.integer('IdCongeMCDNouveau')
	 					  	 .unsigned()
	 						   .references('IdCongeMCD')
	 						   .inTable('CongeMcd');
				}),


        knex.schema.createTable('ActionMcdOP', function(table) {
            table.increments('IdAction').primary();
						table.string('Decision',250);
						table.string('Observation',50);
						table.dateTime('Date');
						table.integer('Id_Utilisateur')
								 .unsigned()
                 .references('IdUser')
                 .inTable('Utilisateurs');
						 table.integer('IdCongeOP')
 								 	.unsigned()
                	.references('IdConge')
                  .inTable('CongeMcdOP');
				})

			])

};

exports.down = function(knex, Promise) {

	return Promise.all([
        knex.schema.dropTable('ActionMcdOP'),
        knex.schema.dropTable('CongeMcdOP'),
        knex.schema.dropTable('CongeMcd'),
        knex.schema.dropTable('Agents'),
	      knex.schema.dropTable('Utilisateurs')
    ])

};
