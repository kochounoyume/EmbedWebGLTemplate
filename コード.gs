const loaderUrl = ""; // 必須
const dataUrl = ""; // 必須
const frameworkUrl = ""; // 必須
const codeUrl = ""; // 必須
const companyName = "DefaultCompany";
const productName = ""; // 必須
const productVersion = "0.1";

let gameObject = '';
let method = '';
let param = '';

function doGet() {
  var template = 'index';
  return HtmlService.createTemplateFromFile(template).evaluate();
}
