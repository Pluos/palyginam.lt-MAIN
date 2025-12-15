import { useState } from 'react';
import { CheckCircle, ShoppingBag, Plane, GraduationCap, Home, Sparkles, FileText, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoanCalculator from '../components/LoanCalculator';
import FAQ from '../components/FAQ';
import InteractiveLeadForm from '../components/InteractiveLeadForm';

export default function ConsumerLoansPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const faqItems = [
    {
      question: 'Kam galiu naudoti vartojimo paskolą?',
      answer:
        'Vartojimo paskola yra universali ir gali būti naudojama įvairiems tikslams: kelionėms, namų ar buto remontui, studijoms, buitinei technikai, medicininėms paslaugoms ar bet kokiems kitiems asmeniniams poreikiams.',
    },
    {
      question: 'Ar reikia užstato?',
      answer:
        'Ne, vartojimo paskolai užstatas nereikalingas. Tai yra neužstatinė paskola, kuri suteikiama remiantis jūsų pajamų ir kredito istorijos vertinimu. Jokių papildomų užstatų ar laidotojų nereikia.',
    },
    {
      question: 'Ar galiu grąžinti paskolą anksčiau?',
      answer:
        'Taip, paskolą galite grąžinti anksčiau laiko be jokių papildomų baudų ar mokesčių. Anksčiau grąžinę paskolą sumokėsite mažiau palūkanų ir sutaupysite pinigų.',
    },
    {
      question: 'Kokios yra palūkanos ir mokesčiai?',
      answer:
        'Palūkanų norma priklauso nuo paskolos sumos, termino ir jūsų kredito istorijos. Vidutin palūkanų norma yra 8-15% metinė. Sutarties sudarymo mokestis yra fiksuotas. Visos išlaidos yra nurodomos iš anksto prieš pasirašant sutartį.',
    },
    {
      question: 'Kaip pateikti paraišką internetu?',
      answer:
        'Užpildykite elektroninę paraišką mūsų svetainėje, pateikite reikalingus dokumentus elektroniškai, o mes įvertinsime jūsų paraišką per 1 darbo dieną. Patvirtinus, sutartį pasirašysite elektroniškai, o pinigai bus pervesti į jūsų sąskaitą.',
    },
    {
      question: 'Per kiek laiko gaunu pinigus?',
      answer:
        'Patvirtinus paraišką ir pasirašius sutartį, pinigai pervedami į jūsų banko sąskaitą per kelias valandas arba kitą darbo dieną, priklausomai nuo banko darbo laiko.',
    },
    {
      question: 'Kokia minimali ir maksimali paskolos suma?',
      answer:
        'Minimali paskolos suma yra 500 €, o maksimali – 15 000 €. Tikslią sumą nustatysime įvertinę jūsų pajamas ir finansinę situaciją, kad paskolos grąžinimas būtų patogus ir nesudarytų finansinės naštos.',
    },
  ];

  const useCases = [
    {
      icon: Plane,
      title: 'Kelionėms',
      description: 'Išvykite į svajonių kelionę jau šiandien',
    },
    {
      icon: Home,
      title: 'Namų remontui',
      description: 'Atnaujinkite savo gyvenamąjį būstą',
    },
    {
      icon: GraduationCap,
      title: 'Studijoms',
      description: 'Investuokite į savo ar vaikų išsilavinimą',
    },
    {
      icon: ShoppingBag,
      title: 'Pirkiniams',
      description: 'Įsigykite reikalingą techniką ar baldus',
    },
    {
      icon: Sparkles,
      title: 'Šventėms',
      description: 'Surenkite nepamirštamas šventes ir renginius',
    },
    {
      icon: CheckCircle,
      title: 'Kitoms reikmėms',
      description: 'Bet kokiems asmeniniams poreikiams',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/vartojimo-paskolos" />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Palygink vartojimo paskolų pasiūlymus
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Gauk pasiūlymus iš kelių finansų įstaigų vienu metu. Palygink sąlygas ir pasirink geriausią paskolą tavo poreikiams – be užstato, su aiškiomis sąlygomis.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Suma nuo 500 € iki 15 000 €',
                    'Terminas nuo 6 iki 84 mėn.',
                    'Sprendimas dažniausiai per 1 darbo dieną',
                    'Be užstato ir laidotojų',
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
                  Gauti pasiūlymą
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Laiminga šeima"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LoanCalculator
              minAmount={500}
              maxAmount={15000}
              minTerm={6}
              maxTerm={84}
              title="Paskolos skaičiuoklė"
              amountLabel="Paskolos suma (EUR)"
              onGetOffer={() => setIsFormOpen(true)}
            />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kam tinka vartojimo paskola?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vartojimo paskola yra universalus finansavimo sprendimas, kurį galite naudoti
                įvairiems tikslams. Štai keletas populiariausių pasirinkimų:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Užpildai paraišką
                </h3>
                <p className="text-gray-600 text-center">
                  Užpildyk elektroninę formą ir pateik reikiamus dokumentus – viskas trunka vos
                  kelias minutes.
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
                  Mūsų specialistai greitai įvertina tavo finansinę situaciją ir pateikia
                  sprendimą per 1 darbo dieną.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Gauni finansavimą
                </h3>
                <p className="text-gray-600 text-center">
                  Pasirašai sutartį elektroniškai ir pinigai pervedami į tavo sąskaitą tą pačią
                  dieną.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Vartojimo paskolos privalumai
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Be užstato – nereikia įkeisti turto</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Greitas atsakymas per 1 darbo dieną</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aiškios sąlygos be paslėptų mokesčių</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Lankstūs mokėjimo terminai</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Galimybė grąžinti anksčiau be baudų</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Procesas visiškai nuotolinis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Reikalingi dokumentai
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Galiojantis asmens dokumentas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pajamų pažyma ar banko išrašas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Banko sąskaitos duomenys</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Reikalavimai klientui
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Amžius nuo 18 metų</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Nuolatinė gyvenamoji vieta Lietuvoje</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Stabili pajamų istorija</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tvarkingas kredito reitingas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Pasiruošęs gauti paskolą?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Užpildyk paraišką jau dabar ir gauk sprendimą per 1 darbo dieną. Pinigai bus tavo
              sąskaitoje per kelias valandas.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Pildyti paraišką
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <InteractiveLeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Vartojimo paskolos paraiška"
        productType="consumer-loan"
      />
    </div>
  );
}
