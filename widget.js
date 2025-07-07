class EonverseChatbot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const username = this.getAttribute('username') || '';
    const iframeSrc = `https://virtual-ex.github.io/ChatBot//eonverse-widget-frame.html?username=${encodeURIComponent(username)}`;

    // Wrapper for the entire chatbot UI
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.bottom = '20px';
    wrapper.style.right = '20px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '360px';
    wrapper.style.height = '500px';
    wrapper.style.zIndex = '99999';
    wrapper.style.borderRadius = '10px';
    wrapper.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    wrapper.style.overflow = 'hidden';
    wrapper.style.background = 'white';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '18px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10';

    closeButton.addEventListener('click', () => {
      wrapper.style.display = 'none';
    });

    // Iframe container
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.flex = '1';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'clipboard-write';

    wrapper.appendChild(closeButton);
    wrapper.appendChild(iframe);
    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('eonverse-chatbot', EonverseChatbot);
