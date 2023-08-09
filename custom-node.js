module.exports = function (RED) {
    function CustomNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg) {
            msg.type = config.type;
            msg.value = config.value;
            this.send(msg);
        });
    }
    RED.nodes.registerType('custom-node', CustomNode);
};
