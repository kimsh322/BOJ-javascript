class Heap {
    constructor() {
        this.values = [];
    }
    enqueue(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp () {
        let curIdx = this.values.length-1
        let cur = this.values[curIdx];
        while(curIdx>0) {
            let parentIdx = Math.floor((curIdx-1)/2);
            let parent = this.values[parentIdx];
            if(parent <= cur) break;
            this.values[curIdx] = parent;
            this.values[parentIdx] = cur;
            curIdx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length >0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min
    }
    sinkDown() {
        let curIdx = 0;
        const cur = this.values[0];
        const leng = this.values.length;
        while(true) {
            let leftChildIdx = curIdx * 2 +1;
            let rightChildIdx = curIdx * 2 + 2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIdx < leng) {
                leftChild = this.values[leftChildIdx];
                if(leftChild < cur) swap = leftChildIdx;
            }
            if(rightChildIdx < leng) {
                rightChild = this.values[rightChildIdx];
                if(swap === null && rightChild < cur) swap = rightChildIdx;
                if(swap !== null && rightChild < leftChild) swap = rightChildIdx;
            }
            if(swap === null) break;
            this.values[curIdx] = this.values[swap];
            this.values[swap] = cur;
            curIdx = swap;
        }
    }
}

function solution(scoville, K) {
    const queue = new Heap();
    for(let i=0; i<scoville.length; i++) queue.enqueue(scoville[i]);
    let count=0;
    while(true) {
        const cur = queue.dequeue();
        if(cur >= K) break;
        const next = queue.dequeue();
        if(next === undefined) return -1;
        const mixed = cur + next * 2
        queue.enqueue(mixed);
        count++;
    }
    return count;
}