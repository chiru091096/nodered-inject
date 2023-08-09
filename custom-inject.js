module.exports = function(RED) {
    function CustomInjectNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function(msg) {
            // Set the type and value from the configured values
            msg.type = config.type;
            msg.value = config.value;

            // Send the modified message
            node.send(msg);
        });
    }
    RED.nodes.registerType("custom-inject", CustomInjectNode);
}
