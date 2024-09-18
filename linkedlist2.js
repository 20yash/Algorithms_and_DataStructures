class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class List{
    constructor(){
        this.head=null
        this.size=0
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            return null
        }
        else{
            this.head=node
            this.next=this.head
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        else{
            let current= this.head
            let listView=' '
            while(current){
                listView+=current
                current=current.next
            }
            console.log(listView);
        }
    }

}

const LinkeList = new List()

console.log(LinkeList.getSize())
console.log(LinkeList.isEmpty())

LinkeList.prepend(10)
LinkeList.prepend(20)
console.log(LinkeList.prepend(30))


