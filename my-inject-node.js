module.exports = function(RED) {
    function MyInjectNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            var payload;
            if (config.type === "string") {
                payload = config.value;
            } else if (config.type === "number") {
                payload = Number(config.value);
            } else if (config.type === "boolean") {
                payload = (config.value.toLowerCase() === "true");
            } else {
                payload = config.value;
            }
            msg.payload = payload;
            node.send(msg);
        });
    }
    RED.nodes.registerType("my-inject-node",MyInjectNode);
}
