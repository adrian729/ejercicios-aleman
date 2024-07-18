export type WordType = {
    german: string;
    pronunciation?: string;
    spanish: string;
    invAsociation?: string;
    categories: string[];
};

export const other: WordType[] = [];

export const pronouns: WordType[] = [
    {
        german: 'Wir',
        pronunciation: 'vía',
        spanish: 'Nosotros',
        categories: ['Pronombre'],
        invAsociation:
            'Imagina que NOSOTROS estamos ahora mismo sentados en la VÍA del tren',
    },
    {
        german: 'Sie',
        pronunciation: 'si:',
        spanish: 'Usted(es)/Ell(os/as)',
        categories: ['Pronombre'],
        invAsociation: '¡Pero SI Es USTED!',
    },
];

export const adjectives: WordType[] = [];

export const adverbs: WordType[] = [
    {
        german: 'Ja',
        pronunciation: 'ya',
        spanish: 'Si',
        categories: ['Adverbio'],
    },
    {
        german: 'Nein',
        pronunciation: 'náin',
        spanish: 'No',
        categories: ['Adverbio'],
    },
    {
        german: 'Nicht',
        pronunciation: 'nísht',
        spanish: 'NEGATIVA (negar una frase)',
        categories: ['Adverbio'],
    },
];

export const verbs: WordType[] = [
    {
        german: 'Haben',
        pronunciation: 'háben',
        spanish: 'Haber/Tener',
        categories: ['Verbo'],
    },
    {
        german: 'Wollen',
        pronunciation: 'vólen',
        spanish: 'Querer',
        categories: ['Verbo'],
        invAsociation: 'QUERER VOLAR',
    },
    {
        german: 'Können',
        pronunciation: 'k<u>oé</u>nen',
        spanish: 'Poder',
        categories: ['Verbo'],
        invAsociation: 'CONAN el bárbaro tenía mucho PODER',
    },
    {
        german: 'Arbeiten',
        pronunciation: 'árbaiten',
        spanish: 'Trabajar',
        categories: ['Verbo'],
        invAsociation:
            'Vemos TRABAJAR velozmente a un ÁRBOL con muchas ramas a modo de brazos',
    },
    {
        german: 'Essen',
        pronunciation: 'ésen',
        spanish: 'Comer',
        categories: ['Verbo'],
        invAsociation:
            'A más COMER más forma de ESE crea el cuerpo (echa barriga y culo)',
    },
    {
        german: 'Lesen',
        pronunciation: 'lí:sen',
        spanish: 'Leer',
        categories: ['Verbo'],
        invAsociation: 'Un LESIONADO tiene más tiempo libre para LEER',
    },
    {
        german: 'Studieren',
        pronunciation: 'shtudíren',
        spanish: 'Estudiar',
        categories: ['Verbo'],
    },
    {
        german: 'Kaufen',
        pronunciation: 'kaúfen',
        spanish: 'Comprar',
        categories: ['Verbo'],
        invAsociation:
            'Queda K.O. EL FEO boceador al no poder seguir el ritmo de su novia COMPRANDO',
    },
    {
        german: 'Mieten',
        pronunciation: 'mí:ten',
        spanish: 'Alquilar',
        categories: ['Verbo'],
        invAsociation: 'Cuando ALQUILAS algo parece que es MITAD tuyo',
    },
];

export const nouns: WordType[] = [
    {
        german: 'Auto',
        pronunciation: 'áuto',
        spanish: 'Auto/Coche',
        categories: ['Sustantivo'],
        invAsociation: 'AUTOmóvil',
    },
    {
        german: 'Zimmer',
        pronunciation: 'tsíma',
        spanish: 'Habitación',
        categories: ['Sustantivo'],
        invAsociation:
            'Una HABITACIÓN situada en equilibrio en la CIMA de una montaña',
    },
    {
        german: 'Buch',
        pronunciation: 'buj',
        spanish: 'Libro',
        categories: ['Sustantivo'],
        invAsociation:
            'Casi como en inglés BOOK / Un ave muy culta, con gafas, está emBUCHando un LIBRO',
    },
    {
        german: 'Arbeit',
        pronunciation: 'árbait',
        spanish: 'Trabajo',
        categories: ['Sustantivo'],
        invAsociation:
            '(Trabajar = ARBEITen) / Un ARBOL con muchas ramas a modo de brazos TRABAJA velozmente',
    },
    {
        german: 'Brot',
        pronunciation: 'brot',
        spanish: 'Pan',
        categories: ['Sustantivo'],
        invAsociation: 'Vemos BROTar PAN de una planta',
    },
];

export const words: WordType[] = [
    ...verbs,
    ...nouns,
    ...adjectives,
    ...adverbs,
    ...pronouns,
    ...other,
];
