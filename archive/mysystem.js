var os = require('os');

var message = 'Here is some system info';

var sysArray = new Array('Type: '+ os.type(), 
						  'Node Ver: ' 		+ process.version,
						  'Platform: '		+ os.platform(),
						  'Host Name: ' 	+ os.hostname(),
						  'Total Memory: '	+ os.totalmem(),
						  'Free Memory: ' 	+ os.freemem(),
						  'Up Time:	'		+ os.uptime()
						  );

console.log(message);

var arraylen = sysArray.length;

var i = 0;

while(i<arraylen)	{
	console.log(sysArray[i]);
	i++;
}					  
