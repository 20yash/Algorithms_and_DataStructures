class Node{
    constructor(value){
        this.value=value
        this.next=null//a next pointer, pointing at null when node is created
    }
}

class List{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node//pointing the head to the newly created node if the list is empty
        }
        else{//if the list is not empty
            node.next=this.head
            this.head=node//pointing head to the newly created node if list is not empty
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
        }
        else{
            let current = this.head//a pointer current, pointing to the head node
            let ListValueHere=' '
            while(current){
                ListValueHere=ListValueHere+`${current.value}  `   
                current=current.next
            }
            console.log(ListValueHere);
        }
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            let previous = this.head
            while(previous.next){
                previous = previous.next
            }
            previous.next = node
        }
        this.size++
    }
    insert(value,index){
        if(index < 0 || index >this.getSize()){
            return
        }
        if(index===0){
            this.prepend(value)
        }
        else{
        const node = new Node(value)
        let previousValue = this.head
        for(let i=0;i<index-1;i++){
            previousValue = previousValue.next
        }
        node.next=previousValue.next
        previousValue.next=node
        this.size++
        }
    }

    removeNode(index){
        if(index<0 || index>this.getSize){
            return null
        }
        let deletionNode
        if(index === 0 ){
            deletionNode=this.head
            this.head=this.head.value
        }
        else{
            let previous = this.head
            for(let i=0;i<index-1;i++){
                previous = previous.next
            }
            deletionNode = previous.next
            previous.next = deletionNode.next
        }
        this.size--
        return deletionNode.value
    }

    search(value){
        if(this.isEmpty()){
            return null
        }
        else{
            let i=0
            let currentValue = this.head
            while(currentValue){
                if(currentValue.value === value){
                    return i
                }
                currentValue=currentValue.next
                i++
            }
            return -1
        }
    }


    reverseValue(){
        let previous = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = previous
            previous=current
            current=next
        }
        this.head=previous
    }

}


const linkedList = new List()//a new instance of List class

console.log(`the linked list is empty? ${linkedList.isEmpty()}`)//invoking both the methods
console.log(`the size of the linkedlist is ${linkedList.getSize()}`)


linkedList.print()

// linkedList.append(10)
// linkedList.append(20)
// linkedList.print()

// linkedList.append(30)
// linkedList.append(40)

// linkedList.print()

// linkedList.append(50)
// linkedList.append(60)


// linkedList.insert(190,-1)
// linkedList.print()

linkedList.insert(10,0)
linkedList.print()

linkedList.insert(120,0)
linkedList.print()

linkedList.insert(150,1)
linkedList.print()

linkedList.insert(190,2)
linkedList.print()

linkedList.insert(200,3)
linkedList.print()

linkedList.insert(3000,3)
linkedList.print()

// console.log(linkedList.search(200));

// linkedList.reverseValue()
// linkedList.print()


console.log(linkedList.removeNode(2));
linkedList.print()



// console.log(linkedList.removeFrom(1));
// linkedList.print()



// console.log(linkedList.removeFrom(5));
// linkedList.print()


// console.log(linkedList.removeFrom(2));
// linkedList.print()


// console.log(linkedList.removeFrom(3));
// linkedList.print()


console.log(`the linked list is empty? ${linkedList.isEmpty()}`)//invoking both the methods
console.log(`the size of the linkedlist is ${linkedList.getSize()}`)

