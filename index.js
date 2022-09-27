import cowsay from 'cowsay';
import userInfo from './information.js'
// console.log(`${userInfo.nom} ${userInfo.campus}`)
console.log(cowsay.say({
    text : `${userInfo.nom} ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));