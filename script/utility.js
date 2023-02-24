function getElement(id) {
  return document.getElementById(id);
}

function textareaStyle(element, styleProperty, styleValue, defaultValue) {
  const textarea = document.getElementById("textarea");

  const isClicked = element.classList.toggle("bg-gray-300");

  if (styleProperty === "textAlign") {
    const childrens = element.parentNode.parentNode.children;
    //   remove previous style
    for (const child of childrens) {
      child.firstElementChild.classList.remove("bg-gray-300");
    }
  }
  // console.dir(element.parentNode.parentNode.children);

  if (isClicked) {
    element.classList.add("bg-gray-300");
    textarea.style[styleProperty] = styleValue;
  } else {
    textarea.style[styleProperty] = defaultValue;
  }
}

function textareaStyleByInput(
  element,
  styleProperty,
  styleValue,
  defaultValue
) {
  const textarea = document.getElementById("textarea");
  //   console.log(element.value);
  textarea.style[styleProperty] = styleValue;
}

function fontChange(operation, fontSizeInputFelid) {
  const textarea = document.getElementById("textarea");
  //   console.log(element.value);
  let styleValue;
  if (operation === "Increase") {
    styleValue = parseInt(fontSizeInputFelid.value) + 1;
    fontSizeInputFelid.value = styleValue;
  } else if (operation === "Decrease") {
    styleValue = parseInt(fontSizeInputFelid.value) - 1;
    fontSizeInputFelid.value = styleValue;
  }

  textarea.style.fontSize = `${styleValue}px`;
}

// get google font dynamically

function googleFont(fontFamily) {
  const fontUrl = new URL("https://fonts.googleapis.com/css");
  fontUrl.searchParams.set("family", `${fontFamily}`);
  // add more fonts
  const linkElement = document.getElementById("google-fonts");
  linkElement.setAttribute("href", fontUrl.toString());
}


function textareaContainerStyle(styleValue, defaultValue) {
  const textarea = document.getElementById("textarea");

  textarea.style.width = `${styleValue}%`;
}
