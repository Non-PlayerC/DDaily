// const input = document.createElement("input"); //获取 div 的属性值

// // 添加 input 的属性名
// input.classList.add("container");
// console.log(input);
// // 设置 input 属性
// input.setAttribute("type", "email");

// document.body.appendChild(input);//添加到 body 中

//==> 创建机器
const createElement = function (elementObj) {
    // 返回对应标签名的元素
    const el = document.createElement(elementObj.tagName);
    if (elementObj.text) el.textContent = elementObj.text;// 当元素有 text 元素时则添加到 textContent 中

    if (elementObj.classList) {
        for (let i = 0; i < elementObj.classList.length; i++) {// 将所有的元素遍历到返回的 el 中
            el.classList.add(elementObj.classList[i])
        }
    }

    if (elementObj.attrList) {
        for (let i = 0; i < elementObj.attrList.length; i++) {// 添加元素的 alt 备注
            el.setAttribute(
                elementObj.attrList[i].attrName,
                elementObj.attrList[i].attrValue
            );
        }
    }


    return el;
}

const img = createElement({
    tagName: "img",
    classList: ["container"],
    classList: ["w-500", "img-cover", "img"],
    attrList: [
        {
            attrName: "alt",//=> 备注
            attrValue: "my pictures",
        },
        {
            attrName: "src",
            attrValue: "./img.jpg",
        }
    ]
});
const h1 = createElement({
    tagName: "h1",
    text: "Hello world!",
    classList: ["textColor"]
});

const input = createElement({
    tagName: "input",
    classList: ["input-field", "email-input"],
    attrList: [
        { attrName: "type", attrValue: "email" },
        { attrName: "placeholder", attrValue: "Email address" },
        { attrName: "required", attrValue: "" },
    ]
})
console.log(h1);
console.log(img);
console.log(input);
document.body.appendChild(h1);
document.body.appendChild(img);
document.body.appendChild(input);