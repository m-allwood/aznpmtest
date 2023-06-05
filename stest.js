var Connection = require('tedious').Connection;  
    var config = {  
        server: 'mysqlserver0297.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: '55555', //update me
                password: 'your_password'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'azsqldb'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });

    
    connection.connect();