export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}></input>
                    {title}
            </label>
            {/* Delete Button */}
            <button 
            className="btn btn-danger"
            onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}