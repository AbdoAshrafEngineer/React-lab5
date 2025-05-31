import { useState } from "react";



function LoginForm()
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        if (e.target.name === "email")
        {
            setEmail(e.target.value)
            setEmailErr(e.target.value.length === 0 ? "This Field is Required":
            !emailRegex.test(e.target.value) && "Please Enter valid Email") 
        }
        else
        {
            setPassword(e.target.value)
            setPasswordErr(e.target.value.length === 0 ? "This Field is Required" :
            e.target.value.length < 8 && "required - password length not less than 8 characters")
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return(
        <>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="">Email: </label>
                    <input  type="email"
                            name="email"
                            value={email}
                        onChange={(e) => handleChange(e)}
                        className={`form-control ${emailErr ? 'is-invalid' : email ? 'is-valid' : ""}`}/>
                                    
                </div>
                <p className="text-danger"> { emailErr } </p>
                <div className="mb-3">
                    <label htmlFor="">Password: </label>
                    <input  type="password"
                            name="password"
                            value={password}
                        onChange={(e) => handleChange(e)}
                        className={`form-control ${passwordErr ? 'is-invalid' : password ? 'is-valid' : ""}`}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                
            </form>
        </>
    )
}

export default LoginForm;