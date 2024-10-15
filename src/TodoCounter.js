import './TodoCounter.css';

function TodoCounter(props){
    return (
        <>
            <h1 className="TodoCounter">
                {props.elResultado}
            </h1>
        </>
    );
  }

export {TodoCounter};