import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<number>(0);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [finalTotal, setFinalTotal] = useState<string>('');

  function handleClick() {
    const interestRateDecimal = interestRate * 0.01;
    const block = (1 + interestRateDecimal) ** years;
    let total =
      principal * block +
      (monthlyContribution * 12 * (block - 1)) / interestRateDecimal;

    setFinalTotal(
      total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
    );
  }

  // TODO: not sure if I like the centering
  // TODO: want a conditional for if finalTotal is empty
  // Make this pretty, maybe use the float labels
  // Got some editor errors to see if we can fix
  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="principalInput" className="font-bold block mb-2">
          Principal
        </label>
        <InputNumber
          mode="currency"
          currency="USD"
          locale="en-US"
          inputId="principalInput"
          value={principal}
          onValueChange={(e) => setPrincipal(e.value)}
        />
      </div>

      <div>
        <label htmlFor="monthlyContibution" className="font-bold block mb-2">
          Monthly Contribution
        </label>
        <InputNumber
          mode="currency"
          currency="USD"
          locale="en-US"
          inputId="monthlyContibution"
          value={monthlyContribution}
          onValueChange={(e) => setMonthlyContribution(e.value)}
        />
      </div>

      <div>
        <label htmlFor="interestInput" className="font-bold block mb-2">
          Interest Rate
        </label>
        <InputNumber
          inputId="interestInput"
          value={interestRate}
          onValueChange={(e) => setInterestRate(e.value)}
        />
      </div>

      <div>
        <label htmlFor="numberOfYearsInput" className="font-bold block mb-2">
          Number of Years
        </label>
        <InputNumber
          inputId="numberOfYearsInput"
          value={years}
          onValueChange={(e) => setYears(e.value)}
        />
      </div>

      <div>
        <Button label="Calculate" onClick={handleClick} />
      </div>

      <div>Final Total: {finalTotal}</div>
    </div>
  );
}
