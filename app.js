// que 1 Fibonnaci series
console.log('\n\n')

console.log("Yaha se Quetion 1 start ho raha hain-----------------------------------------------Dhanyavad :)")

function fib(n){
    const seq = [0, 1];

    for(var i = 2; i < n; i++){
        seq[i] = seq[i-1] + seq[i-2];
    }

    console.log(seq);
}

fib(5);

//que 3
console.log('\n\n')

console.log("Yaha se Quetion 3 start ho raha hain-----------------------------------------------Dhanyavad :)")

let count = (() => {
    let privCount = 0;
    return () => privCount++;
})();
console.log(`Private Counter: ${count()}`)
console.log(`Private Counter: ${count()}`)
console.log(`Private Counter: ${count()}`)




//que 4
console.log('\n\n')

console.log("Yaha se Quetion 4 start ho raha hain-----------------------------------------------Dhanyavad :)")


const data =  [
    {name:'john', age: 30},
    {name:'Alice', age: 25},
    {name:'Bob', age: 35}
];

for (let i = 0; i<data.length;i++){
    for(let j=i+1; j<data.length; j++) {
        if(data[i].age > data[j].age) {
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }

    }
}
console.log(data);








//que 5
console.log('\n\n')

console.log("Yaha se Quetion 5 start ho raha hain-----------------------------------------------Dhanyavad :)")


const data1 = [1,2,3,4,5,6,7,8,9]

function chunkArrayInGroups(arr, size){
    const chunks=[];
    for (let i=0; i < arr.length; i +=size ){
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};
    

console.log(chunkArrayInGroups(data1,3))
console.log(chunkArrayInGroups(data1,2))
console.log(chunkArrayInGroups(data1,5))





//que 6
console.log('\n\n')

console.log("Yaha se Quetion 6 start ho raha hain-----------------------------------------------Dhanyavad :)")


let ar = [2,4,10,[12,4,[100,99],4],[3,2,99],0];

//make 1D array using flat method
var b = ar.flat(); 
var c = b.flat();
console.log(c)


//assending order ka use kia hain re baba
let sorted1 = c.sort(function(a,b){
    return a - b;
})

console.log(sorted1)
console.log(sorted1[sorted1.length-1])

//abhi descending se bhi karega tera bhai 
let sorted2 = c.sort(function(a,b){
    return b - a;
})

console.log(sorted2)
console.log(sorted2[0])





//que 7
console.log('\n\n')

console.log("Yaha se Quetion 7 start ho raha hain-----------------------------------------------Dhanyavad :)")



// first method 
console.log("This is 1st Method............")

const employee = {
    fn: 'john',
    ln: 'doe',
    contact: 989898989,
    email:'john_ka_email@gmail.com' ,
    salary: 10000000,
    address: {
        line1: 'main road pe',
        line2: 'dusra ghar',
        area: 'Raj Mahal',
        pincode: 123456,
        city: 'Hell',
        state: 'Heaven'
    }
}

//print employee details
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`)
    
}
//print with whole address
console.log('Whole Address:\n'+`Line 1 : ${employee.address.line1},\nLine 2 : ${employee.address.line2},\nArea : ${employee.address.area},\nCity : ${employee.address.city},\nState :${employee.address.state},\nPin Code : ${employee.address.pincode}`);


//delete employee details
delete employee.contact;
delete employee.salary;
console.log('\n\n')
//print after deleting the above information
console.log(employee.salary)
console.log(employee.contact)




// second method 
console.log("This is 2nd Method............")



function EmployeeDetails(fn,ln,contact,email,salary){
    this.fn = fn;
    this.ln=ln;
    this.address={};
    this.contact=contact;
    this.email=email;
    this.salary=this.salary;
}

EmployeeDetails.prototype.addAddress= function(line1,line2,city,state,country,pincode)
{
        this.address={
            line1:line1,
            line2:line2,
            city:city,
            state:state,
            country:country,
            pincode:pincode
    };
}
            
Person1= new EmployeeDetails('John','Doe',9898989898,'JohnBhai_ka_email','10000000000');
Person1.addAddress('123 ABC street','Apt 4B', 'New York City','NY','INDIA',123456);
            
Person2=new EmployeeDetails ('Jane','Smith',121212121,'JaneBen_ka_email',200);
Person2.addAddress('456 XYZ Avenue','Suite 101st Floor', 'Los Angeles','CA','PAKISTAN',987654);
            
console.log("Person1 Details:\n",Person1);            
console.log("Person2 Details:\n",Person2);

//update the salary of jane
Person2.salary=150;
console.log("After Updating Jane's Salary: ");
console.log("Person2 Details: ",Person2);


//should not be repeated data with proper error message
var empArr=[];
Person1= new EmployeeDetails('John','Doe',9898989898,'JohnBhai_ka_email','10000000000');
empArr.push(Person1);
if (empArr.indexOf(Person1) !== 1) { 
    console.error("Erroralready exists!"); 
} else { 
    empArr.push(Person1); 
}







// que 2



// function validatePass(password){
//     var re = /^(([^<>()\[\]\\.,;:\s@"] + (\.[^<>()\[\]\\.,;:\s@"]+)*)|.+)@((\[[0-9]{1,3}\[\"\.\/d])|([#\w-\.+\\([\"\.\/\d]\)))\.([a-zA-Z]{2,})+$/;
            
//     return re.test(String(password).toLowerCase());
// };
            
           

           
// if(validatePass(password)){
//     console.log("Valid pass");
// }else{
//     console.log("Invalid pass");
// }

// validatePass("Test@123")


// function isPasswordStrong(password){
//     var re = /[!@#$%^&*()_+]/;

//     if(password.includes(re)){
//         return true;
//     }
//     else{
//         return false;
//     }
// };
            
// console.log(isPasswordStrong("Test@123")); //false
// console.log(isPasswordStrong("Tnjjjjest@123")); //false





//que 2 valid password
console.log('\n\n')

console.log("Yaha se Quetion 2 start ho raha hain-----------------------------------------------Dhanyavad :)")


function validPass(pass){
    let d = ['@','#','$','%','&'];
    // let li = 'abcdefghijklmnopqrstuvwxyz';
    let n = '0123456789';

    if ((pass.length >= 8 && pass.length <= 15) && d.some((i)=>pass.indexOf(i)>=0) ) {
        return true;
        
    }else{
            
        let err = `Invalid Password hain re baba!!! Jaldi se change kar :)`;
            
        return err;
    }
            
};
            
console.log(validPass('test@123')); 
console.log(validPass('1234')); 
console.log(validPass('hello')); 
console.log(validPass('hel@lo')); 
console.log(validPass('Hel@loooo')); 










