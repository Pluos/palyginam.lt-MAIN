import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20 lg:mt-28">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privatumo politika</h1>

          <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Bendrosios nuostatos</h2>
              <p className="leading-relaxed">
                Ši privatumo politika nustato, kaip renkame, naudojame, saugome ir atskleidžiame jūsų asmens duomenis,
                kai naudojatės mūsų finansinių paslaugų svetaine. Mes įsipareigojame apsaugoti jūsų privatumą ir užtikrinti,
                kad jūsų asmens duomenys būtų tvarkomi pagal Bendrąjį duomenų apsaugos reglamentą (BDAR) ir kitus taikytinus
                Lietuvos Respublikos teisės aktus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Duomenų valdytojas</h2>
              <p className="leading-relaxed mb-2">
                Jūsų asmens duomenų valdytojas yra:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Palyginam.lt</p>
                <p>El. paštas: info@palyginam.lt</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Renkami asmens duomenys</h2>
              <p className="leading-relaxed mb-4">
                Priklausomai nuo jūsų pasirinktos paslaugos, mes galime rinkti šiuos duomenis:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vardas, pavardė</li>
                <li>Asmens kodas</li>
                <li>Elektroninio pašto adresas</li>
                <li>Telefono numeris</li>
                <li>Finansinė informacija (pajamos, įsipareigojimai)</li>
                <li>Darbo informacija (užimtumo tipas, darbo trukmė)</li>
                <li>Paskolos ar lizingo užklausos informacija</li>
                <li>Šeimyninė padėtis (jei pasirenkate pasiūlymą su sutuoktiniu)</li>
                <li>Draudimo informacija (amžius, draudimo tipas)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Duomenų tvarkymo tikslai ir teisiniai pagrindai</h2>
              <p className="leading-relaxed mb-4">
                Jūsų asmens duomenis tvarkome šiais tikslais:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Paslaugų teikimas:</strong> paskolų, lizingo, refinansavimo ir draudimo pasiūlymų parinkimas ir teikimas
                  (teisinis pagrindas: sutarties vykdymas)
                </li>
                <li>
                  <strong>Užklausų apdorojimas:</strong> jūsų užklausų per kontaktinius formularėlius apdorojimas
                  (teisinis pagrindas: sutarties vykdymas arba jūsų sutikimas)
                </li>
                <li>
                  <strong>Kreditingumo vertinimas:</strong> jūsų finansinės padėties įvertinimas
                  (teisinis pagrindas: teisėtas interesas ir teisinės prievolės)
                </li>
                <li>
                  <strong>Komunikacija:</strong> bendravimas su jumis dėl jūsų užklausų
                  (teisinis pagrindas: sutarties vykdymas)
                </li>
                <li>
                  <strong>Teisinių prievolių vykdymas:</strong> atitikimas pinigų plovimo prevencijos ir kitoms teisinėms prievolėms
                  (teisinis pagrindas: teisinės prievolės)
                </li>
                <li>
                  <strong>Svetainės tobulinimas:</strong> svetainės naudojimo analizė ir patobulinimas
                  (teisinis pagrindas: teisėtas interesas)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Duomenų atskleidimas tretiesiems asmenims</h2>
              <p className="leading-relaxed mb-4">
                Jūsų asmens duomenys gali būti perduodami:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Finansų įstaigoms ir bankams paskolų ir lizingo pasiūlymams gauti</li>
                <li>Draudimo bendrovėms draudimo pasiūlymams gauti</li>
                <li>Kredito biurams ir registrams kreditingumo vertinimui</li>
                <li>IT paslaugų teikėjams sistemos palaikymui</li>
                <li>Teisėsaugos institucijoms pagal teisinį reikalavimą</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Visi duomenų gavėjai yra įpareigoti laikytis duomenų apsaugos reikalavimų ir tvarkomi duomenis tik nurodytais tikslais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Duomenų saugojimo terminai</h2>
              <p className="leading-relaxed">
                Jūsų asmens duomenis saugome tol, kol yra būtina tikslams, dėl kurių jie buvo surinkti, pasiekti,
                arba kol to reikalauja taikytini teisės aktai. Paprastai:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Užklausų duomenys saugomi 2 metus nuo paskutinio kontakto</li>
                <li>Sutarčių duomenys saugomi 10 metų po sutarties pabaigos (teisinis reikalavimas)</li>
                <li>Buhalterijos dokumentai saugomi pagal apskaitos įstatymus (10 metų)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Jūsų teisės</h2>
              <p className="leading-relaxed mb-4">
                Jūs turite šias teises dėl savo asmens duomenų:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Teisė susipažinti</strong> su savo asmens duomenimis</li>
                <li><strong>Teisė ištaisyti</strong> neteisingus ar netikslius duomenis</li>
                <li><strong>Teisė ištrinti</strong> duomenis ("teisė būti pamirštam")</li>
                <li><strong>Teisė apriboti</strong> duomenų tvarkymą</li>
                <li><strong>Teisė į duomenų perkeliamumą</strong></li>
                <li><strong>Teisė nesutikti</strong> su duomenų tvarkymu</li>
                <li><strong>Teisė atšaukti sutikimą</strong> bet kuriuo metu</li>
                <li><strong>Teisė pateikti skundą</strong> Valstybinei duomenų apsaugos inspekcijai</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Norėdami pasinaudoti savo teisėmis, susisiekite su mumis el. paštu info@palyginam.lt
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Duomenų saugumas</h2>
              <p className="leading-relaxed">
                Mes taikome technines ir organizacines priemones, kad apsaugotume jūsų asmens duomenis nuo neteisėtos
                prieigos, atskleidimo, pakeitimo ar sunaikinimo. Tai apima duomenų šifravimą, prieigos kontrolę,
                saugų duomenų perdavimą ir reguliarius saugumo auditus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Slapukai</h2>
              <p className="leading-relaxed">
                Mūsų svetainė naudoja slapukus, kad pagerintų jūsų naršymo patirtį. Daugiau informacijos apie
                naudojamus slapukus rasite mūsų <a href="/slapuku-politika" className="text-blue-600 hover:text-blue-800 underline">Slapukų politikoje</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Politikos pakeitimai</h2>
              <p className="leading-relaxed">
                Mes galime laikas nuo laiko atnaujinti šią privatumo politiką. Apie esminius pakeitimus informuosime
                el. paštu arba paskelbdami pranešimą svetainėje. Rekomenduojame reguliariai peržiūrėti šią politiką.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Kontaktai</h2>
              <p className="leading-relaxed mb-4">
                Jei turite klausimų apie šią privatumo politiką ar duomenų tvarkymą, susisiekite su mumis:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p><strong>El. paštas:</strong> info@palyginam.lt</p>
              </div>
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
