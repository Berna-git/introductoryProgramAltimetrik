const mario = {
    name: "mario",
    velocity: 20,

    get dataVelocity() {
        console.log(this.velocity);
    },

    set changeVelocity(newVelocity) {
        this.velocity = newVelocity;
    }
}
console.log(mario.velocity);
mario.changeVelocity = 22;
console.log(mario.dataVelocity);

console.log(mario.velocity);

