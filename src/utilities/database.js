import * as firebase from 'firebase';

export const addDonation = (first_name,last_name, donator_type, address_field, pin_code, phone_number, no_meals, people_per_meal, restaurant_name) => {
  return new Promise((resolve, reject) => {
    let today = new Date();
    let hrs = today.getHours();
    let node;
    if(hrs===23 || hrs<11) node='meal_two';
    else if(hrs>11 && hrs < 17) node ='meal_three';
    else node="meal_one";
    let ref = firebase.database().ref('active/donations/'+node);
    let no_donations = no_meals * people_per_meal;
    ref.push({
      first_name: first_name,
      last_name: last_name,
      donator_type: donator_type,
      address_field: address_field,
      pin_code: pin_code,
      phone_number: phone_number,
      no_donations: no_donations,
      restaurant_name: restaurant_name,
      date_sent: today
    }).then(response => {
      ref.child(response.getKey()).update({id: response.getKey()});
      resolve(response.getKey());
    }).catch(error=>reject('error ', error));
  })
}
export const addCharityRequest = (first_name, last_name, charity_name, address_field, pin_code, phone_number, no_orders) => {
  return new Promise((resolve, reject) => {
    let today = new Date();
    let node;
    let hrs = today.getHours();
    if(hrs===23 || hrs<11) node='meal_two';
    else if(hrs>11 && hrs < 17) node ='meal_three';
    else node="meal_one";
    let ref = firebase.database().ref('active/orders/'+node);
    ref.push({
      first_name: first_name,
      last_name: last_name,
      charity_name: charity_name,
      address_field: address_field,
      pin_code: pin_code,
      phone_number: phone_number,
      no_orders: no_orders,
      date_sent: today
    }).then(response => {
      ref.child(response.getKey()).update({id: response.getKey()});
      resolve(response.getKey());
    }).catch(error=>reject('error ', error));
  })
}
