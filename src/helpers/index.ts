export function formatCurrency(amount: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

//transforma los datos del formulario de String a Boolean cambiando el estado en la base de datos
export function toBoolean(str: string){
    return str.toLowerCase() === "true"
}