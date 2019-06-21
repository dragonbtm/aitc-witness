exports.deviceName = 'witness';
exports.permanent_pairing_secret = '0000';
exports.WS_PROTOCOL = 'ws://';
// exports.hub = 'hub1..com/bb';


//exports.hub = '132.148.150.38:8286';
exports.KEYS_FILENAME = 'keys.json';

exports.hub = 'hub:10060';

exports.rpcPort = '10063';
exports.webPort = 10064; // dag explorer
exports.bServeAsHub = false;
exports.bLight = false;

// witness configuration
exports.bSingleAddress = true;
exports.THRESHOLD_DISTANCE = 1;
exports.MIN_AVAILABLE_WITNESSINGS = 100;
exports.TIMESTAMPING_INTERVAL = 60 * 1000; // in milliseconds

//出快速度
exports.MIN_INTERVAL = 30000;


exports.admin_email='zz634682577@163.com';
exports.from_email='wenzhengzhang@chenhaninfo.com';
exports.smtpTransport ="relay";
exports.smtpUser='wenzhengzhang@chenhaninfo.com';
exports.smtpPassword='Aa123123';
exports.smtpRelay='smtp.mxhichina.com';
exports.smtpPort='25';


exports.initial_witnesses = [
	'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S',
	'QLKAIB33R7AVHABYC5PGER2LLIVH5YE2',
	'IOOOMPPD6FRHTNQBK763EAFUCIRJZYMP'
];







