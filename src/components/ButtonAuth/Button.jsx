import './button.css'

function Button({ className, onClick, children }) {

    return(
        <button className={`btn-auth ${className}`} onClick={onClick}>
            { children }
        </button>
    )
}

export default Button