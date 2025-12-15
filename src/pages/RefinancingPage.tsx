import { useState } from 'react';
import { CheckCircle, TrendingDown, ShieldCheck, Clock, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import RefinancingLeadForm from '../components/RefinancingLeadForm';

export default function RefinancingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [totalDebt, setTotalDebt] = useState(8000);
  const [newTerm, setNewTerm] = useState(60);

  const calculateNewPayment = () => {
    const interestRate = 0.09;
    const monthlyRate = interestRate / 12;
    const payment =
      (totalDebt * monthlyRate * Math.pow(1 + monthlyRate, newTerm)) /
      (Math.pow(1 + monthlyRate, newTerm) - 1);
    return Math.round(payment * 100) / 100;
  };

  const faqItems = [
    {
      question: 'Kokias paskolas galima refinansuoti?',
      answer:
        'Refinansuoti galima beveik visų rūšių vartojimo paskolas, greitąsias paskolas, kreditus ir kitas neužstatines skolas. Taip pat galime refinansuoti lizingo įmokas ir kitus mėnesinius įsipareigojimus.',
    },
    {
      question: 'Ar galiu refinansuoti vėluojančias paskolas?',
      answer:
        'Taip, galime padėti refinansuoti ir vėluojančias paskolas. Tačiau kiekvienas atvejis vertinamas individualiai, atsižvelgiant į jūsų dabartinę finansinę situaciją ir mokėjimo galimybes. Susisiekite su mumis, kad aptartume jūsų konkretų atvejį.',
    },
    {
      question: 'Ar refinansavimas visada sumažina įmoką?',
      answer:
        'Dažniausiai taip, ypač jei pradinės paskolos buvo su aukštomis palūkanomis arba pasirenkate ilgesnį grąžinimo terminą. Tačiau kartais ilgesnis terminas gali reikšti didesnę bendrą mokėtiną sumą. Mes padedame rasti optimalų balansą jūsų situacijai.',
    },
    {
      question: 'Kokius dokumentus turiu pateikti?',
      answer:
        'Reikės pateikti asmens tapatybę patvirtinantį dokumentą, dabartinių paskolų sutartis ar banko išrašus, rodančius įsiskolinimus, ir pajamų pažymą. Visą procesą vykdome nuotoliniu būdu.',
    },
    {
      question: 'Kiek kainuoja refinansavimas?',
      answer:
        'Refinansavimo kaina priklauso nuo refinansuojamos sumos ir termino. Sutarties sudarymo mokestis yra konkurencinis ir aiškiai nurodytas prieš pasirašant sutartį. Nėra paslėptų mokesčių.',
    },
    {
      question: 'Per kiek laiko galiu gauti refinansavimą?',
      answer:
        'Paraiškos vertinimas trunka 1-2 darbo dienas. Patvirtinus paraišką ir pasirašius sutartį, lėšos grąžinimui esamų paskolų pervedamos per 1-3 darbo dienas, priklausomai nuo kreditorių.',
    },
    {
      question: 'Ar refinansavimas pagerins mano kredito istoriją?',
      answer:
        'Taip, reguliariai mokant naujos paskolos įmokas laiku, jūsų kredito istorija pagerės. Be to, sujungus kelias paskolas į vieną, lengviau sekti mokėjimus ir išvengti vėlavimų.',
    },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Mažesnė mėnesio įmoka',
      description: 'Sumažinkite mėnesines išlaidas sujungę kelias paskolas į vieną',
    },
    {
      icon: ShieldCheck,
      title: 'Paprastesnis valdymas',
      description: 'Vienas kreditorius, viena įmoka, viena data',
    },
    {
      icon: Clock,
      title: 'Lankstesnis terminas',
      description: 'Pasirinkite jums tinkamą grąžinimo laikotarpį',
    },
    {
      icon: CheckCircle,
      title: 'Mažesnės palūkanos',
      description: 'Galimybė gauti palankesnes palūkanų normas',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/paskolu-refinansavimas" />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Palygink refinansavimo pasiūlymus
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Gauk refinansavimo pasiūlymus iš kelių finansų įstaigų. Sujunk kelias paskolas į vieną su geriausiomis sąlygomis ir sumažink mėnesinę įmoką.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Sujungiame kelias paskolas į vieną',
                    'Galimybė sumažinti mėnesio įmoką',
                    'Aiškios ir skaidrios sąlygos',
                    'Sprendimas per 1-2 darbo dienas',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
                >
                  Gauti refinansavimo pasiūlymą
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6120218/pexels-photo-6120218.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Finansų planavimas"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Refinansavimo skaičiuoklė
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bendra esamų paskolų suma (EUR)
                  </label>
                  <div className="flex items-center space-x-4 mb-3">
                    <input
                      type="range"
                      min="1000"
                      max="20000"
                      step="100"
                      value={totalDebt}
                      onChange={(e) => setTotalDebt(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>1 000 €</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {totalDebt.toLocaleString()} €
                    </span>
                    <span>20 000 €</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pageidaujamas terminas (mėn.)
                  </label>
                  <div className="flex items-center space-x-4 mb-3">
                    <input
                      type="range"
                      min="12"
                      max="84"
                      step="6"
                      value={newTerm}
                      onChange={(e) => setNewTerm(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>12 mėn.</span>
                    <span className="text-2xl font-bold text-gray-900">{newTerm} mėn.</span>
                    <span>84 mėn.</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <p className="text-sm text-gray-600 mb-2">Preliminari nauja mėnesio įmoka:</p>
                  <p className="text-4xl font-bold text-green-600">
                    {calculateNewPayment().toLocaleString()} €{' '}
                    <span className="text-xl">/ mėn.</span>
                  </p>
                </div>

                <p className="text-xs text-gray-500 italic">
                  Įvertinę tavo situaciją, galėsime pateikti tikslų pasiūlymą. Skaičiuoklės
                  rezultatai yra preliminarūs ir negali būti laikomi įsipareigojančiu pasiūlymu.
                </p>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-md"
                >
                  Gauti pasiūlymą
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Kodėl verta refinansuoti paskolas?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all text-center"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Kokią naudą gali gauti?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          Mažesnės įmokos
                        </span>
                        <span className="text-gray-600 text-sm">
                          Sumažink mėnesinę finansinę naštą iki 40%
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          Paprastesnis valdymas
                        </span>
                        <span className="text-gray-600 text-sm">
                          Viena įmoka vietoje kelių skirtingų mokėjimų
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          Geresnės palūkanos
                        </span>
                        <span className="text-gray-600 text-sm">
                          Galimybė gauti palankesnes sąlygas nei turėjai
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          Ilgesnis terminas
                        </span>
                        <span className="text-gray-600 text-sm">
                          Paskirstyk mokėjimus ilgesniam laikotarpiui
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 block">Mažiau streso</span>
                        <span className="text-gray-600 text-sm">
                          Nebereikia sekti kelių skirtingų terminų
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          Geresnė kredito istorija
                        </span>
                        <span className="text-gray-600 text-sm">
                          Laiku mokant vieną paskolą, kredito reitingas gerėja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Kaip vyksta procesas?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Refinansavimo procesas yra paprastas ir visiškai nuotolinis
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Pateiki informaciją
                </h3>
                <p className="text-gray-600 text-center">
                  Užpildyk paraišką ir pateik esamų paskolų duomenis bei dokumentus apie pajamas.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Įvertiname situaciją
                </h3>
                <p className="text-gray-600 text-center">
                  Analizuojame tavo finansinę situaciją ir parengiame geriausią refinansavimo
                  pasiūlymą.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Sutvarkome viską
                </h3>
                <p className="text-gray-600 text-center">
                  Pasirašai sutartį, o mes sutvarkom visas esamas paskolas ir lieki su viena įmoka.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Kada refinansavimas nerekomenduojamas?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sąžiningai įvertiname kiekvieno kliento situaciją. Refinansavimas gali būti
                    netinkamas, jei:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Esamų paskolų likęs terminas yra labai trumpas (kelios mėnesių)
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Naujos paskolos bendra kaina viršytų esamų paskolų kainą
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Jūsų finansinė situacija nėra stabili ilgam terminui
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Visais atvejais konsultuojame sąžiningai ir siūlome geriausią sprendimą jūsų
                    situacijai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sumažink savo mėnesines įmokas jau šiandien
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Pateik paraišką ir sužinok, kiek gali sutaupyti refinansavęs esamas paskolas.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Gauti pasiūlymą
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <RefinancingLeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
}
