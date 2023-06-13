import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    outline: none;
}

#root {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

body {
    background-color: var(--grey-4);
    font-family: "Jost", sans-serif;
	line-height: 1;
    height: 100vh;
    width: 100%;

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: "";
	content: none;
}

button {
    cursor: pointer;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1, h2, h3, h4, h5, h6, p, li, a, button, label {
    font-family: "Jost", sans-serif;
    color: var(--grey-0);
}

::selection, option {
    color: var(--grey-0);
}

:root {
    --primary: #1A2E1F;
    --secondary: #5EFFA8;
    --secondary-dash: #225F3E;

    --green1: #142518;

    --grey-1: #1F211F;
    --grey-2: #D9D9D9;
    --white: #FFFFFF;

    --sucess: #3FE864;
    --negative: #E83F5B;
}

h2 {
    color: var(--grey-1);
    font-size: 18px;
    font-weight: 700;
}

label {
    color: var(--grey-2);
}

p {
    color: var(--grey-1);
    font-size: 10px;
}

button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: transparent;
}

input {
    height: 30px;
    border-radius: 6px 6px 0px 6px;
    border-style: none;
}`;

export default GlobalStyles;
