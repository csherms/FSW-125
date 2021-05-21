import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Bounties from './components/Bounties'
import BountyFormHandler from './components/BountyFormHandler'

function App() {
     const [bounties, setBounties] = useState([]);

     const getBounties = () => {
          axios.get('/bounties')
            .then(res => setBounties (res.data))
            .catch(err => console.log(err))
     }

     const addBounty = (newBounty) => {
          axios.post('/bounties', newBounty)
            .then(res => setBounties(prevBounties =>
                [...prevBounties, res.data]))
            .catch(err => console.log(err))
     }

     const deleteBounty = (bountyId) => {
          axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                 setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
     }

     const editBounty = (updates, bountyId) => {
          axios.put(`/bounties/${bountyId}`, updates)
            .then(res => 
               {setBounties(prevBounties => 
                    prevBounties.map(bounty => 
                         bounty._id !== bountyId ? 
                         bounty : 
                         res.data
                         ))})
            .catch(err => console.log(err))
     }


     useEffect(() => {
          getBounties()
     }, []);



// MAP OVER EACH BOUNTY IN THE LIST
     const bountiesList = bounties.map(bounty => <Bounties 
     {...bounty} 
     deleteBounty={deleteBounty}
     editBounty={editBounty}
     key={bounty._id} />)


     return (
          <div className="bounties-container">
               <BountyFormHandler 
               btnText="Add Bounty"
               submit={addBounty}/>
               {bountiesList}
          </div>
     )
}

export default App
