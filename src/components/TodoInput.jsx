import { useState } from "react";
import { v4 as uuid } from 'uuid';
export const TodoInput = ({handletodos}) =>
{
    const [val, setval] = useState("");
    
    const handleInputData = () => {
        const payload = {
            title: val,
            status: false,
            id:uuid()
        }
        handletodos(payload);
        setval("");
    }

    const style = { height: '40px', border: '2px solid black', padding: '20px', boxSizing: 'border-box', fontSize: '20px' };
    
    return(
        <div className="input"><input type="text" placeholder="enter Todo Title" onChange={(e) => { setval(e.target.value); }} value={ val} style={style} />
            
        <button style={{ height: '40px' }} onClick={handleInputData}>Add</button></div>
    )
}