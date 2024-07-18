import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboad from "./pages/Dashboad";
import AppRouting from "./components/AppRouting";
export default function App() {
  // const AppRoute = lazy(() => import("./components/AppRoute"));
  return (
    <BrowserRouter>
      <Header />
      <Dashboad />
      <AppRouting />
      <Footer />
    </BrowserRouter>
  );
}
