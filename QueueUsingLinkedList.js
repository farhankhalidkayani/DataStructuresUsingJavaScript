class Node{


    constructor(value){
        this.value=value;
        this.next=null;
    }

}

class Queue{

    constructor(value) {
        let newNode=new Node(value);
        this.head=newNode;
        this.tail=newNode;
        this.length=1;
    }

    printList(){
        let temp=this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }

    }



    makeEmpty(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    dequeue(){
        if(this.length===0){
            return undefined;
        }
        let temp=this.head;
        let pre=temp;
        while(temp.next){
            pre=temp;
            temp=temp.next;
        }
        this.tail=pre;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return temp;
    }
    enqueue(value){
        let newNode=new Node(value);
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;}
        this.length++;
        return this;
    }

}


function test() {
    let myQueue = new Queue(2);
    myQueue.enqueue(1);

    // (2) Items - Returns 2 Node
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }

    // (1) Item - Returns 1 Node
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }

    // (0) Items - Returns undefined
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }
}


test();
