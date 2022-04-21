import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoHome from "./components/ToDoHome";
import store from "./state/store";



export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header title="Welcome to Check List - Your Online TODO List"/>
        <ToDoHome />
        <Footer footNote="Made with &#128150; Debaditya Bhar" />
      </Provider>
    </>
  );
}


