import './TodoCounter.css';

function TodoCounter(props){
    return (
            <h1 className="TodoCounter">
            {resultado(completedTodos, totalTodos)}
        </h1>
    );
  }

export {TodoCounter};