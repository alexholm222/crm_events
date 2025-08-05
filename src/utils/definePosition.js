export const handleDefinePosition = (position) => {
    if(position === 'director') {
        return 'Директор'
    }

    if(position === 'accountant') {
        return 'Бухгалтер'
    }

    if(position === 'operator') {
        return 'Менеджер по работе с клиентами'
    }

    if(position === 'supervisor') {
        return 'Менеджер по персоналу'
    }
}