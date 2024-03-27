function solution(n, k, enemy) {
    const totalRound = enemy.length;
    if(k >= totalRound) return totalRound;
    
    let result = 0;
    const currentK = new Heap();
    let minK;
    for(let i=0; i<totalRound; i++) {
        minK = currentK.findMin();
        if(k>0) {
            currentK.enqueue(enemy[i]);
            k--;
        }
        else if(minK < enemy[i]) {
            n -= minK;
            currentK.dequeue();
            currentK.enqueue(enemy[i]);
        }
        else n -= enemy[i];
        if(n < 0) break;
        result++;
    }
    
    return result;
}

class Heap {
    constructor () {
        this.values = [];
    }
    
    findMin () {
        if(this.values.length === 0) return 99999999;
        else return this.values[0];
    }
    
    enqueue (value) {
        this.values.push(value);
        this.bubbleUp();
    }
    
    bubbleUp () {
        let idx = this.values.length-1;
        const cur = this.values[idx];
        let parentIdx;
        while(idx>0) {
            parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(cur >= parent) break;
            this.values[idx] = parent;
            this.values[parentIdx] = cur;
            idx = parentIdx;
        }
    }
    
    dequeue () {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    
    sinkDown () {
        const cur = this.values[0];
        let idx = 0;
        const length = this.values.length;
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild < cur) swap = leftChildIdx;
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(swap === null && rightChild < cur) swap = rightChildIdx;
                if(swap !== null && rightChild < leftChild) swap = rightChildIdx;
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = cur;
            idx = swap;
        }
    }
}