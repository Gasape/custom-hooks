import { ChangeEvent, useState } from "react";



export const useForm = <T extends Object>( initialState:T ) => {

    const [formulario, setFormulario] = useState(initialState);

    const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        formulario,
        handleInput,
        ...formulario,
    }
}