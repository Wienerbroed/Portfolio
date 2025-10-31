const calculateLoanPayoff = (req, res, next) => {
  const { loan, interest, monthlypayoff } = req.body;

  if (!loan || !interest || !monthlypayoff) {
    return res.json({ error: 'Please fill in all information.' });
  }

  const monthlyInterestRate = interest / 100; // already monthly percent
  let balance = Number(loan);
  const payment = Number(monthlypayoff);
  let monthsToPayoff = 0;
  const balances = [balance];

  // Prevent infinite loop
  if (payment <= balance * monthlyInterestRate) {
    return res.json({ error: 'Payment too low to ever pay off debt.' });
  }

  while (balance > 0) {
    const interestThisMonth = balance * monthlyInterestRate;
    balance = balance + interestThisMonth - payment;
    balance = Math.max(balance, 0); // avoid negative values
    balances.push(balance);
    monthsToPayoff++;

    if (monthsToPayoff > 1200) break; // safety cap
  }

  res.json({
    monthsToPayoff,
    totalPaid: payment * monthsToPayoff,
    interestPaid: payment * monthsToPayoff - loan,
    balances,
  });
};

export { calculateLoanPayoff };