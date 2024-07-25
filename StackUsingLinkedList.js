class Node{


    constructor(value){
        this.value=value;
        this.next=null;
    }

}

class Stack{

    constructor(value) {
        let newNode=new Node(value);
        this.head=newNode;
        this.length=1;
    }
    push(value){
        let newNode=new Node(value);
        if(this.length===0){
            this.head=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;}
        this.length++;
    }
    pop(){
        if(this.length===0){
            return undefined;
        }
        let temp=this.head;
        this.head=this.head.next;
        temp.next=null;
        this.length--;
        return temp;
    }

    printList(){
        let temp=this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }

    }




   peek(){
        return this.head.value
   }
}


function test () {
    let myStack = new Stack(2);
    myStack.push(1);

    // (2) Items - Returns 1 Node
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }

    // (1) Item - Returns 2 Node
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }

    // (0) Items - Returns undefined
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }
}


test();
