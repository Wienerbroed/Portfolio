
let stable = Array(10).fill(null);


const sellHorse = (req, res, next) => {
    if (stable.length > 0 ) {
        stable.pop();
        res.json(stable);
    } else {
        res.status(400).send('All horses sold');
    }
};

const buyNewHorses = (req, res) => {
  stable = new Array(10).fill('Horses'); 
  res.json(stable); 
};



export { sellHorse, buyNewHorses };