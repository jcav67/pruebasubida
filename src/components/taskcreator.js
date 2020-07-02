import React, {useState} from 'react';

export const Taskcreator = props =>{

    const [newtaskname, setnewtaskname] = useState('')

    const updatenewtaskvalue= e =>{
        setnewtaskname(e.target.value);
    }

    const createnewtask = () =>{
        props.callback(newtaskname);
        setnewtaskname('');
    }

    return(
        <div className="my-1">
            <input type="text" className="form-control"
            value={newtaskname}
            onChange={updatenewtaskvalue} />
            <button className="btn btn-primary" onClick={createnewtask} >Agregar</button>
        </div>
    )
}