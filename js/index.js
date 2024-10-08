class Nodo{
    constructor(dato, next=null){
        this.data = dato
        this.next = next
    }
}

class Linked{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertLast(datos){
        this.size++
        let newNode = new Nodo (datos)
        if(!this.head){
            this.head =newNode
        }else{
            let tail = this.head
            while(tail.next!=null){
                tail = tail.next
            }
            tail.next=newNode
        }
    }
}

let List = new Linked()
console.log(List);
List.insertLast(88)
console.log(List)
List.insertLast(44)
console.log(List)
List.insertLast(22)
console.log(List)