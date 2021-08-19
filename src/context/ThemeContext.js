import { createContext, useState } from "react"

const ThemeContext = createContext()

const initialTheme = {
    app: "light-app",
    items: "light-items"  
}

const ThemeProvider=({children})=>{
    const [theme,setTheme] = useState(initialTheme)
    
    const handleTheme=(e)=>{
        if(e.target.id === "light") setTheme(initialTheme)
        else setTheme({
            app: "dark-app",
            items: "dark-items" 
        })
    }
    
    const data = {theme,handleTheme}
    
    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext