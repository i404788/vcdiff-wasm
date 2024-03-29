#!/bin/bash

mkdir -p dist
cd dist

# Run emconfigure with the normal configure command as an argument.
emcmake cmake ../open-vcdiff  -Dvcdiff_build_test=OFF -Dvcdiff_build_exec=OFF -DCMAKE_BUILD_TYPE=MinSizeRel

# Run emmake with the normal make to generate linked LLVM bitcode.
emmake make

# Compile the linked bitcode generated by make (project.bc) to JavaScript.
#  'project.bc' should be replaced with the make output for your project (e.g. 'yourproject.so')
#  [-Ox] represents build optimisations (discussed in the next section).
export CPATH=$PWD/../open-vcdiff/src

emcc -v -Os -s FILESYSTEM=0 -s SINGLE_FILE=1 -s ASSERTIONS=1 -s WASM=1 -s INLINING_LIMIT=1 -s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE=1 -s FILESYSTEM=0 ../compat/vcdenc.cc libvcdenc.a libvcdcom.a -o libvcdenc.js
emcc -v -Os -s FILESYSTEM=0 -s SINGLE_FILE=1 -s ASSERTIONS=1 -s WASM=1 -s INLINING_LIMIT=1 -s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE=1 -s FILESYSTEM=0 ../compat/vcddec.cc libvcddec.a libvcdcom.a -o libvcddec.js

# emcc -v -O3 -g0 -s WASM=0 -s MODULARIZE=1 ../compat/vcdenc.cc libvcdenc.a libvcdcom.a -o libvcdenc.js
# emcc -v -O3 -g0 -s WASM=0 -s MODULARIZE=1 ../compat/vcddec.cc libvcddec.a libvcdcom.a -o libvcddec.js
