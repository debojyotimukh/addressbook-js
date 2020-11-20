window.addEventListener('DOMContentLoaded', () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = `<th>Fullname</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Phone Number</th>
                    <th></th>`;

    const contactList = getContactListFromStorage();
    let innerHtml = `${headerHtml}`;

    for (const contact of contactList) {
        innerHtml = `${innerHtml}
        <tr>
                <td>${contact._fullName}</td>
                <td>${contact._address}</td>
                <td>${contact._city}</td>
                <td>${contact._state}</td>
                <td>${contact._zip}</td>
                <td>${contact._phone}</td>
                <td>
                    <img id="${contact._id}" class="modify" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${contact._id}" class="modify" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                </td>
            </tr>`;
    }

    document.querySelector('#table-display').innerHTML = innerHtml;

};

const getContactListFromStorage = () => {
    let contactList = localStorage.getItem('ContactList');
    return contactList ? JSON.parse(contactList) : [];
};

// remove contact from address book
const remove = (node) => {
    let contactList = getContactListFromStorage();
    let contact = contactList.find(data => data._id == node.id);
    if (!contact) return;
    alert("Deleting contact!");
    const index = contactList.map(data => data._id)
        .indexOf(contact._id);
    contactList.splice(index, 1);
    localStorage.setItem('ContactList', JSON.stringify(contactList));

    createInnerHtml();
};