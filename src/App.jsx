import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoute from "./components/AppRoute";
import Footer from "./components/Footer";
import Dashboad from "./pages/Dashboad";
export default function App() {
  // const AppRoute = lazy(() => import("./components/AppRoute"));
  return (
    <BrowserRouter>
      <Header />
      <Dashboad />
      <AppRoute />
      <Footer />
    </BrowserRouter>
  );
}
