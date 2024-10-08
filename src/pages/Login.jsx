import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthProvider"


const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const {login} = useContext(AuthContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email.toLowerCase() === "harry@potter.com" && pass === "harry") {
            // console.log({email, pass})
            login({email,pass})
        } else {
            alert("There is an error in user information")
            
        }
      
    }
  return (
    <div className='loginDiv '>

        <div className=' logginn  h-[500px] w-11/12 sm:w-[475px] rounded-[20px] p-5 flex flex-col justify-center text-center'>
        <div className='flex justify-center items-center mt-2 gap-3'>
            <span className='w-[6px] h-[39px] bg-red-900 '></span>
            <h1 className='text-[22px] sm:text-[32px] font-montserrat font-[700]  text-white'>Harry Potter Store</h1>
        </div>

        <div className='my-2'>
            <h3 className=' font-montserrat font-[600] text-[22px]  text-white '>   GİRİŞ</h3>
            <p className='text-labelColor text-label mt-1'>Hesabınıza erişmek için kimlik bilgilerinizi girin</p>
        </div>
        <form 
        onSubmit={handleSubmit}
        className='flex flex-col text-left p-3 gap-5'>
            <div className='flex flex-col gap-2'>
                <label className="font-montserrat text-label hover:after:content-['harry@potter.com'] hover:after:pl-3 hover:after:underline hover:cursor-pointer  text-white " htmlFor="email">
                Email
                </label>
                <input 
                className='login-input'
                type="email"
                id='email'
                placeholder='Enter your email'
                required 
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className="font-montserrat text-label hover:after:content-['harry'] hover:after:pl-3 hover:after:underline hover:cursor-pointer  text-white " htmlFor="password">
                Şifre
                </label>
                <input 
                className='login-input'
                type="password"
                id='password'
                placeholder='Enter your password'
                required 
                onChange={(e)=>setPass(e.target.value)}
                />
            </div>

            <button className='bg-main h-[40px] font-montserrat text-label uppercase hover:opacity-90 rounded-[4px] text-white'>Giriş</button>
        <div className='flex justify-center items-center flex-wrap gap-2 mt-3'>
            <span className='text-label font-mono font-[500] cursor-pointer  text-white'>Şifremi unuttum?</span>
            <span className='text-main text-[14px] font-montserrat font-[500] underline ml-3 cursor-pointer ' >Şifremi yenile</span>
        
        </div>

        </form>

     

        </div>
    </div>
  )
}

export default Login