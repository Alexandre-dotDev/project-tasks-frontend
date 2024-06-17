// import React from "react";
import { useState, useRef, useEffect } from "react";
import TaskItem from "./components/TaskItem";

// Component of the Class
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChangeMessage = this.handleChangeMessage.bind(this);
//         this.handleStateTasks = this.handleStateTasks.bind(this);
//         this.state = {
//             tasks: [
//                 {
//                     id: "1",
//                     description: "Estudar Programação",
//                     isCompleted: false,
//                 },
//                 {
//                     id: "2",
//                     description: "Estudar Lógica",
//                     isCompleted: true,
//                 },
//             ],
//             message: "Hello world in class",
//         };
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(prevState);
//         console.log("Component was updated");
//     }
//     handleChangeMessage = () => {
//         this.setState({
//             message: "Olá mundo na classe",
//         });
//     };

//     handleStateTasks() {
//         this.setState({
//             tasks: [],
//         });
//     }

//     render() {
//         return (
//             <>
//                 <div>
//                     <div>
//                         <p>{this.state.message}</p>
//                         <button onClick={this.handleChangeMessage}>
//                             Chance message
//                         </button>
//                     </div>
//                     {this.state.tasks.map((task) => (
//                         <>
//                             <TaskItem key={task.id} props={task} />
//                             <p>
//                                 {task.isCompleted ? "Completo" : "Não completo"}
//                             </p>
//                         </>
//                     ))}
//                     <button onClick={this.handleStateTasks}>Clear task</button>
//                 </div>
//             </>
//         );
//     }
// }

// Component of the Function
const App = () => {
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
        } else {
            console.log(`Component was updated with component function`);
        }
    });

    const [message, setMessage] = useState("Hello world!");
    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar Programação",
            isCompleted: false,
        },
        {
            id: "2",
            description: "Estudar Lógica",
            isCompleted: true,
        },
    ]);

    const handleChangeMessage = () => {
        setMessage("Olá mundo");
    };

    const handleClearTasks = () => {
        setTasks([]);
    };
    return (
        <>
            <h1>{message}</h1>
            <button onClick={handleChangeMessage}>Change message</button>

            <div>
                {tasks.map((task) => (
                    <>
                        <TaskItem key={task.id} props={task} />
                        <p>{task.isCompleted ? "Completo" : "Não completo"}</p>
                    </>
                ))}
                <button onClick={handleClearTasks}>Clear tasks</button>
            </div>
        </>
    );
};

export default App;
