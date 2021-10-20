export default function addCSS(css) {
  document.head.innerHTML += `<link type="text/css" rel="stylesheet" href=${css}>`
}
