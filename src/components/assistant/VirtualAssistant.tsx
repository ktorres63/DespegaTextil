import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { ASSISTANT_OPEN_EVENT } from "../../lib/assistant";
import {
  assistantIntro,
  getAnswerForText,
  getAnswerForTopic,
  quickReplies,
} from "./assistant.responses";

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  text: string;
}

export function VirtualAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, role: "assistant", text: assistantIntro },
  ]);

  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(1);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(ASSISTANT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(ASSISTANT_OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    panelRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const region = messagesRef.current;
    if (!open || !region) return;
    region.scrollTop = region.scrollHeight;
  }, [messages, open]);

  const closeAssistant = () => {
    setOpen(false);
    window.requestAnimationFrame(() => launcherRef.current?.focus());
  };

  const appendExchange = (userText: string, assistantText: string) => {
    const userMessage: ChatMessage = {
      id: nextMessageId.current++,
      role: "user",
      text: userText,
    };
    const assistantMessage: ChatMessage = {
      id: nextMessageId.current++,
      role: "assistant",
      text: assistantText,
    };
    setMessages((current) => [...current, userMessage, assistantMessage]);
  };

  const handleQuickReply = (topicId: (typeof quickReplies)[number]["id"], label: string) => {
    appendExchange(label, getAnswerForTopic(topicId));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    const answer = getAnswerForText(text);
    appendExchange(text, answer.message);
    setInput("");
  };

  const handleReset = () => {
    setMessages([{ id: 0, role: "assistant", text: assistantIntro }]);
    setInput("");
    nextMessageId.current = 1;
  };

  return (
    <>
      {open ? (
        <section
          id="asistente-panel"
          ref={panelRef}
          role="dialog"
          aria-labelledby="asistente-titulo"
          tabIndex={-1}
          className="assistant-panel fixed inset-x-4 bottom-[5.25rem] z-50 flex max-h-[calc(100svh-6.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-panel outline-none sm:inset-x-auto sm:right-6 sm:w-[24rem]"
        >
          <div className="relative shrink-0 overflow-hidden bg-brand px-4 py-4 text-ivory">
            <div
              aria-hidden="true"
              className="woven-dark absolute inset-0 opacity-70"
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/10">
                  <MessageCircle
                    aria-hidden="true"
                    className="size-4 text-gold"
                    strokeWidth={1.6}
                  />
                </span>
                <div>
                  <h2
                    id="asistente-titulo"
                    className="font-sans text-[0.9rem] font-semibold tracking-[-0.01em] text-ivory"
                  >
                    Asistente Despega
                  </h2>
                  <p className="mt-0.5 text-[0.62rem] text-ivory/70">
                    Respuestas guiadas · Sin IA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Reiniciar conversación"
                  className="grid size-9 place-items-center rounded-full text-ivory/70 transition-colors hover:bg-white/10 hover:text-ivory"
                >
                  <RotateCcw
                    aria-hidden="true"
                    className="size-3.5"
                    strokeWidth={1.8}
                  />
                </button>
                <button
                  type="button"
                  onClick={closeAssistant}
                  aria-label="Cerrar asistente"
                  className="grid size-9 place-items-center rounded-full text-ivory/70 transition-colors hover:bg-white/10 hover:text-ivory"
                >
                  <X
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.8}
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={messagesRef}
            role="log"
            aria-label="Conversación con el asistente"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto bg-ivory/60 px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user" ? "flex justify-end" : "flex justify-start"
                }
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[0.78rem] leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-brand text-ivory"
                      : "rounded-bl-md border border-line bg-white text-ink/80"
                  }`}
                >
                  <span className="sr-only">
                    {message.role === "user" ? "Tú: " : "Asistente: "}
                  </span>
                  {message.text}
                </div>
              </div>
            ))}

            <div className="pt-1">
              <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-muted">
                Preguntas sugeridas
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    type="button"
                    onClick={() => handleQuickReply(reply.id, reply.label)}
                    className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-3 py-1.5 text-[0.68rem] font-medium text-ink/75 transition-colors hover:border-brand hover:text-brand"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-line bg-white px-3 pb-3 pt-3">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label htmlFor="asistente-entrada" className="sr-only">
                Escribe tu pregunta
              </label>
              <input
                id="asistente-entrada"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe una palabra clave…"
                autoComplete="off"
                className="min-h-10 min-w-0 flex-1 rounded-full border border-line bg-ivory/60 px-4 text-[0.78rem] text-ink placeholder:text-muted focus:border-brand"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Enviar mensaje"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-ivory transition-opacity hover:bg-ink disabled:opacity-35"
              >
                <Send
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.7}
                />
              </button>
            </form>
            <p className="mt-2 px-1 text-[0.58rem] leading-relaxed text-muted">
              Respuestas predefinidas. No es una IA ni asesoría en vivo.
            </p>
          </div>
        </section>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        onClick={open ? closeAssistant : () => setOpen(true)}
        aria-expanded={open}
        aria-controls={open ? "asistente-panel" : undefined}
        aria-haspopup="dialog"
        aria-label={
          open ? "Cerrar asistente virtual" : "Abrir asistente virtual"
        }
        title={open ? "Cerrar asistente virtual" : "Abrir asistente virtual"}
        className="fixed bottom-5 right-4 z-50 grid size-14 place-items-center rounded-full border border-white/15 bg-brand text-ivory shadow-panel transition-colors hover:bg-ink sm:right-6"
      >
        <span className="relative grid size-5 place-items-center">
          {open ? (
            <X aria-hidden="true" className="size-[1.25rem]" strokeWidth={1.8} />
          ) : (
            <MessageCircle
              aria-hidden="true"
              className="size-[1.25rem]"
              strokeWidth={1.7}
            />
          )}
          {!open ? (
            <span
              aria-hidden="true"
              className="absolute -right-1 -top-1 size-2 rounded-full bg-gold ring-2 ring-brand"
            />
          ) : null}
        </span>
      </button>
    </>
  );
}
