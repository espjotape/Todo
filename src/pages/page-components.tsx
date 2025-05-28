import Text from "../components/text";
import TrashIcon from "../assets/trash.svg?react"
import Icon from "../components/icon";
import CheckIcon from "../assets/check.svg?react"
import PencilIcon from "../assets/pencil.svg?react"
import PlusIcon from "../assets/plus.svg?react"
import SpinnerIcon from "../assets/spinner.svg?react"
import XIcon from "../assets/x.svg?react"
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Container from "../components/container";
import Skeleton from "../components/skeleton";


export default function PageComponents() {
 return(
  <Container>
   <div className="grid gap-10">
    <div className="flex flex-col gap-2">
     <Text variant="body-sm-bold" className="text-red">Olá mundo!</Text>
     <Text className="text-green-base">Olá mundo!</Text>
     <Text variant="body-md-bold" className="">Olá mundo!</Text>
      
     <div className="flex gap-1">
       <Icon svg={TrashIcon} />
       <Icon svg={CheckIcon} />
       <Icon svg={PencilIcon} />
       <Icon svg={PlusIcon} />
       <Icon svg={SpinnerIcon} animate/>
       <Icon svg={XIcon} />
     </div>

     <div className="flex gap-1">
      <Badge variant="secondary">5</Badge>
      <Badge variant="primary">2 de 5</Badge>
      <Badge loading></Badge>
     </div>

     <div>
      <Button icon={PlusIcon}>Nova Tarefa</Button>
     </div>

     <div>
      <ButtonIcon icon={TrashIcon} />
      <ButtonIcon icon={TrashIcon} variant="secondary"/>
      <ButtonIcon icon={TrashIcon} variant="tertiary"/>
      <ButtonIcon icon={TrashIcon} loading />
     </div>

     <div>
      <InputText />
     </div>

     <div>
      <InputCheckbox />
      <InputCheckbox loading/>
     </div>

     <div>
      <Card size="md"/>
     </div>

     <div className="space-y-2">
      <Skeleton className="h-6"/>
      <Skeleton className="h-6"/>
      <Skeleton className="w-96 h-6"/>
     </div>
   </div>
  </div>
  </Container>
 )
}