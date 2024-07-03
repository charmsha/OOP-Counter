function getElement(selection) {
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    throw new Error(
        `please check ${selection} selector,no such element exists`
    );
}
function Counter(element,value) {
    this.Counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.vlaueDOM = element.querySelector('.value');
    this.vlaueDOM.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click',this.increase);
    this.decreaseBtn.addEventListener('click',this.decrease);
    this.resetBtn.addEventListener('click',this.reset);
}

Counter.prototype.increase = function(){
    console.log(this);
    this.value++;
    this.vlaueDOM.textContent = this.value;
}
Counter.prototype.decrease = function(){
    this.value--;
    this.vlaueDOM.textContent = this.value;
}
Counter.prototype.reset = function(){
    this.value = 0;
    this.vlaueDOM.textContent = this.value;
}


const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);

firstCounter.increase();




