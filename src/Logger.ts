import Colors from './Colors';
import { constructorOptions, printOptions } from './structs'

const { text, style } = Colors;

class Logger {
    options: constructorOptions;
    constructor(options: constructorOptions = {
        symbols: true,
        text: true,
        date: true
    }) {
        this.options = options;
    };

    public log(...str: any[]): void {
        return this.print({
            symbol: '➤',
            txt: 'LOG',
            color: text.white
        }, ...str);
    }

    public success(...str: any[]): void {
        return this.print({
            symbol: '✔',
            txt: 'SUCCESS',
            color: text.green
        }, ...str);
    }

    public error(...str: any[]): void {
        return this.print({
            symbol: '✖',
            txt: 'ERROR',
            color: text.red
        }, ...str);
    }

    public warn(...str: any[]): void {
        return this.print({
            symbol: '⚠',
            txt: 'WARNING',
            color: text.yellow
        }, ...str);
    }

    public debug(...str: any[]): void {
        return this.print({
            symbol: '⁇',
            txt: 'DEBUG',
            color: text.magenta
        }, ...str);
    }

    public info(...str: any[]): void {
        return this.print({
            symbol: 'ℹ',
            txt: 'INFO',
            color: text.cyan
        }, ...str);
    };

    private print(options: printOptions = {
        symbol: '',
        txt: '',
        color: text.white
    }, ...args: any[]): void {
        const { symbols, text: data, date } = this.options;

        var string: string = '';
        if (symbols) string += `${options.color}${options.symbol}${style.reset}`;
        if (data) string += ` [${options.color}${options.txt.toUpperCase()}${style.reset}]`;
        if (date) string += ` [${text.white}${new Date().toLocaleString()}${style.reset}]`;
        return console.log(string, ...args)
    };
};

export default Logger;