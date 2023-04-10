import { request as httpRequest } from "http";
import { request as httpsRequest, RequestOptions } from "https";

class ProxyClient {
    options: {};
    constructor(options: {}) {
        this.options = options;
    }
    public request(options: RequestOptions, callback) {
        var {host, hostname, path, method, headers, protocol} = options;
        if(host) {
            hostname = host;
        }
        if(!hostname) {
            throw new Error("Host or Hostname not provided");
        }
        if(!headers) {
            headers = {};
        }
        if(this.options["username"]) {
            Object.assign(headers, {'Proxy-Authorization': 'Basic ' + Buffer.from(this.options["username"] + ':' + this.options["password"]).toString('base64')});
        }
        if(this.options["type"] === "http") {
            return httpRequest({
                "hostname": this.options["hostname"],
                "port": this.options["port"],
                "path":  (protocol ? protocol + "://" : "https://") + hostname + (path[0] === "/" ? path : "/" + path),
                "method": method,
                "headers": headers
            }, callback);
        }
        return httpsRequest({
            "hostname": this.options["hostname"],
            "port": this.options["port"],
            "path":  (protocol ? protocol + "://" : "https://") + hostname + (path[0] === "/" ? path : "/" + path),
            "method": method,
            "headers": headers
        }, callback);
    };
}

export { ProxyClient };