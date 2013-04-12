exports.dev = {
    port: 3000,
    client_port: 3000,
    mongoose_auth: 'mongodb://mongodb@localhost/subway'
}

exports.prod = {
    port: 3000, // Nodester port
    client_port: 3000, // Websockets talk on port 80 on Nodester, regardless of listen port
    mongoose_auth: process.env.MONGOOSE_AUTH
}

exports.misc = {
  max_log_size: 32000
}