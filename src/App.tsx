import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { VirtualAssistant } from "./components/assistant/VirtualAssistant";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ivory"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <HomePage />
      </main>
      <Footer />
      <VirtualAssistant />
    </>
  );
}

export default App;
