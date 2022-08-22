class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    Prepend(data){
        let node=new Node(data);
        if(this.size==0){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }
    printList(){
        if(this.size===0){
            console.log("Linked List is empty");
        }else{
            let current=this.head;
            let data=" ";
            while(current){
                data=data+current.data+"==>";
                current=current.next;
            }
            console.log(data);
        }
    }
    Append(data){
        let node=new Node(data);
        if(this.size===0){
            this.head=node;
            this.tail=this.head;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }
    RemoveFirst(){
        if(this.size===0) return null;
        let data=this.head.data
        if(this.size==1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=this.head.next;
            this.size--;
            return data;
        }
    }
    RemoveLast(){
        if(this.size===0) return null;
        let data=this.tail.data
        if(this.size==1){
            this.head=null;
            this.tail=null;
        }else{
            let current=this.head;
            while(current.next.next!=null){
                current=current.next
            }
            current.next=null;
            this.tail=current;
            this.size--;
            return data;
        }
    }
    insertAt(position,data){
        let node=new Node(data);
        if(position<0 || position>this.size) return null;
        if(position==0){
            this.Prepend(data);
        }
        else if(position===this.size){
            this.Append(data)
        }else{
            let prev=null;
            let current=this.head;
            let counter=0;
            while(counter<position){
                prev=current;
                current=current.next;
                counter++;
            }
            node.next=current;
            prev.next=node;
            this.size++;
        }
    }
    RemoveAt(position){
        if(position<0 || position>=this.size) return null;
        if(position===0){
            return this.RemoveFirst();
        }
        else if(position===this.size-1){
            return this.RemoveLast();
        }
        else{
            let prev=null;
            let current=this.head;
            let counter=0;
            while(counter<position){
                prev=current;
                current=current.next;
                counter++;
            }
            prev.next=current.next;
            this.size--;
        }
        
    }
}

let list=new LinkedList();
list.Prepend("shubham")
list.Append("Ankit")
list.Prepend("Rishabh")
list.Append("Shobhit")
list.Prepend("Akash")
list.Append("Rajan")
list.RemoveFirst()
list.RemoveLast()
list.insertAt(2,"Ram")
list.RemoveAt(3)
list.printList()
