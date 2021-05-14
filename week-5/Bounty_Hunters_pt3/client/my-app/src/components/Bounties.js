import React, { useState } from 'react'
import BountyFormHandler from './BountyFormHandler'

function Bounties({deleteBounty, editBounty, firstName, lastName, living, bountyAmount, type, _id}) {

     const [editToggle, setEditToggle] = useState(false);

     return (
          <div className={living ? "bounties-green" : "bounties-red"}>
               { !editToggle ?
               <>
                    <h1>Name: {firstName} {lastName}</h1>
                    <h3>Status: {living ? "Alive" : "Deceased"}</h3>
                    <p>Reward: ${bountyAmount}</p>
                    <p>Jedi or Sith: {type}</p>
                    <button 
                         className="delete-btn" 
                         onClick={() => deleteBounty(_id)}>Delete
                    </button>
                    <button 
                         className="edit-btn"
                         onClick={() => setEditToggle(prevToggle => !prevToggle)} >
                         Edit  
                    </button>
               </>     
               :
               <>
               <BountyFormHandler 
                    firstName={firstName}
                    lastName={lastName}
                    living={living}
                    _id={_id}
                    bountyAmount={bountyAmount}
                    btnText="Submit Edit"
                    submit={editBounty}     
                    />
               <button
                    className="close-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Close
               </button>
               </>
               }
          </div>
     )
}

export default Bounties
