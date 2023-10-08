/**
 * 
 * @param {number} contactId 
 */

async function getContact(contactId){
    const resp = await $.ajax({
        url: `/contacts/${contactId}`,
        dataType: "json"
    });

    return {
        id:+resp.id,
        name:resp.name,
        dob:new Date(resp.dob)
    };
    getContact(1).then((contact) => {
        contact.id = 1234;
        contact.dob = new Date("12/12/1990");
    });

    getContact(2).then((contact) => {
        console.log("Contact: ", JSON.stringify(contact))
    });
}