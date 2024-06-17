// import { useState } from "react";
import React from "react";
import TaskItem from "./components/TaskItem";

// Component of the Class
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.state = {
            tasks: [
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
            ],
            message: "Hello world in class",
        };
    }
    handleChangeMessage = () => {
        this.setState({
            message: "Olá mundo na classe",
        });
    };

    render() {
        return (
            <>
                <div>
                    <div>
                        <p>{this.state.message}</p>
                        <button onClick={this.handleChangeMessage}>
                            Chance message
                        </button>
                    </div>
                    {this.state.tasks.map((task) => (
                        <>
                            <TaskItem key={task.id} props={task} />
                            <p>
                                {task.isCompleted ? "Completo" : "Não completo"}
                            </p>
                        </>
                    ))}
                </div>
            </>
        );
    }
}

// Component of the Function
// const App = () => {
//     const [message, setMessage] = useState("Hello world!");
//     const [tasks, setTasks] = useState([
//         {
//             id: "1",
//             description: "Estudar Programação",
//             isCompleted: false,
//         },
//         {
//             id: "2",
//             description: "Estudar Lógica",
//             isCompleted: true,
//         },
//     ]);

//     const handleChangeMessage = () => {
//         setMessage("Olá mundo");
//     };
//     return (
//         <>
//             <h1>{message}</h1>
//             <button onClick={handleChangeMessage}>Change message</button>

//             <div>
//                 {tasks.map((task) => (
//                     <>
//                         <TaskItem key={task.id} props={task} />
//                         <p>{task.isCompleted ? "Completo" : "Não completo"}</p>
//                     </>
//                 ))}
//             </div>
//         </>
//     );
// };

export default App;
