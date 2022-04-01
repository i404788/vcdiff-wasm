let _encoder = null
const encoder = (dict, target) => {
    const dict_ptr = _encoder.__Z13create_bufferi(dict.length)
    _encoder.HEAP8.set(dict, dict_ptr);

    const target_ptr = _encoder.__Z13create_bufferi(target.length)
    _encoder.HEAP8.set(target, target_ptr);

    _encoder.__Z6encodePhiS_i(dict_ptr, dict.length, target_ptr, target.length);

    const resultPointer = _encoder.__Z18get_result_pointerv();
    const resultSize = _encoder.__Z15get_result_sizev();
    const resultView = new Uint8Array(_encoder.HEAP8.buffer, resultPointer, resultSize);
    const result = new Uint8Array(resultView);

    _encoder.__Z14destroy_bufferPh(dict_ptr)
    _encoder.__Z14destroy_bufferPh(target_ptr)
    _encoder.__Z4freev();

    return result;
}

module.exports = () => {
    return new Promise((resolve) => {
        const Module = {};
        Module.onRuntimeInitialized = () => {
            _encoder = Module
            resolve(encoder);
        }
        require('./lib/libvcdenc')(Module);
    })
}
