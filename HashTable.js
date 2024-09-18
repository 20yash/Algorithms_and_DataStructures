class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){//converting a string key into a numeric index
        let total = 0
        for(let i=0 ; i<key.length;i++){
            total = total+key.charCodeAt(i)//charCodeAt is converting key to index
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        this.table[index]=undefined//setting it to undefined, to delete it
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i])
            {
                console.log(i, this.table[i]);
            }
        }
    }

}

const table = new HashTable(50)


table.set("name","bruce")
table.set("age",25)



console.log(table.get("name"));

table.set("mane","clark")

//name and mane has same set of letters(4); the index will be same and hence clark is over written on bruce; 
// this is called COLLISION, hence we are facing LOSS OF DATA



table.display()