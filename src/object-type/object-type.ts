const objectA: {
    readonly keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown;
} = {
    keyA: "Value A",
    keyB: "Value B",
};

objectA.keyC = "New value?";
