// get the button
// add an event listener to the button
// style the text area when the button is clicked

// text align justify
const alignJustify = getElement("align-justify");
alignJustify.addEventListener("click", () => {
  textareaStyle(alignJustify, "textAlign", "justify", "left");
});

// text align right
const alignRight = getElement("align-right");
alignRight.addEventListener("click", () => {
  textareaStyle(alignRight, "textAlign", "right", "left");
});

// text align left
const alignLeft = getElement("align-left");
alignLeft.addEventListener("click", () => {
  textareaStyle(alignLeft, "textAlign", "left", "left");
});

// text align center
const alignCenter = getElement("align-center");
alignCenter.addEventListener("click", () => {
  textareaStyle(alignCenter, "textAlign", "center", "left");
});

// font style

// font weight bold
const bold = getElement("bold");
bold.addEventListener("click", () => {
  textareaStyle(bold, "fontWeight", "bold", "");
});

// font style italic
const italic = getElement("italic");
italic.addEventListener("click", () => {
  textareaStyle(italic, "fontStyle", "italic", "");
});

// text-decoration
const underline = getElement("underline");
underline.addEventListener("click", () => {
  textareaStyle(underline, "textDecoration", "underline", "none");
});

// font size
const fontSize = getElement("fontSize");
fontSize.addEventListener("change", (e) => {
  textareaStyleByInput(fontSize, "fontSize", `${fontSize.value}px`, 8);
});

// increase font size
const fontIncreaseBtn = getElement("fontIncrease");
fontIncreaseBtn.addEventListener("click", () => {
  fontChange("Increase", fontSize);
});
// decrease font size
const fontDecreaseBtn = getElement("fontDecrease");
fontDecreaseBtn.addEventListener("click", () => {
  fontChange("Decrease", fontSize);
});

// change font family
const fontFamily = getElement("fontFamily");
fontFamily.addEventListener("change", () => {
  const textarea = document.getElementById("textarea");
  googleFont(fontFamily.value);

  textareaStyleByInput(
    fontFamily,
    "fontFamily",
    `${fontFamily.value}`,
    "Mynerve"
  );
});

// default font family
googleFont(`Mynerve`);
textareaStyleByInput(fontFamily, "fontFamily", `Mynerve`, "Mynerve");

//zoom window width

const zoom = getElement("zoom");
zoom.addEventListener("change", (e) => {
  console.log(e.target.value);
  textareaStyleByInput(zoom, "width", `${e.target.value}%`, "100%");
  // textareaContainerStyle(e.target.value,75)
});
