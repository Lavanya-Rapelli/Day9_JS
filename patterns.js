// Pttern U
function printU(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (i === n - 1 || j === 0 || j === n - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}