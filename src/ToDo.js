import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function TodoList () {
  const [toDoActions, setTodoActions] = useState([])
  const [inputData, setInputData] = useState('')
  const [completedTask, setCompletedTask] = useState([]);
  const deleteTheAction = (index) => {
    const resetTodos = [...toDoActions];
    resetTodos.splice(index, 1);
    setTodoActions(resetTodos);
  };

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoActions([...toDoActions, inputData]);
    setInputData('');
  }

  const checkAsDone = (index, isDone) => {
    const completedAction = toDoActions[index];
    deleteTheAction(index);
    setCompletedTask([...completedTask, completedAction]);
  };

  return (
    <div>
      <div>
        <h5>Note: Todo list actions are stored locally, so all submissions will be lost upon refreshing the page.</h5>
      </div>
      <form>
        <form>
          <input 
            type="text" 
            value={inputData} 
            onChange={handleChange}
            className="todo-input"
            style={{ borderRadius: '20px', padding: '5px', border: '1px solid'}} />
          <Button type="button" className="text-white btn btn-info" onClick={handleSubmit}>Add to your list</Button>
        </form>
        <div className="lists-container">
          <div className="list">
            <h4>To-do:</h4>
            <ul>
              {toDoActions.map((todo, index) => (
                <li key={index}>{todo}
                  <Button type="button" className="text-white btn btn-info" id="dlt-btn" onClick={() =>deleteTheAction(index)}>Delete</Button>
                  <Button type="button" className="text-white btn btn-info" id="chk-btn" onClick={() =>checkAsDone(index)}>Task Complete!</Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="list">
            <h4>Already complete:</h4>
            <ul className="completed-list">
              {completedTask.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TodoList;
