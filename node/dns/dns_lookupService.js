const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
      // localhost ssh
    console.log(hostname, service);
})