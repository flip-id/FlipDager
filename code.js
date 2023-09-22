"use strict";
figma.showUI(__html__);
figma.ui.resize(300, 500);

//Person info ====================================================
const firstNameArray = [
  "Mawar",
  "Yuni",
  "Fikri",
  "Fajar",
  "Ratna",
  "Dina",
  "Rizki",
  "Zainab",
  "Sari",
  "Sulaiman",
  "Joko",
  "Lina",
  "Syaiful",
  "Desi",
  "Wawan",
  "Dewi",
  "Nurul",
  "Widya",
  "Yanto",
  "Bambang",
  "Rahma",
  "Ika",
  "Arif",
  "Hana",
  "Rifki",
  "Eka",
  "Kusuma",
  "Dinda",
  "Putri",
  "Dwi",
  "Nisa",
  "Andi",
  "Siti",
  "Samsul",
  "Lukman",
  "Nina",
  "Siti",
  "Heri",
  "Reza",
  "Kiki",
  "Nur",
  "Fira",
  "Asep",
  "Indra",
  "Ria",
  "Ayu",
  "Mega",
  "Fandi",
  "Evi",
];
const lastNameArray = [
  "Saputra",
  "Wijaya",
  "Susanto",
  "Lim",
  "Tan",
  "Tjoa",
  "Kurniawan",
  "Hidayat",
  "Kusuma",
  "Budi",
  "Mulyono",
  "Hartono",
  "Hermanto",
  "Hendra",
  "Putra",
  "Purnomo",
  "Wibowo",
  "Surya",
  "Nugroho",
  "Wijono",
  "Santoso",
  "Gunawan",
  "Prabowo",
  "Wibisono",
  "Soetomo",
  "Kusnadi",
  "Kusumo",
  "Kusnanto",
  "Pangestu",
  "Sukarno",
  "Sukandar",
];

//Additional info ================================================
const phoneNumberArray = [
  "081234567890",
  "081234567891",
  "081234567892",
  "081234567893",
  "081234567894",
  "081234567895",
  "081234567896",
  "081234567897",
  "081234567898",
  "081234567899",
  "082134567890",
  "082134567891",
  "082134567892",
  "082134567893",
  "082134567894",
  "082134567895",
  "082134567896",
  "082134567897",
  "082134567898",
  "082134567899",
  "083134567890",
  "083134567891",
  "083134567892",
  "083134567893",
  "083134567894",
  "083134567895",
  "083134567896",
  "083134567897",
  "083134567898",
  "083134567899",
];
const addresses = [
  "Jl. Merdeka No. 25, Jakarta Pusat",
  "Jl. Sudirman No. 10, Jakarta Selatan",
  "Jl. Ahmad Yani No. 7, Bandung",
  "Jl. Gajah Mada No. 45, Medan",
  "Jl. A. Yani No. 98, Surabaya",
  "Jl. Letjen S. Parman No. 34, Yogyakarta",
  "Jl. Pahlawan No. 11, Solo",
  "Jl. Diponegoro No. 22, Malang",
  "Jl. Pemuda No. 5, Makassar",
  "Jl. S. Parman No. 8, Denpasar",
  "Jl. Veteran No. 3, Semarang",
  "Jl. MT Haryono No. 16, Palembang",
  "Jl. Kartini No. 78, Pontianak",
  "Jl. Imam Bonjol No. 63, Balikpapan",
  "Jl. Ahmad Dahlan No. 44, Pekanbaru",
  "Jl. Kartika No. 12, Banjarmasin",
  "Jl. Teuku Umar No. 21, Samarinda",
  "Jl. Jend. Sudirman No. 32, Padang",
  "Jl. Raya Bogor No. 56, Depok",
  "Jl. Cendrawasih No. 8, Tangerang",
  "Jl. Ahmad Yani No. 24, Bekasi",
  "Jl. Pemuda No. 2, Cirebon",
  "Jl. Raya Serang No. 15, Serang",
  "Jl. Garuda No. 9, Purwakarta",
  "Jl. Kedungmundu No. 12, Semarang",
  "Jl. Veteran No. 23, Magelang",
  "Jl. Haji Agus Salim No. 17, Surakarta",
  "Jl. Taman Siswa No. 32, Purwokerto",
  "Jl. Gajah Mada No. 9, Pekalongan",
  "Jl. Teuku Umar No. 36, Jambi",
];
const billAccArray = [
  "4161234567890123",
  "5172345678901234",
  "6183456789012345",
  "7194567890123456",
  "8205678901234567",
  "9216789012345678",
  "0227890123456789",
  "1238901234567890",
  "2249012345678901",
  "3250123456789012",
  "4261234567890123",
  "5272345678901234",
  "6283456789012345",
  "7294567890123456",
  "8305678901234567",
  "9316789012345678",
  "0327890123456789",
  "1338901234567890",
  "2349012345678901",
  "3350123456789012",
  "4361234567890123",
  "5372345678901234",
  "6383456789012345",
  "7394567890123456",
  "8405678901234567",
  "9416789012345678",
  "0427890123456789",
  "1438901234567890",
  "2449012345678901",
  "3450123456789012",
];

//Bank info ======================================================
const bankNames = [
  "Bank BCA",
  "Bank Mandiri",
  "Bank BRI",
  "Bank BTN",
  "Bank Danamon",
  "Bank Permata",
  "Bank CIMB Niaga",
  "Bank Maybank Indonesia",
  "Bank Panin",
  "Bank OCBC NISP",
  "Bank HSBC Indonesia",
  "Bank ANZ Indonesia",
  "Bank DBS Indonesia",
  "Bank Commonwealth",
  "Bank Bukopin",
  "Bank Mega",
  "Bank Tabungan Negara",
  "Bank DKI",
  "Bank Jabar Banten Syariah",
  "Bank Syariah Mandiri",
  "Bank Muamalat",
  "Bank BNI Syariah",
  "Bank BCA Syariah",
  "Bank CIMB Niaga Syariah",
  "Bank BRI Syariah",
  "Bank Mandiri Syariah",
  "Bank Danamon Syariah",
  "Bank Victoria Syariah",
  "Bank Rakyat Indonesia Agroniaga",
  "Bank Artos Indonesia",
  "Bank Sinarmas",
  "Bank Mestika Dharma",
  "Bank Ganesha",
  "Bank Maspion Indonesia",
  "Bank Jasa Jakarta",
  "Bank QNB Indonesia",
  "Bank Commonwealth Business",
  "Bank Kaltimtara",
  "Bank Nationalnobu",
  "Bank MNC Internasional",
  "Bank Woori Saudara",
];
const bankAccountArray = [
  "0021389123456",
  "0081290123456",
  "0092089123456",
  "0111389123456",
  "0131289123456",
  "0141289123456",
  "0161289123456",
  "0171089123456",
  "0181289123456",
  "0191289123456",
  "0201289123456",
  "0221289123456",
  "0231189123456",
  "0241289123456",
  "0261289123456",
  "0281289123456",
  "0301189123456",
  "0321289123456",
  "0331089123456",
  "0341189123456",
  "0351189123456",
  "0361089123456",
  "0371189123456",
  "0381189123456",
  "0391189123456",
  "0401189123456",
  "0411189123456",
  "0421189123456",
  "0431189123456",
  "0441189123456",
  "0451189123456",
  "0461189123456",
  "0471189123456",
  "0481189123456",
  "0491189123456",
  "0501189123456",
  "0511189123456",
  "0521189123456",
  "0531189123456",
  "0541189123456",
  "0551189123456",
  "0561189123456",
  "0571189123456",
  "0581189123456",
  "0591189123456",
  "0601189123456",
  "0611189123456",
  "0621189123456",
  "0631189123456",
  "0641189123456",
];
const nominalArray = [
  "Rp240.000",
  "Rp640.000",
  "Rp770.000",
  "Rp230.000",
  "Rp570.000",
  "Rp160.000",
  "Rp500.000",
  "Rp860.000",
  "Rp280.000",
  "Rp760.000",
  "Rp450.000",
  "Rp620.000",
  "Rp70.000",
  "Rp990.000",
  "Rp220.000",
  "Rp970.000",
  "Rp750.000",
  "Rp740.000",
  "Rp490.000",
  "Rp280.000",
  "Rp90.000",
  "Rp890.000",
  "Rp290.000",
  "Rp220.000",
  "Rp340.000",
  "Rp610.000",
  "Rp450.000",
  "Rp400.000",
  "Rp290.000",
  "Rp540.000",
  "Rp60.000",
  "Rp900.000",
  "Rp370.000",
  "Rp470.000",
  "Rp510.000",
  "Rp950.000",
  "Rp130.000",
  "Rp360.000",
  "Rp870.000",
  "Rp650.000",
  "Rp460.000",
  "Rp670.000",
  "Rp280.000",
  "Rp540.000",
  "Rp950.000",
  "Rp640.000",
  "Rp890.000",
  "Rp150.000",
  "Rp460.000",
  "Rp430.000",
];

//Flip Globe info ================================================
const countryArray = [
  "Afrika Selatan",
  "Amerika Serikat (AS)",
  "Andorra",
  "Arab Saudi",
  "Australia",
  "Austria",
  "Belanda",
  "Belgia",
  "Brasil",
  "Britania Raya - Inggris",
  "Bulgaria",
  "Denmark",
  "Estonia",
  "Filipina",
  "Finlandia",
  "Hong Kong",
  "Hungaria",
  "India",
  "Irlandia",
  "Islandia",
  "Italia",
  "Jepang",
  "Jerman",
  "Korea Selatan",
  "Kroasia",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luksemburg",
  "Malaysia",
  "Malta",
  "Monako",
  "Negara Kota Vatikan",
  "Nigeria",
  "Norwegia",
  "Pakistan",
  "Perancis",
  "Polandia",
  "Portugal",
  "Republik Ceko",
  "Republik Rakyat Tiongkok",
  "Rumania",
  "San Marino",
  "Singapura",
  "Siprus",
  "Slovakia",
  "Slovenia",
  "Spanyol",
  "Swedia",
  "Swiss",
  "Thailand",
  "Turkiye",
  "Uni Emirate Arab",
  "Vietnam",
  "Yunani",
];

const getRandomName = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
figma.ui.onmessage = ({ type }) => {
  const selection = figma.currentPage.selection;
  if (selection.length < 1) {
    figma.notify(
      "💁‍♂️ Pilih dulu satu text object, abis itu baru tekan tombolnya"
    );
    return;
  }
  switch (type) {
    //Person info ======================================================

    case "change-first-name":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomFirstName = getRandomName(firstNameArray);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomFirstName;
          });
        }
      });
      break;
    case "change-last-name":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomLastName = getRandomName(lastNameArray);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomLastName;
          });
        }
      });
      break;
    case "change-full-name":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomFirstName = getRandomName(firstNameArray);
          const randomLastName = getRandomName(lastNameArray);
          const randomFullName = `${randomFirstName} ${randomLastName}`;
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomFullName;
          });
        }
      });
      break;

    //Additional info ======================================================

    case "change-phone-number":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomPhoneNumber = getRandomName(phoneNumberArray);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomPhoneNumber;
          });
        }
      });
      break;

    case "change-address":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomAddress = getRandomName(addresses);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomAddress;
          });
        }
      });
      break;
    case "change-bill":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomAddress = getRandomName(billAccArray);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomAddress;
          });
        }
      });
      break;

    //Bank info ======================================================

    case "change-bank":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomBankName = getRandomName(bankNames);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomBankName;
          });
        }
      });
      break;
    case "change-nominal":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomNominal = getRandomName(nominalArray);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomNominal;
          });
        }
      });
      break;

    case "change-account":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomNominal = getRandomName(bankAccountArray);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomNominal;
          });
        }
      });
      break;

    case "change-country":
      selection.forEach((node) => {
        if (node.type === "TEXT") {
          const textNode = node;
          const randomNominal = getRandomName(countryArray);
          figma.loadFontAsync(textNode.fontName).then(() => {
            textNode.characters = randomNominal;
          });
        }
      });
      break;

    default:
      figma.notify(`Invalid message type: ${type}`);
      break;
  }
};
