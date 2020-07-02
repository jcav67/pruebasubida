import React from 'react';

export const TaskBanner = props =>(
    <h4 className="bg-dark text-white text-center p-4">
        {props.username}'s list to do({props.taskitems.filter(t=> !t.done).length} task to do)
    </h4>
)