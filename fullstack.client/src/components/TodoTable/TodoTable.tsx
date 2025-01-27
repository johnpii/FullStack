import React from 'react';
import Todo from '../../types/Todo';
import styles from './TodoTable.module.scss';

interface TodoTableProps {
    todos: Todo[];
}

const TodoTable: React.FC<TodoTableProps> = ({ todos }) => {
    return (
        <table className={styles.table} aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created At</th>
                    <th>Deadline</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.createdAt.toString()}</td>
                        <td>{todo.deadline.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TodoTable;