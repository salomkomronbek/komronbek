currencies = [
    'UZS',
    "USD",
    "EUR",
    "TRY",
    "KZT",
    "EGP",
]


// let ={
//     "result":"success",
//     "documentation":"https://www.exchangerate-api.com/docs",
//     "terms_of_use":"https://www.exchangerate-api.com/terms",
//     "time_last_update_unix":1698278401,
//     "time_last_update_utc":"Thu, 26 Oct 2023 00:00:01 +0000",
//     "time_next_update_unix":1698364801,
//     "time_next_update_utc":"Fri, 27 Oct 2023 00:00:01 +0000",
//     "base_code":"USD",
//     "conversion_rates":{
//      "USD":1,
//      "AED":3.6725,
//      "AFN":74.6632,
//      "ALL":99.7856,
//      "AMD":401.5324,
//      "ANG":1.7900,
//      "AOA":831.1767,
//      "ARS":350.0200,
//      "AUD":1.5835,
//      "AWG":1.7900,
//      "AZN":1.6989,
//      "BAM":1.8498,
//      "BBD":2.0000,
//      "BDT":110.2259,
//      "BGN":1.8498,
//      "BHD":0.3760,
//      "BIF":2830.8812,
//      "BMD":1.0000,
//      "BND":1.3708,
//      "BOB":6.9132,
//      "BRL":4.9953,
//      "BSD":1.0000,
//      "BTN":83.1602,
//      "BWP":13.7542,
//      "BYN":3.2763,
//      "BZD":2.0000,
//      "CAD":1.3786,
//      "CDF":2536.5571,
//      "CHF":0.8962,
//      "CLP":926.9550,
//      "CNY":7.3217,
//      "COP":4214.7589,
//      "CRC":530.9642,
//      "CUP":24.0000,
//      "CVE":104.2893,
//      "CZK":23.3609,
//      "DJF":177.7210,
//      "DKK":7.0592,
//      "DOP":56.7940,
//      "DZD":136.8048,
//      "EGP":30.9011,
//      "ERN":15.0000,
//      "ETB":55.8155,
//      "EUR":0.9458,
//      "FJD":2.2781,
//      "FKP":0.8252,
//      "FOK":7.0561,
//      "GBP":0.8253,
//      "GEL":2.7026,
//      "GGP":0.8252,
//      "GHS":11.9092,
//      "GIP":0.8252,
//      "GMD":65.2573,
//      "GNF":8582.2217,
//      "GTQ":7.8315,
//      "GYD":208.9167,
//      "HKD":7.8223,
//      "HNL":24.6743,
//      "HRK":7.1262,
//      "HTG":133.2376,
//      "HUF":364.0707,
//      "IDR":15870.2373,
//      "ILS":4.0628,
//      "IMP":0.8252,
//      "INR":83.1602,
//      "IQD":1307.9466,
//      "IRR":41883.0246,
//      "ISK":139.0782,
//      "JEP":0.8252,
//      "JMD":154.9685,
//      "JOD":0.7090,
//      "JPY":150.0407,
//      "KES":150.0428,
//      "KGS":89.2753,
//      "KHR":4127.2291,
//      "KID":1.5826,
//      "KMF":465.3060,
//      "KRW":1350.3071,
//      "KWD":0.3091,
//      "KYD":0.8333,
//      "KZT":476.5823,
//      "LAK":20689.4922,
//      "LBP":15000.0000,
//      "LKR":326.1898,
//      "LRD":190.5631,
//      "LSL":19.1265,
//      "LYD":4.8640,
//      "MAD":10.2693,
//      "MDL":18.1402,
//      "MGA":4520.1404,
//      "MKD":57.9499,
//      "MMK":2098.1758,
//      "MNT":3466.5000,
//      "MOP":8.0574,
//      "MRU":38.5857,
//      "MUR":44.3101,
//      "MVR":15.4115,
//      "MWK":1149.2786,
//      "MXN":18.3327,
//      "MYR":4.7794,
//      "MZN":63.8112,
//      "NAD":19.1265,
//      "NGN":800.1850,
//      "NIO":36.5649,
//      "NOK":11.1985,
//      "NPR":133.0564,
//      "NZD":1.7225,
//      "OMR":0.3845,
//      "PAB":1.0000,
//      "PEN":3.8683,
//      "PGK":3.7077,
//      "PHP":56.8147,
//      "PKR":279.6430,
//      "PLN":4.2327,
//      "PYG":7392.2844,
//      "QAR":3.6400,
//      "RON":4.6918,
//      "RSD":110.6018,
//      "RUB":93.5906,
//      "RWF":1243.6719,
//      "SAR":3.7500,
//      "SBD":8.4743,
//      "SCR":13.0724,
//      "SDG":586.9305,
//      "SEK":11.1417,
//      "SGD":1.3708,
//      "SHP":0.8252,
//      "SLE":22.6561,
//      "SLL":22656.1190,
//      "SOS":570.5883,
//      "SRD":38.1770,
//      "SSP":1028.8577,
//      "STN":23.1722,
//      "SYP":12953.6200,
//      "SZL":19.1265,
//      "THB":36.1854,
//      "TJS":10.9454,
//      "TMT":3.4944,
//      "TND":3.1689,
//      "TOP":2.3702,
//      "TRY":28.1526,
//      "TTD":6.7771,
//      "TVD":1.5826,
//      "TWD":32.3673,
//      "TZS":2506.4994,
//      "UAH":36.5249,
//      "UGX":3765.3665,
//      "UYU":39.8603,
//      "UZS":12183.5589,
//      "VES":35.0222,
//      "VND":24557.8319,
//      "VUV":122.0323,
//      "WST":2.7864,
//      "XAF":620.4081,
//      "XCD":2.7000,
//      "XDR":0.7631,
//      "XOF":620.4081,
//      "XPF":112.8649,
//      "YER":249.9455,
//      "ZAR":19.1266,
//      "ZMW":21.7886,
//      "ZWL":5687.7567
//     }
//    }