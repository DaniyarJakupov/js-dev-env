import './index.css';
import numeral from 'numeral';

const value = numeral(1000).format('$0,0.00');
debugger; // eslint-disable-line no-debugger
console.log(`I would pay ${value} for this`); // eslint-disable-line no-console
