class Node{


    constructor(value){
        this.value=value;
        this.next=null;
    }

}

class LinkedList{

    constructor(value) {
        let newNode=new Node(value);
        this.head=newNode;
        this.tail=newNode;
        this.length=1;
    }
    push(value){
        let newNode=new Node(value);
        if(this.length===0){
            this.tail=newNode;
            this.head=newNode;
        }
        else{
        this.tail.next=newNode;
        this.tail=newNode;
        }
        this.length++;
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
    pop(){
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
    unshift(value){
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
    shift(){
        if(this.length===0){
            return undefined;
        }
        let temp=this.head;
        this.head=this.head.next;
        temp.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return temp;
    }
    get(index){
        if(index<0 || index>=this.length){
            return undefined;

        }
        let temp=this.head;
        for(let i=0;i<index;i++){
            temp=temp.next;
        }
        return temp;
    }
    set(index, value){
        let temp=this.get(index);
        if(temp){
            temp.value=value;
            return true;
        }
        return false;
    }

    insert(index,value){
        if(index<0 || index>this.length){
            return false;
        }
        if(index===0){
           return this.unshift(value);
        }
        if(index===this.length){
            return this.push(value);
        }
        let newNode=new Node(value);
        let temp=this.get(index-1);
        newNode.next=temp.next;
        temp.next=newNode;
        this.length++;
        return true;

    }

    



    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }

}


function test() {
    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    console.log("LL before reverse():");
    myLinkedList.printList();

    myLinkedList.reverse();

    console.log("\nLL after reverse():");
    myLinkedList.printList();
}


test();