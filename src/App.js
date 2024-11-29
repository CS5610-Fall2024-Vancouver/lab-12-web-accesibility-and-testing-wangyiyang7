// App.js
import React, { useState } from "react";
import AddTask from "./AddTask";
import MockHeader from "./MockHeader";
import Navigation from "./Navigation";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const handleAddClick = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div>
      <Navigation />
      <MockHeader
        name="Task Manager"
        showForm={showForm}
        onAddClick={handleAddClick}
      />
      {showForm && <AddTask />}
    </div>
  );
};

export default App;
