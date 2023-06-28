import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}
:root {
   --font-color: rgba(0, 0, 0, 0.87);
   --placeholder: #7E7E7E;
   --primary-color: #F4E041;
   --secondary-color: #00BDD3;
   --background-color: #F8F8F8;
   --btn-normal: #F4E041;
   --btn-hover: #FFE302;
   --bnt-disabled: #B4B4B4;
    --error: #CB3D40;
    
   --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1)
}
*, *::before, *::after {
  box-sizing: border-box;
}

html,
body, #root {
font-family: 'Nunito', sans-serif;
background-color: var(--background-color);

}

li {
  list-style: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
html {
  scroll-behavior: smooth;
}
div {
  box-sizing: border-box;
}

button {
  cursor: pointer;
}
`;
