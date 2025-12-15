import { useState } from 'react';
import { CheckCircle, Hammer, Droplet, PaintBucket, DoorOpen, Lightbulb, Wind, FileText, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoanCalculator from '../components/LoanCalculator';
import FAQ from '../components/FAQ';
import InteractiveLeadForm from '../components/InteractiveLeadForm';

export default function HomeRenovationPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const faqItems = [
    {
      question: 'Ar reikia turėti būsto nuosavybės dokumentus?',
      answer:
        'Taip, būsto nuosavybės dokumentai yra reikalingi kaip įrodymas, kad būstas priklauso jums. Tačiau jei neturite nuosavybės teisių, bet gyvenate šeimos nariui priklausančiame būste ir jis sutinka, galime aptarti alternatyvius variantus.',
    },
    {
      question: 'Ar galiu finansuoti dalį remonto?',
      answer:
        'Taip, absoliučiai! Galite finansuoti tik tam tikrą remonto dalį, pvz., tik virtuvės atnaujinimą ar vonios kambario remontą. Minimali suma yra 1000 €, maksimali – 15 000 €.',
    },
    {
      question: 'Ar būtini sąmata ir rangovo pasiūlymas?',
      answer:
        'Sąmata nėra privaloma, tačiau rekomenduojama turėti bent preliminarų remonto išlaidų planą. Tai padeda tiksliai įvertinti reikalingą sumą ir išvengti papildomų sunkumų vėliau.',
    },
    {
      question: 'Ar galiu naudoti paskolą statybinėms medžiagoms pirkti?',
      answer:
        'Taip, paskola būsto remontui gali būti naudojama tiek statybinėms medžiagoms įsigyti, tiek rangovų paslaugoms apmokėti, tiek elektros ir santechnikos įrangai bei kitoms su remontu susijusioms išlaidoms.',
    },
    {
      question: 'Kiek laiko turiu panaudoti paskolą?',
      answer:
        'Pinigai pervedami į jūsų sąskaitą ir galite juos naudoti pagal poreikį. Nėra griežto termino, per kurį turite panaudoti lėšas, tačiau rekomenduojame pradėti remontą kuo greičiau, kad išvengtumėte neplanuotų išlaidų.',
    },
    {
      question: 'Ar galiu finansuoti energijos taupymo sprendimus?',
      answer:
        'Taip, energijos taupymo sprendimai kaip langų keitimas, pastogės šiltinimas, šildymo sistemos atnaujinimas ar saulės baterijų montavimas yra puikūs būdai investuoti į būstą ir galite juos finansuoti.',
    },
    {
      question: 'Kokia yra maksimali paskolos suma būsto remontui?',
      answer:
        'Maksimali paskolos suma būsto remontui yra 15 000 €. Tačiau galutinė suma priklauso nuo jūsų pajamų ir finansinės situacijos vertinimo. Siekiame, kad paskolos grąžinimas būtų patogus ir nesudarytų finansinių sunkumų.',
    },
  ];

  const renovationTypes = [
    {
      icon: PaintBucket,
      title: 'Sienų ir grindų apdaila',
      description: 'Dažymas, tapetavimas, grindų klojimas, plytelių dėjimas',
    },
    {
      icon: Droplet,
      title: 'Santechnika ir vonia',
      description: 'Vonios kambario remontas, santechnikos keitimas, dušo kabina',
    },
    {
      icon: Hammer,
      title: 'Virtuvės atnaujinimas',
      description: 'Baldai, stalviršiai, buitinė technika, plytelės',
    },
    {
      icon: DoorOpen,
      title: 'Langai ir durys',
      description: 'Plastikiniai langai, durų keitimas, termoizoliacijos gerinimas',
    },
    {
      icon: Wind,
      title: 'Šildymo sistema',
      description: 'Radiatoriai, grindinio šildymo sistema, boileriai',
    },
    {
      icon: Lightbulb,
      title: 'Elektros sistema',
      description: 'Elektros instaliacijos atnaujinimas, apšvietimas, rozetės',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/busto-remontas" />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Palygink paskolų pasiūlymus būsto remontui
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Gauk pasiūlymus iš kelių finansų įstaigų ir rask geriausias sąlygas būsto atnaujinimui. Palygink palankiausias paskolas virtuvės, vonios ar viso būsto remontui.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Finansavimas būsto atnaujinimui ir remontui',
                    'Lanksčios sąlygos ir terminas',
                    'Galimybė finansuoti ir mažesnius atnaujinimus',
                    'Sprendimas per 1 darbo dieną',
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
                  Gauti pasiūlymą remontui
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Būsto remontas"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LoanCalculator
              minAmount={1000}
              maxAmount={15000}
              minTerm={12}
              maxTerm={84}
              title="Remonto paskolos skaičiuoklė"
              amountLabel="Remonto biudžetas (EUR)"
              onGetOffer={() => setIsFormOpen(true)}
            />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ką gali finansuoti?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Su būsto remonto paskola gali atnaujinti bet kurią namų ar buto dalį. Štai
                populiariausi remonto darbai:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {renovationTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Kaip vyksta procesas?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Paprastas ir greitas kelias nuo paraiškos iki finansavimo gavimo
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Užpildai paraišką
                </h3>
                <p className="text-gray-600 text-center">
                  Užpildyk elektroninę formą nurodydamas remonto planus ir reikalingą sumą.
                  Pateik reikiamus dokumentus.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Įvertiname tavo situaciją
                </h3>
                <p className="text-gray-600 text-center">
                  Mūsų specialistai greitai įvertina tavo paraišką ir pateikia sprendimą per 1
                  darbo dieną.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Pasirašai sutartį ir gauni finansavimą
                </h3>
                <p className="text-gray-600 text-center">
                  Sutartį pasirašai elektroniškai, o pinigai pervedami į tavo sąskaitą per 1-2
                  darbo dienas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Kodėl verta investuoti į būsto remontą?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Padidini būsto vertę</h4>
                      <p className="text-gray-600">
                        Kokybiškas remontas gali padidinti nekilnojamojo turto vertę iki 15-20%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Sutaupai energijos</h4>
                      <p className="text-gray-600">
                        Langų keitimas, šiltinimas ir šildymo atnaujinimas gali sumažinti išlaidas
                        iki 40%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Gyveni patogiau</h4>
                      <p className="text-gray-600">
                        Šiuolaikinė virtuvė, atnaujinta vonia ir šviežia apdaila daro kasdienybę
                        malonesnę.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Išvengi didesnių problemų</h4>
                      <p className="text-gray-600">
                        Laiku atliktas remontas padeda išvengti brangesnių taisymų ateityje.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6585608/pexels-photo-6585608.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Atnaujintas namas"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Paskolos privalumai
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Lankstus grąžinimo terminas nuo 12 iki 84 mėnesių</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Konkurencingos palūkanų normos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Galimybė grąžinti paskolą anksčiau be baudų</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Greitas sprendimas per 1 darbo dieną</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Visas procesas nuotolinis – be lankymosi biure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aiškios sąlygos be paslėptų mokesčių</span>
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
                    <span className="text-gray-700">Būsto nuosavybės pažymėjimas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pajamų pažyma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Remonto planas (rekomenduojama)</span>
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
                    <span className="text-gray-700">Būsto nuosavybės teisė</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Stabili pajamų istorija</span>
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
              Pradėk remontą jau šiandien
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Neatidėliok savo svajonių būsto kūrimo. Pateik paraišką ir gauk finansavimą per
              kelias dienas.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Gauti pasiūlymą remontui
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <InteractiveLeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Remonto paskolos paraiška"
        productType="renovation"
      />
    </div>
  );
}
