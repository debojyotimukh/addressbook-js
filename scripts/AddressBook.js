class Contact {
    //constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    //getter and setters
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(value))
            this._firstName = value;
        else throw 'Name is invalid';
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(value))
            this._lastName = value;
        else throw 'Name is invalid';
    }

    get address() {
        return this._address;
    }
    set address(value) {
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if (addressRegex.test(value))
            this._address = value;
        else throw 'Address is invalid';
    }

    get city() {
        return this._city;
    }
    set city(value) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(value))
            this._city = value;
        else throw 'City is invalid';
    }

    get state() {
        return this._state;
    }
    set state(value) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(value))
            this._state = value;
        else throw 'State is invalid';
    }


    get zip() {
        return this._zip;
    }
    set zip(value) {
        let zipRegex = RegExp('[0-9]{6}');
        if (zipRegex.test(value))
            this._zip = value;
        else throw 'Zip is invalid';
    }

    get phone() {
        return this._phone;
    }
    set phone(value) {
        let phoneRegex = RegExp('[0-9]{10}');
        if (phoneRegex.test(value))
            this._phone = value;
        else throw 'Phone number is invalid';
    }


    get email() {
        return this._email;
    }
    set email(value) {
        let emailRegex = RegExp('^[\\w-+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]+)*(\\.[a-z]{2,})$');
        if (emailRegex.test(value))
            this._email = value;
        else throw 'Email is invalid';
    }

    toString() {
        return "First Name= " + this.firstName + ", Last Name=" + this.lastName +
            ", Address=" + this.address + ", City=" + this.city + ", State=" + this.state +
            ", zip=" + this.zip + ", Phone=" + this.phone + ", Email=" + this.email;
    }

}

// let contact = new Contact("Debojyoti", "Mukherjee", "privy", "Murshidabad", "Maharastra", "788687", "1234567890", "ghg.ghd@bridgelabz.com");
// console.log(contact.toString());

// let AddressBookArr = [];
// //add contact
// AddressBookArr.push(contact);
// //print address book by name
// let AddressBookStr = AddressBookArr
//     .filter(contact => contact.firstName == "Debojyoti")
//     .map(contact => contact.toString());
// console.log(AddressBookStr);
// //remove contact from address book
// AddressBookArr = AddressBookArr
//     .filter(contact => contact.firstName != "Debojyoti");
// console.log(AddressBookArr);
