import { firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth.createUser({
    email: email,
    password: pw
  }, saveUser)
}

export function logout () {
  return firebaseAuth.unauth()
}

export function login (email, pw) {
  return firebaseAuth.authWithPassword({
    email: email,
    password: pw
  })
}

export function resetPassword (email) {
  return firebaseAuth.resetPassword(email)
}

export function saveEvent(name, date, location) {
  return firebaseAuth.post(`events/${name}`, {
    data: {name: name, date: date, location: location},
    then(err){
      
    }
  });
}

export function saveUser (err, user) {
  if(err) return err;
  return firebaseAuth.post(`users/${user.uid}/info`, {
    data: {name: user.email, uid: user.uid},
    then(err){
      return err
    }
  });
}
