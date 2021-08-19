import ZeldaBuyApp from "./components/ZeldaBuyApp";
import ZeldaHeader from "./components/ZeldaHeader";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <div>
      <ThemeProvider>
        <ZeldaHeader/>
        <ZeldaBuyApp/>
      </ThemeProvider>
    </div>
  )
}

export default App;
