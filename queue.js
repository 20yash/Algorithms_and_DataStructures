class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
       return this.items.shift()
    }
    print(){
        console.log(this.items);
    }
    peek(){
        if(this.size()!=0){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        this.items.length
    }
}
const queue = new Queue()

// queue.size()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()
queue.dequeue()
queue.print()
console.log(queue.size());

