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
  let firstName = prompt('Enter your firstName  ');
  let lastName = prompt('Enter your lastName  ');
  let address = prompt('Enter your address  ');
  let city = prompt('Enter your city  ');
  let state = prompt('Enter your State  ');
  let zipCode = prompt('Enter your zipcode  ');
  let phoneNumber = prompt('Enter your Phone  ');
  let emailId = prompt('Enter your Email  ');

  let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
  console.log("\nDetails:-");
  console.log(contactDetails.toString());
}
GetContactDetails();