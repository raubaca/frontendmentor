// Create a class for the element
class QRCode extends HTMLElement {
  // Always call super first in constructor
  constructor() {
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Create the wrapper element
    const wrapper = document.createElement('main');
    
    // Create the image and set attributes
    const img = document.createElement('img');
    img.setAttribute('alt', 'QR Code');
    img.src = this.getAttribute('data-img');

    // Create the title and set the content
    const title = document.createElement('h1');
    title.textContent = this.getAttribute('data-title') || 'Title...';

    // Create the description and set the content
    const content = document.createElement('p');
    content.textContent = this.getAttribute('data-content') || 'Content...';

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
      }
      main {
        max-width: 320px;
        padding: var(--space-sm);
        padding-bottom: var(--space);
        text-align: center;
        background-color: var(--white);
        border-radius: 20px;
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.05);
      }
      img {
        display: block;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 10px;
      }
      h1 {
        margin-top: var(--space);
        font-size: var(--font-size-title);
        line-height: var(--lh-title);
        color: var(--slate-900);
      }
      p {
        margin: var(--space-sm);
        line-height: var(--lh);
        letter-spacing: var(--ls);
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(img);
    wrapper.appendChild(title);
    wrapper.appendChild(content);
  }
}

// Register the custom element
customElements.define('qr-code', QRCode);
