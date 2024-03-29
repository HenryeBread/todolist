import { useState } from "react";

export function NewForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("")

    {/* Create Submit Functionality */}
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <form className="todo-list" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input
                     type="text"
                     value={newItem}
                     onChange={e => setNewItem(e.target.value)}
                     id="item"/>
                </div>
                <button className="btn">Add</button>
            </form>
    )

}