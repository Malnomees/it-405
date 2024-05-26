import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherComponent from './components/WeatherComponent';
import ExchangeRateComponent from './components/ExchangeRateComponent';
import './index.css';

const Home = () => (
    <div>
        <h1>Welcome to Dynamic Website</h1>
        <nav>
            <Link to="/weather">City Weather</Link>
            <Link to="/exchange-rate">Currency Exchange</Link>
            <Link to="/historical-facts">Saudi Historical Facts</Link>
            <Link to="/top-attractions">Top Attractions</Link>
        </nav>
    </div>
);

const HistoricalFacts = () => (
    <div>
        <h2>Saudi Historical Facts</h2>
        <p>Saudi Arabia,[e] officially the Kingdom of Saudi Arabia (KSA),[f] is a country in West Asia and the Middle East. It covers the bulk of the Arabian Peninsula and has a land area of about 2150000 km2 (830000 sq mi), making it the fifth-largest country in Asia and the largest in the Middle East. It is bordered by the Red Sea to the west; Jordan, Iraq, and Kuwait to the north; the Persian Gulf, Qatar and the United Arab Emirates to the east; Oman to the southeast; and Yemen to the south. Bahrain is an island country off its east coast. The Gulf of Aqaba in the northwest separates Saudi Arabia from Egypt and Israel. Saudi Arabia is the only country with a coastline along both the Red Sea and the Persian Gulf, and most of its terrain consists of arid desert, lowland, steppe, and mountains. The capital and largest city is Riyadh; the kingdom also hosts Islam's two holiest cities of Mecca and Medina.

Pre-Islamic Arabia, the territory that constitutes modern-day Saudi Arabia, was the site of several ancient cultures and civilizations; the prehistory of Saudi Arabia shows some of the earliest traces of human activity outside Africa.[17] The world's second-largest religion,[18] Islam, emerged in what is now Saudi Arabia. In the early 7th century, the Islamic prophet Muhammad united the population of the Arabian Peninsula and created a single Islamic religious polity.[19] Following his death in 632, his followers expanded the territory under Muslim rule beyond Arabia, conquering territories in North Africa, Central, South Asia and Iberia in a matter of decades.[20][21][22] Arab dynasties originating from modern-day Saudi Arabia founded the Rashidun (632–661), Umayyad (661–750), Abbasid (750–1517), and Fatimid (909–1171) caliphates, as well as numerous other dynasties in Asia, Africa, and Europe.

The area of modern-day Saudi Arabia formerly consisted of mainly four distinct historical regions: Hejaz, Najd, and parts of Eastern Arabia (Al-Ahsa) and South Arabia ('Asir).[23] The Kingdom of Saudi Arabia was founded in 1932 by King Abdulaziz (known as Ibn Saud in the West). He united the four regions into a single state through a series of conquests beginning in 1902 with the capture of Riyadh, the ancestral home of his family, the House of Saud. Saudi Arabia has since been an absolute monarchy, where political decisions are made on the basis of consultation among the King, the Council of Ministers, and the country's traditional elites that oversee a highly authoritarian regime.[24][25][26] The ultraconservative Wahhabi religious movement within Sunni Islam was described as a "predominant feature of Saudi culture" until the 2000s.[25][27] In 2016, the Saudi Arabian government curtailed the influence of the Wahhabi religious establishment and restricted the activities of the morality police and launched various Westernization policies such as the economic programme of Saudi Vision 2030.[28][29][30] In its Basic Law, Saudi Arabia defines itself as a sovereign Arab Islamic state with Islam as its official religion and Arabic as its official language. Petroleum was discovered in 1938 and followed up by several other finds in the Eastern Province.[31][32] Saudi Arabia has since become the world's third-largest oil producer and largest oil exporter, controlling the world's second-largest oil reserves and the sixth-largest gas reserves.[33] The kingdom is categorized as a World Bank high-income economy and is the only Arab country to be part of the G20 major economies.[34][35] The Saudi government has attracted criticism for various policies such as its intervention in the Yemeni Civil War, alleged sponsorship of terrorism as well as for its use of executions.[36][37]

Saudi Arabia is considered both a regional and middle power.[38][39] The Saudi economy is the largest in the Middle East; the world's nineteenth-largest economy by nominal GDP and the seventeenth largest by PPP. As a country with a very high Human Development Index,[40] it offers a tuition-free university education, no personal income tax,[41] and a free universal health care system. With its dependency on foreign labour, Saudi Arabia is home to the world's third-largest immigrant population. It also has one of the world's youngest populations, with approximately 50% of its population of 32.2 million[42] being under 25 years old.[43] In addition to being a member of the Gulf Cooperation Council, Saudi Arabia is an active and founding member of the United Nations, Organisation of Islamic Cooperation, Arab League, Arab Air Carriers' Organization and OPEC. Saudi Arabia is a dialogue partner of the Shanghai Cooperation Organisation.

Etymology
See also: House of Saud and Arab (etymology)
Following the amalgamation of the Kingdom of Hejaz and Nejd, the new state was named al-Mamlaka al-ʿArabiyya as-Suʿūdiyya (a transliteration of المملكة العربية السعودية in Arabic) by royal decree on 23 September 1932 by its founder, Abdulaziz bin Saud. Although this is normally translated as "the Kingdom of Saudi Arabia" in English,[44] it literally means "the Saudi Arab Kingdom",[45] or "the Arab Saudi Kingdom".[46]

The word "Saudi" is derived from the element as-Suʿūdīyya in the Arabic name of the country, which is a type of adjective known as a nisba, formed from the dynastic name of the Saudi royal family, the Al Saud (Arabic: آل سعود). Its inclusion expresses the view that the country is the personal possession of the royal family.[47][48] Al Saud is an Arabic name formed by adding the word Al, meaning "family of" or "House of",[49] to the personal name of an ancestor. In the case of Al Saud, this is Saud ibn Muhammad ibn Muqrin, the father of the dynasty's 18th-century founder, Muhammad bin Saud.[50].</p>
    </div>
);

const TopAttractions = () => (
    <div>
        <h2>Top Attractions in Saudi Arabia</h2>
        <p>. MADA’IN SALEH
It’s the first world heritage site in the kingdom of Saudi Arabia, and the largest archaeological site of the Nabataean civilization.
It contains more than 50 inscriptions from the pre-Nabataean civilization, and 111 archaeological tombs, 94 of which are decorated with inscriptions and ornaments.

HISTORIC JEDDAH
This culturally diverse neighborhood was built on the coast of the red sea, as a harbor for the trading trips that are sailing from the Indian ocean. It was also a shield for
the city protecting it from outside threats and attacks, and an entry for the pilgrims travelling by sea to Mecca.

AT-TURAIF DISTRICT
Being the first capital of the Al Saud family, and dating back to the 15th century, makes it a living museum that documents the Najdi lifestyle in the 18th century and in the first Saudi state.</p>
    </div>
);

const App = () => (
    <Router>
        <header>
            <h1>Dynamic Website</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/weather">City Weather</Link>
                <Link to="/exchange-rate">Currency Exchange</Link>
                <Link to="/historical-facts">Saudi Historical Facts</Link>
                <Link to="/top-attractions">Top Attractions</Link>
            </nav>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<WeatherComponent />} />
                <Route path="/exchange-rate" element={<ExchangeRateComponent />} />
                <Route path="/historical-facts" element={<HistoricalFacts />} />
                <Route path="/top-attractions" element={<TopAttractions />} />
            </Routes>
        </main>
    </Router>
);

export default App;
