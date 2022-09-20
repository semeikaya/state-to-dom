const doing = [
    { text: "первое" },
    { text: "второе" },
    { text: "третье" },
    { text: "четвертое" },
    { text: "пятое" },
];

const render = (arr) => {
    
    const div = document.querySelector("#list");
    div.innerHTML = '';
    for (const ar of arr) {
        const li = document.createElement('div')
        li.style.backgroundColor = 'red'
        li.style.marginBottom = '15px'
        li.textContent = ar.text
        div.append(li)
    }
};
const remove = (i) => {
    doing.splice(i-1, 1)
    render(doing)
}
render(doing)
remove(4)


