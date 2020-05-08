exports.deviceName = 'witness';
exports.permanent_pairing_secret = '0000';
exports.WS_PROTOCOL = 'ws://';
// exports.hub = 'hub1..com/bb';


exports.hub = '127.0.0.1:8286';

exports.passphrase = 'asdf';

exports.KEYS_FILENAME = 'keys.json';

// exports.hub = 'hub:10060';

exports.rpcPort = '6332';
exports.webPort = 8081; // dag explorer
exports.bServeAsHub = false;
exports.bLight = false;

// witness configuration
exports.bSingleAddress = true;
exports.THRESHOLD_DISTANCE = 1;
exports.MIN_AVAILABLE_WITNESSINGS = 100;
exports.TIMESTAMPING_INTERVAL = 60 * 1000; // in milliseconds

//出快速度
exports.MIN_INTERVAL = 30000;


// exports.admin_email='zz634682577@163.com';
// exports.from_email='wenzhengzhang@chenhaninfo.com';
// exports.smtpTransport ="relay";
// exports.smtpUser='wenzhengzhang@chenhaninfo.com';
// exports.smtpPassword='Aa123123';
// exports.smtpRelay='smtp.mxhichina.com';
// exports.smtpPort='25';


exports.initial_witnesses = [
	"QO62LQRICJLZLI3HS2PXS6N4BEK4RDPY",
	"LJMBYQKXSOLPLLMD4JIMMNODBEMWWUGN",
	"IBBRYL5V5PUKJO7IH7HH4VRK5GJ5XYGQ",
	"HXSWP2FR5MAE2OJECZHTFFPWZ24H3P3B"
];







