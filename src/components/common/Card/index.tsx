import { FC } from "react"
import { Item } from "../../../types"

type Props = {
    information: Item
}

const Card: FC<Props> = ({information}) => {
    return (
        <h1>{information.title}</h1>
    )
}

export {Card}