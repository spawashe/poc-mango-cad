/**
 * Created by leefsmp on 2/19/15.
 */

//This sample is using a sample mongodb hosted on mongolab.com
//You can change to your own mongo database

var config = {};

//config.user = 'adnviewermongodbuser';
//config.pass = 'V&DApiRocks!';
//config.host = 'ds031701.mongolab.com';
//config.port = 31701;
//config.db = 'adn-viewer-mongodb-public';
//config.productsCollection = 'invproducts';

/*
config.user = '';
config.pass = '';
config.host = 'localhost';
config.port = 27017;
config.db = 'local';
config.productsCollection = 'invproducts';

*/

config.user = 'admin';
config.pass = 'admin';
config.host = 'ds031671.mongolab.com';
config.port = 31671;
config.db = 'satish-bom-demo';
config.productsCollection = 'invproducts';

//To connect using the shell:
  //mongo ds031671.mongolab.com:31671/satish-bom-demo -u <dbuser> -p <dbpassword>
//To connect using a driver via the standard URI (what's this?):
  //mongodb://<dbuser>:<dbpassword>@ds031671.mongolab.com:31671/satish-bom-demo

module.exports = config;