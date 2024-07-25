class Node{
    constructor(value) {
        this.value=value
        this.next=null
        this.prev=null
    }
}
class DoublyLinkedList{
    constructor(value) {
        let newNode=new Node(value)
        this.head=newNode
        this.tail=newNode
        this.length=1
    }
    printList(){
        let temp=this.head
        while(temp){
            console.log(temp.value)
            temp=temp.next
        }
    }
    push(value){
        let newNode=new Node(value)
        if (this.length===0){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail.next=newNode
            newNode.prev=this.tail
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length===0){
            return undefined
        }
        let temp=this.tail
        this.tail=this.tail.prev
        this.tail.next=null
        temp.prev=null
        this.length--
        if(this.length===0){
            this.tail=null
            this.head=null
        }
        return temp
    }
    unshift(value){
        let newNode=new Node(value)
        if(this.length===0){
            this.tail=newNode
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }
        this.length++
    }
    shift(){
        if(this.length===0) return undefined
        let temp=this.head
        this.head=this.head.next
        this.head.prev=null
        temp.next=null
        this.length--
        if(this.length===0){
            this.tail=null
            this.head=null
        }
        return temp
    }
    get(index){
        if(index<0 || index>=this.length) return undefined
        let temp
        if(index<this.length/2){
            temp=this.head
        for(let i=0;i<index;i++){
            temp=temp.next
        }}else{
            temp=this.tail
            for(let i=this.length-1;i>index;i--){
                temp=temp.prev
            }
        }
        return temp
    }
    set(index,value){
        let temp=this.get(index)
        if(temp){
            temp.value=value
            return true
        }
        return false
    }
    insert(index,value){
        if(index<0 || index>this.length) return undefined
        if(index===0) return this.unshift(value)
        if(index===this.length) return this.push(value)
        let newNode=new Node(value)
        let temp=this.get(index-1)
        let after=temp.next
        newNode.next=after
        newNode.prev=temp
        temp.next=newNode
        after.prev=newNode
        this.length++
        return true
    }
    remove(index){
        if(index<0 || index>=this.length) return undefined
        if(index===0) return this.shift()
        if(index===this.length-1) return this.pop()
        let before=this.get(index-1)
        let temp=before.next
        let after=temp.next
        before.next=after
        after.prev=before
        temp.next=null
        temp.prev=null
        this.length--
        return temp
    }


}
function test() {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);
    myDLL.push(3);
    myDLL.push(4);
    myDLL.push(5);

    console.log("DLL before remove():");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(2).value);
    console.log("DLL after remove() in middle:");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(0).value);
    console.log("DLL after remove() of first node:");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(2).value);
    console.log("DLL after remove() of last node:");
    myDLL.printList();
}


test();

