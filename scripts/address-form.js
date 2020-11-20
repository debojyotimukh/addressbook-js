window.addEventListener('DOMContentLoaded', function () {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }

        try {
            (new Contact()).fullName = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }

        try {
            (new Contact()).phone = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return;
        }

        try {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
});

const save = () => {
    try {
        let contact = createNewContact();
        createAndUpdateStorage(contact);

    } catch (error) {
        alert(error);
        return;
    }
    window.location.href = "../pages/home.html";
};

const createNewContact = (id) => {
    let contact = new Contact();
    if (!id) contact.id = generateID();
    else contact.id = id;

    try {
        contact.fullName = getInputValueById('#name');
        contact.phone = getInputValueById('#phone');
        contact.address = getInputValueById('#address');
        contact.city = getInputValueById('#city');
        contact.state = getInputValueById('#state');
        contact.zip = getInputValueById('#zip');

    } catch (error) {
        throw 'Failed to create contact: ' + error;
    }
    return contact;

};

const generateID = () => {
    let id = localStorage.getItem("RECENT_CONTACT_ID");
    id = !id ? 1 : (parseInt(id) + 1).toString();
    localStorage.setItem("RECENT_CONTACT_ID", id);

    return id;
};

function createAndUpdateStorage(contact) {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));

    if (contactList != undefined) {
        contactList.push(contact);
    } else {
        contactList = [contact];
    }
    alert(contactList.toString());
    localStorage.setItem("ContactList", JSON.stringify(contactList));
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
};

const resetForm = () => {
    setValue('#name', '');
    setValue('#phone', '');
    setValue('#address', '');
    setValue('#city', '');
    setValue('#state', '');
    setValue('#zip', '');

    setTextValue('.name-error', '');
    setTextValue('.phone-error', '');
    setTextValue('.address-error', '');
};

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};