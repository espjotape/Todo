import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/trash.svg?react"
import Pencil from "../assets/pencil.svg?react"
import CheckIcon from "../assets/check.svg?react"
import XIcon from "../assets/x.svg?react"
import { useState } from "react";
import InputText from "../components/input-text";


export default function TaskItem() {
 const [isEditing, setIsEditing] = useState(false)

 function handleEditTask() {
  setIsEditing(true)
 }

 function handleExitEditTask() {
  setIsEditing(false)
 }

 return( 
  <Card size="md" className="flex items-center gap-4">
   {!isEditing ? (
    <>
     <InputCheckbox />
     <Text className="flex-1">🛒 Fazer compras da semana</Text>
     <div className="flex gap-1">
      <ButtonIcon icon={TrashIcon} variant="tertiary"/>
      <ButtonIcon icon={Pencil} variant="tertiary" onClick={handleEditTask}/>
     </div>
    </> 
   ) : (
    <>
     <InputText className="flex-1"/>
      <div className="flex gap-1">
      <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditTask}/>
      <ButtonIcon icon={CheckIcon} variant="primary"/>
     </div>
    </>
   )
   }
  </Card>
 )
}