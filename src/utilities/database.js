import * as firebase from 'firebase';

export const addRestaurant = (donator_name, addr_field_one, addr_field_two, pin_code, phone_number) => {
  return new Promise((resolve, reject) => {
    let today = Date().now();
    let todayRef = firebase.database().ref('donations/'+today);
    todayRef.push({
      donator_name: donator_name,
      address_field_one: addr_field_one,
      address_field_two: addr_field_two,
      pin_code: pin_code,
      phone_number: phone_number
    }).then(response => {
      todayRef.child(response.getKey()).update({id: response.getKey()});
      resolve(response.getKey());
    }).catch(error=>reject('error ', error));
  })
}
export const addCharity = (charity_name, addr_field_one, addr_field_two, pin_code, phone_number) => {
  return new Promise((resolve, reject) => {
    let today = Date().now();
    let todayRef = firebase.database().ref('orders/'+today);
    todayRef.push({
      charity_name: charity_name,
      address_field_one: addr_field_one,
      address_field_two: addr_field_two,
      pin_code: pin_code,
      phone_number: phone_number
    }).then(response => {
      todayRef.child(response.getKey()).update({id: response.getKey()});
      resolve(response.getKey());
    }).catch(error=>reject('error ', error));
  })
}

export const addDonations = (id, no_donations) => {
  return new Promise((resolve, reject) => {
    let today = Date().now();
    let donatorRef = firebase.database().ref('donations/'+today+'/'+id);
    donatorRef.set({
      no_donations: no_donations;
    }).then(response => resolve('success')).catch(error => reject(error));
  });
}

export const addDonations = (id, no_orders) => {
  return new Promise((resolve, reject) => {
    let today = Date().now();
    let charityRef = firebase.database().ref('orders/'+today+'/'+id);
    donatorRef.set({
      no_orders: no_orders;
    }).then(response => resolve('success')).catch(error => reject(error));
  });
}
