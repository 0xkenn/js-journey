 const changeText = (domElement, newText) => {
    domElement.innerHTML = newText
}

 const changeTOFunkyColor = domElement => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    
    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
export {changeTOFunkyColor, changeText}