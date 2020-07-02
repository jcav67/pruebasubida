import React from 'react';

export const Visibilitycontrols = props =>{
    return(
        <div className="form-check" >
            <input type="checkbox" className="form-check-input" checked={props.ischecked} onChange={e => props.callback(e.target.checked)} />
        
        <label htmlFor="form-check-label">
            Show {props.description}
        </label>
        </div>
    )
}