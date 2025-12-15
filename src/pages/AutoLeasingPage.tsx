import { useState } from 'react';
import { CheckCircle, FileText, User, CreditCard, Car } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoanCalculator from '../components/LoanCalculator';
import FAQ from '../components/FAQ';
import InteractiveLeadForm from '../components/InteractiveLeadForm';

export default function AutoLeasingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const faqItems = [
    {
      question: 'Kas gali kreiptis dėl automobilio lizingo?',
      answer:
        'Dėl automobilio lizingo gali kreiptis pilnamečiai Lietuvos gyventojai, turintys nuolatines pajamas ir tvarkingą kredito istoriją. Svarbu turėti galiojantį asmens dokumentą ir vairuotojo pažymėjimą.',
    },
    {
      question: 'Ar galiu grąžinti paskolą anksčiau laiko?',
      answer:
        'Taip, galite grąžinti paskolą anksčiau laiko be papildomų baudų. Anksčiau grąžindami sutaupysite palūkanų ir sumažinsite bendra paskolos kainą. Susisiekite su mumis ir pateiksime išsamią informaciją.',
    },
    {
      question: 'Ar privalomas KASKO draudimas?',
      answer:
        'KASKO draudimas nėra privalomas, tačiau rekomenduojamas apsaugant automobilio vertę. Mes siūlome konkurencingas draudimo sąlygas per mūsų partnerius, tačiau galite pasirinkti bet kurią draudimo bendrovę.',
    },
    {
      question: 'Kaip vyksta paraiškos pateikimas internetu?',
      answer:
        'Paraiškos pateikimas yra paprastas: užpildote elektroninę formą, pateikiate reikalingus dokumentus, o mes įvertiname per 1 darbo dieną. Patvirtinus paraišką, pasirašote sutartį elektroniškai ir finansavimas pervedamas pardavėjui.',
    },
    {
      question: 'Kokios yra pagrindinės papildomos išlaidos?',
      answer:
        'Pagrindinės išlaidos apima sutarties sudarymo mokestį, automobilio registracijos mokesčius bei, jei pasirinksite, KASKO draudimą. Visos išlaidos yra nurodytos iš anksto ir nėra paslėptų mokesčių.',
    },
    {
      question: 'Kas nutinka, jei vėluoju mokėti įmokas?',
      answer:
        'Vėluojant mokėti įmokas, gali būti taikomi delspinigiai. Rekomenduojame iš anksto susisiekti, jei susiduria su finansiniais sunkumais – ieškosime geriausio sprendimo kartu. Galime siūlyti mokėjimų atidėjimą ar kitokias alternatyvas.',
    },
    {
      question: 'Koks yra maksimalus finansavimo terminas?',
      answer:
        'Maksimalus finansavimo terminas yra 84 mėnesiai (7 metai). Trumpesnis terminas reiškia didesnes mėnesines įmokas, bet mažesnę bendrą paskolos kainą. Ilgesnis terminas sumažina mėnesines įmokas, bet padidina bendrą mokėtiną sumą.',
    },
  ];

  const testimonials = [
    {
      name: 'Jonas',
      date: '2025 m. sausis',
      text: 'Labai greitas procesas, paraiška patvirtinta per kelias valandas. Automobilis įsigytas be jokių problemų!',
    },
    {
      name: 'Laura',
      date: '2024 m. gruodis',
      text: 'Puikios sąlygos ir aiškus komunikavimas. Konsultantai padėjo išsirinkti geriausią variantą mano situacijai.',
    },
    {
      name: 'Tomas',
      date: '2024 m. lapkritis',
      text: 'Rekomenduoju! Paprasta, greita ir skaidru. Labai patiko, kad galima buvo pasirinkti individualias sąlygas.',
    },
    {
      name: 'Simona',
      date: '2024 m. spalis',
      text: 'Viskas vyko nuotoliniu būdu, nereikėjo niekur važinėti. Dokumentus pasirašiau elektroniškai per kelias minutes.',
    },
    {
      name: 'Andrius',
      date: '2024 m. rugsėjis',
      text: 'Profesionali komanda, kuri padeda kiekviename žingsnyje. Jokių paslėptų mokesčių ar netikėtumų.',
    },
    {
      name: 'Greta',
      date: '2024 m. rugpjūtis',
      text: 'Labai geros palūkanų normos ir lankstūs terminai. Automobilis buvo įsigytas greičiau nei tikėjausi!',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/automobiliu-lizingas" />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Palygink automobilių lizingo pasiūlymus
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Gauk lizingo pasiūlymus iš kelių finansų įstaigų vienu metu. Palygink sąlygas ir rask geriausias lizingo sąlygas naudotiems ar naujiems automobiliams.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Galimas finansavimas iki 15 000 €',
                    'Galimas finansavimas iki 100 % automobilio vertės',
                    'Greitas sprendimas ir atsakymas tą pačią dieną',
                    'Be perteklinių formalumų',
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
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Automobilis"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LoanCalculator onGetOffer={() => setIsFormOpen(true)} />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Naudoti automobiliai lizingu – paprastas būdas įsigyti automobilį
            </h2>

            <p className="text-lg text-gray-600 mb-12 max-w-4xl leading-relaxed">
              FinansoPlius padeda žmonėms įsigyti automobilį naudojant lizingo paslaugas. Nebereikia
              taupyti metų metus – su mūsų lizingo sprendimu galite įsigyti norimą automobilį jau
              šiandien. Procesas yra greitas, patogus ir visiškai skaidrus.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Automobilio finansavimo privalumai
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Finansavimas iki 15 000 €</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Galimas iki 100 % automobilio vertės finansavimas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Lankstus terminas – nuo 12 iki 84 mėn.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sprendimas dažniausiai pateikiamas tą pačią dieną</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Nereikalingi užstatai ar laidotojai</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Galimybė grąžinti paskolą anksčiau be baudų</span>
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
                    <span className="text-gray-700">Vairuotojo pažymėjimas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Transporto priemonės registracijos liudijimas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Banko sąskaitos numeris</span>
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
                    <span className="text-gray-700">Pakankama ir stabili pajamų istorija</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tinkama kredito istorija</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                Pildyti paraišką
              </button>
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Kiti finansavimo sprendimai
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automobilių lizingas</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Idealus sprendimas norint įsigyti automobilį iš pardavėjo. Finansuojame iki 100%
                  automobilio vertės su lankščiomis sąlygomis ir greitais sprendimais.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Sužinoti daugiau
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paskola už automobilį</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Gaukite grynuosius pinigus į savo sąskaitą, o automobilis lieka jūsų
                  naudoti. Puikus būdas gauti papildomų lėšų išlaikant automobilį.
                </p>
                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Sužinoti daugiau
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Pasitikrink, ar atitinki sąlygas
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Tau jau 18 metų',
                  'Turi galiojantį asmens dokumentą',
                  'Gauni oficialias pajamas',
                  'Turi tvarkingą kredito istoriją',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Klientų atsiliepimai
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.date}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <InteractiveLeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Automobilių lizingo paraiška"
        productType="auto-leasing"
      />
    </div>
  );
}
