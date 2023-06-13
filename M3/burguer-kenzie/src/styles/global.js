import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Inter', sans-serif; 
}

header,
nav,
main,
article,
figure,
img,
figcaption,
figure,
form,
h1,
h2,
h3,
a,
div,
input,
label,
span,
button,
p,
span,
ul,
li {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    background: transparent;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

:root {
    /* Colors */
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;  
    --color-secondary: #EB5757;
    --color-white: #FFFFFF;
    --color-grey-100: #333333;
    --color-grey-50:  #828282;
    --color-grey-20: #E0E0E0;    
    --color-grey-0: #F5F5F5;    
    --color-negative: #E60000;    
    --color-warning: #FFCD07;    
    --color-sucess: #168821;    
    --color-information: #155BCB;    
    --color-grey-opacity-1: rgba(33, 37, 41, 0.5);

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
