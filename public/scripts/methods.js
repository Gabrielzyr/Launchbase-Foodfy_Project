function addMethod() {
    const methods = document.getElementById("methods");
    const methodsContainer = document.querySelectorAll(".method");

    const newMethod = methodsContainer[methodsContainer.length - 1].cloneNode(true);

    if (newMethod.children[0].value == "") return false;
    newMethod.children[0].value = "";
    methods.appendChild(newMethod);
}    

    document
        .querySelector(".add-method")
        .addEventListener("click", addMethod)