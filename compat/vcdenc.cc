#include "common.h"
#include <emscripten.h>
#include <google/vcencoder.h>
#include <string>

int result[3];

EMSCRIPTEN_KEEPALIVE
int encode(uint8_t *dict, int dict_size, uint8_t *target, int target_size) {
  open_vcdiff::VCDiffEncoder encoder((char *)dict, dict_size);
  encoder.SetFormatFlags(open_vcdiff::VCD_FORMAT_INTERLEAVED);
  std::string *delta = new std::string();
  encoder.Encode((char *)target, target_size, delta);
  result[0] = (int)delta->data();
  result[1] = delta->length();
  result[2] = (int)delta;
  return 0;
}

EMSCRIPTEN_KEEPALIVE
int free() {
  if ((std::string *)result[2] != nullptr)
    delete (std::string *)result[2];
  return 0;
}

EMSCRIPTEN_KEEPALIVE
int get_result_pointer() { return result[0]; }

EMSCRIPTEN_KEEPALIVE
int get_result_size() { return result[1]; }
