export default function fibonacci(num) {
    let a = 0;
    let b = 1;
    let temp = b;
    let i;
    const arr = [];

    for (i = 1; i <= num; i++) {
        arr.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    return arr;
}
