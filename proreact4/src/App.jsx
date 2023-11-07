import { useState,useCallback, useEffect , useRef} from "react"


function App() {
 const[lenth, setlenth] = useState(8);
 const [num, mynum] = useState(false);
 const [char, mychar] = useState(false);
const [ password,setpassword] = useState("");
// ref hook 

const passref = useRef(null)

const passwordgen = useCallback(() =>{
 let pass = " ";
 let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
 if(num) str += "0123456789";
 if(char) str += "()&^%$#@*&;";

 for (let i = 1; i <= length; i++) {
     let char = math.floor(math.random() * str.lenth + 1)
     pass += str.charAt(char)
 }
 
 setpassword(pass)

},[lenth,num,char,setpassword])

const copypasskeyborld = useCallback(()=>{
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordgen()
},[lenth,num,char,setpassword])

  return (
    <>
    
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-8 text-orange-500 bg-gray-700"
       ><div className="flex shadow rounded-lg overflow-hidden mb-4">
     
     
       <input type="text" 
       value={password}
       className="outline-none w-full py-1 px-3 "
       placeholder="password"
       readOnly
       ref={passref}
       />
       <button 
       onClick={copypasskeyborld}
       className="bg-red m-2  flex text-center text-justify outline-none text-white  bg-blue-500  ">copy</button>
       </div>
       <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input type="range"
          min={6}
          max={100}
          value={lenth}
          className="cursor-pointer"
          onChange={(e)=>{setlenth(e.target.value)}} 
          />
          <label>length : {lenth}</label>
        </div>
        <div className="flex items-center gap-x-1">
              <input type="checkbox"
              defaultChecked ={num}
              onChange={((prev)=>!prev)}
              />
              <label htmlFor="numberInput">Numbers</label>

              <input type="checkbox"
              defaultChecked ={num}
              onChange={((prev)=>!prev)}
              />
              <label htmlFor="numberInput">Characters</label>
        </div>
       </div>
       </div>
     </>
  )
}

export default App
