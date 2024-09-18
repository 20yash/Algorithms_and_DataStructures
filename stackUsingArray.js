class Stack{
    constructor(){
        this.items=[]
    }

    push(element){
        return this.items.push(element)
    }

    getSize(){
        return this.items.length

    }

    isEmpty(){
        return this.items===0

    }

    pop(){
        if(this.isEmpty()){
            return null
        }
            return this.items.pop()
        
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
            return this.items[this.items.length-1]
    }

    print(){
        console.log(this.items);
    }
    
}

const stack = new Stack()

stack.getSize()
stack.print()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()



console.log(stack.peek());