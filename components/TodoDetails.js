import React , {useState, useEffect} from 'react';

export default ({match}) => {
    console.log(match);
    const [task,setTask] = useState({});

    useEffect (()=> {
        fetch(`https://nztodo.herokuapp.com/api/task/${match.params.pk}/?format=json`).then(
            (response) => response.json()
        ).then((task) => setTask(task));
    },[match.params.pk])

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.description}</p>
            <p>{task.id}</p>
            <p>{task.group}</p>
        </div>
    )
}