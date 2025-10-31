let shoppingList = [];

const getShoppingList = (req, res) => {
    res.json(shoppingList);
};

const addItemToShoppingList = (req, res, next) => {
    const item = req.body.name?.trim() || 'Blank';
    if (shoppingList.length >= 10) {
        return res.status(400).json({ 
            error: "Shopping list full.",
            shoppingList
        });
}

    shoppingList.push(item);
    res.json(shoppingList);
};


const removeItemFromShoppingList = (req, res, next) => {
    const name = req.body?.name || req.query?.name;

    if (!name) {
        return res.status(400).json({ 
            error: 'No item provided.',
            shoppingList
        });
    }

    const index = shoppingList.indexOf(name);
    if (index !== -1) {
        shoppingList.splice(index, 1); // remove just that one element
    }
    res.json(shoppingList);
}


const updateItemOnShoppingList = (req, res) => {
    const { oldName, newName } = req.body;
    const index = shoppingList.indexOf(oldName);

    if (index === -1) {
        return res.status(400).json({ error: 'Item not found.' });
    }

    shoppingList[index] = newName || 'Blank';
    res.json(shoppingList);
};

export { getShoppingList, addItemToShoppingList, removeItemFromShoppingList, updateItemOnShoppingList };