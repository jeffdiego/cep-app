export function Input(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" name={props.name} id={props.id} />
            <br />
        </div>
    )
}