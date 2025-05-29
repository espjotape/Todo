import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/trash.svg?react"
import Pencil from "../assets/pencil.svg?react"
import CheckIcon from "../assets/check.svg?react"
import XIcon from "../assets/x.svg?react"
import React, { useState } from "react";
import InputText from "../components/input-text";
import { Task, TaskState } from "../models/task";
import { cx } from "class-variance-authority";
import usePreparedTask from "../hooks/use-prepare-task";

interface TaskItemProps {
 task: Task
}

export default function TaskItem({task} : TaskItemProps ) {
 const [isEditing, setIsEditing] = useState(
  task?.state === TaskState.Creating
 )

 const [taskTitle, setTaskTask] = useState( task.title || "")
 const { updateTask, updateTaskStatus, deleteTask } = usePreparedTask()

 function handleEditTask() {
  setIsEditing(true)
 }

 function handleExitEditTask() {
  if(task.state === TaskState.Creating) {
   deleteTask(task.id)
  }

  setIsEditing(false)
 }

 function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
  setTaskTask(e.target.value || "")
 }

 function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  updateTask(task.id, {title: taskTitle})
  setIsEditing(false)
 }

 function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
  const checked = e.target.checked
  updateTaskStatus(task.id, checked)
 }

 function handleDeleteTask() {
  deleteTask(task.id)
 }

 return( 
  <Card size="md">
   {!isEditing ? (
    <div className="flex items-center gap-4">
     <InputCheckbox 
     checked={task.concluded}
     onChange={handleChangeTaskStatus}
     />
     <Text className={cx("flex-1", {
      'line-through' : task?.concluded
     })}
     >
      {task?.title}
     </Text>

     <div className="flex gap-1">
      <ButtonIcon icon={TrashIcon} variant="tertiary" onClick={handleDeleteTask}/>
      <ButtonIcon icon={Pencil} variant="tertiary" onClick={handleEditTask}/>
     </div>
    </div> 
   ) : (
    <form onSubmit={handleSaveTask} className="flex items-center gap-4" >
     <InputText 
      value={taskTitle}
      className="flex-1"
      autoFocus
      required
      onChange={handleChangeTaskTitle}
     />
      <div className="flex gap-1">
      <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitEditTask}/>
      <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
     </div>
    </form>
   )
   }
  </Card>
 )
}

