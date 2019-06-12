const _decoder = require('./libvcddec')
let decoder = (dict, delta) => {
    const dict_ptr = _decoder.__Z13create_bufferi(dict.length)
    _decoder.HEAP8.set(dict, dict_ptr);

    const delta_ptr = _decoder.__Z13create_bufferi(delta.length)
    _decoder.HEAP8.set(delta, delta_ptr);
    _decoder.__Z6decodePhiS_i(dict_ptr, dict.length, delta_ptr, delta.length);

    const resultPointer = _decoder.__Z18get_result_pointerv();
    const resultSize = _decoder.__Z15get_result_sizev();
    const resultView = new Uint8Array(_decoder.HEAP8.buffer, resultPointer, resultSize);
    const result = new Uint8Array(resultView);
    _decoder.__Z4freev();
    return result;
}
const _encoder = require('./libvcdenc')
let encoder = (dict, target) => {
    const dict_ptr = _encoder.__Z13create_bufferi(dict.length)
    _encoder.HEAP8.set(dict, dict_ptr);

    const target_ptr = _encoder.__Z13create_bufferi(target.length)
    _encoder.HEAP8.set(target, target_ptr);

    _encoder.__Z6encodePhiS_i(dict_ptr, dict.length, target_ptr, target.length);

    const resultPointer = _encoder.__Z18get_result_pointerv();
    const resultSize = _encoder.__Z15get_result_sizev();
    const resultView = new Uint8Array(_encoder.HEAP8.buffer, resultPointer, resultSize);
    const result = new Uint8Array(resultView);
    _encoder.__Z4freev();
    return result;
}

module.exports = {
    decoder,
    encoder
}