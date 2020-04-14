import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
export default ({location}) => {
    const [tasks,setTasks] = useState([]);
    useEffect (()=> {
        const searchObj = queryString.parse(location.search);
        fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchObj.search}`)
        .then((response) => {return response.json()})
        .then((tasks) => {
            setTasks(tasks);
        })
    },[location.search])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <ul className="list-group">
                        {
                            tasks.map((singleTask) => {
                                return (
                                    <Link to = {`/todo/${singleTask.id}/${singleTask.title.replace(/\s+/g,'-')}`}>
                                        <li key={singleTask.id} className="list-group-item">
                                            <h5>{singleTask.title}</h5>
                                            <p>
                                                {singleTask.description}
                                            </p>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}