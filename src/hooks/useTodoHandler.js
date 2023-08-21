import { useState } from "react";

let nextId = 2;

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

    const handleAdd = (args) => {
        setData([
            ...data,
            {
                id: nextId++,
                content: args,
                active: true,
            },
        ]);
    };

    const handleRemove = (id) => {
        setData(data.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id, content) => {
        const nextData = data.map((todo) => {
            if (todo.id === id) {
                return { ...todo, content: content }
            }
            return todo
        })

        setData(nextData)
    }


    return { data, handleCheck, handleAdd, handleRemove, handleEdit, setData }
}

export default useTodoHandler;