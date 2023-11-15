import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/lists';

const createUser = () : User => {
return {
    name: '',
    _id: uuidv4(),
    onBoarded: true,
    isOwner: true
}
}


export {createUser}