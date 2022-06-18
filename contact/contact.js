let contactDetailId = 0
let contactId = 0
let userId = 0
let AllUsers = []



class Contacts {
  constructor(firstName, lastName) {
    this.contactId = ++contactId
    this.contactFirstName = firstName
    this.contactLastName = lastName
    this.isActive = false
    this.contactDetails = []
  }

  findContactDetail(number, typeOfContact) {
    if (typeof typeOfContact != "string") {
      console.log("Invalid Input : Type")
      return
    }

    if (typeof number != "number") {
      console.log("Invalid Input: Number")
      return;
    }

    let isContactDetailPresent = false
    let indexOfContactDetail = -1

    for (const i in this.contactDetails) {
      if (typeOfContact == this.contactDetails[i].typeOfContact) {
        if (number == this.contactDetails[i].number) {
          isContactDetailPresent = true
          indexOfContactDetail = i
          break;
        }
      }
    }
    return [isContactDetailPresent, indexOfContactDetail]
  }

  createContactDetails(number, typeOfContact) {
    if (typeof typeOfContact != "string") {
      console.log("Invalid Input : Type")
      return
    }

    if (typeof number != "number") {
      console.log("Invalid Input: Number")
    }

    let [isContactDetailPresent, indexOfContactDetail] = this.findContactDetail(number,typeOfContact)

    if (isContactDetailPresent) {
      console.log("This number with same type is already present")
      return
    }

    let newContactDetail = new ContactDetails(typeOfContact, number)
    this.contactDetails.push(newContactDetail)
    return
  }

  
  updateContactDetails(oldTypeOfContact,oldNumber,newTypeOfContact,newNumber) {
    if (typeof typeOfContact != "string") {
      console.log("Invalid Input : TypeOfContact")
      return
    }

    if (typeof number != "number") {
      console.log("Invalid Input: Number")
    }

    let [isContactDetailPresent, indexOfContactDetail] = this.findContactDetail(oldNumber,oldTypeOfContact)

    if (!isContactDetailPresent) {
      console.log("Cannot find this contact details")
      return
    }

    this.contactDetails[indexOfContactDetail].typeOfContact = newTypeOfContact
    this.contactDetails[indexOfContactDetail].number = newNumber
    return
  }


  deleteContactDetails(number, typeOfContact) {
    if (typeof typeOfContact != "string") {
      console.log("Invalid Input : Type");
      return;
    }

    if (typeof number != "number") {
      console.log("Invalid Input: Number");
    }

    let [isContactDetailPresent, indexOfContactDetail] = this.findContactDetail(
      number,
      typeOfContact
    );

    if (!isContactDetailPresent) {
      console.log("Cannot find this contact details");
      return;
    }

    this.contactDetails.pop(indexOfContactDetail);
    return;
  }

  deleteContact(firstName, lastName) {
    

    let [isContactPresent, indexOfContact] = this.findContact(firstName,lastName)
  }
}

class User {
  constructor(firstName, lastName, isAdmin) {
    this.firstName = firstName
    this.lastName = lastName
    this.isAdmin = isAdmin
    this.userId = ++userId
    this.isActive = true
    this.contacts = []

  
    AllUsers.push(this)
  }

  findUser(firstName, lastName) {
    if (typeof firstName != "string") {
      console.log("User is invalid firstname")
      return
    }

    if (typeof lastName != "string") {
      console.log("User is invalid lastname")
      return
    }

    let isUserPresent = false
    let indexOfUser = -1

    for (const i in AllUsers) {
      if (firstName == this.firstName) {
        if (lastName == this.lastName) {
          isUserPresent = true
          indexOfUser = i
          break
        }
      }
    }

    return [isUserPresent, indexOfUser]
  }

  deleteUser(firstName, lastName) {
    if (this.isAdmin == false) {
      console.log("User cannot delete")
      return
    }

    if (typeof firstName != "string") {
      console.log("User is invalid firstname")
      return
    }

    if (typeof lastName != "string") {
      console.log("User is invalid lastname")
      return
    }

    let [isUserPresent, indexOfUser] = finduser(firstName, lastName)

    if (!isUserPresent) {
      console.log("User is not present")
      return
    }

    this.isActive = false
    return
  }

  updateUser(firstName, lastName) {
    if (this.isAdmin == false) {
      console.log("User cannot update")
      return
    }

    if (this.isActive == false) {
      console.log("User cannot update contact")
      return
    }

    let [isUserPresent, indexOfUser] = finduser(firstName, lastName)

    if (!isUserPresent) {
      console.log("User is not present")
      return
    }

    this.userFirstName = firstName
    this.userLastName = lastName

    return
  }

  createUser(firstName, lastName, role) {
    if (this.isAdmin == false) {
      console.log("User is not admin")
      return
    }

    if (this.isActive == false) {
      console.log("User is inactive")
      return
    }

    if (typeof firstName != "string") {
      console.log(firstName)
      console.log("User is invalid firstname")
      return;
    }

    if (typeof lastName != "string") {
      console.log("User is invalid lastname")
      return
    }

    if (typeof role != "string") {
      console.log("User is invalid role")
      return
    }

    // check for roleadmin = true or false
    if (role == "admin") {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }

    let newUser = new User(firstName, lastName, this.isAdmin)
    return newUser
  }

  displayUser(firstName, lastName) {
    if (typeof firstName != "string") {
      console.log("User firstname is invalid")
      return
    }

    if (typeof lastName != "string") {
      console.log("User lastname is invalid")
      return
    }

    let [isUserPresent, indexOfUser] = this.findUser(firstName,lastName)
  
    if (!isUserPresent) {
      console.log("User not present")
      return
    }

    console.log(` User Details: First Name - ${AllUsers[indexOfUser].userFirstName} Last Name - ${AllUsers[indexOfUser].userLastName}`)

    // log(this)
  }

  findContact(contactFirstName, contactLastName) {
    if (this.isActive == false) {
      console.log("User is inactive")
      return
    }

    if (typeof contactFirstName != "string") {
      console.log("User is invalid : first name")
      return
    }

    if (typeof contactLastName != "string") {
      console.log("User is invalid : last name")
      return
    }

    let isContactPresent = false
    let indexOfContact = -1

    for (const i in this.contacts) {
      if (contactFirstName == this.contacts[i].contactFirstName) {
        if (contactLastName == this.contacts[i].contactLastName) {
          isContactPresent = true
          indexOfContact = i
          break
        }
      }
    }

    return [isContactPresent, indexOfContact]
  }

  createContact(firstName, lastName, number, typeOfContact) {
    if (this.isActive == false) {
      console.log("User is inactive")
      return
    }

    if (typeof firstName != "string") {
      console.log("User is invalid : first name")
      return
    }

    if (typeof lastName != "string") {
      console.log("User is invalid : last name")
      return
    }

    if (typeof number != "number") {
      console.log("User is invalid : number")
      return
    }

    if (typeof typeOfContact != "string") {
      console.log("User is invalid : type of contact")
      return
    }

    let [isContactPresent, indexOfContact] = this.findContact(firstName,lastName)

    if (isContactPresent) {
      console.log("User is already present")
      return
    }

    let newContact = new Contacts(firstName, lastName)
    this.contacts.push(newContact)
    return;
  }

  deleteContact() {}
}
class ContactDetails {
  constructor(typeOfContact, number) {
    this.contactDetailId = ++contactDetailId
    this.typeOfContact = typeOfContact
    this.number = number
  }
}

let admin = new User("Bhupesh", "Jha", "admin") 
admin.createUser("jeff", "bezos", "staff")

admin.createContact("john", "doe", 125489655, "work")
admin.contacts[0].createContactDetails(543268977, "home")
console.log(admin)
