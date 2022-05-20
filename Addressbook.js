console.log("=-=-=-=-=-Welcome to the AddressBook program!-=-=-=-=-=\n");

const prompt = require('prompt-sync')();

class Contact 
{
  firstName;
  lastName;
  address;
  city;
  state;
  zipCode;
  phoneNumber;
  emailId;

  constructor (...params)
  {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zipCode = params[5];
    this.phoneNumber = params[6];
    this.emailId = params[7];
  }

  toString()
  {
    return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZipCode: ${this.zipCode}\nPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\n`;
  }
}

function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId){
  let contact;
  try
  {
    contact = new Contact(firstName,lastName,address,city,state,zipCode,phoneNumber,emailId);
  }
  catch(ex)
  {
    console.error(ex);
  }
  return contact;
}

function GetContactDetails(){
  try 
  {
    let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    let addressPattern = new RegExp('^[A-Za-z]{4,}$'); 
    let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
    let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
    let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
    let firstName = prompt('Enter your firstName  ');
    if (!namePattern.test(firstName))
        throw 'First name should have minimum 3 characters starts with uppercase';

    let lastName = prompt('Enter your lastName  ');
    if (!namePattern.test(lastName))
        throw 'First name should have minimum 3 characters starts with uppercase';

    let address = prompt('Enter your address  ');
    if (!addressPattern.test(address))
        throw 'Address should have minimum 4 characters';

    let city = prompt('Enter your city  ');
    if (!addressPattern.test(city))
        throw 'City should have minimum 4 characters';

    let state = prompt('Enter your State  ');
    if (!addressPattern.test(state))
        throw 'State should have minimum 4 characters';

    let zipCode = prompt('Enter your zipcode  ');
    if (!zipCodePattern.test(zipCode))
        throw 'Zipcode is not valid';

    let phoneNumber = prompt('Enter your Phone  ');
    if (!phoneNumPattern.test(phoneNumber))
        throw 'Phone number is not valid';

    let emailId = prompt('Enter your Email  ');
    if (!emailIdPattern.test(emailId))
        throw 'Email id is not valid';

    let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    console.log("\nContact Details: -->");
    console.log(contactDetails.toString());
  } 
  catch (ex) 
  {
    console.error(ex);
  }
}
GetContactDetails();