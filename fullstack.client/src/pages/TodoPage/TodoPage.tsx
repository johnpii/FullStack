import { useEffect, useState } from 'react';
import Todo from '../../types/Todo';
import { fetchTodos } from '../../services/TodoService';
import TodoTable from '../../components/TodoTable/TodoTable';

const TodoPage = () => {
    const [todos, setTodos] = useState<Todo[]>();

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchTodos();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        loadData();
    }, []);

    const contents = todos === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started.</em></p>
        : <TodoTable todos={todos} />;

    return (
        <div>
            <h1 id="tableLabel">Todos</h1>
            <p>Found next todos: </p>
            {contents}
        </div>
    );
};

export default TodoPage;
