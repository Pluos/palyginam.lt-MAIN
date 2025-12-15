import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20 lg:mt-28">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Slapukų politika</h1>

          <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Kas yra slapukai?</h2>
              <p className="leading-relaxed">
                Slapukai (angl. cookies) yra maži teksto failai, kurie saugomi jūsų įrenginyje (kompiuteryje, planšetėje ar
                mobiliajame telefone), kai lankotės svetainėje. Slapukai plačiai naudojami, kad svetainės veiktų efektyviau
                ir teiktų informaciją svetainės savininkams.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Kaip mes naudojame slapukus?</h2>
              <p className="leading-relaxed mb-4">
                Mes naudojame slapukus šiais tikslais:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Užtikrinti svetainės funkcionalumą</li>
                <li>Įsiminti jūsų pasirinkimus ir nuostatas</li>
                <li>Analizuoti svetainės lankytojų srautus</li>
                <li>Tobulinti svetainės veikimą ir naudotojo patirtį</li>
                <li>Suprasti, kaip lankytojai naudojasi mūsų svetaine</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Slapukų tipai</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Būtini slapukai</h3>
                  <p className="leading-relaxed">
                    Šie slapukai yra būtini svetainės veikimui ir negali būti išjungti. Jie paprastai nustatomi tik reaguojant
                    į jūsų veiksmus, atitinkančius paslaugų užklausą, pvz., privatumo nuostatų nustatymą, prisijungimą ar formų
                    užpildymą. Galite nustatyti savo naršyklę blokuoti šiuos slapukus arba įspėti apie juos, tačiau tuomet kai
                    kurios svetainės dalys neveiks.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Analitiniai/veiklos slapukai</h3>
                  <p className="leading-relaxed mb-3">
                    Šie slapukai leidžia mums skaičiuoti apsilankymus ir srauto šaltinius, kad galėtume išmatuoti ir pagerinti
                    mūsų svetainės veikimą. Jie padeda mums sužinoti, kurie puslapiai yra populiariausi ir mažiausiai populiarūs,
                    ir pamatyti, kaip lankytojai juda svetainėje.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Naudojami slapukai:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Google Analytics slapukai (_ga, _gid, _gat)</li>
                    <li>Sesijos identifikatoriai</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Funkciniai slapukai</h3>
                  <p className="leading-relaxed">
                    Šie slapukai leidžia svetainei teikti patobulintą funkcionalumą ir personalizavimą. Juos galime nustatyti
                    mes arba trečiųjų šalių paslaugų teikėjai, kurių paslaugas įtraukėme į savo puslapius. Jei neleissite šių
                    slapukų, kai kurios ar visos šios paslaugos gali veikti netinkamai.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Tiksliniai slapukai</h3>
                  <p className="leading-relaxed">
                    Šiuos slapukus mūsų svetainėje gali nustatyti reklamos partneriai. Šios įmonės gali juos naudoti jūsų
                    interesų profiliui sudaryti ir rodyti jums atitinkamas reklamas kitose svetainėse. Jie tiesiogiai nelaiko
                    asmeninės informacijos, bet pagrįsti unikaliu jūsų naršyklės ir interneto įrenginio identifikavimu.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Naudojami slapukai</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 mt-4">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Slapuko pavadinimas</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipas</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Galiojimo laikas</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Paskirtis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Būtinas</td>
                      <td className="border border-gray-300 px-4 py-2">Sesija</td>
                      <td className="border border-gray-300 px-4 py-2">Vartotojo sesijos identifikavimas</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                      <td className="border border-gray-300 px-4 py-2">Būtinas</td>
                      <td className="border border-gray-300 px-4 py-2">1 metai</td>
                      <td className="border border-gray-300 px-4 py-2">Slapukų sutikimo įrašymas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Analitinis</td>
                      <td className="border border-gray-300 px-4 py-2">2 metai</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - lankytojų skiriamumas</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Analitinis</td>
                      <td className="border border-gray-300 px-4 py-2">24 valandos</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - lankytojų skiriamumas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gat</td>
                      <td className="border border-gray-300 px-4 py-2">Analitinis</td>
                      <td className="border border-gray-300 px-4 py-2">1 minutė</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - užklausų ribojimas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Trečiųjų šalių slapukai</h2>
              <p className="leading-relaxed mb-4">
                Kai kuriais atvejais mes naudojame slapukus, kuriuos teikia patikimi trečiųjų šalių paslaugų teikėjai.
                Šie slapukai leidžia mums:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Analizuoti svetainės naudojimą ir lankytojų elgesį. Google Analytics
                  yra viena plačiausiai naudojamų ir patikimiausių analitikos platformų pasaulyje. Ji padeda mums suprasti,
                  kaip lankytojai sąveikauja su svetaine.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Kaip valdyti slapukus?</h2>
              <p className="leading-relaxed mb-4">
                Galite kontroliuoti ir/arba ištrinti slapukus, kaip norite. Galite ištrinti visus jūsų kompiuteryje esančius
                slapukus ir daugumą naršyklių galite nustatyti, kad jie būtų blokuojami. Tačiau, jei tai padarysite, gali tekti
                kiekvieną kartą apsilankius svetainėje rankiniu būdu keisti kai kurias nuostatas, o kai kurios paslaugos ir
                funkcijos gali neveikti.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Populiariausių naršyklių instrukcijos:</h3>
                <ul className="space-y-2">
                  <li><strong>Google Chrome:</strong> Nustatymai → Privatumas ir saugumas → Slapukai ir kiti svetainių duomenys</li>
                  <li><strong>Mozilla Firefox:</strong> Nustatymai → Privatumas ir saugumas → Slapukai ir svetainių duomenys</li>
                  <li><strong>Safari:</strong> Nuostatos → Privatumas → Slapukai ir svetainių duomenys</li>
                  <li><strong>Microsoft Edge:</strong> Nustatymai → Slapukai ir svetainės leidimai → Slapukų valdymas</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Jūsų sutikimas</h2>
              <p className="leading-relaxed">
                Pirmą kartą apsilankius mūsų svetainėje, pamatysite pranešimą apie slapukus. Jūs galite pasirinkti,
                kuriuos slapukus priimti. Būtini slapukai negali būti atsisakyti, nes jie yra būtini svetainės veikimui.
                Savo sutikimą galite bet kada pakeisti atnaujindami savo slapukų nuostatas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Slapukų politikos pakeitimai</h2>
              <p className="leading-relaxed">
                Mes galime laikas nuo laiko atnaujinti šią slapukų politiką, kad atspindėtume, pavyzdžiui, mūsų praktikoje
                naudojamus slapukus arba dėl kitų veiklos, teisinių ar reguliavimo priežasčių. Todėl prašome reguliariai
                peržiūrėti šią slapukų politiką, kad būtumėte informuoti apie tai, kaip naudojame slapukus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Daugiau informacijos</h2>
              <p className="leading-relaxed mb-4">
                Jei turite klausimų dėl mūsų slapukų naudojimo, prašome susisiekti su mumis:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p><strong>El. paštas:</strong> info@palyginam.lt</p>
              </div>
              <p className="leading-relaxed mt-4">
                Taip pat galite skaityti daugiau apie jūsų duomenų tvarkymą mūsų{' '}
                <a href="/privatumo-politika" className="text-blue-600 hover:text-blue-800 underline">
                  Privatumo politikoje
                </a>.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Paskutinį kartą atnaujinta: 2025 m. gruodžio 2 d.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
