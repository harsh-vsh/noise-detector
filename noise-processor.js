class NoiseProcessor extends AudioWorkletProcessor {
    process(inputs) {
        const input = inputs[0];
        if (input.length > 0) {
            let sum = input[0].reduce((acc, val) => acc + Math.abs(val), 0);
            let avg = sum / input[0].length;
            if (avg > 0.20) { // Adjust sensitivity
                this.port.postMessage('LOUD');
            }
        }
        return true;
    }
}
registerProcessor('noise-processor', NoiseProcessor);
