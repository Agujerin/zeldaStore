import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

export default function ZeldaHeader(){
    const {theme,handleTheme} = useContext(ThemeContext)

    return(
        <header className={`header ${theme.app}`}>
            {(theme.app === "light-app")
                ? 
                <i className="fas fa-moon" id="dark" onClick={handleTheme}>
                    <h5>CAMBIAR A TEMA OSCURO</h5>
                </i>
                :    
                <i className="fas fa-sun" id="light" onClick={handleTheme}>
                    <h5>CAMBIAR A TEMA CLARO</h5>
                </i>
            }
        </header>
    )
}