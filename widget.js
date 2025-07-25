class EonverseChatbot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const username = this.getAttribute('username') || '';
    const iframeSrc = `https://virtual-ex.github.io/ChatBot/eonverse-widget-frame.html?username=${encodeURIComponent(username)}`;

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.width = '400px';
    container.style.height = '700px';
    container.style.zIndex = '99999';
    container.style.border = 'none';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    container.style.overflow = 'hidden';
    container.style.padding = '0';
    container.style.margin = '0';
    container.style.background = 'transparent'; // no white background

    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.display = 'block'; // remove inline gap
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    // IMPORTANT: Set allow both ways
    iframe.setAttribute('allow', 'microphone; clipboard-write');
    iframe.allow = 'microphone; clipboard-write';

    container.appendChild(iframe);
    this.shadowRoot.appendChild(container);
  }
}

customElements.define('eonverse-chatbot', EonverseChatbot);
