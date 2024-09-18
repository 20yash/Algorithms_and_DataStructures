class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }

    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items);
    }
    isEmpty(){
        return this.rear-this.itemsfront===0
    }
    peek(){
        return this.items[this.front]
    }
}
const queue = new Queue()

queue.isEmpty()
queue.print()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.peek()
queue.print()
queue.dequeue()
queue.print()