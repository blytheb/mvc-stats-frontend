import React from 'react'

export default function TableList(handleOpen) {

    const playerData = [
        {
            id: 1,
            name: "John Doe",
            position: "Forward",
            jerseyNumber: 10,
            gradYear: 2023
        },
        {   id: 2,
            name: "Jane Smith",
            position: "Guard",
            jerseyNumber: 12,
            gradYear: 2024
        },
        {   id: 3,
            name: "Mike Johnson",
            position: "Center",
            jerseyNumber: 15,
            gradYear: 2022
        }
    ]

    const handleDelete = async (playerId) => {
        console.log(`Delete player with ID:`, playerId);
    }   

  return (
    <>
        <div className="overflow-x-auto mt-10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th className='text-center'>Player Name</th>
                <th className='text-center'>Position</th>
                <th className='text-center'>Jersey Number</th>
                <th className='text-center'>Grad Year</th>
                <th className='text-center'>Status</th>
                
            </tr>
            </thead>
            <tbody>
                {playerData.map((player) => (
                <tr key={player.id} className="hover:bg-base-300">
                    <td className='text-center'>{player.name}</td>
                    <td className='text-center'>{player.position}</td>
                    <td className='text-center'>{player.jerseyNumber}</td>
                    <td className='text-center'>{player.gradYear}</td>
                    <td className='text-center'>
                        <button className={`btn rounded-full w-20 ${player.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                            {player.isactive ? 'Active' : 'Inactive'}
                        </button>
                    </td>
                    <td className='text-center'>
                        <button className='btn btn-secondary' onClick={()=>handleOpen("edit", player)}>
                            Update
                        </button>
                    </td>
                    <td className='text-center'>
                        <button className='btn btn-accent' onClick={()=>handleDelete(player.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </>

  )
}