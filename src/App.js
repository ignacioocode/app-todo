import AppUI from "./AppUI";
import UseProvider from "./context/useProvider";

function App() {
  return (
    <UseProvider>
      <AppUI/>
    </UseProvider>
  );
}

export default App;