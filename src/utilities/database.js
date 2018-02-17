import * as firebase from 'firebase';

export const addRestaurant = (donator_name, address_field, pin_code, phone_number, no_meals, people_per_meal) => {
  return new Promise((resolve, reject) => {
    let today = Date().now();
    let todayRef = firebase.database().ref('donations/'+today);
    let no_donations = no_meals * people_per_meal;
    todayRef.push({
      donator_name: donator_name,
      address_field: address_field,
      pin_code: pin_code,
      phone_number: phone_number,
      no_donations: no_donations
    }).then(response => {
      todayRef.child(response.getKey()).update({id: response.getKey()});
      resolve(response.getKey());
    }).catch(error=>reject('error ', error));
  })
}
export const addCharity = (charity_name, address_field, pin_code, phone_number, no_orders) => {
  return new Promise((resolve, reject) => {
    let today = Date().now();
    let todayRef = firebase.database().ref('orders/'+today);
    todayRef.push({
      charity_name: charity_name,
      address_field: address_field,
      pin_code: pin_code,
      phone_number: phone_number,
      no_orders: no_orders
    }).then(response => {
      todayRef.child(response.getKey()).update({id: response.getKey()});
      resolve(response.getKey());
    }).catch(error=>reject('error ', error));
  })
}
