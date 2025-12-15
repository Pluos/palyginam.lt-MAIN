import { useState, useEffect, useMemo } from 'react';
import { X, ArrowRight, ArrowLeft, Check, CheckCircle } from 'lucide-react';

interface Question {
  id: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'radio' | 'textarea' | 'fullName' | 'checkbox' | 'yesno' | 'multiInput';
  question: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  helpText?: string;
  showIf?: (answers: Record<string, string>) => boolean;
  fields?: { id: string; placeholder: string; type?: string }[];
}

interface InteractiveLeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  productType: 'auto-leasing' | 'consumer-loan' | 'refinancing' | 'renovation' | 'insurance';
}

const getAllQuestions = (productType: string): Question[] => {
  // Insurance product has different questions
  if (productType === 'insurance') {
    return [
      {
        id: 'fullName',
        type: 'fullName',
        question: 'Vardas ir pavardė',
        placeholder: 'Įveskite vardą ir pavardę',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        question: 'El. paštas',
        placeholder: 'vardas@pastas.lt',
        required: true,
      },
      {
        id: 'phone',
        type: 'tel',
        question: 'Telefono numeris',
        placeholder: '+370 600 00000',
        required: true,
      },
      {
        id: 'age',
        type: 'number',
        question: 'Amžius',
        placeholder: 'Įveskite savo amžių',
        required: true,
        min: 18,
        max: 99,
      },
      {
        id: 'insuranceFor',
        type: 'radio',
        question: 'Ar domintų apdrausti tik save ar ir savo artimuosius?',
        required: true,
        options: [
          { value: 'self', label: 'Tik save' },
          { value: 'family', label: 'Save ir artimuosius' },
        ],
      },
      {
        id: 'insuranceType',
        type: 'radio',
        question: 'Domina tik gyvybės draudimas ar investicinis gyvybės draudimas?',
        required: true,
        options: [
          { value: 'life', label: 'Gyvybės draudimas' },
          { value: 'investment', label: 'Investicinis gyvybės draudimas' },
        ],
      },
    ];
  }

  // Other products use the standard questions
  const baseQuestions: Question[] = [
    {
      id: 'amount',
      type: 'number',
      question: 'Noriu pasiskolinti',
      placeholder: 'Įveskite sumą eurais',
      required: true,
      min: 500,
      max: 50000,
    },
    {
      id: 'monthlyIncome',
      type: 'number',
      question: 'Mano pajamos (Eur/mėn.)',
      placeholder: 'Įveskite mėnesines pajamas',
      required: true,
      min: 0,
    },
    {
      id: 'employmentType',
      type: 'radio',
      question: 'Pajamų tipas',
      required: true,
      options: [
        { value: 'employed', label: 'Nuolatinis darbas' },
        { value: 'business-owner', label: 'Verslo savininkas' },
        { value: 'self-employed', label: 'Individuali veikla' },
        { value: 'foreign', label: 'Darbas užsienyje' },
        { value: 'other', label: 'Kita' },
      ],
    },
    {
      id: 'loanPurpose',
      type: 'select',
      question: 'Paskolos paskirtis',
      required: true,
      options: [
        { value: 'car', label: 'Automobilio pirkimas' },
        { value: 'renovation', label: 'Remontas' },
        { value: 'travel', label: 'Kelionė' },
        { value: 'education', label: 'Mokslas' },
        { value: 'debt', label: 'Skolų refinansavimas' },
        { value: 'other', label: 'Kita' },
      ],
    },
    {
      id: 'fullName',
      type: 'fullName',
      question: 'Vardas ir pavardė',
      placeholder: 'Įveskite vardą ir pavardę',
      required: true,
    },
    {
      id: 'email',
      type: 'email',
      question: 'El. paštas',
      placeholder: 'vardas@pastas.lt',
      required: true,
    },
    {
      id: 'phone',
      type: 'tel',
      question: 'Telefonas',
      placeholder: '+370 600 00000',
      required: true,
    },
    {
      id: 'hasSpouse',
      type: 'yesno',
      question: 'Ar turite sutuoktinį?',
      required: true,
    },
    {
      id: 'wantBetterOfferWithSpouse',
      type: 'yesno',
      question: 'Ar norite gauti geresnius paskolos pasiūlymus teikdami paraišką su sutuoktiniu?',
      required: true,
      showIf: (answers) => answers.hasSpouse === 'yes',
    },
    {
      id: 'spouseEmail',
      type: 'email',
      question: 'Sutuoktinio el. paštas',
      placeholder: 'sutuoktinio@pastas.lt',
      required: true,
      showIf: (answers) => answers.hasSpouse === 'yes' && answers.wantBetterOfferWithSpouse === 'yes',
    },
    {
      id: 'spouseEmploymentType',
      type: 'radio',
      question: 'Sutuoktinio pajamų tipas',
      required: true,
      showIf: (answers) => answers.hasSpouse === 'yes' && answers.wantBetterOfferWithSpouse === 'yes',
      options: [
        { value: 'employed', label: 'Nuolatinis darbas' },
        { value: 'business-owner', label: 'Verslo savininkas' },
        { value: 'self-employed', label: 'Individuali veikla' },
        { value: 'foreign', label: 'Darbas užsienyje' },
        { value: 'other', label: 'Kita' },
      ],
    },
    {
      id: 'spouseMonthlyIncome',
      type: 'number',
      question: 'Nuolatinio darbo mėnesio pajamų vidurkis',
      placeholder: 'Įveskite sumą eurais',
      required: true,
      min: 0,
      showIf: (answers) => answers.hasSpouse === 'yes' && answers.wantBetterOfferWithSpouse === 'yes',
    },
    {
      id: 'spouseWorkDuration',
      type: 'radio',
      question: 'Nuolatinio darbo veiklos trukmė',
      required: true,
      showIf: (answers) => answers.hasSpouse === 'yes' && answers.wantBetterOfferWithSpouse === 'yes',
      options: [
        { value: '0-4', label: '0-4 mėn.' },
        { value: '4-6', label: '4-6 mėn.' },
        { value: '6-12', label: '6-12 mėn.' },
        { value: '12+', label: 'Virš 1 metų' },
      ],
    },
    {
      id: 'hasOtherFinancialObligations',
      type: 'yesno',
      question: 'Ar turite kitų finansinių įsipareigojimų?',
      required: true,
    },
    {
      id: 'otherLoansPayment',
      type: 'multiInput',
      question: 'Finansiniai įsipareigojimai',
      required: true,
      showIf: (answers) => answers.hasOtherFinancialObligations === 'yes',
      fields: [
        { id: 'consumerLoans', placeholder: 'Šeimos vartojimo paskolų įmokos (Eur/mėn.)', type: 'number' },
        { id: 'mortgagePayment', placeholder: 'Būsto paskolos įmoka (Eur/mėn.)', type: 'number' },
      ],
    },
    {
      id: 'isPoliticallyExposed',
      type: 'yesno',
      question: 'Ar esate politiškai pažeidžiamas asmuo?',
      required: true,
      helpText: 'Politiškai pažeidžiamas asmuo - tai asmuo, einantis arba ėjęs aukštas viešąsias pareigas',
    },
  ];

  return baseQuestions;
};

export default function InteractiveLeadForm({
  isOpen,
  onClose,
  title = 'Gauti pasiūlymą',
  productType,
}: InteractiveLeadFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [consentError, setConsentError] = useState('');

  const allQuestions = getAllQuestions(productType);

  const visibleQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      if (!q.showIf) return true;
      return q.showIf(answers);
    });
  }, [answers, allQuestions]);

  const currentQuestion = visibleQuestions[currentStep];
  const progress = ((currentStep + 1) / visibleQuestions.length) * 100;

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setAnswers({});
      setShowSuccess(false);
      setAgreedToTerms(false);
      setAgreedToPrivacy(false);
      setConsentError('');
    }
  }, [isOpen]);

  const handleNext = () => {
    setConsentError('');
    if (currentStep < visibleQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!agreedToTerms || !agreedToPrivacy) {
      setConsentError('Prašome sutikti su sąlygomis ir privatumo politika');
      return;
    }

    setConsentError('');
    setIsSubmitting(true);

    try {
      const { submitToGoogleSheets } = await import('../utils/googleSheets');

      const submissionData: Record<string, string> = {
        formType: productType,
        ...answers,
      };

      await submitToGoogleSheets(submissionData as any);

      setIsSubmitting(false);
      setShowSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      setShowSuccess(true);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleMultiInputChange = (fieldId: string, value: string) => {
    const currentValue = answers[currentQuestion.id] || '{}';
    let parsedValue: Record<string, string> = {};
    try {
      parsedValue = JSON.parse(currentValue);
    } catch {
      parsedValue = {};
    }
    parsedValue[fieldId] = value;
    setAnswers({ ...answers, [currentQuestion.id]: JSON.stringify(parsedValue) });
  };

  const handleFullNameChange = (firstName: string, lastName: string) => {
    setAnswers({ ...answers, fullName: `${firstName} ${lastName}`.trim() });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const currentAnswer = answers[currentQuestion.id];
      if (!currentQuestion.required || (currentAnswer && currentAnswer.trim())) {
        handleNext();
      }
    }
  };

  if (!isOpen) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Užklausa gauta!
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dėkojame už pateiktą paraišką. Mūsų specialistas susisieks su jumis <strong>per 1 darbo dieną</strong> el. paštu.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Gerai
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isAnswered = currentQuestion.required
    ? answers[currentQuestion.id] && answers[currentQuestion.id].trim() !== ''
    : true;

  const isLastStep = currentStep === visibleQuestions.length - 1;
  const canSubmit = isLastStep && isAnswered && agreedToTerms && agreedToPrivacy;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-green-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">
                  Klausimas {currentStep + 1} iš {visibleQuestions.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-8 min-h-[400px] flex flex-col justify-center overflow-y-auto max-h-[60vh]">
            <div className="mb-8 animate-fadeIn">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {currentQuestion.question}
              </h3>
              {currentQuestion.helpText && (
                <p className="text-sm text-gray-500 mt-2">{currentQuestion.helpText}</p>
              )}
            </div>

            <div className="space-y-3">
              {currentQuestion.type === 'fullName' && (
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Vardas"
                    value={answers[currentQuestion.id]?.split(' ')[0] || ''}
                    onChange={(e) => {
                      const lastName = answers[currentQuestion.id]?.split(' ')[1] || '';
                      handleFullNameChange(e.target.value, lastName);
                    }}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    autoFocus
                  />
                  <input
                    type="text"
                    placeholder="Pavardė"
                    value={answers[currentQuestion.id]?.split(' ')[1] || ''}
                    onChange={(e) => {
                      const firstName = answers[currentQuestion.id]?.split(' ')[0] || '';
                      handleFullNameChange(firstName, e.target.value);
                    }}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                </div>
              )}

              {currentQuestion.type === 'multiInput' && currentQuestion.fields && (
                <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                  {currentQuestion.fields.map((field) => {
                    const currentValue = answers[currentQuestion.id] || '{}';
                    let parsedValue: Record<string, string> = {};
                    try {
                      parsedValue = JSON.parse(currentValue);
                    } catch {
                      parsedValue = {};
                    }
                    return (
                      <input
                        key={field.id}
                        type={field.type || 'text'}
                        value={parsedValue[field.id] || ''}
                        onChange={(e) => handleMultiInputChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg bg-white"
                      />
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === 'yesno' && (
                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      handleAnswer('yes');
                      if (!isLastStep) {
                        setTimeout(() => handleNext(), 300);
                      }
                    }}
                    className={`flex-1 px-8 py-4 rounded-xl border-2 font-semibold transition-all ${
                      answers[currentQuestion.id] === 'yes'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                    }`}
                  >
                    Taip
                  </button>
                  <button
                    onClick={() => {
                      handleAnswer('no');
                      if (!isLastStep) {
                        setTimeout(() => handleNext(), 300);
                      }
                    }}
                    className={`flex-1 px-8 py-4 rounded-xl border-2 font-semibold transition-all ${
                      answers[currentQuestion.id] === 'no'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                    }`}
                  >
                    Ne
                  </button>
                </div>
              )}

              {currentQuestion.type === 'radio' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        handleAnswer(option.value);
                        if (!isLastStep) {
                          setTimeout(() => handleNext(), 300);
                        }
                      }}
                      className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{option.label}</span>
                        {answers[currentQuestion.id] === option.value && (
                          <Check className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'select' && currentQuestion.options && (
                <select
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  autoFocus
                >
                  <option value="">Pasirinkite...</option>
                  {currentQuestion.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}

              {(currentQuestion.type === 'text' ||
                currentQuestion.type === 'email' ||
                currentQuestion.type === 'tel' ||
                currentQuestion.type === 'number') && (
                <input
                  type={currentQuestion.type}
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
                  min={currentQuestion.min}
                  max={currentQuestion.max}
                  step={currentQuestion.step}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  autoFocus
                />
              )}

              {currentQuestion.type === 'textarea' && (
                <textarea
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  autoFocus
                />
              )}

              {isLastStep && (
                <div className="mt-8 space-y-4 pt-6 border-t border-gray-200">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => {
                        setAgreedToTerms(e.target.checked);
                        setConsentError('');
                      }}
                      className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">
                      Sutinku, kad mano pateikti asmens duomenys būtų tvarkomi tiesioginės rinkodaros tikslais
                    </span>
                  </label>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToPrivacy}
                      onChange={(e) => {
                        setAgreedToPrivacy(e.target.checked);
                        setConsentError('');
                      }}
                      className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">
                      Susipažinau ir sutinku su{' '}
                      <a href="/taisykles" className="text-green-600 hover:underline">
                        taisyklėmis
                      </a>
                      ,{' '}
                      <a href="/privatumo-politika" className="text-green-600 hover:underline">
                        privatumo politika
                      </a>
                      ,{' '}
                      <a href="/partneriu-informacija" className="text-green-600 hover:underline">
                        partnerių informacija
                      </a>{' '}
                      ir patvirtinu paraišką paskolos pasiūlymams gauti
                    </span>
                  </label>
                  {consentError && (
                    <div className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 rounded-lg p-3">
                      {consentError}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {((currentQuestion.type !== 'radio' && currentQuestion.type !== 'yesno') || isLastStep) && (
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Atgal</span>
              </button>

              {isLastStep ? (
                <button
                  onClick={handleSubmit}
                  disabled={!isAnswered || isSubmitting}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                    (isAnswered && !isSubmitting)
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>
                    {isSubmitting ? 'Siunčiama...' : 'Užbaigti'}
                  </span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                    isAnswered
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Toliau</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
