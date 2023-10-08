interface Contact {
    id: number;
    name: String;
}

/* function clone(source:Contact){
    // return "Some text !"
    return Object.apply({},source);
} */

/* function clone(source: Contact): Contact {
    // return "Some text !"
    return Object.apply({}, source);
} */

function clone<T>(source: T): T {
    // return "Some text !"
    return Object.apply({}, source);
}
const a: Contact = { id: 123, name: "kp" };
// const b = clone(a); // const b:any
const b = clone(a); // const b:Contact

const dateRange = {startDate: Date.now(), endDate: Date.now()}

const c = clone(dateRange);



let name1 = "xyz";
getUser("abc").then(u => name = u);

function getUser(userID){

}