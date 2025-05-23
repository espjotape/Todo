import Text from "./components/text";
import TrashIcon from "./assets/trash.svg?react"
import Icon from "./components/icon";
import CheckIcon from "./assets/check.svg?react"
import PencilIcon from "./assets/pencil.svg?react"
import PlusIcon from "./assets/plus.svg?react"
import SpinnerIcon from "./assets/spinner.svg?react"
import XIcon from "./assets/x.svg?react"
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";

export default function App() {
  return (
    <div className="grid gap-3">
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

        <div>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>
        <div>
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary"/>
          <ButtonIcon icon={TrashIcon} variant="tertiary"/>
        </div>
      </div>
    </div>
  )
}

