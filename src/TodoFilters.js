export const TodoFilters = ({ showAll, showPending, showDone }) => {
  return (
    <>
      <div className="filter">
        <button href="#" onClick={showAll}>
          Show All
        </button>
        

        <button href="#" onClick={showPending}>
          Show Pending
        </button>
        
        <button href="#" onClick={showDone}>
          Show Done
        </button>
        
      </div>
    </>
  );
};
