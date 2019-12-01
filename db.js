
const mysql=require('mysql');

function connect()
{
    const connection=mysql.createConnection({
        host:"192.168.1.110",
        user:"root",
        password:"root",
        database:"myapp_db",
        port:7878   //forwarded port of mysql
    })

    connection.connect();
    return connection;
}

module.exports={
    connect:connect
}
