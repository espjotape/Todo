import Button from "../components/button";
import PlusIcon from "../assets/plus.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";

export default function TaskList() {
 const { tasks } = useTasks()
 console.log(tasks)

 return (
  <>
   <section>
    <Button icon={PlusIcon} className="flex w-full items-center justify-center">Nova tarefa</Button>
   </section>
   <section className="space-y-2">
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
   </section>
  </>
 )
}