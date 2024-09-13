let addBtn = document.getElementById("AddButton") as HTMLButtonElement; //stocke l'objet (élémentHTML) d'id ="AddButton"
let inputEntry = document.getElementById("entry") as HTMLInputElement; //stocke l'objet (élémentHTML) d'id ="entry"

function getDatas() {
    let toDosString: any = localStorage.getItem("to_do_list");
    let toDoArray: Array<string>;
    if (toDosString) {
        toDoArray = JSON.parse(toDosString);
    } else {
        toDoArray = [];
    }
    return toDoArray;
}
let toDoArray: Array<string> = getDatas();

function buttonAddListener() {
    addBtn.addEventListener("click", createEntry); //listenner qui attends un clic sur addBtn et execute createEntry()
    inputEntry.addEventListener("keyup", (event) => {
        //listenner qui attend un appuis
        if (event.key === "Enter") {
            //  sur la touche entrée
            createEntry(); //on exécute createEntry()
            inputEntry.value = "";
        }
    });
}
buttonAddListener();

function initializeToDoList(): void {
    for (let i: number = 0; i < toDoArray.length; i++) {
        //boucle d'iteration dans localStorage
        let entryValue: string | null = toDoArray[i]; // stocke la valeur de la table LocalStorage à l'index [i]
        if (entryValue != null) displayEntry(i, entryValue); // si la clé et la valeur sont différents de null
        //ou if (entryKey && entryValue) displayEntry ......
    }
}
initializeToDoList();

let entryCount: number = toDoArray.length; // Stocke la longueur de notre tableau d'entrées

function createEntry(): string | void {
    let entryToStock: string = inputEntry.value; //valeur d'input stocké dans var inputTitle
    stockEntry(entryCount, entryToStock); //appel de la fonction stockEntry avec en argument les valeurs d'entryCount et entryToStock
    entryCount++;
    // return entryToStock, entryCount;
}

function stockEntry(count: number, entry: string): void {
    toDoArray.push(entry);
    localStorage.setItem("to_do_list", JSON.stringify(toDoArray));
    displayEntry(count, entry);
}

function displayEntry(count: number, entry: string): void {
    let divEntries = document.getElementById("displayEntries") as HTMLDivElement; //création d'une variable qui contient l'objet (HTMLElement) d'id = "displayEntries"
    let entryToDisplay = document.createElement("div") as HTMLDivElement; //création d'une variable qui contient la création de l'objet (HTMLElement) de balise <p>
    entryToDisplay.id = `taskItem${count}`;

    let checkbox = document.createElement("input") as HTMLInputElement;
    checkbox.type = "checkbox";
    checkbox.id = `check${count}`;
    checkbox.addEventListener("change", () => {
        updateDisplay(`task${count}`);
    });
    // checkbox.style.verticalAlign = "middle";
    // checkbox.style.position = "relative";
    entryToDisplay.appendChild(checkbox);

    let entryParagraph = document.createElement("label") as HTMLLabelElement;
    entryParagraph.innerText = entry; // on vient ajouter le texte contenu dans entry dans la balise <p> entry </p>
    entryParagraph.id = `task${count}`; // on vient assigner un id ="count" à notre <p> juste au dessus
    entryParagraph.setAttribute("for", `check${count}`);

    //creation d'un input de type checkbox avec un nom, auquel on rattache un label qui prend la valeur ddu p qu'on  crée actuellement

    divEntries.appendChild(entryToDisplay); //définit entryToDisplay (est configuré avec son id et son texte) comme enfant (objet) de divEntries
    // Modifie le fichier HTML, en ajoutant entryToDisplay (<p id="count">entry</p>) au sein de la div divEntries
    entryToDisplay.appendChild(entryParagraph);

    let idToImpact: string = entryParagraph.id;

    let divButton = document.createElement("div") as HTMLDivElement;
    divButton.id = `divBtn`;
    entryToDisplay.appendChild(divButton);

    let editButton = document.createElement("button") as HTMLButtonElement;
    editButton.classList.add("toDoButton");
    editButton.innerHTML = `<img src='../icons/edit_logo.png' width = 100% />`;
    editButton.id = `editBtn${count}`;
    editButton.addEventListener("click", () => {
        editEntry(`task${count}`);
    });

    let removeButton = document.createElement("button") as HTMLButtonElement;
    removeButton.classList.add("toDoButton");
    removeButton.innerHTML = `<img src='../icons/remove_logo.png' width = 100% />`;
    removeButton.id = `rmvBtn${count}`;
    removeButton.addEventListener("click", (element) => {
        removeItem(idToImpact);
    }); //listenner qui attends un clic sur addBtn et execute removeItem()

    let acceptButton = document.createElement("button") as HTMLButtonElement;
    acceptButton.style.display = "none";
    acceptButton.classList.add("toDoButton");
    acceptButton.innerHTML = `<img src='../icons/confirm_logo.png' width = 100% />`;
    acceptButton.id = `task${count}Acc`;

    if (divButton) {
        divButton.appendChild(acceptButton);
        divButton.appendChild(editButton);
        divButton.appendChild(removeButton);
    }

    //    entryToDisplay.innerHTML += `<button id =btnEdit${count}> Edit </button> `;
    //    entryToDisplay.innerHTML += `<button id =btnRemove${count}> Remove </button> `;

    /*----------------------ou----------------------
    let divEntries = document.getElementById("displayEntries");
    ----------------------et l'une des solutions ci-dessous----------------------
    if (divEntries) divEntries.appendChild(entryToDisplay); vérification de l'existence de divEntries
    divEntries!.appendChild(entryToDisplay); on indique au compilateur qu'on est sûr que divEntries existe
    divEntries?.appendChild(entryToDisplay);*/ //on obtiendra jamais "null", mais undefined à la place
}

function removeItem(id: string): any {
    const element: any = document.getElementById(`${id}`); // id = task22
    element.remove();
    let index: number | string = parseInt(id.substring(4));
    toDoArray.splice(index, 1);
    localStorage.setItem("to_do_list", JSON.stringify(toDoArray));
    let divEntries = document.getElementById("displayEntries");
    if (divEntries) divEntries.innerHTML = "";
    initializeToDoList();
}

function updateDisplay(id: string) {
    let updateEntry = document.getElementById(`${id}`) as HTMLLabelElement; // attendu : object <label> dans updateEntry
    if (updateEntry.classList.contains("finishedTask") == true) {
        updateEntry.classList.remove("finishedTask");
    } else {
        updateEntry.classList.add("finishedTask");
    }
}

function editEntry(id: any) {
    let acceptButton = document.getElementById(`${id}Acc`) as HTMLButtonElement;
    acceptButton.removeAttribute("style");
    let entryTextToEdit = document.getElementById(`${id}`) as HTMLDivElement;
    let entryEditor = document.createElement("textarea") as HTMLTextAreaElement;
    entryEditor.innerText = entryTextToEdit.innerText;
    entryTextToEdit.innerText = "";
    entryTextToEdit.appendChild(entryEditor);
    entryEditor.setAttribute("rows", "1");

    acceptButton.addEventListener("click", () => {
        entryTextToEdit.innerText = entryEditor.value;
        entryEditor.remove();
        acceptButton.style.display = "none";
        let indexOfEntry: any = id.match(/(\d+)/);
        indexOfEntry = indexOfEntry[0];
        toDoArray.splice(indexOfEntry, 1, entryTextToEdit.innerText);
        localStorage.setItem("to_do_list", JSON.stringify(toDoArray));
    });
}
