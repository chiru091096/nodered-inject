module.exports = function(RED) {
    function CustomNode(config) {
        RED.nodes.createNode(this, config);
        this.type = config.type;
        this.value = config.value;

        var node = this;

        // Logic for processing input and emitting output
        // You can access 'node.value' and perform your desired operations here

        // Example: Send the value to the output
        node.on('input', function(msg) {
            msg.payload = node.value;
            node.send(msg);
        });
    }

    RED.nodes.registerType("custom-node", CustomNode);
}
