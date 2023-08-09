module.exports = function(RED) {
    function MyInjectNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function(msg) {
            // Use the payload and topic from the input message or the configured values
            msg.payload = msg.payload || config.payload;
            msg.topic = msg.topic || config.topic;
            node.send(msg);
        });
    }
    RED.nodes.registerType("my-inject", MyInjectNode);
}
