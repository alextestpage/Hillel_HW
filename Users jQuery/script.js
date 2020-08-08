$(() => {
    const CONTACT_ROW_CLASS = 'contact-row';
    const CONTACTS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts';
    const EMPTY_CONTACT = {
        id: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
        date: '',
    };

    let list = [];

    const $contactsList = $('#contactsList');
    const contactTemplate = $('#contactTemplate').html();
    const $inputs = $('.contact-input');
    const $contactForm = $('#contactForm');
    const $dialog = $('#dialogForm').dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            Save: () => {
                saveContact();
                $dialog.dialog('close');
            },
            Cancel: () => $dialog.dialog('close'),
        },
        close: function () {
            resetForm();
        },
    });
    $('#dateInput').datepicker();

    $contactForm.on('submit', (e) => {
        e.preventDefault();
        saveContact();
    });

    $('#addBtn').on('click', () => openModal(getEmptyContact()));
    $contactsList.on('click', '.edit-btn', onEditBtnClick);
    $contactsList.on('click', '.delete-btn', onDeleteBtnClick);

    init();

    function init() {
        getData().then(setData).then(renderData);
    }

    function onEditBtnClick(e) {
        const id = getContactId(e.target);
        editContact(id);
    }

    function onDeleteBtnClick(e) {
        e.stopPropagation();
        const id = getContactId(e.target);
        deleteContact(id);
    }

    function getContactId(el) {
        return $(el)
            .closest('.' + CONTACT_ROW_CLASS)
            .data('id');
    }

    function getContactElement(id) {
        return $contactsList.find(`[data-id="${id}"]`);
    }

    function getContact(id) {
        return list.find((item) => item.id == id);
    }

    function editContact(id) {
        openModal(getContact(id));
    }

    function getData() {
        return fetch(CONTACTS_URL).then((res) => res.json());
    }

    function setData(data) {
        return (list = data);
    }

    function renderData(data) {
        const html = data.map(getContactHtml).join('\n');

        $contactsList.html(html);
    }

    function getContactHtml(contact) {
        return contactTemplate
            .replace('{{id}}', contact.id)
            .replace('{{name}}', contact.name)
            .replace('{{surname}}', contact.surname)
            .replace('{{email}}', contact.email)
            .replace('{{phone}}', contact.phone)
            .replace('{{date}}', formatDate(contact.date));
    }

    function formatDate(date) {
        date = new Date(date);
        return date.getDate() + '/' + date.getMonth() + '/' + date.getYear();
    }

    function openModal(contact) {
        fillForm(contact);
        $dialog.dialog('open');
    }

    function getEmptyContact() {
        return {
            id: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            date: '',
        };
    }

    function fillForm(contact) {
        $inputs.each((i, el) => {
            el.value = contact[el.name];
        });
    }

    function getFormData() {
        let contact = {};
        $inputs.each((i, el) => {
            contact[el.name] = el.value;
        });

        return contact;
    }

    function saveContact() {
        const contact = getFormData();

        if (contact.id) {
            updateContact(contact);
        } else {
            createContact(contact);
        }
    }

    function updateContact(contact) {
        fetch(`${CONTACTS_URL}/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        });

        list = list.map((item) => (item.id == contact.id ? contact : item));
        getContactElement(contact.id).replaceWith(getContactHtml(contact));
    }

    function createContact(contact) {
        fetch(`${CONTACTS_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            })
            .then((res) => res.json())
            .then((contact) => {
                list.push(contact);
                // list = [...list, contact];
                $contactsList.append(getContactHtml(contact));
            });
    }

    function deleteContact(id) {
        fetch(`${CONTACTS_URL}/${id}`, {
            method: 'DELETE',
        });

        getContactElement(id).remove();
    }

    function resetForm() {
        $inputs.val('');
    }
});