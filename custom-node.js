module.exports = function (RED) {
    function CustomNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            var valueType = config.valueType;
            var value = config.value;

            if (valueType === 'integer') {
                value = parseInt(value);
            } else if (valueType === 'boolean') {
                value = (value.toLowerCase() === 'true');
            }

            msg.payload = value;
            node.send(msg);
        });

        node.on('close', function () {
            // Cleanup tasks if needed
        });
    }

    RED.nodes.registerType('custom-node', CustomNode);
};
