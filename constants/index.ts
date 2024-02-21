import { AgAreaSeriesOptions } from "ag-charts-community"
import { Fascinate } from "next/font/google";


export const countries_with_flag =[
  { countrie: "Antigua and Barbuda", code: 'ag' },
  { countrie: "Andorra", code: 'ad' },
  { countrie: "Afghanistan", code: 'af' },
  { countrie: "United Arab Emirates", code: 'ae' },
  { countrie: 'Anguilla', code: 'ai' },
  { countrie: 'Albania', code: 'al' },
  { countrie: 'Armenia', code: 'am' },
  { countrie: 'Angola', code: 'ao' },
  { countrie: 'Antarctica', code: 'aq' },
  { countrie: 'Argentina', code: 'ar' },
  { countrie: 'American Samoa', code: 'as' },
  { countrie: 'Austria', code: 'at' },
  { countrie: 'Australia', code: 'au' },
  { countrie: 'Aruba', code: 'aw' },
  { countrie: 'Aland Islands', code: 'ax' },
  { countrie: 'Azerbaijan', code: 'az' },
  { countrie: 'Bosnia and Herzegovina', code: 'ba' },
  { countrie: 'Barbados', code: 'bb' },
  { countrie: 'Bangladesh', code: 'bd' },
  { countrie: 'Belgium', code: 'be' },
  { countrie: 'Burkina Faso', code: 'bf' },
  { countrie: 'Bulgaria', code: 'bg' },
  { countrie: 'Bahrain', code: 'bh' },
  { countrie: 'Burundi', code: 'bi' },
  { countrie: 'Benin', code: 'bj' },
  { countrie: 'Saint Barthélemy', code: 'bl' },
  { countrie: 'Bermuda', code: 'bm' },
  { countrie: 'Brunei', code: 'bn' },
  { countrie: 'Bolivia', code: 'bo' },
  { countrie: 'Bonaire, Sint Eustatius and Saba', code: 'bq' },
  { countrie: 'Brazil', code: 'br' },
  { countrie: 'Bahamas', code: 'bs' },
  { countrie: 'Bhutan', code: 'bt' },
  { countrie: 'Bouvet Island', code: 'bv' },
  { countrie: 'Botswana', code: 'bw' },
  { countrie: 'Belarus', code: 'by' },
  { countrie: 'Belize', code: 'bz' },
  { countrie: 'Canada', code: 'ca' },
  { countrie: 'Cocos (Keeling) Islands', code: 'cc' },
  { countrie: 'Congo (Democratic Republic)', code: 'cd' },
  { countrie: 'Central African Republic', code: 'cf' },
  { countrie: 'Congo', code: 'cg' },
  { countrie: 'Switzerland', code: 'ch' },
  { countrie: "Côte d'Ivoire", code: 'ci' },
  { countrie: 'Cook Islands', code: 'ck' },
  { countrie: 'Chile', code: 'cl' },
  { countrie: 'Cameroon', code: 'cm' },
  { countrie: 'China', code: 'cn' },
  { countrie: 'Colombia', code: 'co' },
  { countrie: 'Costa Rica', code: 'cr' },
  { countrie: 'Cuba', code: 'cu' },
  { countrie: 'Cabo Verde', code: 'cv' },
  { countrie: 'Curaçao', code: 'cw' },
  { countrie: 'Christmas Island', code: 'cx' },
  { countrie: 'Cyprus', code: 'cy' },
  { countrie: 'Czech Republic', code: 'cz' },
  { countrie: 'Germany', code: 'de' },
  { countrie: 'Djibouti', code: 'dj' },
  { countrie: 'Denmark', code: 'dk' },
  { countrie: 'Dominica', code: 'dm' },
  { countrie: 'Dominican Republic', code: 'do' },
  { countrie: 'Algeria', code: 'dz' },
  { countrie: 'Ecuador', code: 'ec' },
  { countrie: 'Estonia', code: 'ee' },
  { countrie: 'Egypt', code: 'eg' },
  { countrie: 'Western Sahara', code: 'eh' },
  { countrie: 'Eritrea', code: 'er' },
  { countrie: 'Spain', code: 'es' },
  { countrie: 'Ethiopia', code: 'et' },
  { countrie: 'Finland', code: 'fi' },
  { countrie: 'Fiji', code: 'fj' },
  { countrie: 'Falkland Islands', code: 'fk' },
  { countrie: 'Micronesia', code: 'fm' },
  { countrie: 'Faroe Islands', code: 'fo' },
  { countrie: 'France', code: 'fr' },
  { countrie: "Gabon", code: 'ga' },
  { countrie: "United Kingdom", code: 'gb' },
  { countrie: "Grenada", code: 'gd' },
  { countrie: "Georgia", code: 'ge' },
  { countrie: "French Guiana", code: 'gf' },
  { countrie: "Guernsey", code: 'gg' },
  { countrie: "Ghana", code: 'gh' },
  { countrie: "Gibraltar", code: 'gi' },
  { countrie: "Greenland", code: 'gl' },
  { countrie: "Gambia", code: 'gm' },
  { countrie: "Guinea", code: 'gn' },
  { countrie: "Guadeloupe", code: 'gp' },
  { countrie: "Equatorial Guinea", code: 'gq' },
  { countrie: "Greece", code: 'gr' },
  { countrie: "South Georgia and the South Sandwich Islands", code: 'gs' },
  { countrie: "Guatemala", code: 'gt' },
  { countrie: "Guam", code: 'gu' },
  { countrie: "Guinea-Bissau", code: 'gw' },
  { countrie: "Guyana", code: 'gy' },
  { countrie: "Hong Kong", code: 'hk' },
  { countrie: "Heard Island and McDonald Islands", code: 'hm' },
  { countrie: "Honduras", code: 'hn' },
  { countrie: "Croatia", code: 'hr' },
  { countrie: "Haiti", code: 'ht' },
  { countrie: "Hungary", code: 'hu' },
  { countrie: "Indonesia", code: 'id' },
  { countrie: "Ireland", code: 'ie' },
  { countrie: "Israel", code: 'il' },
  { countrie: "Isle of Man", code: 'im' },
  { countrie: "India", code: 'in' },
  { countrie: "British Indian Ocean Territory", code: 'io' },
  { countrie: "Iraq", code: 'iq' },
  { countrie: "Iran", code: 'ir' },
  { countrie: "Iceland", code: 'is' },
  { countrie: "Italy", code: 'it' },
  { countrie: "Jersey", code: 'je' },
  { countrie: "Jamaica", code: 'jm' },
  { countrie: "Jordan", code: 'jo' },
  { countrie: "Japan", code: 'jp' },
  { countrie: "Kenya", code: 'ke' },
  { countrie: "Kyrgyzstan", code: 'kg' },
  { countrie: "Cambodia", code: 'kh' },
  { countrie: "Kiribati", code: 'ki' },
  { countrie: "Comoros", code: 'km' },
  { countrie: "Saint Kitts and Nevis", code: 'kn' },
  { countrie: "North Korea", code: 'kp' },
  { countrie: "South Korea", code: 'kr' },
  { countrie: "Kuwait", code: 'kw' },
  { countrie: "Cayman Islands", code: 'ky' },
  { countrie: "Kazakhstan", code: 'kz' },
  { countrie: "Laos", code: 'la' },
  { countrie: "Lebanon", code: 'lb' },
  { countrie: "Saint Lucia", code: 'lc' },
  { countrie: "Liechtenstein", code: 'li' },
  { countrie: "Sri Lanka", code: 'lk' },
  { countrie: "Liberia", code: 'lr' },
  { countrie: "Lesotho", code: 'ls' },
  { countrie: "Lithuania", code: 'lt' },
  { countrie: "Luxembourg", code: 'lu' },
  { countrie: "Latvia", code: 'lv' },
  { countrie: "Libya", code: 'ly' },
  { countrie: "Morocco", code: 'ma' },
  { countrie: "Monaco", code: 'mc' },
  { countrie: "Moldova", code: 'md' },
  { countrie: "Montenegro", code: 'me' },
  { countrie: "Saint Martin (French part)", code: 'mf' },
  { countrie: "Madagascar", code: 'mg' },
  { countrie: "Marshall Islands", code: 'mh' },
  { countrie: "North Macedonia", code: 'mk' },
  { countrie: "Mali", code: 'ml' },
  { countrie: "Myanmar", code: 'mm' },
  { countrie: "Mongolia", code: 'mn' },
  { countrie: "Macao", code: 'mo' },
  { countrie: "Northern Mariana Islands", code: 'mp' },
  { countrie: "Martinique", code: 'mq' },
  { countrie: "Mauritania", code: 'mr' },
  { countrie: "Montserrat", code: 'ms' },
  { countrie: "Malta", code: 'mt' },
  { countrie: "Mauritius", code: 'mu' },
  { countrie: "Maldives", code: 'mv' },
  { countrie: "Malawi", code: 'mw' },
  { countrie: "Mexico", code: 'mx' },
  { countrie: "Malaysia", code: 'my' },
  { countrie: "Mozambique", code: 'mz' },
  { countrie: "Namibia", code: 'na' },
  { countrie: "New Caledonia", code: 'nc' },
  { countrie: "Niger", code: 'ne' },
  { countrie: "Norfolk Island", code: 'nf' },
  { countrie: "Nigeria", code: 'ng' },
  { countrie: "Nicaragua", code: 'ni' },
  { countrie: "Netherlands", code: 'nl' },
  { countrie: "Norway", code: 'no' },
  { countrie: "Nepal", code: 'np' },
  { countrie: "Nauru", code: 'nr' },
  { countrie: "Niue", code: 'nu' },
  { countrie: "New Zealand", code: 'nz' },
  { countrie: "Oman", code: 'om' },
  { countrie: "Panama", code: 'pa' },
  { countrie: "Peru", code: 'pe' },
  { countrie: "French Polynesia", code: 'pf' },
  { countrie: "Papua New Guinea", code: 'pg' },
  { countrie: "Philippines", code: 'ph' },
  { countrie: "Pakistan", code: 'pk' },
  { countrie: "Poland", code: 'pl' },
  { countrie: "Saint Pierre and Miquelon", code: 'pm' },
  { countrie: "Pitcairn", code: 'pn' },
  { countrie: "Puerto Rico", code: 'pr' },
  { countrie: "Palestine, State of", code: 'ps' },
  { countrie: "Portugal", code: 'pt' },
  { countrie: "Palau", code: 'pw' },
  { countrie: "Paraguay", code: 'py' },
  { countrie: "Qatar", code: 'qa' },
  { countrie: "Réunion", code: 're' },
  { countrie: "Romania", code: 'ro' },
  { countrie: "Serbia", code: 'rs' },
  { countrie: "Russia", code: 'ru' },
  { countrie: "Rwanda", code: 'rw' },
  { countrie: "Saudi Arabia", code: 'sa' },
  { countrie: "Solomon Islands", code: 'sb' },
  { countrie: "Seychelles", code: 'sc' },
  { countrie: "Sudan", code: 'sd' },
  { countrie: "Sweden", code: 'se' },
  { countrie: "Singapore", code: 'sg' },
  { countrie: "Saint Helena, Ascension and Tristan da Cunha", code: 'sh' },
  { countrie: "Slovenia", code: 'si' },
  { countrie: "Svalbard and Jan Mayen", code: 'sj' },
  { countrie: "Slovakia", code: 'sk' },
  { countrie: "Sierra Leone", code: 'sl' },
  { countrie: "San Marino", code: 'sm' },
  { countrie: "Senegal", code: 'sn' },
  { countrie: "Somalia", code: 'so' },
  { countrie: "Suriname", code: 'sr' },
  { countrie: "South Sudan", code: 'ss' },
  { countrie: "Sao Tome and Principe", code: 'st' },
  { countrie: "El Salvador", code: 'sv' },
  { countrie: "Sint Maarten (Dutch part)", code: 'sx' },
  { countrie: "Syrian Arab Republic", code: 'sy' },
  { countrie: "Eswatini", code: 'sz' },
  { countrie: "Turks and Caicos Islands", code: 'tc' },
  { countrie: "Chad", code: 'td' },
  { countrie: "French Southern Territories", code: 'tf' },
  { countrie: "Togo", code: 'tg' },
  { countrie: "Thailand", code: 'th' },
  { countrie: "Tajikistan", code: 'tj' },
  { countrie: "Tokelau", code: 'tk' },
  { countrie: "Timor-Leste", code: 'tl' },
  { countrie: "Turkmenistan", code: 'tm' },
  { countrie: "Tunisia", code: 'tn' },
  { countrie: "Tonga", code: 'to' },
  { countrie: "Turkey", code: 'tr' },
  { countrie: "Trinidad and Tobago", code: 'tt' },
  { countrie: "Tuvalu", code: 'tv' },
  { countrie: "Taiwan", code: 'tw' },
  { countrie: "Tanzania", code: 'tz' },
  { countrie: "Ukraine", code: 'ua' },
  { countrie: "Uganda", code: 'ug' },
  { countrie: "United States Minor Outlying Islands", code: 'um' },
  { countrie: "United States", code: 'us' },
  { countrie: "Uruguay", code: 'uy' },
  { countrie: "Uzbekistan", code: 'uz' },
  { countrie: "Holy See", code: 'va' },
  { countrie: "Saint Vincent and the Grenadines", code: 'vc' },
  { countrie: "Venezuela", code: 've' },
  { countrie: "British Virgin Islands", code: 'vg' },
  { countrie: "U.S. Virgin Islands", code: 'vi' },
  { countrie: "Vietnam", code: 'vn' },
  { countrie: "Vanuatu", code: 'vu' },
  { countrie: "Wallis and Futuna", code: 'wf' },
  { countrie: "Samoa", code: 'ws' },
  { countrie: "Yemen", code: 'ye' },
  { countrie: "Mayotte", code: 'yt' },
  { countrie: "South Africa", code: 'za' },
  { countrie: "Zambia", code: 'zm' },
  { countrie: "Zimbabwe", code: 'zw' }


]
export const countries = [
  
  // {country:"Afghanistan", code:'af'},
  "Albania",
  "Algeria",
  // {country:"Andorra", code:'ad'}
  "Angola",
  // {country:"Antigua and Barbuda", code:'ag'},
  // "Argentina",
  // "Armenia",
  // "Australia",
  // "Austria",
  // "Azerbaijan",
  // "Bahamas",
  // "Bahrain",
  // "Bangladesh",
  // "Barbados",
  // "Belarus",
  // "Belgium",
  // "Belize",
  // "Benin",
  // "Bhutan",
  // "Bolivia",
  // "Bosnia and Herzegovina",
  // "Botswana",
  // "Brazil",
  // "Brunei",
  // "Bulgaria",
  // "Burkina Faso",
  // "Burundi",
  // "Côte d'Ivoire",
  // "Cabo Verde",
  // "Cambodia",
  // "Cameroon",
  // "Canada",
  // "Central African Republic",
  // "Chad",
  // "Chile",
  // "China",
  // "Colombia",
  // "Comoros",
  // "Congo (Congo-Brazzaville)",
  // "Costa Rica",
  // "Croatia",
  // "Cuba",
  // "Cyprus",
  // "Czechia (Czech Republic)",
  // "Democratic Republic of the Congo",
  // "Denmark",
  // "Djibouti",
  // "Dominica",
  // "Dominican Republic",
  // "Ecuador",
  // "Egypt",
  // "El Salvador",
  // "Equatorial Guinea",
  // "Eritrea",
  // "Estonia",
  // "Ethiopia",
  // "Fiji",
  // "Finland",
  // "France",
  // "Gabon",
  // "Gambia",
  // "Georgia",
  // "Germany",
  // "Ghana",
  // "Greece",
  // "Grenada",
  // "Guatemala",
  // "Guinea",
  // "Guinea-Bissau",
  // "Guyana",
  // "Haiti",
  // "Holy See",
  // "Honduras",
  // "Hungary",
  // "Iceland",
  // "India",
  // "Indonesia",
  // "Iran",
  // "Iraq",
  // "Ireland",
  // "Israel",
  // "Italy",
  // "Jamaica",
  // "Japan",
  // "Jordan",
  // "Kazakhstan",
  // "Kenya",
  // "Kiribati",
  // "Kuwait",
  // "Kyrgyzstan",
  // "Laos",
  // "Latvia",
  // "Lebanon",
  // "Lesotho",
  // "Liberia",
  // "Libya",
  // "Liechtenstein",
  // "Lithuania",
  // "Luxembourg",
  // "Madagascar",
  // "Malawi",
  // "Malaysia",
  // "Maldives",
  // "Mali",
  // "Malta",
  // "Marshall Islands",
  // "Mauritania",
  // "Mauritius",
  // "Mexico",
  // "Micronesia",
  // "Moldova",
  // "Monaco",
  // "Mongolia",
  // "Montenegro",
  // "Morocco",
  // "Mozambique",
  // "Myanmar (formerly Burma)",
  // "Namibia",
  // "Nauru",
  // "Nepal",
  // "Netherlands",
  // "New Zealand",
  // "Nicaragua",
  // "Niger",
  // "Nigeria",
  // "North Korea",
  // "North Macedonia (formerly Macedonia)",
  // "Norway",
  // "Oman",
  // "Pakistan",
  // "Palau",
  // "Palestine State",
  // "Panama",
  // "Papua New Guinea",
  // "Paraguay",
  // "Peru",
  // "Philippines",
  // "Poland",
  // "Portugal",
  // "Qatar",
  // "Romania",
  // "Russia",
  // "Rwanda",
  // "Saint Kitts and Nevis",
  // "Saint Lucia",
  // "Saint Vincent and the Grenadines",
  // "Samoa",
  // "San Marino",
  // "Sao Tome and Principe",
  // "Saudi Arabia",
  // "Senegal",
  // "Serbia",
  // "Seychelles",
  // "Sierra Leone",
  // "Singapore",
  // "Slovakia",
  // "Slovenia",
  // "Solomon Islands",
  // "Somalia",
  // "South Africa",
  // "South Korea",
  // "South Sudan",
  // "Spain",
  // "Sri Lanka",
  // "Sudan",
  // "Suriname",
  // "Sweden",
  // "Switzerland",
  // "Syria",
  // "Tajikistan",
  // "Tanzania",
  // "Thailand",
  // "Timor-Leste",
  // "Togo",
  // "Tonga",
  // "Trinidad and Tobago",
  // "Tunisia",
  // "Turkey",
  // "Turkmenistan",
  // "Tuvalu",
  // "Uganda",
  // "Ukraine",
  // {country:"United Arab Emirates", code:'ae'},
  // "United Kingdom",
  // "United States of America",
  // "Uruguay",
  // "Uzbekistan",
  // "Vanuatu",
  // "Venezuela",
  // "Vietnam",
  // "Yemen",
  // "Zambia",
  // "Zimbabwe"
];


export const dataTypes = ["Import", "Export"]

export const searchTypes = [
  {value:"Exporter", disable: false},
  {value:"Importer", disable: false},
  {value:"HS Code", disable: false},
  {value:"Product", disable: false},
  {value:"Port of Loading", disable: true},
  {value:"Origin Country", disable: true},
  {value:"Mode of Transport", disable: true},
  {value:"Buyer", disable: true},
  {value:"Supplier", disable: true},
]

export const importGraphData = {
  labels: [
    "jun 2019",
    "jul 2019",
    "aug 2019",
    "sep 2019",
    "oct 2019",
    "nov 2019",
    "dec 2019",
    "jan 2020",
    "feb 2020",
    "mar 2020",
    "apr 2020",
    "may 2020",
  ],
  datasets: [
    {
      label: "",
      fill: false,
      lineTension: 0,
      backgroundColor: "#fff",
      borderColor: "#fff",
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#fff",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [34, 61, 71, 55, 50, 65, 85, 68, 28, 34, 24, 44],
    },
  ],
}

export const importGraphLineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  onClick: (e: any, element: string | any[]) => {
    if (element.length > 0) {
      let ind = element[0]._index
      alert(ind)
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "white",
        },
        scaleLabel: {
          display: true,
          labelString:
            "Values (in Million USD) based on Period from June 2019 to May 2020",
          fontColor: "white",

          fontSize: 18,
          fontWeight: "bold",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },

        ticks: {
          fontColor: "white",
          min: 0,
          max: 100,
          stepSize: 50,
          beginAtZero: true,

          userCallback(value: {
            toString: () => any
            split: (arg0: RegExp) => any
            join: (arg0: string) => any
          }) {
            value = value.toString()
            value = value.split(/(?=(?:...)*$)/)
            value = value.join(".")
            return `Rp.${value}`
          },
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: true,
  },
}

export const importColumnData = [
  "Chapter",
  "Chapter Description",
  "Previous Month Jul, 2020 ( US$ MM )",
  "Current Month Aug, 2020 ( US$ MM )",
  "Last Year 2021 ( US$ MM )",
  "Current Year 2022 ( US$ MM)",
  "Total Share Value Last 12 Months",
]

export const importTableData = [
  {
    chapter: "Chapter 01",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 02",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 03",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 04",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 05",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 06",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 07",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
]

const commonStyles = {
  customStyles: { valUsd: "text-center", valPercentage: "text-center" },
}

export const importTableConfig = {
  columns: ["Importers", "Value (%)", "Value (USD million)"],
  rows: [
    {
      company: "INDIA KAWASAKI MOTORS PVT. LTD.",
      valPercentage: "7",
      valUsd: "4",
      ...commonStyles,
    },
    {
      company: "PALL INDIA PVT. LTD",
      valPercentage: "6",
      valUsd: "3",
      ...commonStyles,
    },
    {
      company: "H-D MOTOR COMPANY INDIA PRIVATE LIMITED",
      valPercentage: "9",
      valUsd: "5",
      ...commonStyles,
    },
    {
      company: "ATLAS COPCO (INDIA) LIMITED",
      valPercentage: "5",
      valUsd: "2",
      ...commonStyles,
    },
    {
      company: "SIEMENS LIMITED",
      valPercentage: "4",
      valUsd: "2",
      ...commonStyles,
    },
    {
      company: "SEW EURODRIVE INDIA PVT. LTD.",
      valPercentage: "2",
      valUsd: "1",
      ...commonStyles,
    },
    {
      company: "ATLANTIC LUBRICANTS & SPECIALITIES PVT. LTD.",
      valPercentage: "5",
      valUsd: "3",
      ...commonStyles,
    },
    {
      company: "MARVEL GLOVES INDUSTRIES",
      valPercentage: "2",
      valUsd: "1",
      ...commonStyles,
    },

    {
      company: "SKODA AUTO INDIA PRIVATE LIMITED",
      valPercentage: "4",
      valUsd: "2",
      ...commonStyles,
    },
    {
      company: "SEW EURODRIVE INDIA PVT. LTD.",
      valPercentage: "3",
      valUsd: "1",
      ...commonStyles,
    },
  ],
}

export const importAccordionConfig = [
  {
    des: "India import data covers detailed information on shipments that enter into the country. With company names, the data contains complete details of every shipment record.",
    title: "What is India import data?",
    value: "import-data",
  },
  {
    des: "India’s top 10 imports recorded in (CURRENT YEAR) were Commodity1, Commodity2, Commodity3, Commodity4, Commodity5.",
    title: "What are the major imports of India?",
    value: "commodity",
  },
  {
    des: "India’s major import partners in (CURRENT YEAR) were Country1, Country2, Country3, Country4, Country5.",
    title: "Which are India’s top 10 import partners?",
    value: "country",
  },
  {
    des: "The top 10 Indian ports that handled the highest number of import shipments in (CURRENT YEAR) were Port1, Port2, Port3, Port4, Port5.",
    title:
      "Which are the top Indian ports where the highest number of shipments arrive?",
    value: "ports",
  },
  {
    des: "Our India import data provides detailed shipment information of Indian importers. India’s top 10 importers by their values recorded in (CURRENT YEAR) were Company1, Company2, Company3, Company4, Company5.",
    title: "Which are the top Indian importers by their import turnover?",
    value: "shipment",
  },
]

export const portsImportTableConfig = {
  columns: ["Indian Import Ports", "Value (%)", "Value (USD million)"],
  rows: [
    {
      location: "Agra ICD Import Data	",
      valPercentage: "2.2%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad Air Import Data	",
      valPercentage: "3.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad ICD Import Data	",
      valPercentage: "5.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC Import Data	",
      valPercentage: "1.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC Import Data	",
      valPercentage: "2.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ankaleshwar ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ballabgarh ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Bangalore Air Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
  ],
}

export const portsBarConfig = {
  data: [
    {
      value: 2,
      city: "Agra",
      color: "#43A19F",
    },
    {
      value: 5,
      city: "Ahemdabad",
      color: "#A47ABF",
    },
    {
      value: 8,
      city: "Bhusawal",
      color: "#F22F78",
    },
    {
      value: 7,
      city: "Calicut",
      color: "#A47ABF",
    },
    {
      value: 3,
      city: "Amritsar",
      color: "#F22F78",
    },
    {
      value: 6,
      city: "Ankaleshwar",
      color: "#FE9624",
    },
    {
      value: 8,
      city: "CFS Nasik",
      color: "#F23736",
    },
    {
      value: 6,
      city: "Chakeri Kanpur",
      color: "#315BF2",
    },
    {
      value: 8,
      city: "Bangalore",
      color: "#ED713F",
    },
    {
      value: 2,
      color: "#ADA534",
      city: "Ballabgarh",
    },
  ],
  background: {
    visible: false,
  },
  axes: [
    {
      type: "category",
      position: "bottom",

      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
    },
    {
      type: "number",
      position: "left",

      tick: {
        interval: 1,
      },
      gridStyle: [
        {
          stroke: "#D0CBCB",
        },
        {
          stroke: "#D0CBCB",
        },
      ],
    },
  ],
  series: [
    {
      type: "column",
      xKey: "city",
      yKey: "value",
      formatter: (params: {
        datum: { [x: string]: string }
        xKey: string | number
        highlighted: any
        fill: any
      }) => {
        return {
          fill: params.datum["color"],
        }
      },
      tooltip: {
        renderer: (params: any) => {
          const city = params.datum["city"]
          const value = params.datum["value"]
          return {
            content: `
              <div style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
              <div><b>${city}:</b> ${value}</div>
              </div>
            `,
          }
        },
      },
    },
  ],
}

export const partnersTableConfig = {
  columns: ["Country", "Value (%)", "Value (USD million)"],
  rows: [
    {
      country: "India",
      valPercentage: "2.2%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "China",
      valPercentage: "3.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Indonesia",
      valPercentage: "5.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Australia",
      valPercentage: "1.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "UK",
      valPercentage: "2.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "United States",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "India",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "Japanese",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "China",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
  ],
}

export const animalStaticsConfig = {
  title: { text: "Value USD Million", color: "#fff" },
  data: [
    {
      value: 25,
      city: 0,
      color: "#43A19F",
      animal: "Horse",
    },
    {
      value: 18,
      city: 1,
      color: "#A47ABF",
      animal: "Bovine",
    },
    {
      value: 15,
      city: 2,
      color: "#F22F78",
      animal: "Swine",
    },
    {
      value: 10,
      city: 3,
      color: "#A47ABF",
      animal: "Sheep",
    },
    {
      value: 9,
      city: 4,
      color: "#F22F78",
      animal: "Geese",
    },
    {
      value: 8,
      city: 5,
      color: "#FE9624",
      animal: "Ducks",
    },
    {
      value: 6,
      city: 6,
      color: "#F23736",
      animal: "Goats",
    },
    {
      value: 4,
      city: 7,
      color: "#315BF2",
      animal: "Asses",
    },
    {
      value: 3,
      city: 8,
      color: "#ED713F",
      animal: "Gallus",
    },
    {
      value: 2,
      color: "#ADA534",
      animal: "Horse",
      city: 9,
    },
  ],
  background: {
    visible: false,
  },
  axes: [
    {
      type: "category",
      position: "bottom",

      label: {
        color: "#fff",
      },
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
    },
    {
      type: "number",
      position: "left",
      title: {
        text: "Value USD Million",
        color: "#fff",
      },
      tick: {
        interval: 10,
      },
      gridStyle: [
        {
          stroke: "white",
        },
        {
          stroke: "white",
        },
      ],
      label: {
        color: "#fff",
        formatter: (params: any) => {
          return params.value + "$"
        },
      },
    },
  ],
  series: [
    {
      type: "column",
      xKey: "city",
      yKey: "value",
      label: {
        enabled: true,
        color: "white",
        placement: "outside",
        formatter: function labelFormatter({ value }: { value: string }) {
          return `${value}%`
        },
      },
      showInLegend: false,
      formatter: (params: {
        datum: { [x: string]: string }
        xKey: string | number
        highlighted: any
        fill: any
      }) => {
        return {
          fill: params.datum["color"],
        }
      },

      tooltip: {
        renderer: (params: any) => {
          const animal = params.datum["animal"]
          const value = params.datum["value"]
          return {
            content: `
              <div style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
              <div><b>${animal}:</b> ${value}%</div>
              </div>
            `,
          }
        },
      },
    },
  ],
}

export const importCardsConfig = [
  {
    id: "1",
    company: "Arcor SAIC",
    location: "Botswana",
    type: "Importer",
    des: "Cocoa butter. butter, fat and oil cocoa. cocoa and cocoa preparations.",
    quantity: "6392 Shipment match Oil",
    href: "#search-btn",
  },
  {
    id: "2",
    company: "PPNO-BX-0523499KAZI RIAZ KHAN",
    location: "Bangladesh",
    type: "Importer",
    des: "Virgin olivve oil wrapped/canned upto 2.5kg olive oil",
    quantity: "6392 Shipment match Oil",
    href: "#search-btn",
  },
  {
    id: "3",
    company: "K K G APPORT VENTURES",
    location: "Ghana",
    type: "Importer",
    des: "One(1) tank ctg.30000 ltrs. of waste oil.attached is a permit from epa no.",
    quantity: "6392 Shipment match Oil",
    href: "#search-btn",
  },
  {
    id: "4",
    company: "Arcor SAIC",
    location: "Botswana",
    type: "Importer",
    des: "Cocoa butter. butter, fat and oil cocoa. cocoa and cocoa preparations.",
    quantity: "6392 Shipment match Oil",
    href: "#search-btn",
  },
  {
    id: "5",
    company: "PPNO-BX-0523499KAZI RIAZ KHAN",
    location: "Bangladesh",
    type: "Importer",
    des: "Virgin olivve oil wrapped/canned upto 2.5kg olive oil",
    quantity: "6392 Shipment match Oil",
    href: "#search-btn",
  },
  {
    id: "6",
    company: "K K G APPORT VENTURES",
    location: "Ghana",
    type: "Importer",
    des: "One(1) tank ctg.30000 ltrs. of waste oil.attached is a permit from epa no.",
    quantity: "6392 Shipment match Oil",
    href: "#search-btn",
  },
]

export const searchTabConfig = [
  { label: "Trade Data", value: "trade", icon: false },
  { label: "Importers", value: "importer", icon: false },
  { label: "Exporters", value: "exporter", icon: false },
  { label: "Visualize Data", value: "visualize", icon: "*" },
]

export const demoFieldsConfig = [
  {
    name: "firstName",
    label: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
  {
    name: "workEmailId",
    label: "Work Email Id",
    type: "email",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
  },
  { name: "message", label: "Message", fullWidth: true },
]

export const scheduleTabConfig = [
  { label: "Request a Demo", value: "demo" },
  { label: "Schedule a Meeting", value: "meeting" },
]

export const topPerformersConfig = [
  {
    heading: "Top 5 Importer",
    subHeading: "US Despatch Agency Miami Corp (fl)",
    performers: [
      {
        label: "INDIA KAWASAKI MOTORS PVT. LTD.",
        href: "/import-profile",
      },
      {
        label: "PALL INDIA PVT. LTD",
        href: "/import-profile",
      },
      {
        label: "ATLAS COPCO (INDIA) LIMITED",
        href: "/import-profile",
      },
      {
        label: "SIEMENS LIMITED",
        href: "/import-profile",
      },
      {
        label: "SEW EURODRIVE INDIA PVT. LTD.",
        href: "/import-profile",
      },
    ],
  },
  {
    heading: "Top 5 HS Code Products",
    performers: [
      {
        label: "820559 - Handtools Nesoi, And Parts Thereof, of Base Metal",
        href: "/import-profile",
      },
      {
        label: "854370 - Elec Mach And App, Having Indiv Functions, Nesoi",
        href: "/import-profile",
      },
      {
        label: "981000 - Imports of Religious, Education, Scient Etc Inst",
        href: "/import-profile",
      },
      {
        label: "854370 - Elec Mach And App, Having Indiv Functions, Nesoi",
        href: "/import-profile",
      },
      {
        label: "981000 - Imports of Religious, Education, Scient Etc Inst",
        href: "/import-profile",
      },
    ],
  },
  {
    heading: "Top 5 Carriers",
    performers: [
      {
        label: "Cma-cgm",
        href: "",
      },
      {
        label: "Maersk Line",
        href: "",
      },
      {
        label: "Msc-mediterranean Company",
        href: "",
      },
      {
        label: "Cma-cgm",
        href: "",
      },
      {
        label: "Maersk Line",
        href: "",
      },
    ],
  },
  {
    heading: "Top 5 Ports of Departure",
    performers: [
      {
        label: "Agra ICD Import Data",
        href: "",
      },
      {
        label: "Ahemdabad Air Import Data",
        href: "",
      },
      {
        label: "Ahemdabad ICD Import Data",
        href: "",
      },
      {
        label: "Amritsar ACC Import Data",
        href: "",
      },
      {
        label: "Amritsar ACC Import Data",
        href: "",
      },
    ],
  },
]

export const indiaUSAImportFaq = [
  {
    des: "India imported goods worth (VALUE) in (CURRENT YEAR). In (PREVIOUS YEAR), India’s imports from the US totalled (VALUE).",
    title: "What is India's total value of goods imported from US?",
    value: "import-data",
  },
  {
    des: "India’s top 10 imports recorded in (CURRENT YEAR) were Commodity1, Commodity2, Commodity3, Commodity4, Commodity5.",
    title: "What goods India imports from US?",
    value: "commodity",
  },
  {
    des: "The top Indian ports where maximum shipments arrive from the US in (CURRENT YEAR) were Port1, Port2, Port3, Port4, Port5.",
    title:
      "Which are the top Indian ports where the highest number of shipments arrive from the US?",
    value: "country",
  },
  {
    des: "The top Indian companies imported goods from the US in (CURRENT YEAR) were Company1, Company2, Company3, Company4, Company5.",
    title: "Which are the top Indian companies who import from the US?",
    value: "ports",
  },
  {
    des: "Our India import data provides detailed shipment information of Indian importers. India’s top 10 importers by their values recorded in (CURRENT YEAR) were Company1, Company2, Company3, Company4, Company5.",
    title: "Who are the top US suppliers to Indian companies?",
    value: "shipment",
  },
]

export const usaMonthlyTrendChartConfig = {
  autoSize: true,
  title: { text: "Value USD Million", color: "#000" },
  theme: {
    palette: {
      fills: ["#42A09F"],
      strokes: ["#42A09F"],
    },
  },
  data: [
    {
      month: "1 Jan",
      quantity: 610,
    },
    {
      month: "1 Feb",
      quantity: 610,
    },
    {
      month: "1 Mar",
      quantity: 680,
    },
    {
      month: "1 Apr",
      quantity: 690,
    },
    {
      month: "1 May>",
      quantity: 700,
    },
    {
      month: "1 Jun",
      quantity: 710,
    },
    {
      month: "1 Jul",
      quantity: 658,
    },
    {
      month: "1 Aug",
      quantity: 734,
    },
    {
      month: "1 Sep",
      quantity: 963,
    },
    {
      month: "1 Oct",
      quantity: 847,
    },
    {
      month: "1 Nov",
      quantity: 853,
    },
    {
      month: "1 Dec",
      quantity: 869,
    },
  ],

  background: {
    visible: false,
  },

  axes: [
    {
      type: "category",
      position: "bottom",

      label: {
        color: "#000",
      },
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
    },
    {
      type: "number",
      position: "left",
      tick: {
        interval: 100,
      },
      gridStyle: [
        {
          stroke: "#D0CACA",
        },
        {
          stroke: "#D0CACA",
        },
      ],
      label: {
        color: "#000",
      },
    },
  ],

  series: [
    {
      type: "area",
      xKey: "month",
      yKey: "quantity",
      stroke: "#42A09F",
      marker: {
        size: 8,
        fill: "#42A09F",
        stroke: "#42A09F",
      },
    },
  ],
}

export const agraIcdPortFaq = [
  {
    title: "What is the total import traffic of Agra ICD Port?",
    des: "Agra ICD Port handled import traffic of goods worth (VALUE) in (CURRENT YEAR). In (PREVUOUS YEAR), this port handled import traffic of commodities worth (VALUE).",
    value: "import-data",
  },
  {
    des: "Agra ICD Port handled import shipments in (CURRENT YEAR) of the major Commodities: Commodity1, Commodity2, Commodity3, Commodity4, Commodity5 .",
    title: "Which commodities are majorly imported through Agra ICD Port?",
    value: "commodity",
  },
  {
    des: "The highest number of shipments arrived at Agra ICD Port from COUNTRY1, COUNTRY2, COUNTRY3, COUNTRY4, COUNTRY5 .",
    title:
      "From which countries, the highest number of shipments arrive at Agra ICD Port?",
    value: "country",
  },
  {
    des: "The top importers that have the highest traffic at Agra ICD Port in (CURRENT YEAR) were Company1, Company2, Company3, Company4, Company5 .",
    title:
      "Which are the top importers that have the highest traffic at Agra ICD Port?",
    value: "ports",
  },
  {
    des: " Want to know shipments of which foreign suppliers arrive at Agra ICD Port? The top foreign exporters that has the highest traffic at Agra ICD Port in (CURRENT YEAR) were Company1, Company2, Company3, Company4, Company5 .",
    title: "Shipments of which foreign suppliers arrive at Agra ICD Port?",
    value: "shipment",
  },
]

export const overviewConfig = [
  {
    icon: "/website.svg",
    title: "Website",
    des: "www.export",
    blurPart: "genius.in",
  },
  {
    icon: "/headquarter.svg",
    title: "Headquarters",
    des: "Mumbai, India",
  },
  {
    icon: "/phone.svg",
    title: "Phone Number",
    des: "",
    blurPart: "www.exportgenius.in",
  },
  {
    icon: "/import-rank.svg",
    title: "Import Rank",
    des: "23",
  },
  {
    icon: "/email.svg",
    title: "Email",
    des: "",
    blurPart: "www.exportgenius.in",
  },
  {
    icon: "/export-rank.svg",
    title: "Export Rank",
    des: "16",
  },
  {
    icon: "/building.svg",
    title: "Industry",
    des: "Pharma",
    blurPart: "",
  },
  {
    icon: "/import-turnover.svg",
    title: "Import Turnover",
    des: "$45.23M",
  },
  {
    icon: "/date.svg",
    title: "Founded Year",
    des: "",
    blurPart: "www.exportgenius.in",
  },
  {
    icon: "/export-turnover.svg",
    title: "Export Turnover",
    des: "$65.23M",
  },
  {
    icon: "/employee.svg",
    title: "No. of Employee's",
    des: "",
    blurPart: "www.exportgenius.in",
  },
  {
    icon: "/import-shipment.svg",
    title: "Import Shipment",
    des: "58748",
  },
  {
    icon: "/revenue.svg",
    title: "Annual Revenue",
    des: "",
    blurPart: "www.exportgenius.in",
  },
  
  {
    icon: "/export-shipment.svg",
    title: "Export Shipment",
    des: "5846",
  },
  {
    icon: "/building.svg",
    title: "Line Of Business",
    des: "",
    blurPart: "www.exportgenius.in",
  },
]

export const companyCommodityBarConfig = {
  title: { text: "Import Value (USD %)", color: "#000" },

  data: [
    {
      value: 7.1,
      commodity: "Asses",
      color: "#43A19F",
    },
    {
      value: 6.7,
      commodity: "Meat",
      color: "#7B43A0",
    },
    {
      value: 5.0,
      commodity: "Horses",
      color: "#F32F79",
    },
    {
      value: 2.5,
      commodity: "Asses-1",
      color: "#FF9625",
    },
    {
      value: 2.3,
      commodity: "Meat-1",
      color: "#54D75F",
    },
  ],
  background: {
    visible: false,
  },
  axes: [
    {
      type: "category",
      position: "bottom",

      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
      label: {
        color: "#FD9852",
      },
    },
    {
      type: "number",
      position: "left",

      tick: {
        interval: 1,
      },
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
      label: {
        color: "#FD9852",
        formatter: (params: any) => {
          return params.value + "$"
        },
      },
    },
  ],
  series: [
    {
      type: "column",
      xKey: "commodity",
      yKey: "value",
      formatter: (params: any) => {
        return {
          fill: params.datum["color"],
        }
      },
      tooltip: {
        renderer: (params: any) => {
          const city = params.datum["commodity"]
          const value = params.datum["value"]
          return {
            content: `
              <div style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
              <div><b>${city}:</b> ${value}$</div>
              </div>
            `,
          }
        },
      },
    },
  ],
}

export const companyFaq = [
  {
    title: "Which companies export goods to ABCD Private Limited?",
    des: "ABCD Private Limited imported goods in (CURRENT YEAR) majorly from Company1, Company2, Company3, Company4, Company5.",
    value: "import-data",
  },
  {
    des: "ABCD Private Limited’s top import commodities in (CURRENT YEAR) were Commodity1, Commodity2, Commodity3, Commodity4, Commodity5 .",
    title: "What ABCD Private Limited imports from the world?",
    value: "commodity",
  },
  {
    des: "COUNTRY1 was the biggest supplier of goods to ABCD Private Limited in (CURRENT YEAR). Other major countries were Country1, Country2, Country3, Country4, Country5, Country6, Country7, Country8, Country9, Country10 .",
    title:
      "Which are the top 10 countries from where ABCD Private Limited imports goods?",
    value: "country",
  },
  {
    des: "ABCD Private Limited imported goods worth (VALUE) in (CURRENT YEAR). In (PREVIOUS YEAR), imports of ABCD Private Limited totalled (VALUE).",
    title: "What is the import turnover of ABCD Private Limited?",
    value: "ports",
  },
  {
    des: "PORT1 handled the maximum import traffic of ABCD Private Limited in (CURRENT YEAR).",
    title: "Which port handles maximum traffic of ABCD Private Limited?",
    value: "shipment",
  },
]

function formatter(params: any) {
  console.log(params)

  const validationOn = params.datum[params.yKey]

  return {
    shape: "triangle",
  }
}

export const companyMonthlyImportChartConfig = {
  autoSize: true,
  title: { text: "Value USD Million", color: "#000" },

  data: [
    {
      month: "Jan",
      quantity: 68,
    },
    {
      month: "Feb",
      quantity: 28,
    },
    {
      month: "Mar",
      quantity: 34,
    },
    {
      month: "Apr",
      quantity: 24,
    },
    {
      month: "May",
      quantity: 44,
    },
    {
      month: "Jun",
      quantity: 60,
    },
    {
      month: "Jul",
      quantity: 38,
    },
    {
      month: "Aug",
      quantity: 30,
    },
    {
      month: "Sep",
      quantity: 54,
    },
    {
      month: "Oct",
      quantity: 34,
    },
    {
      month: "Nov",
      quantity: 20,
    },
    {
      month: "Dec",
      quantity: 40,
    },
  ],

  background: {
    visible: false,
  },

  axes: [
    {
      type: "category",
      position: "bottom",
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
      label: {
        color: "#FD9852",
      },
    },
    {
      type: "number",
      position: "left",
      tick: {
        interval: 20,
      },
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
      label: {
        color: "#FD9852",
      },
    },
  ],

  series: [
    {
      xKey: "month",
      yKey: "quantity",
      stroke: "#42A09F",
      marker: {
        shape: "triangle",
        stroke: "#6B8F24",
        strokeWidth: 3,
        fill: "#6B8F24",

        ...formatter,
      },
    },
  ],
} as AgAreaSeriesOptions

export const chapterViewConfig = {
  title: { text: "Import Value (USD %)", color: "#000" },
  autoSize: true,

  data: [
    {
      value: 16,
      commodity: 134,
      color: "#43A19F",
    },
    {
      value: 15,
      commodity: 103,
      color: "#7B43A0",
    },
    {
      value: 14,
      commodity: 52,
      color: "#F32F79",
    },
    {
      value: 13,
      commodity: 29,
      color: "#FF9625",
    },
    {
      value: 12,
      commodity: 28,
      color: "#54D75F",
    },
    {
      value: 11,
      commodity: 134,
      color: "#43A19F",
    },
    {
      value: 10,
      commodity: 103,
      color: "#7B43A0",
    },
    {
      value: 9,
      commodity: 52,
      color: "#F32F79",
    },
    {
      value: 8,
      commodity: 29,
      color: "#FF9625",
    },
    {
      value: 7,
      commodity: 28,
      color: "#54D75F",
    },

    {
      value: 6,
      commodity: 28,
      color: "#54D75F",
    },
    {
      value: 5,
      commodity: 28,
      color: "#54D75F",
    },
    {
      value: 4,
      commodity: 28,
      color: "#54D75F",
    },
    {
      value: 3,
      commodity: 28,
      color: "#54D75F",
    },
    {
      value: 2,
      commodity: 28,
      color: "#54D75F",
    },
    {
      value: 1,
      commodity: 28,
      color: "#54D75F",
    },
  ],
  background: {
    visible: false,
  },
  axes: [
    {
      type: "number",
      position: "top",
      tick: {
        interval: 10,
      },
      gridStyle: [
        {
          stroke: "#D0CBCB",
        },
        {
          stroke: "#D0CBCB",
        },
      ],
    },
    {
      type: "number",
      position: "left",
      tick: {
        interval: 1,
      },
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
      label: {
        formatter: (params: any) => {
          return "Chapter" + params.value
        },
      },
    },
  ],
  series: [
    {
      type: "bar",
      yKey: "commodity",
      xKey: "value",
      fill: "#034C65",

      tooltip: {
        renderer: (params: any) => {
          const city = params.datum["commodity"]
          const value = params.datum["value"]
          return {
            content: `
              <div style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
              <div><b>${city}:</b> ${value}$</div>
              </div>
            `,
          }
        },
      },
    },
  ],
} as AgAreaSeriesOptions

export const majorImportsConfig = {
  columns: ["Indian Import Ports", "Value (%)", "Value (USD million)"],
  rows: [
    {
      location: "Agra ICD",
      valPercentage: "2",
      valUsd: "1",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad Air",
      valPercentage: "6",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad ICD",
      valPercentage: "9",
      valUsd: "6",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC	",
      valPercentage: "3",
      valUsd: "1",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC	",
      valPercentage: "9",
      valUsd: "6",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ankaleshwar ICD",
      valPercentage: "4",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ballabgarh ICD",
      valPercentage: "7",
      valUsd: "3",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bangalore Air",
      valPercentage: "2",
      valUsd: "1",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bangalore Air",
      valPercentage: "3",
      valUsd: "1",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bangalore ICD",
      valPercentage: "6",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bhusawal ICD",
      valPercentage: "9",
      valUsd: "6",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Calicut Air",
      valPercentage: "4",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "CFS Nasik ICD",
      valPercentage: "4",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Chakeri Kanpur ICD",
      valPercentage: "6",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },

    {
      location: "Agra ICD",
      valPercentage: "9",
      valUsd: "6",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad Air",
      valPercentage: "4",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad ICD",
      valPercentage: "2",
      valUsd: "1",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC	",
      valPercentage: "5",
      valUsd: "3",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC	",
      valPercentage: "7",
      valUsd: "4",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ankaleshwar ICD",
      valPercentage: "9",
      valUsd: "3",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ballabgarh ICD",
      valPercentage: "5",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bangalore Air",
      valPercentage: "5",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bangalore Air",
      valPercentage: "6",
      valUsd: "3",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bangalore ICD",
      valPercentage: "5",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Bhusawal ICD",
      valPercentage: "6",
      valUsd: "3",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Calicut Air",
      valPercentage: "9",
      valUsd: "3",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "CFS Nasik ICD",
      valPercentage: "3",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Japan",
      valPercentage: "1",
      valUsd: "3",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
  ],
}
