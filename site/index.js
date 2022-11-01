import("./node_modules/hash-based-signatures-wasm/hash_based_signatures_wasm.js").then((js) => {
    js.greet("WebAssembly with npm");
});