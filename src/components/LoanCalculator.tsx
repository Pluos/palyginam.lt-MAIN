import { useState } from 'react';
import { Calculator } from 'lucide-react';

interface LoanCalculatorProps {
  minAmount?: number;
  maxAmount?: number;
  minTerm?: number;
  maxTerm?: number;
  title?: string;
  amountLabel?: string;
  ctaLabel?: string;
  onGetOffer?: () => void;
}

export default function LoanCalculator({
  minAmount = 2000,
  maxAmount = 15000,
  minTerm = 12,
  maxTerm = 84,
  title = 'Lizingo skaičiuoklė',
  amountLabel = 'Paskolos suma (EUR)',
  ctaLabel = 'Gauti pasiūlymą',
  onGetOffer,
}: LoanCalculatorProps) {
  const [amount, setAmount] = useState(8000);
  const [term, setTerm] = useState(48);

  const calculateMonthlyPayment = () => {
    const interestRate = 0.10;
    const monthlyRate = interestRate / 12;
    const payment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    return Math.round(payment * 100) / 100;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-6 h-6 text-green-600" />
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {amountLabel}
          </label>
          <div className="flex items-center space-x-4 mb-3">
            <input
              type="range"
              min={minAmount}
              max={maxAmount}
              step="100"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{minAmount.toLocaleString()} €</span>
            <span className="text-2xl font-bold text-gray-900">
              {amount.toLocaleString()} €
            </span>
            <span>{maxAmount.toLocaleString()} €</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Paskolos terminas (mėn.)
          </label>
          <div className="flex items-center space-x-4 mb-3">
            <input
              type="range"
              min={minTerm}
              max={maxTerm}
              step="6"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{minTerm} mėn.</span>
            <span className="text-2xl font-bold text-gray-900">{term} mėn.</span>
            <span>{maxTerm} mėn.</span>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
          <p className="text-sm text-gray-600 mb-2">Preliminari mėnesio įmoka:</p>
          <p className="text-4xl font-bold text-green-600">
            {calculateMonthlyPayment().toLocaleString()} € <span className="text-xl">/ mėn.</span>
          </p>
        </div>

        <p className="text-xs text-gray-500 italic">
          Pastaba: skaičiuoklės rezultatai yra tik informacinio pobūdžio ir negali būti laikomi
          įsipareigojančiu pasiūlymu.
        </p>

        <button
          type="button"
          onClick={onGetOffer}
          className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!onGetOffer}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
