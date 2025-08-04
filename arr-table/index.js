// Select DOM
var INITIAL_ARRAY = [12, 59, 43];
const arrayContainer = document.querySelector(".array-container");
const areayValues = arrayContainer.querySelectorAll("span");
const msg = document.querySelector("#msg");
const lenContainer = document.querySelector("#arr-len");

const showMessage = (type, message) => {
    if (type) {
        msg.classList.add("success");
        msg.textContent = message;
    } else {
        msg.classList.add("error");
        msg.textContent = message;
    }
    setTimeout(() => {
        msg.removeAttribute("class");
        msg.textContent = "";
    }, 2500);
};
const initArray = (arr, container, lenContainer) => {
    container.innerHTML = "";
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            let span = document.createElement("span");
            span.setAttribute("index", "" + i);
            span.setAttribute("id", "" + i);
            span.textContent = arr[i];
            container.appendChild(span);
        }
    }
    lenContainer.textContent = arr.length;
    return;
};

// Add Random Element At Last Index
document.querySelector("#add-random-element-btn").onclick = () => {
    let value = Math.floor(Math.random() *100);
    INITIAL_ARRAY.push(value);
    let span = document.createElement("span");
    span.setAttribute("index", "" + (INITIAL_ARRAY.length - 1));
    span.setAttribute("id", "" + (INITIAL_ARRAY.length - 1));
    arrayContainer.appendChild(span);
    span.style.border = "2px solid #17b600";
    setTimeout(() => {
        span.textContent = "" + value;
        span.style.border = "none";
        span.style.borderRight = ".1px solid rgba(139, 169, 183, 0.887)";
        lenContainer.textContent = "" + INITIAL_ARRAY.length;
        initArray(INITIAL_ARRAY, arrayContainer, lenContainer);
        showMessage(true, `${value} Added At The Last Index`);
        return;
    }, 500);
};
// Add Element At Last Index
document.querySelector("#add-new-element-btn").onclick = () => {
    document.querySelector("#add-new-element-input").focus();
    let value = document.querySelector("#add-new-element-input").value.trim();
    if (!value) {
        document.querySelector("#add-new-element-input").focus();
        return;
    }
    INITIAL_ARRAY.push(parseInt(value));
    let span = document.createElement("span");
    span.setAttribute("index", "" + (INITIAL_ARRAY.length - 1));
    span.setAttribute("id", "" + (INITIAL_ARRAY.length - 1));
    arrayContainer.appendChild(span);
    span.style.border = "2px solid #17b600";
    setTimeout(() => {
        span.textContent = value;
        span.style.border = "none";
        span.style.borderRight = ".1px solid rgba(139, 169, 183, 0.887)";
        document.querySelector("#add-new-element-input").value = "";
        lenContainer.textContent = "" + INITIAL_ARRAY.length;
        initArray(INITIAL_ARRAY, arrayContainer, lenContainer);
        showMessage(true, `${value} Added At The Last Index`);
        return;
    }, 500);
};

// Add Element At First Index
document.querySelector("#add-new-element-btn-first").onclick = () => {
    let value = document
        .querySelector("#add-new-element-input-first")
        .value.trim();
    if (!value) {
        document.querySelector("#add-new-element-input-first").focus();
        return;
    }
    INITIAL_ARRAY.unshift(parseInt(value));
    let span = document.createElement("span");
    span.setAttribute("index", "" + (INITIAL_ARRAY.length - 1));
    span.setAttribute("id", "" + (INITIAL_ARRAY.length - 1));
    arrayContainer.insertBefore(span, arrayContainer.querySelector("span"));
    span.style.border = "2px solid #17b600";
    setTimeout(() => {
        span.textContent = value;
        span.style.border = "none";
        span.style.borderRight = ".1px solid rgba(139, 169, 183, 0.887)";
        document.querySelector("#add-new-element-input-first").value = "";
        lenContainer.textContent = "" + INITIAL_ARRAY.length;
        initArray(INITIAL_ARRAY, arrayContainer, lenContainer);
        showMessage(true, `${value} Added At The First Index`);
        return;
    }, 500);
};
// Edit An Element
// TODO : Edit Element Is Not Working Have To Fixed It.
document.querySelector("#edit-element-btn").onclick = () => {
    let value = document.querySelector("#edit-element-input").value.trim();
    if (!value) {
        document.querySelector("#edit-element-input").focus();
        return;
    }
    arrayContainer.querySelectorAll("span").forEach(span => {
        if (span.getAttribute("index") === value) {
            let input = document.createElement("input");
            input.value = span.textContent;
            input.type = "number";
            input.placeholder = "Enter Value";
            input.onkeyup = () => {
                alert();
            };
            span.innerHTML = "";
            span.appendChild(input);
            input.focus();
        }
    });
};
// Remove Last Element
document.querySelector("#remove-last-btn").onclick = () => {
    if (INITIAL_ARRAY.length === 0) {
        showMessage(false, "No More Element Exist Inside Array");
        return;
    }
    const last = arrayContainer.lastChild;
    const value = last.textContent;
    last.style.border = "2px solid #ff0000";
    setTimeout(() => {
        INITIAL_ARRAY.pop();
        last.remove();
        lenContainer.textContent = "" + INITIAL_ARRAY.length;
        initArray(INITIAL_ARRAY, arrayContainer, lenContainer);
        showMessage(true, `${value} Removed From Last Index`);
        return;
    }, 500);
};
// Remove First Element
document.querySelector("#remove-first-btn").onclick = () => {
    if (INITIAL_ARRAY.length === 0) {
        showMessage(false, "No More Element Exist Inside Array");
        return;
    }
    const first = arrayContainer.firstChild;
    const value = first.textContent;
    first.style.border = "2px solid #ff0000";
    setTimeout(() => {
        INITIAL_ARRAY.shift();
        first.remove();
        lenContainer.textContent = "" + INITIAL_ARRAY.length;
        initArray(INITIAL_ARRAY, arrayContainer, lenContainer);
        showMessage(true, `${value} Removed From First Index`);
        return;
    }, 500);
};
// Remove Specific Element
document.querySelector("#remove-specific-element-btn").onclick = () => {
    if (INITIAL_ARRAY.length === 0) {
        showMessage(false, "No More Element Exist Inside Array");
        return;
    }
    let value = document
        .querySelector("#remove-specific-element-input")
        .value.trim();
    if (!value) {
        document.querySelector("#remove-specific-element-input").focus();
        return;
    }
    let index = INITIAL_ARRAY.indexOf(parseInt(value));
    INITIAL_ARRAY = INITIAL_ARRAY.filter(
        element => element !== parseInt(value)
    );
    arrayContainer.querySelectorAll("span").forEach(span => {
        if (parseInt(span.getAttribute("index")) === index) {
            span.style.border = "2px solid #ff0000";
            setTimeout(() => {
                span.remove();
                lenContainer.textContent = "" + INITIAL_ARRAY.length;
                document.querySelector("#remove-specific-element-input").value =
                    "";
                initArray(INITIAL_ARRAY, arrayContainer, lenContainer);
                showMessage(true, `${value} Removed From The Array`);
                return;
            }, 700);
        }
    });
    if (index === -1) {
        showMessage(false, "Element Doesn't Exist Inside Array");
        return;
    }
};
// Search Specific Element
document.querySelector("#search-element-btn").onclick = () => {
    if (INITIAL_ARRAY.length === 0) {
        showMessage(false, "No More Element Exist Inside Array");
        return;
    }
    let value = document.querySelector("#search-element-input").value.trim();
    if (!value) {
        document.querySelector("#search-element-input").focus();
        return;
    }

    var isFound = false;
    arrayContainer.querySelectorAll("span").forEach((span, idx) => {
        if (parseInt(value) === INITIAL_ARRAY[idx]) {
            isFound = true;
            span.style.border = "2px solid #31fd00";
            setTimeout(() => {
                span.style.border = ".1px solid rgba(139, 169, 183, 0.887)";
                document.querySelector("#search-element-input").value = "";
                return;
            }, 4000);
        }
    });
    if (!isFound) {
        showMessage(false, "Element Doesn't Exist Inside Array");
        return;
    }
};
// Search Biggest Element
document.querySelector("#search-biggest-element").onclick = () => {
    if (INITIAL_ARRAY.length === 0) {
        showMessage(false, "No More Element Exist Inside Array");
        return;
    }
    var index = 0;
    var big = INITIAL_ARRAY[0];
    for (let i = 1; i < INITIAL_ARRAY.length; i++) {
        if (big < INITIAL_ARRAY[i]) {
            big = INITIAL_ARRAY[i];
            index = i;
        }
    }

    arrayContainer.querySelectorAll("span").forEach((span, idx) => {
        if (parseInt(span.getAttribute("index")) === index) {
            span.style.border = "2px solid #fffc2d";
            setTimeout(() => {
                span.style.border = ".1px solid rgba(139, 169, 183, 0.887)";
                return;
            }, 4000);
        }
    });
};
// Search Lowest Element
document.querySelector("#search-lowest-element").onclick = () => {
    if (INITIAL_ARRAY.length === 0) {
        showMessage(false, "No More Element Exist Inside Array");
        return;
    }
    var index = 0;
    var small = INITIAL_ARRAY[0];
    for (let i = 1; i < INITIAL_ARRAY.length; i++) {
        if (small > INITIAL_ARRAY[i]) {
            small = INITIAL_ARRAY[i];
            index = i;
        }
    }
    arrayContainer.querySelectorAll("span").forEach((span, idx) => {
        if (parseInt(span.getAttribute("index")) === index) {
            span.style.border = "2px solid #37ffff";
            setTimeout(() => {
                span.style.border = ".1px solid rgba(139, 169, 183, 0.887)";
                return;
            }, 4000);
        }
    });
};
// Search Middle Element
document.querySelector("#search-middle").onclick = () => {
    if (INITIAL_ARRAY.length === 0) {
        showMessage(false, "No More Element Exist Inside Array");
        return;
    }
    var index = (INITIAL_ARRAY.length - 1) / 2;

    arrayContainer.querySelectorAll("span").forEach((span, idx) => {
        if (parseInt(span.getAttribute("index")) === index) {
            span.style.border = "2px solid #ff1dd5";
            setTimeout(() => {
                span.style.border = ".1px solid rgba(139, 169, 183, 0.887)";
                return;
            }, 4000);
        }
    });
};

/*----------->+<--------------*/
// TODO : Inside this code , i have to add scroll-X inside the array,
// And also add scroll height from bottom to top
// in the main container, and the second thing is
// I will add press enter key system on event handlers
/*----------->+<--------------*/
document.addEventListener(
    "DOMContentLoaded",
    initArray(INITIAL_ARRAY, arrayContainer, lenContainer)
);
