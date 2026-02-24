# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![QR Code Component](./screenshot.webp)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/qr-code-web-component-IsqwnjqLc2)
- Live Site URL: [GitHub Pages](https://raubaca.github.io/frontendmentor/qr-code-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Web Components](https://developer.mozilla.org/en-US/docs/web/web_components)

### What I learned

As the title of the challenge says, the QR Code is a **component**, so I created a Web Component using a custom element that can be implemented as follows:

```html
<qr-code data-img="./path/to/img" data-title="Title" data-content="Content" />
```

I added the script at the body's end, but you can add the script in the `<head>`, in that case you must add the `defer` attribute:

```html
<script src="main.js" defer></script>
```

### Useful resources

- [Using custom elements
  ](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) - Tutorial about custom elements on [MDN](https://developer.mozilla.org)
- [Custom Elements v1 - Reusable Web Components](https://web.dev/articles/custom-elements-v1?hl=en) - Article about custom elements on [web.dev](web.dev)

## Author

- LinkedIn - [Raul Barrera](https://www.linkedin.com/in/raubaca/)
- CodePen - [@raubaca](https://codepen.io/raubaca)
- Frontend Mentor - [@raubaca](https://www.frontendmentor.io/profile/raubaca)
