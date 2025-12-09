import React, { useEffect, useState } from "react";
import './Register.css';

const Registerf = () => {
    const [formData,setformData]=useState({name:"",phone:"",email:"",password:"",});

    const [error,seterror]=useState({});
    const [issubmit,setissubmit]=useState(false);
    const [isvalid,setisvalid]=useState(false);

    const handleChange = (e) =>{
        const {name,value}=e.target;

        setformData({...formData,[name]:value,});
    };

    useEffect(()=>{
        const validerror = {};

        if(!formData.name.trim())
        {
            validerror.name="name is required";
        }

        if(!formData.phone)
        {
            validerror.phone="phone number is required";
        }
        else if(!/^\d{10}$/.test(formData.phone))
        {
            validerror.phone="number must be 10 digits";
        }

        if(!formData.email)
        {
            validerror.email="email is required";

        }
        else if(!/\S+@\S+\.\S+/.test(formData.email))
        {
            validerror.email="invalid formate";
        }

        if(!formData.password)
        {
            validerror.password="password is required";
        }

        seterror(validerror);
        setisvalid(Object.keys(validerror).length === 0);
    },[formData]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setissubmit(true);

        if(isvalid)
        {
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            storedUsers.push(formData);
            localStorage.setItem("users",JSON.stringify(storedUsers));

            alert("Register successful");

            setformData({
                name:"",
                phone:"",
                email:"",
                password:"",
            });
            setissubmit(false);
        }
    };

    return(

        <form onSubmit={handleSubmit} noValidate>
            <div class="abc">
                <h3>Register</h3>
            </div>
            <div>
                <lable>Name:</lable><br />
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {issubmit&&error.name&&(<div>{error.name}</div>)}
            </div>

             <div>
                <lable>Phone Number:</lable><br />
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                {issubmit&&error.phone&&(<div>{error.phone}</div>)}
            </div>

             <div>
                <lable>Email:</lable><br />
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                {issubmit&&error.email&&(<div>{error.email}</div>)}
            </div>

             <div>
                <lable>Password:</lable><br />
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {issubmit&&error.password&&(<div>{error.password}</div>)}
            </div>

            <button type="submit">Register</button>
        </form>
    )
};

export default Registerf;