const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
apple * true
const getUniqueValues = array => [...new Set(array)];
banana

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

grape / true
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
