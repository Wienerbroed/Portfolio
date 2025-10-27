
let stable = array(10);


const sellHorse = (req, res, next => {
    if (stable.length > 0 ) {
        stable.pop();
        res.json(stable);
    } else {
        res.status(400).send('All horses sold');
    }
});

const buyNewHorses = (req, res, next => {
    stable.fill('Horses');
    res.json(stable);
    res.send('New horses arrived');
});
