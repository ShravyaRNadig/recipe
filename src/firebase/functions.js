import db from './config'
import { onValue,  ref, set } from "firebase/database";

    // set(ref(db, 'TestUser'), {
    //   username: 'Vikas',
    //   email: 'Vikas@mai.col',
    //   profile_picture : 'Work in progreee'
    // }).then(()=>{
    //   alert('Done')
    // })


export const updateFirebase = (data,refpath) =>{

}

export const readFirebase = (refpath) =>{
    return onValue(ref(db, refpath))
}

export const writeFirebase = (data,refpath) => {
    set(ref(db, refpath), data).then(()=>{
        alert('Done')
      }).then(()=>{
          console.log('Firebase write function for refference path '+refpath+' is done')
      })
}

export const deleteFirebase = (data,refpath) => {

}