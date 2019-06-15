import { Container } from 'unstated'

class Cont extends Container {
    state = {
        me: {
            name: 'Undefined Team',
            phone: '123760340239',
            lastLocation: 'Dong Da, Hanoi, Vietnam',
            closed: ['1234567890', '0987654321'],
            safe: true,
            latlng: {
                latitude: 21.003817,
                longitude: 105.847747,
            }
        },
        following: [],

    }
}

const cnt = new Cont() 
export default cnt
