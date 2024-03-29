class MinHeap{

    constructor(){

        this.heap = [];
    }

    getParentIndex(index){

        return Math.floor((index - 1) / 2 );
    }

    getLeftChildIndex(index){

        return 2 * index +1;

    }

    getRightChildIndex(index){

        return 2 * index +2;
    }

    hasParent(index){

        return this.getParentIndex(index) >=0;
    }

    hasLeftChild(index){

        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index){

        return this.getRightChildIndex(index) < this.heap.length
    }

    parent(index){

        return this.heap[this.getParentIndex(index)];
    }

    leftChild(index){

        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index){

        return this.heap[this.getRightChildIndex(index)];
    }

    swap(inde1,index2){

        [this.heap[inde1],this.heap[index2]] = [this.heap[index2],this.heap[inde1]];
    }

    add(value){

        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){

        let index = this.heap.length - 1;
        while(this.hasParent(index) && this.parent(index) > this.heap[index]){

            this.swap(index,this.getParentIndex(index));
            index = this.getParentIndex(index)
        }
    }

    remove(){

        let data = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return data;
    }

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){

            let smllest = this.getLeftChildIndex(index);

            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){

                smllest = this.getRightChildIndex(index)
            }

            if(this.heap[index] < this.heap[smllest]){

                break;
            }else{

                this.swap(index,smllest)

            }

            index = smllest;
        }
    }

    display() {
        let output = "";
        for (let item of this.heap) {
            output += `${item} , `;
        }

        console.log(output);
    }
}


const arr = [6,1,2,10,4,8,13,11,30,22,15];

function heapSort(arr){

    let heap = new MinHeap();

    for(let i=0; i<arr.length; i++){

        heap.add(arr[i])
    }

    let res = [];
    for(let i=0; i<arr.length; i++){

        res.push(heap.remove())
    }

    return res;
}

console.log(heapSort(arr));