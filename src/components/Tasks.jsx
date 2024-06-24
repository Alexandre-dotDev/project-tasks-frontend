import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            // const url = process.env.FETCH_URL;
            const url = "https://project-tasks.onrender.com/tasks";
            const { data } = await axios.get(url);
            setTasks(data);
        } catch (error) {
            throw new Error(error);
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            <div className="last-tasks">
                <h3>Útimas tarefas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTasks) => (
                            <p>{lastTasks.description}</p>
                        ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTask) => (
                            <p>{completedTask.description}</p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
