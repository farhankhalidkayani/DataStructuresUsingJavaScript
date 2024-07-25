
class Stack{

    constructor(value) {
        this.stack=[]
        this.stack.push(value)
    }
    push(value) {
        this.stack.push(value)
    }
    pop(){
        let temp=this.stack.pop()
        return temp;
    }

    printList(){
        for(let i=0;i<len(this.stack);i++){
            console.log(this.stack[i])
        }
        }

    peek(){
        return this.stack[-1].value
    }
}


function test () {
    let myStack = new Stack(2);
    myStack.push(1);

    // (2) Items - Returns 1 Node

        console.log(myStack.pop());


    // (1) Item - Returns 2 Node

        console.log(myStack.pop());


    // (0) Items - Returns undefined

        console.log(myStack.pop());
}


test();
