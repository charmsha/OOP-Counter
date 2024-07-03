function getElement(selection) {
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    throw new Error(
        `please check ${selection} selector,no such element exists`
    );
}

class Counter{
    constructor(element,value){
        this.Counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.vlaueDOM = element.querySelector('.value');
        this.vlaueDOM.textContent = this.value;
        
        //bind this to all function
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
    
        this.increaseBtn.addEventListener('click',this.increase);
        this.decreaseBtn.addEventListener('click',this.decrease);
        this.resetBtn.addEventListener('click',this.reset);

    }

    increase(){
    this.value++;
    this.vlaueDOM.textContent = this.value;
    }

    decrease(){
    this.value--;
    this.vlaueDOM.textContent = this.value;
    }

    reset(){
    this.value = 0;
    this.vlaueDOM.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);
