class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class List{
    constructor(){
        this.top = null;
        this.size=0;
    }

    push(value){
        const newNode = new Node(value)
        newNode.next=this.top
        this.top=newNode
        this.size++;

    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        const popped = this.top.value
        this.top=this.top.next
        this.size--
        return popped

    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.top.value

    }
    isEmpty(){
        return this.size===0

    }
    getSize(){
        return this.size

    }
    print(){
        let current = this.top
        const values=[]

        while(current!=null){
            values.push(current.value)
            current=current.next
        }

        console.log(values.join('<-'));

    }
}