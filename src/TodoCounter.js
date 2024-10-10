import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
        <h1 className="TodoCounter">
            Has completado {completed} de {total} ToDos
        </h1>
    );
  }

export {TodoCounter};