//Задача 1.
class Developer {
  constructor(name) {
    this.firstName = name;
  }
  startWork() {
    return this.firstName + " " + "start work";
  }
  endWork() {
    return this.firstName + " " + "end work";
  }
}

class Frontend extends Developer{
websiteName = prompt('Введите название сайта');
buildWebsite(){
    return this.firstName + ' ' + 'build website' + ' '+ `${this.websiteName}`;
}
}

class Backend extends Developer{
    buildServer(){
        return this.firstName + ' ' + 'build server';
    }
}

let user = new Frontend('User');
console.log(user.startWork());
console.log(user.buildWebsite());
console.log(user.endWork());

let admin = new Backend('Admin');
console.log(admin.startWork());
console.log(admin.buildServer());
console.log(admin.endWork());



//Задача 2
class User {
  id = Date.now();
  isAmdin = false;
  constructor(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
  }
  showInfo() {
    console.log(this.name + " " + this.surname);
  }
}
 let alex = new User('Alexey','Gromov');
 console.log(alex);
 alex.showInfo();



//Задача 3
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  rect(){
    let div = document.createElement('div');
    div.style.width = this.width;
    div.style.height = this.height;
div.style.border = '2px solid black';
div.style.backgroundColor = this.color;
div.style.margin ='30px'
div.style.overflow ='hidden'
document.body.prepend(div);

let h3 = document.createElement('h3');
h3.textContent = `S = ${parseFloat(this.height) * parseFloat(this.width)}`;
h3.style.width ='100px'
h3.style.textAlign ='center'
div.prepend(h3)
  }
}
let red = new Rectangle('120px','300px','red');
let blue = new Rectangle('361px','300px','blue');
let brown = new Rectangle('400px','70px','brown');
let purple = new Rectangle('180px','100px','purple');
red.rect();
blue.rect();
brown.rect();
purple.rect();



//Задача 4
let promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const string = 'foo';
    resolve(string);
  },2000)
})
.then((value)=>{
  console.log(value)
})