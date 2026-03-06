export function Input(label, name, id) {
    return (
             <div>
                <label htmlFor={id}>{label}</label>
                <input type="text" name={name} id={id}/> <br />
                
             </div>
    )
}