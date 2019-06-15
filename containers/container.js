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
                latitude: 37.79335,
                longitude: -122.4424,
            }
        },
        following: [
            {
                name: 'Abcde',
                phone: '123760340239',
                lastLocation: 'Dong Da, Hanoi, Vietnam',
                closed: ['1234567890', '0987654321'],
                safe: true,
                latlng: {
                    latitude: 37.79335,
                    longitude: -126.4424,
                }
            },
            {
                name: 'Bcdefg',
                phone: '123760340239',
                lastLocation: 'Dong Da, Hanoi, Vietnam',
                closed: ['1234567890', '0987654321'],
                safe: true,
                latlng: {
                    latitude: 37.78865,
                    longitude: -124.4324,
                }
            },
        ],

    }
}

const cnt = new Cont() 
export default cnt
