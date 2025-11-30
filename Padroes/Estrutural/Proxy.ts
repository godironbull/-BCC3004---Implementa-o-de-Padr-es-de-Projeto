interface ManageRequest {
    requestData(data: string): void;
}

class RealRequest implements ManageRequest {
    requestData(data: string): void {
        console.log(`RealRequest: Handling request with data: ${data}`);
    }
}

class ProxyRequest implements ManageRequest {
    private realRequest: RealRequest;
    private locked: boolean = false;
    constructor() {
        this.realRequest = new RealRequest();
        this.locked = false;
    }

    requestData(data: string): void {
        if (this.locked) {
            console.log("ProxyRequest: Request is locked. Cannot proceed.");
            return;
        }else{
            console.log(`ProxyRequest: Logging request with data: ${data}`);
            this.realRequest.requestData(data);
            this.locked = true; // Lock after first request
        }
        
    }
}
// Usage
const proxy = new ProxyRequest();
proxy.requestData("Sample Data");
// Output:
// ProxyRequest: Logging request with data: Sample Data
// RealRequest: Handling request with data: Sample Data