const mysql = require('mysql');
const axios = require('axios');

async function myFetch(){
    const config = await axios.get('https://ube-zebra-9736.twil.io/getcredientials')
    const db = new Database(config.data);
    db.connection.connect();
    /*
        const user = {
        phone_number:'++13098787432',
        first_name: 'Happy',
        last_name:'debugging'
     }
     const users = await db.query('insert into users set ?',user);
    */
    const users = await db.query('select * from users');
    await db.close();
    console.log(users);
}
   	        
   	myFetch().catch (err =>{console.log(err);});                
class Database {
    constructor( config ) {
        console.log("-----------------------------------------");
        console.log(config);
        console.log("-----------------------------------------");
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
