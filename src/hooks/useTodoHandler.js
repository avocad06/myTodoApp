import { useState } from "react";

const useTodoHandler = (initialData) => {
    const [data, setData] = useState(initialData);

    const handleCheck = (id) => {
        const nextData = data.map((todo) => {
            if (todo.id === id) {
                return { ...todo, active: !todo.active }
            }
            return todo
        })
        setData(nextData)
    }

    return { data, handleCheck }
}

export default useTodoHandler;