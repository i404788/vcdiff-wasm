let _decoder = null
const decoder = (dict, delta) => {
    const dict_ptr = _decoder.__Z13create_bufferi(dict.length)
    _decoder.HEAP8.set(dict, dict_ptr);

    const delta_ptr = _decoder.__Z13create_bufferi(delta.length)
    _decoder.HEAP8.set(delta, delta_ptr);

    _decoder.__Z6decodePhiS_i(dict_ptr, dict.length, delta_ptr, delta.length);

    const resultPointer = _decoder.__Z18get_result_pointerv();
    const resultSize = _decoder.__Z15get_result_sizev();
    const resultView = new Uint8Array(_decoder.HEAP8.buffer, resultPointer, resultSize);
    const result = new Uint8Array(resultView);

    _decoder.__Z14destroy_bufferPh(dict_ptr)
    _decoder.__Z14destroy_bufferPh(delta_ptr)
    _decoder.__Z4freev();

    return result;
}

module.exports = () => {
    return new Promise((resolve) => {
        const Module = {};
        Module.onRuntimeInitialized = () => {
            _decoder = Module
            resolve(decoder);
        }
        require('./lib/libvcddec')(Module);
    })
}
