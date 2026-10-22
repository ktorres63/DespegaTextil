export const ASSISTANT_OPEN_EVENT = "despega:open-assistant";

export function openAssistant() {
  window.dispatchEvent(new Event(ASSISTANT_OPEN_EVENT));
}
