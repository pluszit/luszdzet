import {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase.ts";

export const Main = () => {
    type Todo = {
        todo: string;
        id: string
    }
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);
                console.log(todos, newData);
            })

    }

    useEffect(()=>{
        fetchPost();
    }, [])

    console.log(todos)

    return (
        <div>
            <h1>Main</h1>
            <ul>
                {todos.map(todo => {
                    return (<li key={todo.id}>{todo.todo}</li>)
                })}
            </ul>
        </div>
    );
}