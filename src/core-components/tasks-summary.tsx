import Text from "../components/text"
import Badge from "../components/badge"
import useTasks from "../hooks/use-tasks"

export default function TasksSummary() {
 const { concludedTasksCount, tasksCount} = useTasks()

 return (
  <>
   <div className="flex items-center gap-2">
    <Text variant="body-sm-bold" className="!text-gray-300">
     Tarefas criadas
    </Text>
    <Badge variant="secondary">{tasksCount}</Badge>
   </div>
   <div className="flex items-center gap-2">
    <Text variant="body-sm-bold" className="!text-gray-300">
     Concluídas
    </Text>
    <Badge variant="primary">{concludedTasksCount} de {tasksCount}</Badge>
   </div>
  </>
 )
}