import { useState } from 'react';
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  
  const handleOpen = (mode) => {
      setModalMode(mode);
      setIsOpen(true);
  }

  const handleSubmit = (data) => {
      // Handle form submission based on mode
      if (modalMode === "add") {
          // Add new item
          console.log("Adding item:", data);
      } else if (modalMode === "edit") {
          // Edit existing item
          console.log("Editing item:", data);
      }
      setIsOpen(false);
  }

  return (
    <>
      <NavBar onOpen={()=>handleOpen('add')} />
      <TableList handleOpen={handleOpen}/>
      <ModalForm 
        isOpen={isOpen}
        mode={modalMode}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default App
