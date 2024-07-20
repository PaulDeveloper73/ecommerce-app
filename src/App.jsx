import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouting from "./components/AppRouting";
import { ContextProvider } from "./components/ContextProvider";
export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <AppRouting />
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}
