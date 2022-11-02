// an object can be a property of another object
// 物件導向: 物件可以是另一個物件的屬性

let Yao = {
    name: 'Pei Yu Yao',
    talk(){
        console.log('Bajohn is a pig.')
    }
}

let Bajohn = {
    name:'Bajohn Huang',
    spouse:Yao,
    walk(){
        console.log('Bajohn is walking');
    }
}

Bajohn.spouse.talk()
