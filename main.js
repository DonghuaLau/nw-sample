var Imap = require('imap'),
    inspect = require('util').inspect;

var imap = new Imap({
  user: '519916178@qq.com',
  password: 'HUA9537PX',
  host: 'imap.qq.com',
  port: 993,
  tls: true
});

/*
function openInbox(cb) {
  imap.openBox('INBOX', true, cb);
}

imap.once('ready', function() {
	console.log('imap ready');
});

imap.once('error', function(err) {
  console.log(err);
});

imap.once('end', function() {
  console.log('Connection ended');
});
*/

imap.connect();
console.log('imap connect');