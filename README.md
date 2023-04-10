# An HTTP/HTTPS Proxy Client

HTTP/HTTPS Proxy Client for NodeJS applications.

## Usage

```node
const { ProxyClient } = require("proxy-client-nodejs");

var proxyOpts = {
    hostname: "<proxy_hostname>",
    port: <proxy_port>, // numeric
    username: "<proxy_username>",
    password: "<proxy_password>",
    type: "https" // default HTTPS
};

var client = new ProxyClient(proxyOpts);

var requestOpts = {
    hostname: "<request_hostname>",
    path: "<request_path>",
    method: "<request_method>",
    headers: {
        // request headers
    }
}

var req = client.request(requestOpts, res => {
    // after request is completed
});
req.write(); // data to be sent
req.end();
```

## Requirements

NodeJS version ^18.12.1.

**Enjoy!**