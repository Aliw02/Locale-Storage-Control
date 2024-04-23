// Select Elements

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("key-input");
let valueInput = document.getElementById("value-input");

allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("checking")) {

            checkItem();

        }

        if (e.target.classList.contains("adding")) {

            addItem();

        }

        if (e.target.classList.contains("deleting")) {

            deleteItem();

        }

        if (e.target.classList.contains("showing")) {

            showItems();

        }

    })

});

function showMessage() {

    results.innerHTML = "Input Can't Be Empty";

}

function checkItem() {

    if (theInput.value !== "") {

        if (localStorage.getItem(theInput.value)) {

            results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

        } else {

            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

        }

    } else {

        showMessage();

    }

};

function addItem() {

    if (theInput.value !== "" && valueInput.value !== "") {

        localStorage.setItem(theInput.value, valueInput.value);

        results.innerHTML = `Local Storage Item Key: <span>${theInput.value}</span> => Value: <span>${valueInput.value} </span> Has Been Added`;
        theInput.value = "";
        valueInput.value = "";

    } else {

        showMessage();

    }

};

function deleteItem() {

    if (theInput.value !== "") {

        if (localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Has Been Deleted`;

            theInput.value = "";

        } else {

            results.innerHTML = `There Is No Item With The Name <span>${theInput.value}</span> To Delete`;

        }

    } else {

        showMessage();

    }

};

function showItems() {

    if (localStorage.length) {

        results.innerHTML = `The Items In The Local Storage = <span>${localStorage.length}</span>`;

        for (let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<br /> <span> ${key}</span>`

        }

    } else {

        results.innerHTML = `The Items In The Local Storage = <span>${'0'}</span>`

    }

};