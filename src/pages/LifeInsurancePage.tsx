import { useState } from 'react';
import { CheckCircle, Heart, Shield, Users, Briefcase, Home, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import InteractiveLeadForm from '../components/InteractiveLeadForm';

export default function LifeInsurancePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const faqItems = [
    {
      question: 'Ką reiškia draudimo suma?',
      answer:
        'Draudimo suma – tai pinigų kiekis, kurį gaus jūsų artimieji arba nurodyti naudos gavėjai draudžiamo įvykio (mirties ar neįgalumo) atveju. Ją pasirenkate patys, atsižvelgdami į savo poreikius ir finansinius įsipareigojimus.',
    },
    {
      question: 'Ar galiu keisti įmokos dydį?',
      answer:
        'Taip, priklausomai nuo sutarties sąlygų, galite koreguoti draudimo įmokos dydį ar draudimo sumą. Tačiau tai gali turėti įtakos draudimo apsaugai ir sutarties sąlygoms. Rekomenduojame konsultuotis su draudimo konsultantu.',
    },
    {
      question: 'Kokie įvykiai yra draudžiami?',
      answer:
        'Standartinė gyvybės draudimo sutartis apima mirtį dėl ligos ar nelaimingo atsitikimo. Papildomai galima įtraukti neįgalumo, sunkių ligų, traumų ar laikino nedarbingumo apsaugą. Tikslios sąlygos nurodomos sutartyje.',
    },
    {
      question: 'Kas nutinka, jei nutraukiu sutartį anksčiau laiko?',
      answer:
        'Nutraukiant sutartį anksčiau laiko, galite gauti išpirkimo sumą, kuri priklauso nuo sumokėtų įmokų ir sutarties trukmės. Tačiau ankstyvas nutraukimas dažniausiai nėra naudingas, todėl rekomenduojame gerai apgalvoti prieš pasirašant ilgalaikę sutartį.',
    },
    {
      question: 'Ar reikia eiti pas gydytoją prieš draustis?',
      answer:
        'Priklausomai nuo draudimo sumos ir jūsų amžiaus, gali būti reikalingas sveikatos patikrinimas. Mažesnėms sumoms ir jaunesniems asmenims dažniausiai pakanka užpildyti sveikatos klausimyną.',
    },
    {
      question: 'Ar draudimo įmokos atskaičiuojamos iš mokesčių?',
      answer:
        'Lietuvoje tam tikros draudimo įmokos gali būti įtrauktos į gyventojų pajamų mokesčio (GPM) lengvatas, tačiau tai priklauso nuo draudimo tipo ir sumos. Rekomenduojame pasitikslinti su mokesčių konsultantu.',
    },
    {
      question: 'Kam labiausiai reikėtų gyvybės draudimo?',
      answer:
        'Gyvybės draudimas ypač rekomenduojamas šeimų maitintojams, turintiems paskolų įsipareigojimų (būsto paskola, lizingas), verslo savininkams ir visiems, kas nori užtikrinti artimųjų finansinę apsaugą netikėtų situacijų atveju.',
    },
  ];

  const whoNeedsInsurance = [
    {
      icon: Users,
      title: 'Šeimoms su vaikais',
      description: 'Apsaugok savo šeimos finansinę ateitį ir užtikrink vaikų išsilavinimą',
    },
    {
      icon: Home,
      title: 'Turintiems būsto paskolą',
      description: 'Užtikrink, kad artimieji neturės finansinės naštos netekus pajamų',
    },
    {
      icon: Briefcase,
      title: 'Verslo savininkams',
      description: 'Apsaugok verslą ir darbuotojus nuo netikėtų finansinių sunkumų',
    },
    {
      icon: User,
      title: 'Vyresniems nei 40 metų',
      description: 'Užtikrink artimųjų gerovę ir laidotuvių išlaidų padengimą',
    },
  ];

  const coverage = [
    {
      title: 'Mirties atveju',
      description: 'Išmokama visa draudimo suma nurodytiems naudos gavėjams',
    },
    {
      title: 'Nuolatinio nedarbingumo',
      description: 'Kompensacija patyrūs nelaimingą atsitikimą ar sunkią ligą',
    },
    {
      title: 'Sunkios ligos',
      description: 'Papildoma apsauga diagnostavus vėžį, infarktą ar insultą',
    },
    {
      title: 'Traumos ir sužalojimai',
      description: 'Išmokos už konkrečias traumas pagal sutartyje nurodytą lentele',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/gyvybes-draudimas" />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Palygink gyvybės draudimo pasiūlymus
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Gauk gyvybės draudimo pasiūlymus iš kelių draudimo bendrovių vienu metu. Palygink sąlygas ir rask geriausią apsaugą savo šeimai už palankiausią kainą.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Finansinė apsauga nelaimės atveju',
                    'Galima pritaikyti pagal tavo poreikius',
                    'Papildomos apsaugos: traumos, nedarbingumas ir pan.',
                    'Lankstus draudimo terminas ir įmokos',
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
                  Gauti gyvybės draudimo pasiūlymą
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Laiminga šeima"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kaip veikia gyvybės draudimas?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Paprastas ir aiškus procesas, užtikrinantis tavo artimųjų apsaugą
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pasirenki draudimo sumą</h3>
                <p className="text-gray-600">
                  Nustatai, kokią sumą nori, kad gautų artimieji draudžiamo įvykio atveju
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pasirenki draudimo laikotarpį
                </h3>
                <p className="text-gray-600">
                  Gali pasirinkti iki pensijos amžiaus arba konkrečiam laikotarpiui (pvz., kol
                  grąžinsi paskolą)
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pasirašai sutartį</h3>
                <p className="text-gray-600">
                  Užpildai sveikatos klausimyną ir pasirašai draudimo sutartį
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Moki fiksuotą įmoką</h3>
                <p className="text-gray-600">
                  Kiekvieną mėnesį moki sutartą įmoką ir esi apsaugotas visam draudimo terminui
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Kas yra draudžiama?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coverage.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-8 h-8 text-green-600 mr-3" />
                Papildomos apsaugos galimybės
              </h3>
              <p className="text-gray-600 mb-6">
                Be standartinės apsaugos, galite pasirinkti ir papildomas apsaugos rūšis, kurios
                užtikrina dar platesnę finansinę saugą:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Laikinas nedarbingumas (liga ar trauma)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Chirurginio gydymo kompensacija</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hospitalinės dienos išmokos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Darbo netekimo apsauga</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Kam labiausiai tinka gyvybės draudimas?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoNeedsInsurance.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all text-center"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Kodėl verta draustis?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Apsauga šeimai</h4>
                      <p className="text-gray-600">
                        Užtikrink, kad artimieji turės pinigų kasdienėms išlaidoms, paskoloms
                        grąžinti ir vaikų mokslui.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Finansinė ramybė</h4>
                      <p className="text-gray-600">
                        Žinok, kad esate apsaugoti ir nereikės jaudintis dėl artimųjų finansinės
                        ateities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Paskolų apsauga</h4>
                      <p className="text-gray-600">
                        Jei turi būsto paskolą ar kitų įsipareigojimų, draudimas apsaugos šeimą nuo
                        skolų naštos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Prieinama kaina</h4>
                      <p className="text-gray-600">
                        Mėnesinė įmoka dažniausiai tesudaro 1-2% nuo draudimo sumos per metus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4545962/pexels-photo-4545962.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Šeima"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
                Gauti gyvybės draudimo pasiūlymą
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Užpildyk trumpą formą ir mūsų draudimo specialistas susisieks su tavimi per 1 darbo
                dieną. Pateiksime individualų pasiūlymą pagal tavo poreikius.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Reikalinga informacija:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Vardas, pavardė ir gimimo data
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Kontaktiniai duomenys (telefonas ir el. paštas)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Pageidaujama draudimo suma
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Papildomi komentarai ar klausimai (jei yra)
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
                >
                  Gauti pasiūlymą
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Pasiūlymo gavimas yra nemokamas ir neįpareigoja pasirašyti sutarties
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <InteractiveLeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Gyvybės draudimo paraiška"
        productType="insurance"
      />
    </div>
  );
}
