import Button from "../components/button";
import PlusIcon from "../assets/plus.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import usePreparedTask from "../hooks/use-prepare-task";

export default function TaskList() {
 const { tasks } = useTasks()
 const { prepareTask } = usePreparedTask()

 function handleNewTask() {
  prepareTask()
 }

 return (
  <>
   <section>
    <Button icon={PlusIcon} className="flex w-full items-center justify-center" onClick={handleNewTask}>
     Nova tarefa
    </Button>
   </section>
   <section className="space-y-2">
    {tasks.map((task) => (
     <TaskItem 
     key={task.id}
     task={task}
     />
    ))}
   </section>
  </>
 )
}