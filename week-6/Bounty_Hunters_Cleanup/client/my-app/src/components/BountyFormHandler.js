import { useState } from 'react'

function BountyFormHandler({btnText, submit, firstName, lastName, living, bountyAmount, type, _id}) {
     const initInputs = { 
         firstName: firstName || "", 
         lastName: lastName || "", 
         living: living || "", 
         bountyAmount: bountyAmount || "", 
         type: type || ""  
        }

     const [inputs, setInputs] = useState(initInputs)

     const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })

    const handleSubmit = ((e) => {
        e.preventDefault()
        if(inputs.living === 'Alive') {
            inputs.living= true
        } else {
            inputs.living = false
        }
        submit(inputs, _id)
        setInputs(initInputs)
    })

     return (
         <div className="form-container">
          <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    name="living"
                    value={inputs.living}
                    onChange={handleChange}
                    placeholder="Alive or Dead"
                />
                <input
                    type="number"
                    name="bountyAmount"
                    value={inputs.bountyAmount}
                    onChange={handleChange}
                    placeholder="Bounty Amount"
                />
                <input
                    type="text"
                    name="type"
                    value={inputs.type}
                    onChange={handleChange}
                    placeholder="Jedi or Sith"
                />
                <button>{btnText}</button>
            </form>
         </div>   
     )
}

export default BountyFormHandler
