class Contact {

    //getter and setters
    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        let nameRegex = RegExp('^([A-Z]{1}[a-z]{3,})+(\\s)+([A-Z]{1}[a-z]{3,})$');
        if (nameRegex.test(value))
            this._fullName = value;
        else throw 'Invalid Name';
    }

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
        let addressRegex = RegExp('^[\\w]{3,}.+$');
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
        let stateRegex = RegExp('^[A-Za-z]{3,}$');
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
        let phoneRegex = RegExp('^([+]{1})??([0-9]{2})??([0-9]{10})$');
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