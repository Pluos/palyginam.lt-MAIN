import { useState, useEffect, useMemo } from 'react';
import { X, ArrowRight, ArrowLeft, Check, CheckCircle } from 'lucide-react';

interface Question {
  id: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'slider' | 'fullName';
  question: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

interface RefinancingLeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions: Question[] = [
  {
    id: 'fullName',
    type: 'fullName',
    question: 'Vardas Pavardė',
    placeholder: 'Jūsų vardas ir pavardė',
    required: true,
  },
  {
    id: 'phone',
    type: 'tel',
    question: 'Telefono Nr.',
    placeholder: 'Telefono nr.',
    required: false,
  },
  {
    id: 'email',
    type: 'email',
    question: 'El. Paštas',
    placeholder: 'Jūsų el. paštas',
    required: true,
  },
  {
    id: 'city',
    type: 'text',
    question: 'Miestas',
    placeholder: 'Miestas',
    required: false,
  },
  {
    id: 'employmentType',
    type: 'select',
    question: 'Veiklos Forma',
    required: true,
    options: [
      { value: 'employed', label: 'Dirbantiems pagal darbo sutartį' },
      { value: 'self-employed', label: 'Savarankiškai dirbantiems' },
      { value: 'business-owner', label: 'Verslo savininkams' },
      { value: 'pension', label: 'Pensininkams' },
      { value: 'other', label: 'Kita' },
    ],
  },
  {
    id: 'loanType',
    type: 'select',
    question: 'Paskolos Tipas',
    required: true,
    options: [
      { value: 'home', label: 'Būsto paskola' },
      { value: 'consumer', label: 'Vartojimo paskola' },
      { value: 'auto', label: 'Automobilių paskola' },
      { value: 'business', label: 'Verslo paskola' },
      { value: 'other', label: 'Kita' },
    ],
  },
  {
    id: 'amount',
    type: 'slider',
    question: 'Suma',
    required: true,
    min: 10000,
    max: 200000,
    step: 5000,
    unit: '€',
  },
  {
    id: 'term',
    type: 'slider',
    question: 'Terminas',
    required: true,
    min: 1,
    max: 40,
    step: 1,
    unit: 'metai',
  },
];

export default function RefinancingLeadForm({ isOpen, onClose }: RefinancingLeadFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    amount: '100000',
    term: '20',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [consentError, setConsentError] = useState('');

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setAnswers({
        amount: '100000',
        term: '20',
      });
      setShowSuccess(false);
      setAgreedToTerms(false);
      setAgreedToPrivacy(false);
      setConsentError('');
    }
  }, [isOpen]);

  const handleNext = () => {
    setConsentError('');
    if (currentStep < questions.length - 1) {
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
        formType: 'refinancing',
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

  const isLastStep = currentStep === questions.length - 1;

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
                  Klausimas {currentStep + 1} iš {questions.length}
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

              {currentQuestion.type === 'tel' && (
                <div className="flex">
                  <div className="flex items-center px-4 bg-gray-100 border-2 border-r-0 border-gray-300 rounded-l-xl">
                    <span className="text-gray-700 font-medium">🇱🇹 +370</span>
                  </div>
                  <input
                    type="tel"
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQuestion.placeholder}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-r-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    autoFocus
                  />
                </div>
              )}

              {currentQuestion.type === 'select' && currentQuestion.options && (
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

              {currentQuestion.type === 'slider' && (
                <div>
                  <div className="mb-4">
                    <input
                      type="number"
                      min={currentQuestion.min}
                      max={currentQuestion.max}
                      step={currentQuestion.step}
                      value={answers[currentQuestion.id] || currentQuestion.min}
                      onChange={(e) => handleAnswer(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                      autoFocus
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    {currentQuestion.min?.toLocaleString()} - {currentQuestion.max?.toLocaleString()} {currentQuestion.unit}
                  </p>
                </div>
              )}

              {(currentQuestion.type === 'text' || currentQuestion.type === 'email') && (
                <input
                  type={currentQuestion.type}
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
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
                      <a href={`${import.meta.env.BASE_URL}taisykles`} className="text-green-600 hover:underline">
                        taisyklėmis
                      </a>
                      ,{' '}
                      <a href={`${import.meta.env.BASE_URL}privatumo-politika`} className="text-green-600 hover:underline">
                        privatumo politika
                      </a>
                      ,{' '}
                      <a href={`${import.meta.env.BASE_URL}partneriu-informacija`} className="text-green-600 hover:underline">
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

          {(currentQuestion.type !== 'select' || isLastStep) && (
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
