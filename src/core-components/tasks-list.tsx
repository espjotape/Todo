import Button from "../components/button";
import PlusIcon from "../assets/plus.svg?react"
import TaskItem from "./task-item";

export default function TaskList() {
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