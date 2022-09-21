const doing = [
    { text: "первое", done: false },
    { text: "второе", done: false },
    { text: "третье", done: true },
    { text: "четвертое", done: true },
    { text: "пятое", done: false },
];

const checkToDo = (i) => {
    const newDo = doing.map((item, ind) => {
        if (i === ind) {
            console.log(i, ind);
            item.done = !item.done;
            return item;
        }
        return item;
    });
    // doing[i] = { text: doing[i].text, done: !doing[i].done };
    console.log(newDo);
    render(newDo);
};
const remove = (i) => {
    doing.splice(i, 1);
    // const arr = doing.filter((item, ind) => ind !== i)

    render(doing);
};
const addTodo = (text) => {
    doing.push({ text: text, done: false });
    render(doing);
};

const btn = document.querySelector("#btn");
const inpt = document.querySelector("#input");

const render = (arr) => {
    const div = document.querySelector("#list");
    div.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("div");
        const del = document.createElement("input");
        const complete = document.createElement("input");

        complete.type = "checkbox";
        complete.checked = arr[i].done;

        complete.checked
            ? (li.style.backgroundColor = "#98FB98")
            : (li.style.backgroundColor = "white");

        li.className = "mark";
        del.className = "del";
        li.textContent = arr[i].text;
        del.type = "button";
        div.append(li);
        li.prepend(complete);
        li.append(del);

        del.addEventListener("click", () => remove(i));
        complete.addEventListener("click", () => {
            checkToDo(i);
            // if (doing[i].done === true) {
            //     e.target. "#98FB98");
            // }
        });
    }
};

btn.addEventListener("click", () => {
    addTodo(inpt.value);
    inpt.value = "";
});
render(doing);
