import { useState } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';

function RegisterForm()
{
    function isValidPassword(v) {
        return /[a-z]/.test(v)
            && /[A-Z]/.test(v)
            && /\d/.test(v)
            && /[*@%$#]/.test(v)
            && v.length >= 8
    }
        
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    
    const [emailErr, setEmailErr] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [userNameErr, setuserNameErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [ConfirmPasswordErr, setConfirmPasswordErr] = useState("")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const UserNameRegex = /\s/

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === "name")
        {
            setName(e.target.value)
            setNameErr(e.target.value.length === 0 ? "This Field is Required":
            e.target.value.length < 3 && "Please Enter name more than 3 characters") 
        }
        else if(e.target.name === "email")
        {
            setEmail(e.target.value)
            setEmailErr(e.target.value.length === 0 ? "This Field is Required" :
            !emailRegex.test(e.target.value) && "please enter valid email")
        }
        else if(e.target.name === "UserName")
        {
            setUsername(e.target.value)
            setuserNameErr(e.target.value.length === 0 ? "This Field is Required" :
            UserNameRegex.test(e.target.value) && "should contains no spaces")
        }
        else if(e.target.name === "password")
        {
            setPassword(e.target.value)
            setPasswordErr(e.target.value.length === 0 ? "This Field is Required" :
                !isValidPassword(e.target.value) &&
                "Password must be ≥8 chars with 1 lowercase, 1 uppercase, 1 digit, and 1 special character (e.g. *@%$#).")
        }
        else if(e.target.name === "confirmPassword")
        {
            setConfirmPassword(e.target.value)
            setConfirmPasswordErr(e.target.value.length === 0 ? "This Field is Required" :
            e.target.value !== password && "Passwords do not match")
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    function disableSubmitButton()
    {
        return emailErr
            || nameErr
            || userNameErr
            || passwordErr
            || ConfirmPasswordErr;
    }

    return(
        <>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="">Name: </label>
                    <input  type="text"
                            name="name"
                            value={name}
                        onChange={(e) => handleChange(e)}
                        className={`form-control ${nameErr ? 'is-invalid' : name ? 'is-valid' : ""}`}/>
                </div>
                <p className="text-danger"> {nameErr} </p>
                
                <div className="mb-3">
                    <label htmlFor="">Email: </label>
                    <input  type="email"
                            name="email"
                            value={email}
                        onChange={(e) => handleChange(e)}
                        className={`form-control ${emailErr ? 'is-invalid' : email ? 'is-valid' : ""}`}/>
                </div>
                <p className="text-danger"> {emailErr} </p>
                
                <div className="mb-3">
                    <label htmlFor="">UserName: </label>
                    <input  type="text"
                            name="UserName"
                            value={userName}
                        onChange={(e) => handleChange(e)}
                        className={`form-control ${userNameErr ? 'is-invalid' : userName ? 'is-valid' : ""}`}/>
                </div>
                <p className="text-danger"> {userNameErr} </p>
                
                <div className="mb-3 position-relative">
                    <label>Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={`form-control ${passwordErr ? 'is-invalid' : password ? 'is-valid' : ''}`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0"
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                <p className="text-danger">{passwordErr}</p>

                <div className="mb-3 position-relative">
                    <label>Confirm Password:</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={ConfirmPassword}
                        onChange={handleChange}
                        className={`form-control ${ConfirmPasswordErr ? 'is-invalid' : ConfirmPassword ? 'is-valid' : ''}`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0"
                    >
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                <p className="text-danger">{ConfirmPasswordErr}</p>

                <button type="submit" className="btn btn-primary"
                    disabled={disableSubmitButton()}>Register</button>
                
            </form>
        </>
    )
}

export default RegisterForm;