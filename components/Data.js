import amine from './images/Amine.jpg'
import boxing from './images/boxing.jpg'
import flying from './images/flying.jpg'

//object to hold all the data for the images
const data = {
    properties: [
    {
        'index': 0,
        'picture': amine
    },
    {
        'index': 1,
        'picture' : boxing
    },
    {
        'index': 3,
        'picture': flying
    }
    ]
}
console.log(data.properties[0]);

export default data;