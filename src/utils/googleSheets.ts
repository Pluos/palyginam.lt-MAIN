const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx6KcMj-QB3G0jrsSGlvfzlafzeJPFHDPFrtmYzdjtXsH5k3QBcs28ZH5G4yzA7zL4P-Q/exec';

export interface FormSubmission {
  formType: 'auto-leasing' | 'consumer-loan' | 'consumer-loans' | 'refinancing' | 'renovation' | 'home-renovation' | 'insurance' | 'life-insurance';
  name?: string;
  phone?: string;
  email?: string;
  loanAmount?: string;
  loanTerm?: string;
  carPrice?: string;
  downPayment?: string;
  renovationType?: string;
  insuranceType?: string;
  message?: string;
  [key: string]: string | undefined;
}

const fieldTranslations: Record<string, string> = {
  'formType': 'Formos tipas',
  'amount': 'Suma',
  'monthlyIncome': 'Mėnesinės pajamos',
  'employmentStatus': 'Darbo statusas',
  'creditHistory': 'Kredito istorija',
  'firstName': 'Vardas',
  'lastName': 'Pavardė',
  'fullName': 'Vardas ir pavardė',
  'email': 'El. paštas',
  'phone': 'Telefono numeris',
  'term': 'Terminas',
  'carPrice': 'Automobilio kaina',
  'carAge': 'Automobilio amžius',
  'downPayment': 'Pradinis įnašas',
  'renovationType': 'Remonto tipas',
  'propertyType': 'Nekilnojamo turto tipas',
  'age': 'Amžius',
  'insuranceFor': 'Draudimas',
  'insuranceType': 'Draudimo tipas',
  'loanAmount': 'Paskolos suma',
  'loanTerm': 'Paskolos terminas',
  'message': 'Žinutė',
};

const valueTranslations: Record<string, string> = {
  'auto-leasing': 'Automobilių lizingas',
  'consumer-loan': 'Vartojimo paskola',
  'consumer-loans': 'Vartojimo paskola',
  'refinancing': 'Paskolų refinansavimas',
  'renovation': 'Būsto remontas',
  'home-renovation': 'Būsto remontas',
  'insurance': 'Gyvybės draudimas',
  'life-insurance': 'Gyvybės draudimas',
  'employed': 'Dirbu pagal darbo sutartį',
  'self-employed': 'Individualios veiklos vykdytojas',
  'retired': 'Pensininkas',
  'unemployed': 'Bedarbis',
  'excellent': 'Puiki (niekada nevėlavau mokėti)',
  'good': 'Gera (kartais vėlavau 1-2 dienas)',
  'fair': 'Patenkinama (turėjau vėlavimų)',
  'poor': 'Bloga (turiu nemokamų paskolų)',
  'none': 'Neturiu kredito istorijos',
  'new': 'Naujas (iki 3 metų)',
  'used': 'Naudotas (3-7 metai)',
  'old': 'Senas (virš 7 metų)',
  'full': 'Pilnas remontas',
  'partial': 'Dalinis remontas',
  'kitchen': 'Virtuvė',
  'bathroom': 'Vonia',
  'windows': 'Langai',
  'apartment': 'Butas',
  'house': 'Namas',
  'self': 'Tik save',
  'family': 'Save ir artimuosius',
  'life': 'Gyvybės draudimas',
  'investment': 'Investicinis gyvybės draudimas',
};

function translateData(data: FormSubmission): Record<string, string> {
  const translated: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    if (value === undefined) continue;

    const translatedKey = fieldTranslations[key] || key;
    const translatedValue = valueTranslations[value] || value;

    translated[translatedKey] = translatedValue;
  }

  return translated;
}

export async function submitToGoogleSheets(data: FormSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Submitting to Google Sheets:', data);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response data:', result);

    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
