import Navbar from "@/components/Navbar/Navbar";
import { store } from "@/Redux-store/store";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider } from "react-redux";

const App = function ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
};
export default App;
