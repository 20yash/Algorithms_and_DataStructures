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
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]//we are specifically giving an array within an array with key value pairs 
        }
        else{
            const sameKeyItems = bucket.find(item => item [0]===key)
            if(sameKeyItems){
                sameKeyItems[1]===true
            }
            else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]

        if(bucket){
            const sameKeyItems = bucket.find(item => item[0]=== key)
            if(sameKeyItems){
                return sameKeyItems[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)

        const bucket  = this.table[index]
        if(bucket){
            const SameKeyItems = bucket.find(item => item[0]===key)
            if(SameKeyItems){
                bucket.splice(bucket.indexOf(SameKeyItems),1)
            }
        }
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
table.set("name","diana")

//name and mane has same set of letters(4); the index will be same and hence clark is over written on bruce; 
// this is called COLLISION, hence we are facing LOSS OF DATA


table.remove("name")


table.display()