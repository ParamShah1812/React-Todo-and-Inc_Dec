export const Todoform = ({
  text,
  addTask,
  taskValueChange,
  handleSubmit,
  // editTask,
  // editToggle,
  removeTask,
  // editedTaskId
  searchMovie,
  searchval,
  searchValueChange,
}) => {
  return (
    <>
      <div className="todo-form">
        <h1>Todo List</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            value={text}
            onChange={(e) => taskValueChange(e.target.value)}
            placeholder="Add Tasks"
          />

          {/* {
            editToggle ? <button type="submit" onClick={() => addTask()} >Add</button> : <button type="submit" onClick={() => addTask()} >Edit</button>
          } */}

          <button type="submit" onClick={() => addTask()}>
            Add
          </button>

          <button type="reset" onClick={() => removeTask()}>
            Clear All
          </button>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <div className={"input searchval"} >
          <input
            type="text"
            value={searchval}
            onChange={(e) => searchValueChange(e.target.value)}
            placeholder="search Tasks"
          />

          <button type="submit" onClick={() => searchMovie()}>
            Search
          </button>
        </div>
      </form>
    </>
  );
};
