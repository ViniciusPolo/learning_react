import { useState } from 'react'
export default function Form() {
    function registerUser(e) {
        e.preventDefault()
        console.log("User registered")
        console.log(name + " e "+ passwoad)
    }

    const [name, setName] = useState()
    const [passwoad, setPassword] = useState()
    
    return (
        <>
            <h2> Meu Cadastro</h2>
            <form onSubmit={registerUser}>
                <div>
                <label htmlFor="name">Name:</label>
                    <input type="text" 
                    id="name"
                    name="name" 
                    placeholder="Type your name"
                    onChange={(e)=> setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="key">Password:</label>
                    <input type="password" 
                    id="key"
                    name="key"
                    placeholder="Type your password"
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </>
    )
}