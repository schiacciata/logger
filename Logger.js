const colors = Object.freeze({
    black: "#000000",
    red: "#ff0000",
    green: "#00ff00",
    yellow: "#ffff00",
    blue: "#0000ff",
    magenta: "#ff00ff",
    cyan: "#00ffff",
    white: "#ffffff",
});;

class Logger {
    constructor(options = {
        symbols: true,
        text: true,
        date: true
    }) {
        this.options = options;
    };

    log(...str) {
        return this.#print({
            symbol: '➤',
            txt: 'LOG',
            color: colors.white
        }, ...str);
    }

    success(...str) {
        return this.#print({
            symbol: '✔',
            txt: 'SUCCESS',
            color: colors.green
        }, ...str);
    }

    error(...str) {
        return this.#print({
            symbol: '✖',
            txt: 'ERROR',
            color: colors.red
        }, ...str);
    }

    warn(...str) {
        return this.#print({
            symbol: '⚠',
            txt: 'WARNING',
            color: colors.yellow
        }, ...str);
    }

    debug(...str) {
        return this.#print({
            symbol: '⁇',
            txt: 'DEBUG',
            color: colors.magenta
        }, ...str);
    }

    info(...str) {
        return this.#print({
            symbol: 'ℹ',
            txt: 'INFO',
            color: colors.cyan
        }, ...str);
    };

    #print(options = {
        symbol: '',
        txt: '',
        color: colors.white
    }, ...args) {
        const { symbols, text: data, date } = this.options;
        
        if (symbols) {
            if (data && date) {
                console.log(`%c[%c${options.symbol}%c] [%c${options.txt}%c] [${new Date().toLocaleString()}] %c${args}`, this.#font, this.#color(options.color), this.#font, this.#color(options.color), this.#font, '');
            } else if (data && !date) {
                console.log(`%c[%c${options.symbol}%c] [%c${options.txt}%c] %c${args}`, this.#font, this.#color(options.color), this.#font, this.#color(options.color), this.#font, '');
            } else if (!data && date) {
                console.log(`%c[%c${options.symbol}%c] [${new Date().toLocaleString()}] %c${args}`, this.#font, this.#color(options.color), this.#font, '');
            } else {
                console.log(`%c[%c${options.symbol}%c] %c${args}`, this.#font, this.#color(options.color), this.#font, '');
            };
        } else {
            if (data && date) {
                console.log(`%c[%c${options.txt}%c] [${new Date().toLocaleString()}] %c${args}`, this.#font, this.#color(options.color), this.#font, '');
            } else if (data && !date) {
                console.log(`%c[%c${options.txt}%c] %c${args}`, this.#font, this.#color(options.color), this.#font, '');
            } else if (!data && date) {
                console.log(`%c[%c${new Date().toLocaleString()}%c] %c${args}`, this.#font, '', this.#font, '');
            } else {
                console.log(`${args}`);
            };
        };
    };

    #color (color) {
        return `${this.#font} color: ${color};${color === colors.white ? ' background-color: #000000;' : ''}`;
    };

    get #font () {
        return 'font-weight: bold; font-size: 1.5em;';
    }
};
