export default function foobar(num) {
    var arr = [];
    let i;
    for (i = 1, i <= num; i++) {
        if (i % 15 === 0) {
            arr.push('foobar');
        } else if (i % 5 === 0) {
            arr.push('bar');
        } else if (i % 3 === 0) {
            arr.push('foo');
        } else {
            arr.push(i);
        }
    }
    return arr;
}
