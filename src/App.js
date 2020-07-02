import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/taskrow.js'
import { TaskBanner } from './components/taskbanner.js'
import {Taskcreator} from './components/taskcreator.js'
import{ Visibilitycontrols} from './components/visibilitycontrol.js'

function App() {

  const [UserName, setUserName] = useState('Jmilo');
  const [TaskItem, setTaskItem] = useState([
    { name: 'Task one', done: false },
    { name: 'Task Two', done: false },
    { name: 'Task three', done: true },
    { name: 'Task four', done: false }
  ]);
  const [showcompleted, setshowcompleted] = useState(true)

  useEffect(() => {
    let data= localStorage.getItem('tasks');
    if( data !=null){
      setTaskItem(JSON.parse(data))
    } else{
      setUserName('Fazt')
      setTaskItem([{ name: 'Task one', done: false },
      { name: 'Task Two ejemplo', done: false },
      { name: 'Task three', done: true },
      { name: 'Task four', done: false }])
      setshowcompleted(true);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(TaskItem))

  },[TaskItem])


  const Toggletask = task =>
    setTaskItem(TaskItem.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))
  
  const createnewtaskitem =taskName =>{
    if(!TaskItem.find(t => t.name ===taskName)){
      setTaskItem([...TaskItem,{name: taskName, done: false}])
    }
  }



  const Tasktablerows = (donevalue) => 
  TaskItem
  .filter(task  => task.done ===donevalue)
  .map(task => (
    <TaskRow task={task} key={task.name} toggletask={Toggletask} />
  ))

  return (
    <div >
      <TaskBanner username={UserName} taskitems={TaskItem}/>
      <Taskcreator callback={createnewtaskitem} />
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th >Description</th>
            <th >Done</th>
          </tr>
        </thead>
        <tbody>
          {Tasktablerows(false)}
        </tbody>
      </table>

      <div className="bg-primary-text-white text-center p-2" >
        <Visibilitycontrols
         description ="completed task"
         isCheked={showcompleted}
         callback={checked=> setshowcompleted(checked)}
        />
      </div>
      {
        showcompleted && (
          <table className="table table-stripped table-bordered" >
            <thead>
              <tr>
              <th>description</th>
              <th>done</th>
              </tr>
            </thead>
            <tbody>
              {Tasktablerows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
