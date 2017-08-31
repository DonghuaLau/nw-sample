
function test_imap()
{
	var Imap = require('imap'),
	    inspect = require('util').inspect;
	
	/*
	var imap = new Imap({
	  user: '519916178@qq.com',
	  password: 'HUA9537PX',
	  host: 'imap.qq.com',
	  port: 993,
	  tls: true
	});
	*/
	var imap = new Imap({
	  user: 'laudonghua@gmail.com',
	  password: 'px9537hua',
	  host: 'imap.gmail.com',
	  port: 993,
	  tls: true
	});
	
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
	

 try {
	imap.connect();
	console.log('imap connect');
  } catch (ex) {
    //callback(ex);
	console.dir(ex);
	alert('exception');
  }
	
}

function test_imap_2()
{

	var imaps = require('imap-simple');
	
	var config = {
	    imap: {
	        user: '519916178@qq.com',
	        password: 'HUA9537PX',
	        host: 'imap.qq.com',
	        port: 993,
	        tls: true,
	        authTimeout: 3000
	    }
	};
	
	imaps.connect(config).then(function (connection) {
	var message = "Content-Type: text/plain" 
				+ "To: jhannes@gmail.com"
				+ "Subject: Hello world"
				+ "\n\r"	
				+ "Hi"
				+ "This is a test message";
	  connection.append(message.toString(), {mailbox: 'Drafts', flags: '\\Draft'});
	});
	
}

function addjQuery() {
  if (!window.jQuery) {
    var jq = document.createElement("script");
    jq.type = "text/javascript";
    jq.src = "js/jquery-3.2.1.min.js";
    document.getElementsByTagName("head")[0].appendChild(jq);
    jq.onload = initjQuery;
    console.log("jQuery is loaded!");
  } else {
    console.log("jQuery already exists.")
  }
}

function initjQuery () {
  jQuery(function($) {
    jQuery(document).ready(function() { 
		alert("hello");
	});

  });
}

//addjQuery();

jQuery(document).ready( function(){


	jQuery("#btn-imap").click( function(){
		//test_imap_2();
		test_imap();
	});
});
