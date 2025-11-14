import { useState } from "react";

export default function ModalForm({isOpen, mode, onClose, onSubmit}) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [jerseyNumber, setJerseyNumber] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [status, setStatus] = useState(false);

  return (
    <>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open={isOpen}>
    <div className="modal-box">
        <h3 className="font-bold text-lg">{mode === 'edit' ? 'Edit Player' : "Create a New Player"}</h3>
        <div className="modal-action">
        <form method="dialog" onSubmit={onSubmit}>
            {/* if there is a button in form, it will close the modal */}
                <label className="input input-bordered my-4 flex items-center gap-2">
                    Name
                    <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="input input-bordered my-4 flex items-center gap-2">
                    Position
                    <input type="text" className="grow" value={position} onChange={(e) => setPosition(e.target.value)} />
                </label>
                <label className="input input-bordered my-4 flex items-center gap-2">
                    Jersey Number
                    <input type="text" className="grow" value={jerseyNumber} onChange={(e) => setJerseyNumber(e.target.value)}/>
                </label>

                <div className="flex mb-4 justify-between my-4">
                    <label className="input input-bordered mr-4 flex items-center gap-2">
                        Grad Year
                        <input type="number" className="grow" value={gradYear} onChange={(e) => setGradYear(e.target.value)}/>
                    </label>
                    <select value={status ? 'Active' : 'Inactive'} className="select select-bordered w-full max-w-xs" onChange={(e)=>{setStatus(e.target.value === 'Active')}}>
                        <option>Inactive</option>
                        <option>Active</option>
                    </select>


                </div>
                
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"  onClick={onClose}>✕</button>
                <button type="submit" className="btn btn-success"> {mode === 'edit' ? 'Save Changes' : 'Add Player' }</button>
                
            </form>
        </div>
    </div>
    </dialog>    
    </>
  )
}