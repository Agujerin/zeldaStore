export default function ZeldaConfirmation(){
    
    const handleReload=()=> window.location.reload()
    
    return(
        <div className="confirmation-msg" onClick={handleReload}>
            <h3>Su compra ha finalizado exitosamente, ahora cuenta con todo lo necesario para vencer a Ganon y salvar Hyrule</h3>
            <i className="fas fa-check"></i>
        </div>
    )
}