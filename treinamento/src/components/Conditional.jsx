import { useState } from "react"
export default function Conditional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        console.log("Testando render")
        setUserEmail(email)
        console.log("UserEmail", email)
    }

    function cleanEmail() {
        setUserEmail(null)
    }
    return (
        <>
        <h2>Cadastre seu Email:</h2>
        <form>
            <input type="email" placeholder="Type your email" onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit" onClick={sendEmail}>Send Email</button>
            {userEmail && (
                <div>
                    <p>
                        Existe um email cadastrado: {userEmail}
                        <button onClick={cleanEmail}>Limpar email</button>
                    </p>
                </div>
            )}
        </form>
        </>
    )
}