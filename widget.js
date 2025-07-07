class EonverseChatbot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const username = this.getAttribute('username') || '';
    const iframeSrc = `https://virtual-ex.github.io/ChatBot//eonverse-widget-frame.html?username=${encodeURIComponent(username)}`;

    // Styles inside Shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      :host {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 100%;
        max-width: 360px;
        height: 500px;
        z-index: 99999;
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        background: white;
        overflow: hidden;
      }
      .header {
        position: relative;
        flex: 0 0 40px;
        background: #007bff;
        color: white;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 10px;
      }
      .close-btn {
        cursor: pointer;
        font-size: 24px;
        line-height: 24px;
        border: none;
        background: transparent;
        color: white;
        padding: 0;
        margin: 0;
      }
      iframe {
        flex: 1 1 auto;
        width: 100%;
        border: none;
      }
      @media (max-width: 400px) {
        :host {
          bottom: 10px;
          right: 10px;
          max-width: 95vw;
          height: 70vh;
          border-radius: 8px;
        }
      }
    `;

    // Container inside shadow root
    const container = document.createElement('div');
    container.classList.add('container');

    // Header with close button
    const header = document.createElement('div');
    header.classList.add('header');

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.setAttribute('aria-label', 'Close chatbot');
    closeBtn.textContent = '✕';

    closeBtn.addEventListener('click', () => {
      this.style.display = 'none';
    });

    header.appendChild(closeBtn);

    // Iframe
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.setAttribute('allow', 'clipboard-write');

    // Append everything
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(header);
    this.shadowRoot.appendChild(iframe);
  }
}

customElements.define('eonverse-chatbot', EonverseChatbot);
