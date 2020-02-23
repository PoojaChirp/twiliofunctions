const mysql = require('mysql');
const axios = require('axios');

exports.handler = function(context, event, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    async function myFetch(){
    const config = await axios.get('https://ube-zebra-9736.twil.io/getcredientials')
    const db = new Database(config.data);
    db.connection.connect();
    const users = await db.query('select * from users');
    await db.close();
     callback(null, users);
    }
   	        
   	myFetch().catch (err =>{
   	        callback(null, err);
   	});      
}
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}