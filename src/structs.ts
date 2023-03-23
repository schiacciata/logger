interface constructorOptions {
    symbols?: boolean;
    text?: boolean;
    date?: boolean;
    isEnabled?: boolean;
};

interface printOptions {
    symbol: string;
    txt: string;
    color: string;
};

export type {
    constructorOptions,
    printOptions
};