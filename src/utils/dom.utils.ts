
// Selector functions
 const $ = (selector: string): HTMLElement | null => document.querySelector(selector);
 const $$ = (selector: string): NodeList => document.querySelectorAll(selector);

// Event handling methods
HTMLElement.prototype.on = function(eventType: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
    this.addEventListener(eventType, listener, options);
};

HTMLElement.prototype.off = function(eventType: string, listener: EventListenerOrEventListenerObject) {
    this.removeEventListener(eventType, listener);
};

// Query selector shortcuts
HTMLElement.prototype.$ = function(selector: string): HTMLElement | null {
    return this.querySelector(selector);
};

HTMLElement.prototype.$$ = function(selector: string): NodeList {
    return this.querySelectorAll(selector);
};





