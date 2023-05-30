function addDOMContent(string){
    const node = document.createElement('p');
    node.textContent = string;
    document.body.appendChild(node);
}

export default addDOMContent;