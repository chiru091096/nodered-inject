module.exports = function (RED) {
    function CustomNode(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        this.on('input', function (msg) {
            // Set msg.type and msg.value based on the node's configuration
            msg.type = node.type || "";
            msg.value = node.value || "";
            node.send(msg);
        });
    }
    RED.nodes.registerType('custom-node', CustomNode);
};
