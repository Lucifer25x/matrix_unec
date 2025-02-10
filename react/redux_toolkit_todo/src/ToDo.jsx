import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, edit, remove } from './tools/slices/todoSlice';

const ToDo = () => {
    let data = useSelector((p) => p.todo);
    const dispatch = useDispatch();
    const inputRef = useRef();
    const formSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) {
            window.alert('please fill input');
        } else {
            dispatch(add(inputRef.current.value));
            inputRef.current.value = "";
            console.log(data)
        }
    }

    const handleEdit = (id) => {
        const title = window.prompt('enter new title');
        if (title) {
            dispatch(edit({ id, title }));
        }
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input ref={inputRef} type="text" /><button>add</button>
            </form>
            <ul>
                {data.map((item) => <li onDoubleClick={() => { handleEdit(item.id) }} key={item.id}>{item.title} <button onClick={() => { dispatch(remove(item.id)) }}>x</button></li>).reverse()}
            </ul>
        </div>
    );
};

export default ToDo;
