function solve() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('', (t) => {
        let count = 0;
        rl.on('line', (line) => {
            count++;
            let a = parseInt(line);
            switch (a % 12) {
                case 0:
                    console.log(a - 11 + " WS");
                    break;
                case 1:
                    console.log(a + 11 + " WS");
                    break;
                case 2:
                    console.log(a + 9 + " MS");
                    break;
                case 3:
                    console.log(a + 7 + " AS");
                    break;
                case 4:
                    console.log(a + 5 + " AS");
                    break;
                case 5:
                    console.log(a + 3 + " MS");
                    break;
                case 6:
                    console.log(a + 1 + " WS");
                    break;
                case 7:
                    console.log(a - 1 + " WS");
                    break;
                case 8:
                    console.log(a - 3 + " MS");
                    break;
                case 9:
                    console.log(a - 5 + " AS");
                    break;
                case 10:
                    console.log(a - 7 + " AS");
                    break;
                case 11:
                    console.log(a - 9 + " MS");
                    break;
            }

            if (count === parseInt(t)) {
                rl.close();
            }
        });
    });
}

solve();