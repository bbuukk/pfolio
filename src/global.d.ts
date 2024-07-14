

declare interface HTMLElement {
    on(eventType: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    off(eventType: string, listener: EventListenerOrEventListenerObject): void;
    $(selector: string): Element | null;
    $$(selector: string): NodeList;
  }
      

declare interface Window {
    $: (selector: string) => HTMLElement | null;
    $$: (selector: string) => NodeList;
  }
  