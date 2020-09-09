//bhaktapur

//kathmandu

const cities = [
  //parsha
  'Alau',
  'Amarpatti',
  'Auraha',
  'Bagahi',
  'Bagbana',
  'Bageshwari',
  'Bahauri Pidari',
  'Bahuarwa bhatha',
  'Basadilwa',
  'Basantpur',
  'Belwa Parsauni',
  'Beriya Birta',
  'Bhauratar',
  'Bhawanipur',
  'Bhedihari',
  'Bhisawa',
  'Bijbaniya',
  'Bindyabasini',
  'Biranchi Barwa',
  'Birganj Municipality',
  'Biruwa Guthi',
  'Bisrampur',
  'Chorani',
  'Deurbaana',
  'Dhobini',
  'Gadi',
  'Gamhariya',
  'Ghoddauda Pipra',
  'Ghore',
  'Govindapur',
  'Hariharpur',
  'Hariharpur Birta',
  'Harapatganj',
  'Harpur',
  'Jagarnathpur Sira',
  'Jaimanglapur',
  'Janikatala',
  'Jhauwa Guthi',
  'Jitpur',
  'Kauwa Ban Kataiya',
  'Lahawarthakari',
  'Lakhanpur',
  'Lal Parsa',
  'Langadi',
  'Lipani Birta',
  'Madhuban Mathaul',
  'Mahadevpatti',
  'Mahuwan',
  'Mainiyari',
  'Mainpur',
  'Mikhampur',
  'Mirjapur',
  'Mosihani',
  'Mudali',
  'Nagardaha',
  'Nirchuta',
  'Nirmal Basti',
  'Pancharukhi',
  'Parsauni Birta',
  'Parsauni Matha',
  'Patbari Tola-Warwa',
  'Paterwa Sugauli',
  'Pidariguthi',
  'Pokhariya Municipality',
  'Phulwariya',
  'Prasurampur',
  'Ramgadhawa',
  'Ramnagari',
  'Sabaithawa',
  'Sakhuwa Prasauni',
  'Samjhauta',
  'Sankar Saraiya',
  'Sapauli',
  'Sedhawa',
  'Shiva Worga',
  'Sirsiya Khalwatola',
  'Sonbarsa',
  'Srisiya',
  'Subarnapur',
  'Sugauli Birta',
  'Sugauli Partewa',
  'Surjaha',
  'Thori',
  'Tulsi Barba',
  'Udaypur Dhursi',

  //bara

  'Amarpatti',
  'Amlekhganj',
  'Amritganj',
  'Avab',
  'Gadhimai Municipality',
  'Babuain',
  'Bachhanpurwa',
  'Badaki Fulbariya',
  'Bagadi',
  'Bahuari',
  'Balirampur',
  'Baghwan',
  'Banjariya',
  'Barainiya',
  'Barawa',
  'Bariyarpur',
  'Basantpur',
  'Batara',
  'Beldari',
  'Benauli',
  'Bhagwanpur',
  'Bhaluwai Arwaliya',
  'Bhatauda',
  'Bhaudaha',
  'Bhuluhi Marwaliya',
  'Bishnupur',
  'Bishnupurwa',
  'Bishrampur',
  'Biswambharpur',
  'Brahmapuri',
  'Buniyad',
  'Chhata Pipra',
  'Chhatawa',
  'Dahiyar',
  'Dewapur',
  'Dharma Nagar',
  'Dohari',
  'Dumbarwana',
  'Gadhahal',
  'Ganj Bhawanipur',
  'Golaganj',
  'Haraiya',
  'Hardiya',
  'Hariharpur',
  'Inarwamal',
  'Inarwasira',
  'Itiyahi',
  'Jhitakaiya',
  'Jitpur Bhawanipur',
  'Kabahigoth',
  'Kabahijabdi',
  'Kachorwa',
  'Kakadi',
  'Kalaiya',
  'Karahiya',
  'Khopawa',
  'Khutwajabdi',
  'Kolhabi',
  'Kudawa',
  'Lakshmipur Kotwali',
  'Lipanimal',
  'Madhurijabdi',
  'Mahendra Adarsha',
  'Maheshpur',
  'Maini',
  'Majhariya',
  'Manaharwa',
  'Matiarwa',
  'Motisar',
  'Naktuwa',
  'Narahi',
  'Nijgadh Municipality',
  'Pakadiya Chikani',
  'Parsurampur',
  'Paterwa',
  'Patharhati',
  'Pathlaiya',
  'Pathara',
  'Phattepur',
  'Pheta',
  'Piparpati Ek',
  'Piparpati Dui',
  'Piparpati Jabdi',
  'Piparpati Pacharauta',
  'Pipra Basantapur',
  'Piprabirta',
  'Pipradhi Goth',
  'Prasauni',
  'Prasona',
  'Prastoka',
  'Purainiya',
  'Raghunathpur',
  'Rampur Tokani',
  'Rampurwa',
  'Rauwahi',
  'Sapahi',
  'Srinagar Bairiya',
  'Sihorwa',
  'Sinhasani',
  'Sisahaniya',
  'Tedhakatti',
  'Telkuwa',
  'Terariya',
  'Uchidiha',
  'Umarjan',
  'Bharatichok',

  //rauthahut

  'Ajagaibi',
  'Akolawa',
  'Auraiya',
  'Badaharwa',
  'Bagahi',
  'Bahuwa Madanpur',
  'Bairiya',
  'Banjaraha',
  'Bariyarpur',
  'Basantapatti',
  'Basatpur',
  'Basbiti Jingadiya',
  'Bhalohiya',
  'Bhediyahi',
  'Birtiprastoka',
  'Bishrampur',
  'Bisunpurwa Manpur',
  'Brahmapuri',
  'Chandrapur Municipality',
  'Debahi',
  'Dharampur',
  'Dharhari',
  'Dipahi',
  'Dumriyachaur',
  'Gadhi',
  'Gamhariya Birta',
  'Gamhariya Parsa',
  'Gangapipra',
  'Garuda Municipality',
  'Gaur Municipality',
  'Gedahiguthi',
  'Ghiwura',
  'Gunahi',
  'Hajminiya',
  'Hardiya Paltuwa',
  'Harsaha',
  'Hathiyahi',
  'Inarbari Jyutahi',
  'Inaruwa',
  'Jatahare',
  'Jayanagar',
  'Jethrahiya',
  'Jhunkhunwa',
  'Jingadawa Belbichhwa',
  'Jingadiya',
  'Jowaha',
  'Judibela',
  'Kanakpur',
  'Karkach Karmaiya',
  'Karuniya',
  'Katahariya',
  'Khesarhiya',
  'Laksminiya',
  'Laksmipur',
  'Laksmipur Belbichhawa',
  'Lokaha',
  'Madanpur',
  'Madhopur Municipality',
  'Mahamadpur',
  'Malahi',
  'Maryadpur',
  'Masedawa',
  'Mathiya',
  'Matsari',
  'Mithuawa',
  'Mudwalawa',
  'Narkatiya Guthi',
  'Pacharukhi',
  'Pataura',
  'Pathara Budharampur',
  'Paurai',
  'Phatuha Maheshpur',
  'Phatuwa Harsaha',
  'Pipariya',
  'Pipra Bhagwanpur',
  'Pipra Pokhariya',
  'Pipra Rajbara',
  'Pothiyahi',
  'Pratappur Paltuwa',
  'Prempur Gunahi',
  'Purainawma',
  'Raghunathpur',
  'Rajdevi',
  'Rajpur Pharhadawa',
  'Rajpur Tulsi',
  'Ramauli Bairiya',
  'Rampur Khap',
  'Rangapur',
  'Sakhuwa',
  'Sakhuwa Dhamaura',
  'Samanpur',
  'Sangrampur',
  'Santapur',
  'Santpur',
  'Sarmujawa',
  'Saruatha',
  'Saunaraniya',
  'Sawagada',
  'Shitalpur Bairgania',
  'Simara Bhawanipur',
  'Sirsiya',
  'Tejapakar',
  'Tengraha',
  'Tikuliya',
  'Gamahariya,satish roy yadav',

  //sharlahai

  'Achalgadh',
  'Arnaha',
  'Aurahi',
  'Babarganj',
  'Bagmati Municipality,Karmaiya,Sarlahi',
  'Bagdaha',
  'Bahadurpur',
  'Balara',
  'Bara Udhoran',
  'Barahathawa',
  'Basantapur',
  'Batraul',
  'Bela',
  'Belhi',
  'Belwajabdi',
  'Bhadsar',
  'Bhagawatipur',
  'Bhaktipur',
  'Bhawanipur',
  'Brahmapuri',
  'Chandranagar',
  'Chhataul',
  'Chhatona',
  'Dhankaul Pachhawari',
  'Dhanakaul Purba',
  'Dhangada',
  'Ghurkauli',
  'Dhungrekhola',
  'Dumariya',
  'Gadahiyabairi',
  'Gamhariya',
  'Godeta',
  'Gaurishankar',
  'Hajariya',
  'Harakthawa',
  'Haripur',
  'Haripurwa',
  'Hariwan Municipality',
  'Hathiyol',
  'Hempur',
  'Ishwarpur',
  'Jabdi',
  'Jamuniya',
  'Janaki Nagar',
  'Jingadawa',
  'Kabilasi',
  'Kalinjor',
  'Karmaihiya',
  'Khairwa',
  'Khoriya',
  'Kisanpur',
  'Kaudena',
  'Lalbandi',
  'Laukat',
  'Laksmipur Kodraha',
  'Laksmipur Su.',
  'Madhubangoth',
  'Mahinathpur',
  'Mailhi',
  'Malangawa Municipality',
  'Manpur',
  'Masaili',
  'Mirjapur',
  'Mohanpur',
  'Motipur',
  'Murtiya',
  'Musauli',
  'Narayan Khola',
  'Narayanpur',
  'Netraganj',
  'Naukailawa',
  'Parsa',
  'Parwanipur',
  'Pattharkot',
  'Pharahadawa',
  'Phulparasi',
  'Pidari',
  'Pidariya',
  'Pipariya',
  'Rajghat',
  'Ramnagar Bahuarwa',
  'Ranban',
  'Raniganj',
  'Rohuwa',
  'Sakraul',
  'Salempur',
  'Sangrampur',
  'Sankarpur',
  'Shahorwa',
  'Shreepur',
  'Sikhauna',
  'Simara',
  'Sisautiya, Manharwa, Madhopur',
  'Sisaut',
  'Shankarpur',
  'Sohadawa',
  'Sudama',
  'Sundarpur',
  'Piprabhitta, Sundarpur Choharwa',
  'Tribhuwannagar',

  //dhanusha
  'Andupatti',
  'Aurahi',
  'Baphai',
  'Bagchaura',
  'Baheda Bala',
  'Bahuarba',
  'Balabakhar',
  'Balaha Kathal',
  'Balaha Saghara',
  'Ballagoth',
  'Baniniya',
  'Baramajhiya',
  'Basahiya',
  'Basbitti',
  'Bateshwar',
  'Bega Shivapur',
  'Begadawar',
  'Bharatpur',
  'Bhuchakrapur',
  'Bhutahi Paterwa',
  'Bindhi',
  'Bisarbhora',
  'Chakkar',
  'Chireswarnath',
  'Chora Koilpur',
  'Debadiha',
  'Deuri Parbaha',
  'Devpura Rupetha',
  'Dhabauli',
  'Dhalkebar',
  'Dhanauji',
  'Dhanusadham Municipality',
  'Dubarikot Hathalekha',
  'Duhabi',
  'Ekarahi',
  'Ganeshman Charanath Municipality',
  'Ghodghans',
  'Giddha',
  'Godar',
  'Gopalpur',
  'Goth Kohelpur',
  'Hansapur Kathpula',
  'Harine',
  'Hathipur Harbara',
  'Inarwa',
  'Itaharwa',
  'Janakpur Sub Metropolis',
  'Jhatiyahi',
  'Jhojhi Kataiya',
  'Kachuri Thera',
  'Kajara Ramaul',
  'Kanakpatti',
  'Khajuri Chanha',
  'Khariyani',
  'Kurtha',
  'Labatoli',
  'Lagmamdha Guthi',
  'Lakhauri',
  'Lakkad',
  'Lakshminibas',
  'Lakshmipur Bagewa',
  'Lohana Bahbangama',
  'Machijhitakaiya',
  'Mahuwa (Pra. Ko)',
  'Mahuwa (Pra. Khe)',
  'Makhanaha',
  'Manshingpatti',
  'Mithileshwar Nikash',
  'Mithileshwar Mauwahi',
  'Mithila Municipality',
  'Mukhiyapatti Mushargiya',
  'Nagarain',
  'Nakatajhijh',
  'Nauwakhor Prashahi',
  'Nunpatti',
  'Pachaharwa',
  'Papikleshwar',
  'Patanuka',
  'Paterwa',
  'Paudeshwar',
  'Phulgama',
  'Puspalpur',
  'Raghunathpur',
  'Rampur Birta',
  'Sabaila Municipality',
  'Sapahi',
  'Satosar',
  'Shantipur',
  'Siddha',
  'Singyahi Maidan',
  'Sinurjoda',
  'Sonigama',
  'Suga Madhukarahi',
  'Suganikash',
  'Tarapatti Sirsiya',
  'Thadi Jhijha',
  'Thilla Yaduwa',
  'Tulsi Chauda',
  'Tulsiyahi Nikas',
  'Tulsiyani Jabdi',
  'Yadukush',
  'Yagyabhumi',

  //shiraha

  'Arnama Lalpur',
  'Arnama Rampur',
  'Aurahi',
  'Ayodhyanagar',
  'Badharamal',
  'Barchhawa',
  'Bariyarpatti',
  'Basbita',
  'Bastipur',
  'Belaha',
  'Belhi',
  'Betauna',
  'Bhadaiya',
  'Bhagawanpur',
  'Bhagawatipur',
  'Bhawanipur',
  'Bhawanpur Kalabanzar',
  'Bhokraha',
  'Bishnupur Pra. Ma.',
  'Bishnupur Pra. Ra.',
  'Bishnupur Katti',
  'Brahmagaughadi',
  'Chandra Ayodhyapur',
  'Chandralalpur',
  'Chandraudyapur',
  'Chatari',
  'Chikana',
  'Devipur',
  'Dhangadi',
  'Dhangadhimai Municipality',
  'Dhodhana',
  'Dumari',
  'Durgapur',
  'Gadha',
  'Gauripur',
  'Gautari',
  'Golbazar Municipality',
  'Govindapur Malahanama',
  'Govindpur Taregana',
  'Hakpara',
  'Hanumannagar',
  'Harakathi',
  'Inarwa',
  'Itarhawa',
  'Itari Parsahi',
  'Itatar',
  'Jamadaha',
  'Janakinagar',
  'Jighaul',
  'Kabilasi',
  'Kachanari',
  'Kalyanpur Jabadi',
  'Kalyanpur Kalabanjar',
  'Karjanha',
  'Kharukyanhi',
  'Khirauna',
  'Krishnapur Birta',
  'Kushaha Laksiminiya',
  'Lagadi Gadiyani',
  'Lagadigoth',
  'Lahan Municipality',
  'Lalpur',
  'Laksminiya',
  'Laksmipur (Pra. Ma.)',
  'Laksmipur Patari',
  'Madar',
  'Mahadewa Portaha',
  'Mahanaur',
  'Maheshpur Gamharia',
  'Maheshpur Patari',
  'Majhauliya',
  'Majhaura',
  'Makhanaha',
  'Malhaniya Gamharia[10]',
  'Malhaniyakhori',
  'Mauwahi',
  'Mirchaiya Municipality',
  'Media',
  'Mohanpur Kamalpur',
  'Muksar',
  'Nahara Rigaul',
  'Naraha Balkawa',
  'Navarajpur',
  'Padariya Tharutol',
  'Phulkaha Kati',
  'Pipra Pra. Dha.',
  'Pipra Pra. Pi',
  'Pokharbhinda',
  'Rajpur',
  'Ramaul',
  'Rampur Birta',
  'Sakhuwanankar Katti',
  'Sanhaitha',
  'Sarshwar',
  'Sikron',
  'Silorba Pachhawari',
  'Siraha Municipality',
  'Sisawani',
  'Sitapur Pra. Da.',
  'Sitapur Pra. Ra.',
  'Sonmati Majhaura',
  'Sothayan',
  'Sukhachina',
  'Sukhipur Municipality',
  'Tenuwapati',
  'Thalaha Kataha',
  'Thegahi',
  'Tulsipur',
  'Vidhyanagar',

  //mahottari
  'Anakar',
  'Aurahi',
  'Bagada',
  'Banchauri',
  'Badiya',
  'Bairgiya Laksminiya',
  'Balawa',
  'Banauli Donauli',
  'Banauta',
  'Bardibas Municipality',
  'Basabitti',
  'Bathnaha',
  'Belgachhi',
  'Bhangaha',
  'Bharatpur',
  'Bhatauliya',
  'Bijayalpura',
  'Bhramarpura',
  'Damhi Marai',
  'Dhamaura',
  'Dharmapur',
  'Dhirapur',
  'Ekadarabela',
  'Ekarahiya',
  'Etaharwakatti',
  'Gaidha Bhetpur',
  'Gauribas',
  'Gaushala Municipality',
  'Gonarpura',
  'Halkhori',
  'Hariharpur Harinmari',
  'Hathilet',
  'Hatisarwa',
  'Jaleshwar Municipality',
  'Khairbanni',
  'Khaya Mara',
  'Khopi',
  'Khuttapipradhi',
  'Kisan Nagar',
  'Kolhusa Bagaiya',
  'Laksminiya',
  'Loharpatti',
  'Mahadaiyatapanpur',
  'Mahottari',
  'Maisthan',
  'Majhaura Vishnupur',
  'Manara',
  'Matihani',
  'Meghanath Gorhanna',
  'Nainhi',
  'Nigaul',
  'Padaul',
  'Parsa Pateli',
  'Parsadewadh',
  'Pashupatinagar',
  'Phulahatta Parikauli',
  'Phulakaha',
  'Pigauna',
  'Pipra',
  'Pokharibhinda Samgrampur',
  'Raghunathpur',
  'Ramgopalpur',
  'Ramnagar',
  'Ratauli',
  'Ratauli 9 Rahmanpur',
  'Sahasaula',
  'Sahorawa',
  'Samdha',
  'Sarpallo',
  'Shamsi',
  'Sripur',
  'Simardahi',
  'Singyahi',
  'Sisawakataiya',
  'Sonama',
  'sonamai bhoil',
  'Sonaum',
  'Suga Bhawani',
  'Sundarpur',
  'Mangalnath, Magarthana',

  //saptari

  'Arnaha',
  'Aurahi, now Dakneshwori Municipality ward No. 6',
  'Babhangama katti',
  'Badgama, now Kanchan Rup Mun.',
  'Bainiya',
  'Bairawa, now Kanchanrup Municipality ward no. 1',
  'Bakdhauwa',
  'Banarjhula',
  'Banaula, now Dakneshwori Municipality ward No. 10',
  'Banauli',
  'Baramjhiya, now Kanchan Rup Mun.',
  'Barhmapur',
  'Barsain',
  'Basbiti',
  'Bathnaha',
  'Belhi now Khadk Mun WAda No 2',
  'Belhi Chapena',
  'Bhagawatpur',
  'Bhardaha, now Hanumannagar Kankalini Mun.',
  'Bhutahi, now Dakneshwori Municipality ward No. 4',
  'Birpur Barahi',
  'Bishariya-Bhelhi',
  'Bodebarsain Municipality',
  'Boriya',
  'Brahamapur, now Dakneshwori Municipality ward No. 7',
  'Chhinnamasta',
  'Dakneshwori Municipality',
  'Dauda',
  'Daulatpur, Now surunga Mun Wada No 3',
  'Deuri',
  'Deurimaruwa',
  'Dhanagadi',
  'Babhangam katti',
  'Dharampur, now Kanchan Rup Mun.',
  'Dhodhanpur, now Kanchan Rup Mun.',
  'Didhawa',
  'Diman',
  'Gamhariya Parwaha',
  'Gobargada, now Hanumannagar Kankalini Mun.',
  'Goithi',
  'Hanumannagar, now Municipality',
  'Hanumannagar Kankalini Municipality',
  'Hardiya Now surunga Mun Wada No 2',
  'Hariharpur',
  'Haripur Now surunga Mun wada No 7',
  'Inarwa, now Hanumannagar Kankalini Mun.',
  'Inarwa Phulbariya',
  'Itahari Bishnupur',
  'Jagatpur, now Kanchan Rup Mun.',
  'Jamuni Madhapura',
  'Jandaul',
  'Jhutaki',
  'Joginiya-1, now Hanumannagar Kankalini Mun.',
  'Joginiya-2, now Hanumannagar Kankalini Mun.',
  'Kabilasha, now Dakneshwori Municipality ward No. 1',
  'Kachan',
  'Kanchan Rup Municipality',
  'Kalyanpur Khadk Mun 6,7,8',
  'Kamalpur, now Saptaskoshi Mun.',
  'Kanchanpur',
  'Kataiya, Now Rupani Gaunpalika',
  'Kathauna',
  'Khadgapur, included in Bodebarsain Mun.',
  'KhojpurNow khadk Mun 5',
  'Ko. Madhepura',
  'Kochabakhari',
  'Koiladi',
  'Kushaha',
  'Lalapati',
  'Launiya',
  'Lohajara',
  'Madhawapur, now Hanumannagar Kankalini Mun.',
  'Madhupati now surunga mun Wada no 4',
  'Mahadeva',
  'Maina Kaderi',
  'Maina Sahasrabahu',
  'Malekpur',
  'Maleth',
  'Malhanama',
  'Malhaniya, now Hanumannagar Kankalini Mun.',
  'Manraja,included in Bodebarsain Mun.',
  'Mauwaha',
  'Mohanpur',
  'Nargho',
  'Negada',
  'Odraha',
  'Pakari',
  'Pansera',
  'Jandaul',
  'Parasbani',
  'Paterwa',
  'Pato, now Dakneshwori Municipality ward No. 5',
  'Patthargada, now Dakneshwori Municipality ward No. 9',
  'Phakira',
  'Pharseth',
  'Phattepur, now Saptakoshi Mun.',
  'Phulkahi',
  '(Parwaha)',
  'Pipra (Purba), now Kanchan Rup Mun.',
  'Pipra (West) surunga mun wada No 1',
  'Portaha, now Hanumannagar Kankalini Mun.',
  'Rajbiraj Municipality',
  'Rajgadh Rural Municipality',
  'Ramnagar',
  'Rampur Jamuwa',
  'Rampur Malhaniya, now Hanumannagar Kankalini Mun.',
  'Rautahat',
  'Rayapur',
  'Rupnagar, now Kanchan Rup Mun.',
  'Shambhunath Municipality',
  'Sankarpura',
  'Saptakoshi Municipality',
  'Sarashwar',
  'Simraha Sigiyaun',
  'Siswa Beihi now khadak Mun Wada No 1,2',
  'Sitapur',
  'Tarahi, now Dakneshwori Municipality ward No. 3',
  'Terahota',
  'Theliya, now Kancha',
  'Tilathi',
  'Trikola',

  //sindhuli

  'Arun Thakur',
  'Bahuntilpung',
  'Balajor',
  'Basheshwor',
  'Bastipur',
  'Belghari',
  'Bhadrakali',
  'Bhiman',
  'Bhimeshwar',
  'Bhimsthan',
  'Bhuwaneshwar Gwaltar',
  'Bitijor Bagaincha',
  'Chure',
  'Dandiguranse',
  'Dudbhanjyang',
  'Hariharpur Gadhi',
  'Hatpate',
  'Harsahi',
  'Jalkanya',
  'Jarayotar',
  'Jhangajholi Ratmata',
  'Jinakhu',
  'Kakur Thakur',
  'Kalpabrishykha',
  'Kapilakot',
  'Khang Sang',
  'Kholagaun',
  'Kusheshwar Dumja',
  'Kyaneshwar',
  'Ladabhir',
  'Lampantar',
  'Mahadevdada',
  'Mahadevsthan',
  'Mahendrajhayadi',
  'Majhuwa',
  'Netrakali',
  'Nipane',
  'Purano Jhangajholi',
  'Ranibas',
  'Ranichauri',
  'Ratamata',
  'Ratnachura',
  'Ratnawati',
  'Shanteshwari',
  'Siddheshwari',
  'Sirthauli',
  'Sitalpati',
  'Solpathana',
  'Sumnam Pokhari',
  'Tamajor',
  'Tandi',
  'Tinkanya',
  'Tosramkhola',
  'Tribhuvan Ambote',

  //ramechhap
  'Bamti Bhandar',
  'Betali',
  'Bethan',
  'Bhirpani',
  'Bhuji',
  'Bijulikot',
  'Chisapani Municipality',
  'Chanakhu',
  'Chuchure',
  'Dadhuwa',
  'Duragaun',
  'Deurali',
  'Dimipokhari',
  'Doramba',
  'Duragau',
  'Gagal Bhadaure',
  'Gelu',
  'Goswara',
  'Gothgau',
  'Gumdel',
  'Gunsi Bhadaure',
  'Gupteshwar',
  'Hiledevi',
  'Himganga',
  'Khandadevi',
  'Khaniyapani',
  'Khimti',
  'Kumbukasthali',
  'Lakhanpur',
  'Majuwa',
  'Makadum',
  'Manthali Municipality',
  'Naga Daha',
  'Namadi',
  'Pakarbas',
  'Pharpu',
  'Phulasi',
  'Piukhuri',
  'Priti',
  'Puranagau',
  'Rakathum',
  'Ramechhap Municipality',
  'Rampur',
  'Rashnailu',
  'Saipu',
  'Sanghutar',
  'Those',
  'Tilpung',
  'Tokarpur',

  //dolakha
  'Alampu',
  'Babare',
  'Bhedapu',
  'Bhimeshwar Municipality',
  'Bhirkot',
  'Bhusapheda',
  'Bigu',
  'Bocha',
  'Bulung',
  'Chankhu',
  'Chhetrapa',
  'Chilankha',
  'Chyama',
  'Dadhpokhari',
  'Dandakharka',
  'Dolakha Town',
  'Gairimudi',
  'Gauri Sankar',
  'Ghang Sukathokar',
  'Hawa',
  'Japhe',
  'Jhule',
  'Jhyaku',
  'Jiri Municipality',
  'Jugu',
  'Kabhre',
  'Kalinchok',
  'Katakuti',
  'Khare',
  'Khupachagu',
  'Laduk',
  'Lakuri Danda',
  'Lamabagar',
  'Lamidanda',
  'Lapilang',
  'Magapauwa',
  'Makaibari',
  'Mali, now Jiri Mun.',
  'Malu',
  'Marbu',
  'Mati',
  'Melung',
  'Mirge',
  'Namdu',
  'Orang',
  'Pawati',
  'Phasku',
  'Sahare',
  'Shailungeshwar',
  'Sunakhani',
  'Sundrawati',
  'Suri',
  'Susma Chhemawati',
  'Syama',
  'Thulopatal, now Jiri Mun.',

  //bhaktapur

  //dhading
  'Aginchok',
  'Baireni',
  'Baseri',
  'Benighat',
  'Bhumesthan',
  'Budhathum',
  'Chainpur',
  'Chhatre Dyaurali',
  'Dangsing',
  'Darkha',
  'Dhola',
  'Dhusha',
  'Dhuwakot',
  'Gajuri',
  'Gaunkharka',
  'Gerkhu',
  'Ghussa',
  'Goganpani',
  'Gumdi',
  'Jharlang',
  'Jiwanpur',
  'Jogimara',
  'Jyamaruk',
  'Kalleri',
  'Katunje',
  'Kebalpur',
  'Khalte',
  'Khari',
  'Kiranchok',
  'Kumpur',
  'Lapa',
  'Mahadevsthan',
  'Maidi',
  'Marpak',
  'Mulpani',
  'Murali Bhanjyang',
  'Nalang',
  'Naubise',
  'Nilkantha Municipality',
  'Phulkharka',
  'Pida',
  'Ranibari',
  'Rigaun',
  'Salang',
  'Salyankot',
  'Salyantar',
  'Sangkosh',
  'Satyadevi',
  'Semjong',
  'Sirtung',
  'Sukabhanjyang',
  'Sunaula Bazar',
  'Tasarphu',
  'Thakre',
  'Tipling',
  'Tripureshwar',

  //shildhupalchok

  'Andheri',
  'Atarpur',
  'Bhotang',
  'Badegau',
  'Bansbari',
  'Banskharka',
  'Baramchi',
  'Bahrabise municipality',
  'Balephi',
  'Baruwa',
  'Batase',
  'Bhimtar',
  'Bhote Namlang',
  'Bhotechaur',
  'Bhotsiba',
  'Chanaute',
  'Choukati',
  'Chautara Municipality',
  'Dhumthang',
  'Dubarchaur 9',
  'Gati',
  'Ghorthali',
  'Dhuskun',
  'Gloche',
  'Gumba',
  'Gunsakot',
  'Hagam',
  'Haibung',
  'Helumbu',
  'Ichok',
  'Irkhu',
  'Jalbire',
  'Jethal',
  'Jyamire',
  'Kalika',
  'Karkhali',
  'Kadambas',
  'Khadichaur',
  'Kiul',
  'Kunchok',
  'Lamosanghu',
  'Langarche',
  'Lisankhu',
  'Listikot',
  'Mahankal',
  'Maneshwara',
  'Manekharka',
  'Marming',
  'Melamchi municipality',
  'Motang',
  'Nawalpur',
  'Pagretar',
  'Palchok',
  'Pangtang',
  'Petaku',
  'Phatakshila',
  'Phulping Katti',
  'Phulpingdanda',
  'Phulpingkot',
  'Piskar',
  'Ramche',
  'Sangachok',
  'Selang',
  'Sikharpur',
  'Sindhukot',
  'Sipa Pokhare',
  'Sipal Kavre',
  'Sunkhani',
  'Syaule Bazar',
  'Talamarang',
  'Tatopani',
  'Tauthali',
  'Tekanpur',
  'Thakani',
  'Thampal Chhap',
  'Thangpalkot',
  'Thokarpa',
  'Thulo Dhading',
  'Thulo Pakhar',
  'Thulo Sirubari',
  'Thum Pakhar',
  'Timpul Ghyangul',
  'Yamanadanda',

  //chitwan
  'Ayodhyapuri',
  'Bagauda',
  'Bharatpur Metropolitan',
  'Chandi Bhanjyang',
  'Dahakhani',
  'Gardi',
  'Kalika Municipality',
  'Kabilas',
  'Kathar',
  'Kaule',
  'Khairhani municipality',
  'Korak',
  'Lothar',
  'Madi Municipality',
  'Madi Kalyanpur',
  'Mangalpur',
  'Narayanpur',
  'Piple',
  'Ratnanagar municipality',
  'Rapti Municipality',
  'Siddi',

  //makwanpur

  'Agara',
  'Ambhanjyang',
  'Bajrabarahi',
  'Betini',
  'Bhainse',
  'Bharta Pundyadevi',
  'Bhimphedi',
  'Budhichaur',
  'Chhatiwan',
  'Chitlang',
  'Dandakharka',
  'Dhimal',
  'Gogane',
  'Handikhola',
  'Hetauda (Sub metropolitan city)',
  'Hurnamadi',
  'Ipa Panchakanya',
  'Kalikatar',
  'Kankada',
  'Kamane',
  'Khairang',
  'Kogate',
  'Kulekhani',
  'Makwanpurgadhi',
  'Manahari',
  'Manthali',
  'Markhu',
  'Marta Punchedevi',
  'Namtar',
  'Nibuwatar',
  'Fakhel',
  'Phaparbari',
  'Raigaun',
  'Raksirang',
  'Sarikhet Palase',
  'Shikharpur',
  'Sripur Chhatiwan',
  'Sisneri Mahadevsthan',
  'Sukaura',
  'Thaha Municipality',
  'Thingan',
  'Tistung Deurali',

  //

  // command +  >
  //bhojpur
  'Aangtep',
  'Annapurna',
  'Baikunthe',
  'Balankha',
  'Basikhora',
  'Basingtharpu',
  'Bastim',
  'Bhaisipankha',
  'Bhubal',
  'Bhulke',
  'Bokhim',
  'Bhojpur',
  'Boya',
  'Champe',
  'Changre',
  'Charambi',
  'Chaukidanda',
  'Chhinamakhu',
  'Dalgaun',
  'Deurali',
  'Dewantar',
  'Dhodalekhani',
  'Dobhane',
  'Dummana',
  'Gogane',
  'Gupteshwar',
  'Hasanpur',
  'Helauchha',
  'Homtang',
  'Jarayotar',
  'Kimalung',
  'Keurepani',
  'Khairang',
  'Khartimchha',
  'Khatamma',
  'Khawa',
  'Kota',
  'Kudak Kaule',
  'Kulunga',
  'Lekharka',
  'Mane Bhanjyang',
  'Mulpani',
  'Nagi',
  'Nepaledada',
  'Okhre',
  'Pangcha',
  'Patle Pani',
  'Pawala',
  'Pyauli',
  'Ranibas',
  'Sangpang',
  'Sano Dumba',
  'Shadanand Municipality',
  'Shyamsila',
  'Siddheshwar',
  'Sindrang',
  'Syamsila',
  'Taksar',
  'Thidingkha',
  'Thulo Dumba',
  'Timma',
  'Tiwari Bhanjyang',
  'Tunggochha',
  'Yaku',
  'Yangpang',
  'Chaukidada',

  //Dhankuta
  'Ahale',
  'Ankhisalla',
  'Arkhaule Jitpur',
  'Basantatar',
  'Belhara',
  'Budhabare',
  'Bhirgaun',
  'Bodhe',
  'Budhabare',
  'Budi Morang',
  'Chanuwa',
  'Chhintang',
  'Chungmang',
  'Danda Bazar',
  'Dandagaun',
  'Ghortikharka (now Pakhribas Municipality)',
  'Hattikharka',
  'Jitpur Arkhaule',
  'Khoku',
  'Khuwaphok',
  'Kuruletenupa',
  'Leguwa',
  'Mahabharat',
  'Marek Katahare',
  'Maunabudhuk',
  'Mudebas',
  'Muga (now Pakhribas Municipality)',
  'Murtidhunga',
  'Pakhribas (now Pakhribas Municipality)',
  'Pakhribas Municipality',
  'Parewadin',
  'Phaksib',
  'Phalate (now Pakhribas Municipality)',
  'Raja Rani',
  'Sanne (now Pakhribas Municipality)',
  'Tankhuwa',
  'Telia',
  'Vedatar',

  //Ilam
  'Amchok',
  'Banjho',
  'Barbote',
  'Chamaita',
  'Chisapani',
  'Chulachuli',
  'Danabari',
  'Deumai Municipality',
  'Dhuseni (now Deumai Municipality)',
  'Ibhang',
  'Ektappa',
  'Erautar',
  'Gajurmukhi',
  'Ghuseni',
  'Godak',
  'Gorkhe',
  'Jamuna',
  'Ilam Municipality',
  'Jirmale',
  'Jitpur',
  'Jogmai',
  'Kolbung',
  'Lakshmipur',
  'Lumde',
  'Mabu',
  'Mahamai',
  'Maimajhuwa',
  'Maipokhari',
  'Mangalbare (now Deumai Municipality)',
  'Namsaling',
  'Naya Bazar',
  'Pashupatinagar',
  'Phakphok',
  'Phuyatappa',
  'Puwamajhuwa',
  'Pyang',
  'Sakphara',
  'Sakhejung',
  'Samalbung',
  'Sangrumba',
  'Shanti Danda',
  'Shantipur',
  'Siddhithumka',
  'Soyak',
  'Soyang',
  'Shree Antu',
  'Sulubung',
  'Sumbek',
  'Suryodaya Municipality',

  //Jhapa
  'Mechinagar Municipality',
  'Bhadrapur Municipality',
  'Birtamod Municipality',
  'Arjundhara Municipality',
  'Kankai Municipality',
  'Shivasatakshi Municiplity',
  'Gauradaha Municipality',
  'Damak Municipality',
  'Buddhashanti Rural Municipality',
  'Haldibari Rural Municipality',
  'Kachankawal Rural Municipality',
  'Barhadashi Rural Municipality',
  'Jhapa Rural Municipality',
  'Gauriganj Rural Municipality',
  'Kamal Rural Municipality',

  //Khotang
  'Ainselu Kharka',
  'Arkhale',
  'Badahare',
  'Badka Dipali',
  'Bahunidanda',
  'Bakachol',
  'Baksila',
  'Bamrang',
  'Barahapokhari',
  'Baspani',
  'Batase',
  'Chhitapokhari',
  'Chhorambu',
  'Chipring',
  'Chisapani',
  'Chyandanda',
  'Chyasmitar',
  'Damarkhu Shivalaya',
  'Dandagaun',
  'Devisthan',
  'Dharapani',
  'Dhitung',
  'Diktel Municipality',
  'Dikuwa',
  'Diplung',
  'Dipsung',
  'Dorpa Chiuridanda',
  'Dubekol',
  'Dumre Dharapani',
  'Durchhim',
  'Hanchaur',
  'Jyamire',
  'Kaule',
  'Kharmi',
  'Kharpa',
  'Khartamchha',
  'Khidima',
  'Khotang Bazar',
  'Kubhinde,',
  'Laphyang',
  'Lamidanda',
  'Lichki Ramche',
  'Linkuwa Pokhari',
  'Magpa',
  'Mahadevasthan',
  'Mangaltar',
  'Mattim Birta',
  'Mauwabote',
  'Nerpa',
  'Nirmalidada',
  'Nunthala',
  'Patheka',
  'Pauwasera',
  'Phaktang',
  'Rajapani',
  'Rakha Bangdel',
  'Rakha Dipsung',
  'Ratancha Majhagaun',
  'Ribdung Jaleshwari',
  'Ribdung Maheshwari',
  'Salle',
  'Santeshwar Chhitapokhari',
  'Sapteshwar',
  'Saunechaur',
  'Sawakatahare',
  'Simpani',
  'Solma',
  'Sungdel',
  'Suntale',
  'Woplukha',
  'Wopung',

  //Morang
  'Biratnagar Metropolitan City',
  'SundarHaraicha Municipality',
  'Belbari Municipality',
  'Pathari-Sanischare Municipality',
  'Urlabari Municipality',
  'Rangeli Municipality',
  'Letang Bhogateni Municipality',
  'Ratuwamai Municipality',
  'Sunawarshi Municipality',
  'Kerabari Rural Municipality',
  'Miklajung Rural Municipality',
  'Kanepokhari Rural Municipality',
  'Budhiganga Rural Municipality',
  'Gramthan Rural Municipality',
  'Katahari Rural Municipality',
  'Dhanpalthan Rural Municipality',
  'Jahada Rural Municipality',

  //Okhaldhunga
  'Andheri Narayansthan',
  'Baksa',
  ' Chyanam ',
  'Diyale ',
  ' Fediguth',
  'Fulbari',
  'Gamnangtar',
  'Harkapur ',
  'Jantarkhani',
  'Jyamire',
  'Kalikadevi',
  'Khijikati',
  ' Katunje',
  'Ketuke',
  'Khiji',
  'Chandeshwori',
  ' Khijifalate',
  'Kuibhir',
  'Kuntadevi',
  'Madhavpur',
  'Mamkha',
  'Manebhanjyang',
  'Moli',
  'Mulkharka',
  'Narmedeshwor',
  'Okhaldhunga',
  ' Palapu',
  ' Patle',
  ' Pokali',
  'Pokhare',
  'Prapcha',
  'Ragadip',
  ' Ragani ',
  'Raniban',
  'Ratmate',
  'Rawadolu',
  'Rumjatar ',
  'Salleri',
  'Serna',
  'Shreechaur ',
  'Singhadevi ',
  'Sisneri ',
  'Taluwa ',
  'Tarkerabari ',
  'Thakle',
  'Thoksela',
  'Thulachhap',
  'Ubu',
  'Yasam',

  //Panchthar
  'Aangna',
  'Aangsarang',
  'Ambarpur',
  'Bharapa',
  'Chilingdin',
  'Chyangthapu',
  'Durdimba',
  'Ektin',
  'Embung',
  'Phalaicha',
  'Hangum',
  'Kurumba',
  'Limba',
  'Lungrupa',
  'Mangjabung',
  'Mauwa',
  'Memeng',
  'Nagi',
  'Nangin',
  'Nawamidanda',
  'Olane',
  'Oyam',
  'Panchami',
  'Prangbung',
  'Pauwa Sartap',
  'Phaktep',
  'Phidim Municipality',
  'Prangbung',
  'Rabi',
  'Rani Gaun',
  'Ranitar',
  'Sarangdanda',
  'Sidin',
  'Subhang',
  'Syabarumba',
  'Tharpu',
  'Yangnam',
  'Yasok',

  //sankhuwasabha

  //Solokhumbu
  'Bapha',
  'Baku',
  'Basa',
  'Beni',
  'Bhakanje',
  'Bung',
  'Chaulakharka',
  'Chaurikharka',
  'Chheskam',
  'Deusa',
  'Garma',
  'Goli',
  'Gorakhani',
  'Gudel',
  'Jubing',
  'Jubu',
  'Kaku',
  'Kangel',
  'Kerung',
  'Khumjung',
  'Loding Tamakhani',
  'Lokhim',
  'Mabe',
  'Mukali',
  'Namche',
  'Necha Batase',
  'Necha Bedghari',
  'Nele',
  'Panchan',
  'Salleri',
  'Salyan',
  'Sotang',
  'Takasindu',
  'Tapting',
  'Tingla',

  //Sunsari
  'Itahari Sub Metropolitan City',
  'Dharan Sub Metropolitan City',
  'Inaruwa Municipality',
  'Duhabi Municipality',
  'Ramdhuni Municipality',
  'Barahachhetra Municipality',
  'Koshi Rural Municipality',
  'Gadhi Rural Municipality',
  'Barju Rural Municipality',
  'Bhokraha Narashingh Rural Municipality',
  'Harinagara Rural Municipality',
  'Dewanganj Rural Municipality',

  'Amaduwa',
  'Amahibelha',
  'Aurabarni(Now Gadhi Gaupalika',
  'Bakalauri',
  'Barahachhetra',
  'Basantapur',
  'Bhadgaun Sinawari (now Ramdhuni-Bhasi Municipality)',
  'Bhaluwa (now Duhabi-Bhaluwa Municipality)',
  'Bharoul',
  'Bhokraha',
  'Bishnupaduka (now Dharan Municipality)',
  'Chadbela',
  'Chhitaha',
  'Chimdi',
  'Dewanganj',
  'Dharan Municipality',
  'Duhabi-Bhaluwa Municipality',
  'Dumaraha',
  'Gautampur',
  'Ghuski',
  'Harinagar',
  'Haripur',
  'Inaruwa Municipality',
  'Itahari Municipality',
  'Jalpapur',
  'Kaptanganj',
  'Laukahi',
  'Madheli',
  'Madhesa',
  'Madhuwan',
  'Madhyeharsahi',
  'Mahendranagar',
  'Narshinhatappu',
  'Panchakanya (now Dharan Municipality)',
  'Paschim Kasuha',
  'Prakashpur',
  'Purbakushaha',
  'Ramdhuni-Bhasi Municipality',
  'Ramganj Belgachhi',
  'Ramganj Senuwari',
  'Ramnagar Bhutaha',
  'Sahebganj',
  'Satterjhora',
  'Simariya',
  'Singiya (now Ramdhuni-Bhasi Municipality)',
  'Sonapur',
  'Sripurjabdi',
  'Tanamuna',

  //Taplejung

  //Terhathum

  //Udayapur

  //Kailali
  'Dhangadhi Sub-Metropolitan City',
  'Lamki Chuha Municipality',
  'Tikapur Municipality',
  'Ghodaghodi Municipality',
  'Bhajani Municipality',
  'Godawari Municipality',
  'Gauriganga Municipality',
  'Janaki Rural Municipality',
  'Bardagoriya Rural Municipality',
  'Mohanyal Rural Municipality',
  'Kailari Rural Municipality',
  'Joshipur Rural Municipality',
  'Chure Rural Municipality',

  //Achham
  'Mangalsen Municipality',
  'Kamalbazar Municipality',
  'Sanphebagar Municipality',
  'Panchadewal Binayak Municipality',
  'Chaurpati Rural Municipality',
  'Mellekh Rural Municipality',
  'Bannigadi Jayagad Rural Municipality',
  'Ramaroshan Rural Municipality',
  'Dhakari Rural Municipality',
  'Turmakhand Rural Municipality',

  //Doti
  'Banalek',
  'Banja Kakani',
  'Barchhen',
  'Basudevi',
  'Bhawardanda',
  'Bhadhegaun',
  'Bhumirajmandau',
  'Changra',
  'Chhapali',
  'Chhatiwan',
  'Dahakalikasthan',
  'Daud',
  'Dhanglagau',
  'Dhirkamandau',
  'Durgamandau',
  'Gadasera',
  'Gaguda',
  'Gaihragaun',
  'Ganjari',
  'Ghanteshwar',
  'Girichauka',
  'Jijodamandau',
  'Kadamandau',
  'Kalena',
  'Kalikasthan',
  'Kanachaur',
  'Kapalleki',
  'Kedar Akhada',
  'Khatiwada',
  'Khirsain',
  'Ladagada',
  'Lamikhal',
  'Lana Kedareshwar',
  'Latamandau',
  'Lakshminagar',
  'Mahadevsthan',
  'Mannakapadi',
  'Mudabhara',
  'Mudhegaun',
  'Nirauli',
  'Pachanali',
  'Pokhari',
  'Ranagaun',
  'Sanagaun',
  'Saraswatinagar',
  'Satphari',
  'Simchaur',
  'Tijali',
  'Tikha',
  'Tikhatar',
  'Toleni',
  'Baglekh',
  'Barpata',

  //Bajhang
  'Banjh',
  'Bagthala',
  'Bhairabnath',
  'Bhamchaur',
  'Bhatekhola',
  'Byasi',
  'Chaudhari',
  'Dahabagar',
  'Dangaji',
  'Dantola',
  'Daulichaur',
  'Deulekh',
  'Deulikot',
  'Dhamena',
  'Gadaraya',
  'Jaya Prithvi Municipality',
  'Kadal',
  'Kailash',
  'Kalukheti',
  'Kanda',
  'Kaphalaseri',
  'Khiratadi',
  'Koiralakot',
  'Kot Bhairab',
  'Kotdewal',
  'Lamatola',
  'Lekhgaun',
  'Majhigaun',
  'Malumela',
  'Mashdev',
  'Matela',
  'Maulali',
  'Melbisauni',
  'Parakatne',
  'Patadewal',
  'Pauwagadhi',
  'Pitatola',
  'Pipalkot',
  'Rayal',
  'Rilu',
  'Sainpasela',
  'Sunikot',
  'Sunkuda',
  'Surma',
  'Syandi',
  'Thalara',

  //Bajura
  'Atichaur',
  'Baddhu',
  'Barhabise',
  'Bichhiya',
  'Bramhatola',
  'Budhiganga',
  'Chhatara',
  'Dahakot',
  'Dogadi',
  'Gotri',
  'Gudukhati',
  'Jagannath',
  'Jayabageshwari',
  'Jugada',
  'Kailashmandau',
  'Kanda',
  'Kolti',
  'Kotila',
  'Kuldeumadau',
  'Manakot',
  'Martadi',
  'Pandusain',
  'Rugin',
  'Sappata',
  'Tolidewal',
  'Wai',
  'Jukot',

  //Kanchanpur
  'Bedkot',
  'Belauri',
  'Bhimdatta',
  'Mahakali',
  'Shuklaphanta',
  'Krishnapur',
  'Punarbas',
  'Laljhadi',
  'Beldandi',

  //Dadeldhura
  'Ajayameru',
  'Alital',
  'Amargadhi',
  'Ashigram',
  'Bagarkot',
  'Belapur',
  'Bhadrapur',
  'Bhageshwar',
  'Bhumiraj',
  'Chipur',
  'Dewal Dibyapur',
  'Ghatal',
  'Ganeshpur',
  'Gankhet',
  'Jogbuda',
  'Kailapalmandau',
  'Khalanga',
  'Koteli',
  'Manilek',
  'Mashtamandau',
  'Nawadurga',
  'Rupal',
  'Sahastralinga',
  'Samaiji',
  'Sirsha',

  //Baitadi
  'SALENA',
  'Amchoura',
  'FYAULI',
  'Barakot',
  'khadeni',
  'Basantapur',
  'Basuling',
  'Bhatana',
  'Bhumeshwar',
  'Bijayapur',
  'Bisalpur',
  'Bumiraj',
  'Nwadeu',
  'Chaukham',
  'Sibnath',
  'Dehimandau',
  'Deulek',
  'Dhungad',
  'Dilasaini',
  'Durga Bhabani',
  'Durgasthan',
  'Gurukhola',
  'Gajari',
  'Giregada',
  'Gokuleshwar',
  'Gwallek',
  'Hat',
  'Hatairaj',
  'Jagannath',
  'Kailpal',
  'Kataujpani',
  'Kotila',
  'Kotpetara',
  'Kulau',
  'Kuwakot',
  'Mahadevsthan',
  'Mahakali',
  'Maharudra',
  'Malladehi',
  'Nagarjun',
  'Siddheshwar',
  'Sharmali',
  'Raudidewal',
  'Rauleshwar',
  'Giregada',
  'Srikedar',
  'Srikot',
  'Sankarpur',
  'Shikarpur',

  //Darchula

  //West Rukum
  'Musikot',
  'Chaurjahari',
  'Aathbiskot',
  'Banphikot',
  'Tribeni',
  'Sani Bheri',

  //Salyan
  'Badagaun',
  'Bafukhola',
  'Bajh Kanda',
  'Bame Banghad',
  'Bhalchaur',
  'Chande',
  'Chhayachhetra',
  'Damachaur',
  'Dandagaun',
  'Darmakot',
  'Devasthal',
  'Jhajhari Pipal',
  'Dhakadam',
  'Dhanwang',
  'Hiwalcha',
  'Jhimpe',
  'Jimali',
  'Kabhrechaur',
  'Kajeri',
  'Kalagaun',
  'Kalimati Kalche',
  'Kalimati Rampur',
  'Kavra',
  'Khalanga',
  'Korbang Jhimpe',
  'Kotbara',
  'Kotmala',
  'Kubhinde',
  'Laxmipur',
  'Lekhpokhara',
  'Majh Khanda',
  'Marke',
  'Marmaparikanda',
  'Mulkhola',
  'Nigalchula',
  'Phalawang',
  'PipalNeta',
  'Rim',
  'Saijuwal Takura',
  'Sarpani Garpa',
  'Sibaratha',
  'Siddheswar',
  'Sinwang',
  'Suikot',
  'Syanikhal',
  'Tharmare',
  'Tribeni',

  //Dolpa
  'Bhijer',
  'Chharka',
  'Dho',
  'Jufal',
  'Kaigaun',
  'Kalika',
  'Lhan',
  'Lawan',
  'Likhu',
  'Majhphal',
  'Mukot',
  'Narku',
  'Pahada',
  'Phoksundo',
  'Raha',
  'Rimi',
  'Sahartara',
  'Saldang',
  'Sarmie',
  'Shun',
  'Tinje',
  'Tripurakot',

  //Humla
  'Baraigaun',
  'Bargaun',
  'Chhipra',
  'Dami',
  'Dandaphaya',
  'Gothi',
  'Hepka',
  'Jaur',
  'Kalika',
  'Kermi',
  'Khagalgaun',
  'Kharpunath',
  'Lali',
  'Lauthi',
  'Limi',
  'Madana',
  'Maila',
  'Melchham',
  'Mimi',
  'Muchu',
  'Raya',
  'Ripa',
  'Rodikot',
  'Sarkideu',
  'Saya',
  'Srinagar',
  'Srimastha',
  'Syada',
  'Thechaya',
  'Yanchu',
  'Simikot',

  //Jumla

  //Kalikot
  'Badalkot',
  'Bharta',
  'Chhapre',
  'Chilkhaya',
  'Daha',
  'Dholagohe',
  'Gela',
  'Jubitha',
  'Khin',
  'Kotbada',
  'Kumalgaun',
  'Lalu',
  'Malkot',
  'Manma',
  'Mehalmudi',
  'Mugraha',
  'Mumra',
  'Nanikot',
  'Odanaku',
  'Pakha',
  'Phoi Mahadev',
  'Phukot',
  'Ranku',
  'Ramnakot',
  'Ranchuli',
  'Rupsa',
  'Sipkhana',
  'Sukitaya',
  'Syuna',
  'Thirpu',

  //Mugu
  'Bhiyi',
  'Dhainakot',
  'Dolphu',
  'Jima',
  'Gamtha',
  'Hyanglu',
  'Jima',
  'Kale',
  'Karkibada',
  'Kimri',
  'Kotdada',
  'Mangri',
  'Mugu',
  'Natharpu',
  'Photu',
  'Pina',
  'Pulu',
  'Rara',
  'Rara Kalai',
  'Rowa',
  'Ruga',
  'Khamale',
  'Seri',
  'Srikot',
  'Srinagar',
  'Sukhadhik',

  //Surkhet

  //Dailekh
  'Awal Parajul',
  'Bada Bhairab',
  'Bada Khola',
  'Badalamji',
  'Baluwatar',
  'Bansi',
  'Baraha',
  'Basantamala',
  'Belaspur',
  'Belpata',
  'Bhawani',
  'Bindhyabasini',
  'Bisalla',
  'Chamunda',
  'Chauratha',
  'Dada Parajul',
  'Dullu',
  'Gamaudi',
  'Gauri',
  'Goganpani',
  'Jaganath',
  'Jambukandh',
  'Kal Bhairab',
  'Kalika',
  'Kasikandh',
  'Katti',
  'Khadkawada',
  'Kharigera',
  'Kusapani',
  'Lakhandra',
  'Lakuri',
  'Lalikhanda',
  'Lyati Bindraseni',
  'Mairi Kalikathum',
  'Malika',
  'Meheltoli',
  'Narayan Municipality',
  'Naule Katuwal',
  'Nepa',
  'Nomule',
  'Odhari',
  'Padukasthan',
  'Pagnath',
  'Piladi',
  'Pipalkot',
  'Pusakot Chiudi',
  'Rakam Karnali',
  'Raniban',
  'Rawalkot',
  'Rum',
  'Salleri',
  'Santalla',
  'Saraswati',
  'Seri',
  'Sigaudi',
  'Singasain',
  'Tilepata',
  'Tolijaisi',
  'Toli',

  //Jajarkot
  'Archhani',
  'Bhagawati Tol',
  'Bheri',
  'Bhur',
  'Daha',
  'Dandagaun',
  'Dasera',
  'Dhime',
  'Garkhakot',
  'Jagatipur',
  'Jhapra',
  'Junga Thapachaur',
  'Karkigaun',
  'Khagenkot',
  'Khalanga',
  'Kortrang',
  'Lahai',
  'Majhkot',
  'Nayakwada',
  'Paink',
  'Pajaru',
  'Punama',
  'Ragda',
  'Ramidanda',
  'Rokayagaun',
  'Sakala',
  'Salma',
  'Sima',
  'Suwanauli',
  'Talegaun',
  'Thala Raikar',
];

export { cities };