/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Philippe Leefsma 2014 - ADN/Developer Technical Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var api = require('./routes/api');
var express = require('express');

var app = express();

app.use('/node/mongo', express.static(__dirname + '/www'));
app.use(favicon(__dirname + '/www/resources/img/favicon.ico'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/node/mongo/api', api);



var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3002
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

//app.set('port', process.env.PORT || 3000);

var server = app.listen(server_port, server_ip_address, function() {

    console.log('Server listening on port ' +
        server.address().port);
});


//mongodump -h ds031701.mongolab.com:31701 -d adn-viewer-mongodb-public -u adnviewermongodbuser -p V&DApiRocks! -o adn-viewer-mongodb
