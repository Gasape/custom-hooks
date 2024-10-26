import { useEffect, useState } from "react";

export function useDebounce<T> (value: T, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect( () => {
        const timer = setTimeout( () => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(timer)
    }, [value])
}

/*
    Cuando el usuario escriba se lanzara el useEffect de modo que esperara por defecto los 500ms que
    se le indican, en caso de que no se cumplan los 500ms y el usuario vuelva a escribir
    se limpia el timer y se vuelve a lanzar
    0ms -> user typed
        useEffect ... delay 500
    150ms -> user type
        clear useEffect 
        useEffect ... delay 500
    
    Y se repite el ciclo, esto con el proposito de no tener tantas llamadas a una API en caso de que mi usuario escriba sobre un campo en el que se tiene
    un llamado a la API
*/