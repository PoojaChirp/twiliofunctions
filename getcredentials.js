// Fetch configuation data entered in the config dashboard

exports.handler = function(context, event, callback) {
    const config = {
        host: context.host,
        port: context.port,
        user: context.user,
        password: context.password,
        database: context.database
    };
    
     callback(null,config);
}
