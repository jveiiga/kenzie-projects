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
${'' /* input, */}
label,
span,
${'' /* button, */}
p,
span,
ul,
li {
    margin: 0;
    padding: 0;
    outline: 0;
    ${'' /* border: none; */}
    background: transparent;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

:root {
    /* Colors */
    --color-primary:#FF577F;
    --color-focus: #FF427F;  
    --color-primary-negative: #59323F;
    --color-white: #FFFFFF;
    --color-grey-4: #121214;
    --color-grey-3:  #212529;
    --color-grey-2: #343B41;    
    --color-grey-1: #868E96;    
    --color-grey-0: #F8F9FA;    
    --color-negative: #E83F5B;       
    --color-sucess: #3FE864;     

    /*  Text Sizes */
    --Title1: 16px;
    --Title2: 16px;
    --Title3: 16px;
    --Headline: 12px;
    --HeadlineBold: 12px;
    --HeadlineItalic: 12px;

    /*  Text Weight */
    --font-weight-600: 600;
    --font-weight-700: 700;

    /*  Border Radius */  
    --radius-4: 4px;
  

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`