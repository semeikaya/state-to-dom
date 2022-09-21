const doing = [
    { text: "первое", done: true },
    { text: "второе", done: true },
    { text: "третье", done: true },
    { text: "четвертое", done: true },
    { text: "пятое", done: true },
];

const remove = (i) => {
    doing.splice(i - 1, 1);
    render(doing);
};
const addTodo = (text) => {
    doing.push({ text: text, done: true });
    render(doing);
};

const btn = document.querySelector("#btn");
const inpt = document.querySelector("#input");

const render = (arr) => {
    const div = document.querySelector("#list");
    div.innerHTML = "";
    for (const ar of arr) {
        const li = document.createElement("div");
        const del = document.createElement("input");
        li.className = "mark";
        del.className = "del";
        li.textContent = ar.text;
        del.type = "button";
        div.append(li);
        li.append(del);
        del.addEventListener("click", () => {

        });
    }
};

btn.addEventListener("click", () => {
    addTodo(inpt.value);
    inpt.value = "";
});
