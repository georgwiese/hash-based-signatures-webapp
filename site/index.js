import("./node_modules/hash-based-signatures-webapp/hash_based_signatures_webapp.js").then((js) => {
    function onSubmit() {
        js.greet("WebAssembly with npm");
        console.log(document.forms["form"]["public_key"].value);
        console.log(document.forms["form"]["file"].value);
        return false;
    }
    window.onSubmit = onSubmit;
});
