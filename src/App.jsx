import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoute from "./components/AppRoute";
import Footer from "./components/Footer";
export default function App() {
  // const AppRoute = lazy(() => import("./components/AppRoute"));
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
      <Footer />
    </BrowserRouter>
  );
}
