module.exports = function(RED) {
    function MyInjectNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            // Inject the predefined payload
            msg.payload = config.payload;
            node.send(msg);
        });
    }
    RED.nodes.registerType("my-inject-node",MyInjectNode);
}
