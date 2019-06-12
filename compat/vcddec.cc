#include <emscripten.h>
#include <string>
#include <google/vcdecoder.h>
#include "common.h"

int result[3];

EMSCRIPTEN_KEEPALIVE
int decode(uint8_t *dict, int dict_size, uint8_t *delta, int delta_size)
{
    std::string *target = new std::string();
    std::string delta_str((char*)delta, delta_size);
    open_vcdiff::VCDiffDecoder decoder;
    decoder.Decode((char*)dict, dict_size, delta_str, target);
    result[0] = (int)target->data();
    result[1] = target->length();
    result[2] = (int)delta;
    return 0;
}

EMSCRIPTEN_KEEPALIVE
int free()
{
    if ((std::string *)result[2] != nullptr)
        delete (std::string *)result[2];
    return 0;
}

EMSCRIPTEN_KEEPALIVE
int get_result_pointer()
{
    return result[0];
}

EMSCRIPTEN_KEEPALIVE
int get_result_size()
{
    return result[1];
}
