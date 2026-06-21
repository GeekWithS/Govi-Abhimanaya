// Govi Abhimanaya — premium multilingual farmer platform
// Front-end only with graceful API fallbacks.

const STORAGE_KEYS = {
  lang: 'govi_lang',
  district: 'govi_district',
  category: 'govi_category',
  sort: 'govi_sort',
  season: 'govi_season',
  tasks: 'govi_tasks'
};

const APP = {
  currentTab: 'home',
  currentCategory: 'all',
  currentSort: 'default',
  weatherLocation: 'anuradhapura',
  language: 'en',
  season: 'maha',
  tasks: []
};

const localeMap = { en: 'en-LK', si: 'si-LK', ta: 'ta-LK' };

const translations = {
  en: {
    title: 'Govi Abhimanaya | Smart Agriculture Platform Sri Lanka',
    logoTitle: 'Govi Abhimanaya',
    logoSub: 'Smart Agriculture Platform',
    hotline: '1920 Hotline',
    navHome: 'Home',
    navWeather: 'Weather',
    navPrices: 'Market Prices',
    navUtilities: 'Farm Tools',
    navAI: 'Govi AI',
    statusRegion: 'Region:',
    statusWeather: 'Weather:',
    heroEyebrow: 'Premium digital farming hub',
    welcomeTitle: 'Welcome, Farmer Friend! 🌾',
    welcomeDesc: 'One dashboard for weather, market prices, field planning, and expert guidance.',
    buttonAskAI: 'Consult AI Assistant',
    buttonViewPrices: 'View Price Index',
    statCrop1: 'Samba Paddy (Grade A)',
    trendStable: 'Stable',
    statCrop2: 'Carrots (Dambulla)',
    homeWeatherTitle: "Today's Forecast",
    homeWeatherMore: 'Full Report',
    humidityLabel: 'Humidity:',
    windLabel: 'Wind Speed:',
    rainLabel: 'Rainfall:',
    homeAdviceTitle: 'Cultivation Advisory',
    homeAITitle: 'Ask Govi AI',
    onlineBadge: 'Online',
    homeAIDesc: 'Get instant verified advice on crop diseases, pest control, fertilizer ratios, and water scheduling.',
    miniSignalOne: 'Safe, local, and practical advice',
    miniSignalTwo: 'English • Sinhala • Tamil',
    miniChatPlaceholder: 'Type crop question (e.g. Tomato leaf rot)...',
    weatherCenterTitle: 'Weather Center 🌦️',
    weatherCenterSub: 'Precision agricultural meteorological services for agro-ecological zones',
    weatherSelectLabel: 'Select Farm Zone:',
    weatherAdvisoryTitle: 'Agro-Meteorological Advisory',
    weatherTipsTitle: '💡 Pro Farming Guidelines for Current Conditions:',
    forecastTitle: '7-Day Agricultural Forecast',
    marketTitle: 'Market Price Index 🪙',
    marketSub: 'Live wholesale trade values monitored across major national economic centers',
    priceSearchPlaceholder: 'Search crops...',
    sortDefault: 'Sort: Default',
    sortPriceAsc: 'Price: Low to High',
    sortPriceDesc: 'Price: High to Low',
    sortTrend: 'Trend Priority',
    allCrops: 'All Crops',
    grainsCategory: 'Grains / Paddy',
    vegetablesCategory: 'Vegetables',
    fruitsCategory: 'Fruits',
    tableCrop: 'Crop',
    tableCategory: 'Category',
    tablePrice: 'Wholesale Price',
    tableUnit: 'Unit',
    tableChange: 'Net Change',
    tableTrend: 'Market Trend',
    tableHub: 'Economic Hub',
    utilityTitle: 'Essential Agricultural Utilities 🛠️',
    utilitySub: 'Operational tools for field management, calculators, and national structural trackers',
    calcTitle: 'Subsidy & Fertilizer Calculator',
    calcDesc: 'Calculate fertilizer boundaries according to common crop standards and farm size.',
    calcCropLabel: 'Crop Standard:',
    calcAcresLabel: 'Total Farmland Size (Acres):',
    calcButton: 'Generate Allocation',
    calcOutputTitle: 'Recommended Maximum Dosage Limits:',
    resultUrea: 'Urea (Nitrogen):',
    resultTsp: 'TSP (Phosphorus):',
    resultMop: 'MOP (Potassium):',
    resultCompost: 'Organic Compost:',
    irrigationTitle: 'Irrigation Planner',
    irrigationDesc: 'Use rainfall, humidity, and crop needs to plan a simple water schedule.',
    irrigationCropLabel: 'Crop Type:',
    irrigationAreaLabel: 'Farm Size (Acres):',
    irrigationButton: 'Plan Irrigation',
    irrigationHint: 'Your irrigation plan will appear here after calculation.',
    calendarTitle: 'National Cultivation Timelines',
    calendarDesc: 'Follow the Maha and Yala seasonal timeline to better time land preparation and sowing.',
    reservoirTitle: 'Strategic Major Reservoirs Storage Monitor',
    reservoirDesc: 'Track water storage levels to make informed irrigation decisions.',
    liveFeed: 'Live Feed',
    tasksTitle: 'Farm Action Planner',
    tasksDesc: 'Save your daily work list, field checks, and reminders on this device.',
    taskPlaceholder: 'Add a task for today...',
    taskAdd: 'Add',
    pestTitle: 'Pest & Disease Watch',
    pestDesc: 'See likely risks for the current weather and district.',
    aiSidebarTitle: 'Govi Sahaya AI',
    aiSidebarSub: 'Certified Agriculture Advisor',
    aiStatus: 'Ready to help',
    aiUseTitle: 'Operational Parameters:',
    aiUseDesc: 'Ask in English, Sinhala, or Tamil. The assistant gives practical farm guidance.',
    aiSuggestTitle: 'Suggested Questions:',
    suggestQ1: 'Rice blast control',
    suggestQ2: 'Sena caterpillar control',
    suggestQ3: 'Paddy fertilizer schedule',
    suggestQ4: 'Vegetable soil preparation',
    seasonMaha: 'Maha Season',
    seasonYala: 'Yala Season',
    reservoirStatus: 'Status',
    chatHeaderTitle: 'Active Session: Govi Sahaya AI',
    chatHeaderSub: 'Friendly support for everyday farming questions',
    clearChat: 'Clear Chat',
    chatWelcome: 'Hello! Ask me about crops, pests, fertilizer, irrigation, or weather-based advice.',
    sendBtn: 'Send',
    footerLogoTitle: 'Govi Abhimanaya',
    footerLogoSub: 'Smart Agriculture Platform',
    footerDesc: 'A premium farming ecosystem designed to support better decisions and stronger harvests.',
    footerResourcesTitle: 'Institutional Links',
    footerHack: 'Built with passion for the Sri Lankan school innovation stage.',
    footerCopy: '© 2026 Govi Abhimanaya. All rights reserved.',
    calcNote: 'This is a planning guide. Confirm final amounts with your local agriculture officer.',
    irrigationResultMorning: 'Morning irrigation is recommended.',
    irrigationResultSkip: 'Rainfall is strong enough — irrigation can be paused for now.',
    irrigationResultLight: 'Light irrigation is enough for current conditions.',
    irrigationResultNormal: 'Use normal irrigation and keep soil mulch in place.',
    taskEmpty: 'No tasks yet. Add one important farm job for today.',
    taskDone: 'done',
    taskRemove: 'Remove',
    reservoirGood: 'Healthy',
    reservoirFair: 'Watch',
    reservoirLow: 'Low',
    weatherDryTip1: 'Irrigate early in the morning or late in the evening.',
    weatherDryTip2: 'Use mulch or straw to reduce evaporation.',
    weatherDryTip3: 'Avoid spraying fertilizer during peak heat.',
    weatherRainTip1: 'Delay spraying if heavy rain is expected.',
    weatherRainTip2: 'Clear drains so water does not stagnate in the field.',
    weatherRainTip3: 'Inspect low-lying areas for fungal risk.',
    weatherWindTip1: 'Secure seedlings and fragile covers.',
    weatherWindTip2: 'Use shelter belts or temporary windbreaks.',
    weatherWindTip3: 'Avoid overhead spraying in strong winds.',
    weatherMixedTip1: 'Monitor the field in the morning and evening.',
    weatherMixedTip2: 'Keep tools and seeds dry in covered storage.',
    weatherMixedTip3: 'Follow the next 24-hour forecast before major work.'
  },
  si: {
    title: 'Govi Abhimanaya | Sri Lanka බුද්ධිමත් කෘෂිකර්ම වේදිකාව',
    logoTitle: 'ගොවි අභිමානය',
    logoSub: 'බුද්ධිමත් කෘෂිකර්ම වේදිකාව',
    hotline: '1920 හදිසි දුරකථන',
    navHome: 'මුල් පිටුව',
    navWeather: 'කාලගුණය',
    navPrices: 'වෙළඳපොළ මිල',
    navUtilities: 'ගොවි මෙවලම්',
    navAI: 'ගොවි AI',
    statusRegion: 'ප්‍රදේශය:',
    statusWeather: 'කාලගුණය:',
    heroEyebrow: 'ප්‍රිමියම් ඩිජිටල් ගොවි කේන්ද්‍රය',
    welcomeTitle: 'සාදරයෙන් පිළිගනිමු, ගොවි මිතුරා! 🌾',
    welcomeDesc: 'කාලගුණය, වෙළඳපොළ මිල, ගොවි සැලසුම් සහ විශේෂඥ මඟ පෙන්වීම් එකම තිරයකින් ලබා ගන්න.',
    buttonAskAI: 'AI සහායකය සමඟ සාකච්ඡා කරන්න',
    buttonViewPrices: 'මිල දර්ශකය බලන්න',
    statCrop1: 'සම්බා වී (A ශ්‍රේණිය)',
    trendStable: 'ස්ථාවර',
    statCrop2: 'කැරට් (දඹුල්ල)',
    homeWeatherTitle: 'අද දවසේ අනාවැකිය',
    homeWeatherMore: 'සම්පූර්ණ වාර්තාව',
    humidityLabel: 'ආර්ද්‍රතාවය:',
    windLabel: 'සුළඟේ වේගය:',
    rainLabel: 'වර්ෂාපాతం:',
    homeAdviceTitle: 'වගා උපදෙස්',
    homeAITitle: 'ගොවි AI හට අසන්න',
    onlineBadge: 'සජීවී',
    homeAIDesc: 'බෝග රෝග, පළිබෝධ පාලනය, පොහොර අනුපාත සහ ජල සැලසුම් පිළිබඳ වහාම උපදෙස් ලබා ගන්න.',
    miniSignalOne: 'ආරක්ෂිත, දේශීය, ප්‍රායෝගික උපදෙස්',
    miniSignalTwo: 'English • සිංහල • தமிழ்',
    miniChatPlaceholder: 'බෝග ප්‍රශ්නයක් ටයිප් කරන්න (උදා: තක්කාලි කොළ කුණුවීම)...',
    weatherCenterTitle: 'කාලගුණ මධ්‍යස්ථානය 🌦️',
    weatherCenterSub: 'කෘෂි-පාරිසරික කලාප සඳහා නිවැරදි කාලගුණ සේවා',
    weatherSelectLabel: 'ගොවි කලාපය තෝරන්න:',
    weatherAdvisoryTitle: 'කෘෂි-කාලගුණ උපදෙස්',
    weatherTipsTitle: '💡 වර්තමාන තත්ත්ව සඳහා ගොවි උපදෙස්:',
    forecastTitle: 'දින 7 ක කෘෂිකාර්මික අනාවැකිය',
    marketTitle: 'වෙළඳපොළ මිල දර්ශකය 🪙',
    marketSub: 'ප්‍රධාන ආර්ථික මධ්‍යස්ථානවල තොග මිල ගණන් සජීවීව නිරීක්ෂණය කෙරේ',
    priceSearchPlaceholder: 'බෝග සොයන්න...',
    sortDefault: 'වර්ගීකරණය: පෙරනිමි',
    sortPriceAsc: 'මිල: අඩු සිට වැඩි',
    sortPriceDesc: 'මිල: වැඩි සිට අඩු',
    sortTrend: 'ප්‍රවණතා ප්‍රමුඛතාව',
    allCrops: 'සියලු බෝග',
    grainsCategory: 'ධාන්‍ය / වී',
    vegetablesCategory: 'එළවළු',
    fruitsCategory: 'පළතුරු',
    tableCrop: 'බෝගය',
    tableCategory: 'වර්ගය',
    tablePrice: 'තොග මිල',
    tableUnit: 'ඒකකය',
    tableChange: 'ශුද්ධ වෙනස',
    tableTrend: 'වෙළඳපොළ ප්‍රවණතාව',
    tableHub: 'ආර්ථික මධ්‍යස්ථානය',
    utilityTitle: 'අත්‍යාවශ්‍ය ගොවි මෙවලම් 🛠️',
    utilitySub: 'ගොවි කළමනාකරණය, ගණක යන්ත්‍ර සහ ජාතික දත්ත සඳහා මෙවලම්',
    calcTitle: 'සහනාධාර සහ පොහොර ගණකය',
    calcDesc: 'සාමාන්‍ය බෝග ප්‍රමිතීන් හා වගා භූමි ප්‍රමාණය අනුව පොහොර ප්‍රමාණය ගණනය කරන්න.',
    calcCropLabel: 'බෝග ප්‍රමිතිය:',
    calcAcresLabel: 'මුළු වගා භූමි ප්‍රමාණය (අක්කර):',
    calcButton: 'වෙන්කිරීම ජනනය කරන්න',
    calcOutputTitle: 'නිර්දේශිත උපරිම මාත්‍රා සීමා:',
    resultUrea: 'යුරියා (නයිට්‍රජන්):',
    resultTsp: 'TSP (පොස්පරස්):',
    resultMop: 'MOP (පොටෑසියම්):',
    resultCompost: 'ජෛව/කාබනික කොම්පෝස්ට්:',
    irrigationTitle: 'ජල සැලසුම්කරු',
    irrigationDesc: 'වර්ෂාපాతం, ආර්ද්‍රතාවය සහ බෝග අවශ්‍යතා අනුව ජල සැලසුම සකස් කරන්න.',
    irrigationCropLabel: 'බෝග වර්ගය:',
    irrigationAreaLabel: 'භූමි ප්‍රමාණය (අක්කර):',
    irrigationButton: 'ජල සැලසුම සකසන්න',
    irrigationHint: 'ගණනය කළ පසු මෙතැන ජල සැලසුම දිස්වේ.',
    calendarTitle: 'ජාතික වගා කාලරේඛා',
    calendarDesc: 'Maha සහ Yala කාලවලට අනුව ඉඩම් සකස් කිරීම සහ වැපිරීම නිසි වේලාවට කරන්න.',
    reservoirTitle: 'ප්‍රධාන ජලාශ ගබඩා නිරීක්ෂණය',
    reservoirDesc: 'ජල ගබඩා මට්ටම් පරීක්ෂා කර නිවැරදි ජල සැලසුම් තීරණ ගන්න.',
    liveFeed: 'සජීවී දත්ත',
    tasksTitle: 'ගොවි වැඩ සැලසුම්කරු',
    tasksDesc: 'දිනපතා වැඩ, ක්ෂේත්‍ර පරීක්ෂා සහ මතක තබාගත යුතු කරුණු මෙය තුළ සුරකින්න.',
    taskPlaceholder: 'අදට එක් කළ යුතු වැඩක්...',
    taskAdd: 'එකතු කරන්න',
    pestTitle: 'පළිබෝධ සහ රෝග අවදානම',
    pestDesc: 'වර්තමාන කාලගුණය සහ ප්‍රදේශය අනුව ඇතිවිය හැකි අවදානම් බලන්න.',
    aiSidebarTitle: 'ගොවි සහාය AI',
    aiSidebarSub: 'සහතිකලත් කෘෂිකර්ම උපදේශකයෙකි',
    aiStatus: 'සහාය සඳහා සූදානම්',
    aiUseTitle: 'භාවිත උපදෙස්:',
    aiUseDesc: 'English, Sinhala, හෝ Tamil භාෂාවෙන් අසන්න. ප්‍රායෝගික ගොවි උපදෙස් ලැබේ.',
    aiSuggestTitle: 'යෝජිත ප්‍රශ්න:',
    suggestQ1: 'වී බ්ලාස්ට් පාලනය',
    suggestQ2: 'සේනා පණුවා පාලනය',
    suggestQ3: 'වී සඳහා පොහොර කාලසටහන',
    suggestQ4: 'එළවළු සඳහා පස සකස් කිරීම',
    seasonMaha: 'මහ කන්නය',
    seasonYala: 'යල කන්නය',
    reservoirStatus: 'තත්ත්වය',
    chatHeaderTitle: 'සක්‍රීය සැසිය: ගොවි සහාය AI',
    chatHeaderSub: 'දෛනික ගොවි ප්‍රශ්න සඳහා සුහද සහාය',
    clearChat: 'චැට් හිස් කරන්න',
    chatWelcome: 'ආයුබෝවන්! බෝග, පළිබෝධ, පොහොර, ජල සැලසුම හෝ කාලගුණය ගැන අසන්න.',
    sendBtn: 'යවන්න',
    footerLogoTitle: 'ගොවි අභිමානය',
    footerLogoSub: 'බුද්ධිමත් කෘෂිකර්ම වේදිකාව',
    footerDesc: 'වඩා හොඳ තීරණ සහ ශක්තිමත් අස්වැන්න සඳහා නිර්මාණය කළ ප්‍රිමියම් ගොවි පද්ධතියකි.',
    footerResourcesTitle: 'ආයතනික සබැඳි',
    footerHack: 'ශ්‍රී ලංකාවේ පාසල් නවෝත්පාදන වේදිකාව සඳහා ආදරයෙන් නිර්මාණය කරන ලදී.',
    footerCopy: '© 2026 ගොවි අභිමානය. සියලු හිමිකම් ඇවිරිණි.',
    calcNote: 'මෙය සැලසුම් මාර්ගෝපදේශයකි. අවසන් ප්‍රමාණ නිවැරදි කර ගැනීමට ප්‍රාදේශීය කෘෂිකර්ම නිලධාරියාගෙන් තහවුරු කරන්න.',
    irrigationResultMorning: 'උදෑසන ජල සැපයුම නිර්දේශ කෙරේ.',
    irrigationResultSkip: 'වර්ෂාපాతం ප්‍රමාණවත් නිසා දැනට ජල සැපයුම වළක්වා ගත හැක.',
    irrigationResultLight: 'වර්තමාන තත්ත්වයට සැහැල්ලු ජල සැපයුම ප්‍රමාණවත්ය.',
    irrigationResultNormal: 'සාමාන්‍ය ජල සැපයුම භාවිතා කර පස් ආවරණය රැකගන්න.',
    taskEmpty: 'තව වැඩක් නැත. අදට එක් වැදගත් ගොවි කාර්යයක් එක් කරන්න.',
    taskDone: 'අවසන්',
    taskRemove: 'ඉවත් කරන්න',
    reservoirGood: 'හොඳයි',
    reservoirFair: 'පරීක්ෂා කරන්න',
    reservoirLow: 'අඩුයි',
    weatherDryTip1: 'උදෑසන හෝ සවස් යාමයේ ජලය දමන්න.',
    weatherDryTip2: 'වියළීම අඩු කිරීමට පිදුරු හෝ වැල්මල් පාවිච්චි කරන්න.',
    weatherDryTip3: 'අධික උණුසුම වෙලාවේ පොහොර ඉසින්න එපා.',
    weatherRainTip1: 'අධික වර්ෂාවක් තිබේ නම් ඉසිම ප්‍රමාද කරන්න.',
    weatherRainTip2: 'වතුර රැඳීම වළක්වීමට කාණු පිරිසිදු කරන්න.',
    weatherRainTip3: 'අඩු බිම්වල රෝග අවදානම පරීක්ෂා කරන්න.',
    weatherWindTip1: 'බීජ පැළ සහ නිරවුල් ආවරණ සුරක්ෂිත කරන්න.',
    weatherWindTip2: 'වින්ඩ්බ්‍රේක් හෝ ආවරණ යොදා ගන්න.',
    weatherWindTip3: 'ශක්තිමත් සුළඟේ ඉසිම වළක්වන්න.',
    weatherMixedTip1: 'උදෑසන සහ සවස් යාමයේ ක්ෂේත්‍රය පරීක්ෂා කරන්න.',
    weatherMixedTip2: 'උපකරණ සහ බීජ වියළි ලෙස ගබඩා කරන්න.',
    weatherMixedTip3: 'විශාල වැඩකට පෙර පැය 24ක අනාවැකිය බලන්න.'
  },
  ta: {
    title: 'Govi Abhimanaya | இலங்கை புத்திசாலி வேளாண்மை தளம்',
    logoTitle: 'கொவி அபிமானய',
    logoSub: 'புத்திசாலி வேளாண்மை தளம்',
    hotline: '1920 உதவி எண்',
    navHome: 'முகப்பு',
    navWeather: 'வானிலை',
    navPrices: 'சந்தை விலைகள்',
    navUtilities: 'விவசாய கருவிகள்',
    navAI: 'கொவி AI',
    statusRegion: 'பகுதி:',
    statusWeather: 'வானிலை:',
    heroEyebrow: 'பிரீமியம் டிஜிட்டல் விவசாய மையம்',
    welcomeTitle: 'வரவேற்கிறோம், விவசாய நண்பரே! 🌾',
    welcomeDesc: 'வானிலை, சந்தை விலை, வயல் திட்டமிடல் மற்றும் நிபுணர் வழிகாட்டுதல் அனைத்தும் ஒரே திரையில்.',
    buttonAskAI: 'AI உதவியாளரை அணுகவும்',
    buttonViewPrices: 'விலை குறியீட்டை பார்க்கவும்',
    statCrop1: 'சாம்பா நெல் (A தரம்)',
    trendStable: 'நிலையானது',
    statCrop2: 'கேரட் (தம்புள்ளை)',
    homeWeatherTitle: 'இன்றைய கணிப்பு',
    homeWeatherMore: 'முழு அறிக்கை',
    humidityLabel: 'ஈரப்பதம்:',
    windLabel: 'காற்றின் வேகம்:',
    rainLabel: 'மழைவீழ்ச்சி:',
    homeAdviceTitle: 'பயிர் ஆலோசனை',
    homeAITitle: 'கொவி AI-யிடம் கேளுங்கள்',
    onlineBadge: 'ஆன்லைன்',
    homeAIDesc: 'பயிர் நோய்கள், பூச்சி கட்டுப்பாடு, உர அளவுகள் மற்றும் நீர் திட்டமிடல் குறித்து உடனடி ஆலோசனை பெறுங்கள்.',
    miniSignalOne: 'பாதுகாப்பான, உள்ளூர், நடைமுறை ஆலோசனை',
    miniSignalTwo: 'English • සිංහල • தமிழ்',
    miniChatPlaceholder: 'பயிர் கேள்வியை தட்டச்சு செய்யவும் (எ.கா. Tomato leaf rot)...',
    weatherCenterTitle: 'வானிலை மையம் 🌦️',
    weatherCenterSub: 'வேளாண்மை சூழலியல் மண்டலங்களுக்கான துல்லிய வானிலை சேவைகள்',
    weatherSelectLabel: 'விவசாய பகுதியை தேர்ந்தெடுக்கவும்:',
    weatherAdvisoryTitle: 'வானிலை சார்ந்த வேளாண்மை ஆலோசனை',
    weatherTipsTitle: '💡 தற்போதைய நிலைக்கு விவசாய வழிகாட்டுதல்கள்:',
    forecastTitle: '7 நாள் வேளாண்மை கணிப்பு',
    marketTitle: 'சந்தை விலை குறியீடு 🪙',
    marketSub: 'முக்கிய பொருளாதார மையங்களில் இருந்து நேரடி மொத்த விலைகள் கண்காணிக்கப்படுகின்றன',
    priceSearchPlaceholder: 'பயிர்களை தேடவும்...',
    sortDefault: 'வரிசை: இயல்பு',
    sortPriceAsc: 'விலை: குறைவு முதல் அதிகம்',
    sortPriceDesc: 'விலை: அதிகம் முதல் குறைவு',
    sortTrend: 'போக்கு முன்னுரிமை',
    allCrops: 'அனைத்து பயிர்கள்',
    grainsCategory: 'தானியங்கள் / நெல்',
    vegetablesCategory: 'காய்கறிகள்',
    fruitsCategory: 'பழங்கள்',
    tableCrop: 'பயிர்',
    tableCategory: 'வகை',
    tablePrice: 'மொத்த விலை',
    tableUnit: 'அலகு',
    tableChange: 'நிகர மாற்றம்',
    tableTrend: 'சந்தை போக்கு',
    tableHub: 'பொருளாதார மையம்',
    utilityTitle: 'முக்கிய வேளாண்மை பயன்பாடுகள் 🛠️',
    utilitySub: 'வயல் மேலாண்மை, கணக்கீடு மற்றும் தேசிய கண்காணிப்பு கருவிகள்',
    calcTitle: 'மானியம் & உரக் கணக்கீடு',
    calcDesc: 'பொதுவான பயிர் தரநிலைகள் மற்றும் நிலப்பரப்பின் அடிப்படையில் உர அளவை கணக்கிடுங்கள்.',
    calcCropLabel: 'பயிர் தரநிலை:',
    calcAcresLabel: 'மொத்த நிலப்பரப்பு (ஏக்கர்):',
    calcButton: 'ஒதுக்கீடு உருவாக்கவும்',
    calcOutputTitle: 'பரிந்துரைக்கப்பட்ட அதிகபட்ச அளவு வரம்புகள்:',
    resultUrea: 'யூரியா (நைட்ரஜன்):',
    resultTsp: 'TSP (பாஸ்பரஸ்):',
    resultMop: 'MOP (பொட்டாசியம்):',
    resultCompost: 'இயற்கை உரம்:',
    irrigationTitle: 'நீர்ப்பாசன திட்டமிடுபவர்',
    irrigationDesc: 'மழைவீழ்ச்சி, ஈரப்பதம் மற்றும் பயிர் தேவைகளின் அடிப்படையில் நீர்ப்பாசன திட்டம் தயாரிக்கவும்.',
    irrigationCropLabel: 'பயிர் வகை:',
    irrigationAreaLabel: 'நிலப்பரப்பு (ஏக்கர்):',
    irrigationButton: 'நீர்ப்பாசனத்தை திட்டமிடு',
    irrigationHint: 'கணக்கீட்டிற்கு பிறகு உங்கள் திட்டம் இங்கே காட்டப்படும்.',
    calendarTitle: 'தேசிய பயிர்ச் சுழற்சி காலஅட்டவணைகள்',
    calendarDesc: 'Maha மற்றும் Yala பருவ அட்டவணையைப் பின்பற்றி நிலத் தயாரிப்பு மற்றும் விதைப்பைச் செய்யவும்.',
    reservoirTitle: 'முக்கிய நீர்த்தேக்க சேமிப்பு கண்காணிப்பு',
    reservoirDesc: 'நீர்த் தங்குமிட நிலைகளை கண்காணித்து நன்கு திட்டமிட்ட பாசனம் செய்யவும்.',
    liveFeed: 'நேரடி தரவு',
    tasksTitle: 'விவசாய பணித் திட்டமிடுபவர்',
    tasksDesc: 'இன்றைய வேலைகள், வயல் சரிபார்ப்புகள் மற்றும் நினைவூட்டல்களை இதில் சேமிக்கவும்.',
    taskPlaceholder: 'இன்றைக்கான பணியைச் சேர்க்கவும்...',
    taskAdd: 'சேர்',
    pestTitle: 'பூச்சி & நோய் கண்காணிப்பு',
    pestDesc: 'தற்போதைய வானிலை மற்றும் பகுதியின் அடிப்படையில் சாத்தியமான ஆபத்துகளைப் பாருங்கள்.',
    aiSidebarTitle: 'கொவி சஹாயா AI',
    aiSidebarSub: 'சான்றளிக்கப்பட்ட வேளாண்மை ஆலோசகர்',
    aiStatus: 'உதவ தயாராக உள்ளது',
    aiUseTitle: 'பயன்பாட்டு வழிமுறைகள்:',
    aiUseDesc: 'English, Sinhala, அல்லது Tamil இல் கேளுங்கள். நடைமுறை வேளாண்மை வழிகாட்டுதல் கிடைக்கும்.',
    aiSuggestTitle: 'பரிந்துரைக்கப்பட்ட கேள்விகள்:',
    suggestQ1: 'நெல் பிளாஸ்ட் கட்டுப்பாடு',
    suggestQ2: 'சேனா புழு கட்டுப்பாடு',
    suggestQ3: 'நெல் உர அட்டவணை',
    suggestQ4: 'காய்கறிகளுக்கான மண் தயாரிப்பு',
    seasonMaha: 'மஹா பருவம்',
    seasonYala: 'யால பருவம்',
    reservoirStatus: 'நிலை',
    chatHeaderTitle: 'செயலில்: கொவி சஹாயா AI',
    chatHeaderSub: 'நாளாந்திர விவசாய கேள்விகளுக்கு நட்பான ஆதரவு',
    clearChat: 'உரையாடலை அழி',
    chatWelcome: 'வணக்கம்! பயிர்கள், பூச்சிகள், உரம், பாசனம், அல்லது வானிலை அடிப்படையிலான ஆலோசனை பற்றி கேளுங்கள்.',
    sendBtn: 'அனுப்பு',
    footerLogoTitle: 'கொவி அபிமானய',
    footerLogoSub: 'புத்திசாலி வேளாண்மை தளம்',
    footerDesc: 'சிறந்த முடிவுகள் மற்றும் வலுவான அறுவடைக்காக உருவாக்கப்பட்ட பிரீமியம் விவசாய அமைப்பு.',
    footerResourcesTitle: 'அதிகாரப்பூர்வ இணைப்புகள்',
    footerHack: 'இலங்கையின் பள்ளி புதுமை மேடைக்காக ஆர்வத்துடன் உருவாக்கப்பட்டது.',
    footerCopy: '© 2026 கொவி அபிமானய. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    calcNote: 'இது திட்டமிடும் வழிகாட்டி மட்டுமே. இறுதி அளவுகளை உள்ளூர் வேளாண்மை அதிகாரியுடன் உறுதிப்படுத்தவும்.',
    irrigationResultMorning: 'காலை நீர்ப்பாசனம் பரிந்துரைக்கப்படுகிறது.',
    irrigationResultSkip: 'மழைவீழ்ச்சி போதுமானதால் இப்போது நீர்ப்பாசனம் நிறுத்தலாம்.',
    irrigationResultLight: 'தற்போதைய நிலைக்கு லேசான நீர்ப்பாசனம் போதும்.',
    irrigationResultNormal: 'இயல்பான நீர்ப்பாசனத்தைப் பயன்படுத்தி மண் ஈரத்தை பாதுகாக்கவும்.',
    taskEmpty: 'இன்னும் பணிகள் இல்லை. இன்றைக்கு ஒரு முக்கிய வேளாண்மை பணியைச் சேர்க்கவும்.',
    taskDone: 'முடிந்தது',
    taskRemove: 'நீக்கு',
    reservoirGood: 'நல்லது',
    reservoirFair: 'கவனம்',
    reservoirLow: 'குறைவு',
    weatherDryTip1: 'காலை அல்லது மாலை நேரத்தில் பாசனம் செய்யுங்கள்.',
    weatherDryTip2: 'ஆவியை குறைக்க மழை பொருள் அல்லது வைக்கோல் பயன்படுத்துங்கள்.',
    weatherDryTip3: 'அதிக வெப்ப நேரத்தில் உரத்தைத் தெளிக்க வேண்டாம்.',
    weatherRainTip1: 'கனமழை எதிர்பார்க்கப்பட்டால் தெளிப்பை தள்ளி வையுங்கள்.',
    weatherRainTip2: 'நீர் தேக்கம் தவிர்க்க வடிகால்களை சுத்தம் செய்யுங்கள்.',
    weatherRainTip3: 'தாழ்வான பகுதிகளில் நோய் அபாயத்தைச் சரிபார்க்கவும்.',
    weatherWindTip1: 'நாற்றுகள் மற்றும் மென்மையான மூடிகளைப் பாதுகாக்கவும்.',
    weatherWindTip2: 'காற்றுத்தடுப்பு பயன்படுத்தவும்.',
    weatherWindTip3: 'பலமான காற்றில் மேலே தெளிப்பதைத் தவிர்க்கவும்.',
    weatherMixedTip1: 'காலை மற்றும் மாலை நேரங்களில் வயலை கண்காணிக்கவும்.',
    weatherMixedTip2: 'கருவிகள் மற்றும் விதைகளை உலர்ந்த இடத்தில் வையுங்கள்.',
    weatherMixedTip3: 'முக்கிய வேலைகளுக்கு முன் அடுத்த 24 மணி நேர கணிப்பை பார்க்கவும்.'
  }
};

const weatherProfiles = {
  anuradhapura: {
    location: 'Anuradhapura',
    zone: 'North Central Province',
    temp: 32, humidity: 65, windSpeed: 12, rainfall: 0, uvIndex: 9,
    condition: 'Partly Cloudy',
    forecast: ['Sunny', 'Partly Cloudy', 'Sunny', 'Windy', 'Partly Cloudy', 'Sunny', 'Mild Rain']
  },
  polonnaruwa: {
    location: 'Polonnaruwa',
    zone: 'North Central Province',
    temp: 33, humidity: 60, windSpeed: 14, rainfall: 0, uvIndex: 10,
    condition: 'Sunny',
    forecast: ['Sunny', 'Sunny', 'Partly Cloudy', 'Windy', 'Sunny', 'Sunny', 'Light Rain']
  },
  nuwaraeliya: {
    location: 'Nuwara Eliya',
    zone: 'Central Highlands',
    temp: 20, humidity: 85, windSpeed: 9, rainfall: 4, uvIndex: 5,
    condition: 'Misty',
    forecast: ['Misty', 'Light Rain', 'Cloudy', 'Misty', 'Rainy', 'Cloudy', 'Sunny']
  },
  kurunegala: {
    location: 'Kurunegala',
    zone: 'North Western Province',
    temp: 31, humidity: 70, windSpeed: 13, rainfall: 1, uvIndex: 8,
    condition: 'Partly Cloudy',
    forecast: ['Partly Cloudy', 'Sunny', 'Mild Rain', 'Partly Cloudy', 'Windy', 'Sunny', 'Cloudy']
  },
  jaffna: {
    location: 'Jaffna',
    zone: 'Northern Province',
    temp: 34, humidity: 62, windSpeed: 16, rainfall: 0, uvIndex: 10,
    condition: 'Windy',
    forecast: ['Sunny', 'Windy', 'Partly Cloudy', 'Windy', 'Sunny', 'Sunny', 'Cloudy']
  },
  badulla: {
    location: 'Badulla',
    zone: 'Uva Province',
    temp: 24, humidity: 79, windSpeed: 11, rainfall: 3, uvIndex: 6,
    condition: 'Cloudy',
    forecast: ['Cloudy', 'Mild Rain', 'Cloudy', 'Sunny', 'Partly Cloudy', 'Misty', 'Rainy']
  },
  hambantota: {
    location: 'Hambantota',
    zone: 'Southern Dry Zone',
    temp: 33, humidity: 58, windSpeed: 18, rainfall: 0, uvIndex: 10,
    condition: 'Sunny',
    forecast: ['Sunny', 'Sunny', 'Windy', 'Partly Cloudy', 'Sunny', 'Sunny', 'Light Rain']
  }
};

const priceCatalog = [
  { name: 'Samba Paddy', si: 'සම්බා වී', ta: 'சாம்பா நெல்', category: 'grains', price: 198, unit: 'kg', change: '+2.0', trend: 'stable', hub: 'Dambulla' },
  { name: 'Nadu Paddy', si: 'නඩු වී', ta: 'நாடு நெல்', category: 'grains', price: 184, unit: 'kg', change: '-1.5', trend: 'down', hub: 'Polonnaruwa' },
  { name: 'Green Gram', si: 'මුං ඇට', ta: 'பச்சைப்பயறு', category: 'grains', price: 760, unit: 'kg', change: '+3.8', trend: 'up', hub: 'Anuradhapura' },
  { name: 'Carrot', si: 'කැරට්', ta: 'கேரட்', category: 'vegetables', price: 290, unit: 'kg', change: '+9.4', trend: 'up', hub: 'Dambulla' },
  { name: 'Leek', si: 'ලීක්ස්', ta: 'லீக்', category: 'vegetables', price: 340, unit: 'kg', change: '-2.1', trend: 'down', hub: 'Nuwara Eliya' },
  { name: 'Tomato', si: 'තක්කාලි', ta: 'தக்காளி', category: 'vegetables', price: 260, unit: 'kg', change: '+4.7', trend: 'up', hub: 'Nuwara Eliya' },
  { name: 'Chilli', si: 'මිරිස්', ta: 'மிளகாய்', category: 'vegetables', price: 980, unit: 'kg', change: '+6.5', trend: 'up', hub: 'Jaffna' },
  { name: 'Banana', si: 'කෙසෙල්', ta: 'வாழை', category: 'fruits', price: 220, unit: 'kg', change: '-0.8', trend: 'stable', hub: 'Kurunegala' },
  { name: 'Papaya', si: 'පැපොල්', ta: 'பப்பாளி', category: 'fruits', price: 250, unit: 'kg', change: '+1.2', trend: 'up', hub: 'Hambantota' },
  { name: 'Pineapple', si: 'අන්නාසි', ta: 'அன்னாசி', category: 'fruits', price: 300, unit: 'kg', change: '+2.6', trend: 'up', hub: 'Badulla' },
  { name: 'Onion', si: 'ලූනු', ta: 'வெங்காயம்', category: 'vegetables', price: 410, unit: 'kg', change: '-3.2', trend: 'down', hub: 'Dambulla' },
  { name: 'Potato', si: 'අල', ta: 'உருளைக்கிழங்கு', category: 'vegetables', price: 260, unit: 'kg', change: '+0.9', trend: 'stable', hub: 'Nuwara Eliya' }
];

const reservoirData = [
  { name: 'Minneriya', capacity: 100, level: 72 },
  { name: 'Kaudulla', capacity: 100, level: 61 },
  { name: 'Parakrama Samudraya', capacity: 100, level: 55 },
  { name: 'Gal Oya', capacity: 100, level: 49 }
];

const seasonTimelines = {
  maha: [
    { month: 'September - October', stage: 'Land preparation', si: 'ඉඩම් සකස් කිරීම', ta: 'நிலத் தயாரிப்பு' },
    { month: 'October - November', stage: 'Sowing / transplanting', si: 'වපුරා / පැළඳවීම', ta: 'விதைப்பு / நட்டு அமைத்தல்' },
    { month: 'December - January', stage: 'Crop care and fertilizer', si: 'වගා රැකබලා ගැනීම සහ පොහොර', ta: 'பயிர் பராமரிப்பு மற்றும் உரம்' },
    { month: 'February - March', stage: 'Harvest planning', si: 'අස්වනු සැලසුම', ta: 'அறுவடை திட்டமிடல்' }
  ],
  yala: [
    { month: 'April - May', stage: 'Field preparation', si: 'ක්ෂේත්‍ර සකස් කිරීම', ta: 'வயல் தயாரிப்பு' },
    { month: 'May - June', stage: 'Sowing', si: 'වපුරා', ta: 'விதைப்பு' },
    { month: 'July - August', stage: 'Water management', si: 'ජල කළමනාකරණය', ta: 'நீர் மேலாண்மை' },
    { month: 'August - September', stage: 'Harvest and storage', si: 'අස්වනු සහ ගබඩා කිරීම', ta: 'அறுவடை மற்றும் சேமிப்பு' }
  ]
};

const fertilizerPlans = {
  'paddy-nadu': { urea: 110, tsp: 55, mop: 30, compost: 500, note: 'Split into three applications for better efficiency.' },
  'paddy-keeri': { urea: 95, tsp: 45, mop: 25, compost: 450, note: 'Keeri Samba responds well to moderate split dressings.' },
  maize: { urea: 120, tsp: 60, mop: 40, compost: 400, note: 'Ensure side dressing after 3-4 weeks.' },
  'vegetables-up': { urea: 80, tsp: 50, mop: 35, compost: 600, note: 'Use compost heavily to improve soil texture.' }
};

const localReplies = {
  riceBlast: {
    en: `### Rice blast control

- Remove infected leaves quickly.
- Keep nitrogen balanced; do not overuse urea.
- Improve spacing and airflow.
- Use a recommended fungicide only with local guidance.`,
    si: `### වී බ්ලාස්ට් පාලනය

- ආසාදිත කොළ ඉවත් කරන්න.
- යුරියා අධිකව නොදමන්න.
- පැළ අතර ඉඩකඩ හොඳින් තබන්න.
- නිල උපදෙස් අනුව පමණක් සුදුසු දිලීරනාශකයක් භාවිත කරන්න.`,
    ta: `### நெல் பிளாஸ்ட் கட்டுப்பாடு

- பாதிக்கப்பட்ட இலைகளை விரைவில் அகற்றவும்.
- யூரியா அளவை சமநிலையாக வைத்துக்கொள்ளவும்.
- செடிகளுக்கு இடைவெளி கொடுத்து காற்றோட்டம் மேம்படுத்தவும்.
- உள்ளூர் ஆலோசனைப்படி மட்டுமே பூஞ்சைநாசினி பயன்படுத்தவும்.`
  },
  sena: {
    en: `### Sena caterpillar control

- Check the crop early in the morning.
- Hand-pick small infestations where possible.
- Keep field edges clean.
- Ask an agriculture officer before using stronger sprays.`,
    si: `### සේනා පණුවා පාලනය

- උදෑසන සිට ක්ෂේත්‍රය පරීක්ෂා කරන්න.
- පුංචි ආසාදන අතින් ඉවත් කරන්න.
- ක්ෂේත්‍ර අයින පිරිසිදුව තබන්න.
- ශක්තිමත් රසායනික භාවිතයට පෙර නිලධාරියාගෙන් අසන්න.`,
    ta: `### சேனா புழு கட்டுப்பாடு

- அதிகாலை நேரத்தில் பயிரைச் சரிபார்க்கவும்.
- சிறிய தாக்குதலை கையால் அகற்றவும்.
- வயல் ஓரங்களை சுத்தமாக வைத்திருங்கள்.
- வலுவான தெளிப்புக்கு முன் வேளாண்மை அதிகாரியிடம் ஆலோசிக்கவும்.`
  },
  fertilizer: {
    en: `### Fertilizer tip

- Follow soil test results when possible.
- Split doses instead of applying everything at once.
- Water lightly after application if the soil is dry.`,
    si: `### පොහොර උපදෙස්

- හැකි නම් පස් පරීක්ෂණ ප්‍රතිඵල භාවිත කරන්න.
- එකවර නොව කොටස් වශයෙන් දමන්න.
- පස වියළි නම් දීමෙන් පසු සැහැල්ලුවෙන් වතුර දමන්න.`,
    ta: `### உர ஆலோசனை

- முடிந்தால் மண் பரிசோதனை முடிவுகளைப் பயன்படுத்தவும்.
- ஒரே நேரத்தில் அல்ல; பகுதிகளாக இடவும்.
- மண் வறண்டிருந்தால் லேசாக நீர் கொடுக்கவும்.`
  },
  irrigation: {
    en: `### Irrigation tip

- Water early in the day to reduce evaporation.
- Check the forecast before turning on pumps.
- Use mulching to save water.`,
    si: `### ජල සැපයුම් උපදෙස්

- වාෂ්පීකරණය අඩු කිරීමට උදෑසන ජලය දෙන්න.
- පොම්ප ක්‍රියාත්මක කිරීමට පෙර අනාවැකිය බලන්න.
- ජලය ඉතිරි කිරීමට පස් ආවරණය භාවිත කරන්න.`,
    ta: `### நீர்ப்பாசன ஆலோசனை

- ஆவியாக்கத்தை குறைக்க காலை நேரத்தில் நீர் அளிக்கவும்.
- பம்ப் இயக்குவதற்கு முன் கணிப்பை பார்க்கவும்.
- நீரைச் சேமிக்க மேற்பரப்பு மூடுதலைப் பயன்படுத்தவும்.`
  },
  generic: {
    en: `### Practical farming help

I can help with crop care, pests, fertilizer, irrigation, weather, and market prices. Try asking a specific question like **"best fertilizer for paddy"** or **"how to control leaf spot"**.`,
    si: `### ප්‍රායෝගික ගොවි උපකාරය

බෝග රැකබලා ගැනීම, පළිබෝධ, පොහොර, ජල සැපයුම, කාලගුණය සහ වෙළඳපොළ මිල ගැන මට උදව් කළ හැක. උදාහරණයක් ලෙස **"වී සඳහා හොඳම පොහොර"** හෝ **"කොළ ලප පාලනය"** ලෙස අසන්න.`,
    ta: `### நடைமுறை விவசாய உதவி

பயிர் பராமரிப்பு, பூச்சிகள், உரம், நீர்ப்பாசனம், வானிலை மற்றும் சந்தை விலைகள் குறித்து உதவ முடியும். **"நெல் பயிருக்கு சிறந்த உரம்"** அல்லது **"இலைப் புள்ளி நோய் எவ்வாறு கட்டுப்படுத்துவது"** என்று கேளுங்கள்.`
  }
};

let latestWeather = null;
let latestPriceData = [...priceCatalog];

document.addEventListener('DOMContentLoaded', init);

function init() {
  APP.language = localStorage.getItem(STORAGE_KEYS.lang) || 'en';
  APP.weatherLocation = localStorage.getItem(STORAGE_KEYS.district) || 'anuradhapura';
  APP.currentCategory = localStorage.getItem(STORAGE_KEYS.category) || 'all';
  APP.currentSort = localStorage.getItem(STORAGE_KEYS.sort) || 'default';
  APP.season = localStorage.getItem(STORAGE_KEYS.season) || 'maha';
  APP.tasks = loadTasks();

  bindNav();
  setupChatAutogrow();
  setupPricesControls();
  setupTaskInput();
  setupKeyboardSupport();

  setLanguage(APP.language, false);
  updateDateDisplay();
  switchTab('home');

  async function fetchWeather(district) {
  const coords = {
    anuradhapura: { lat: 8.3114, lon: 80.4037 },
    nuwaraeliya: { lat: 6.9497, lon: 80.7891 },
    dambulla: { lat: 7.8596, lon: 80.6508 },
    hambantota: { lat: 6.1241, lon: 81.1185 },
    jaffna: { lat: 9.6615, lon: 80.0255 }
  };
  
  const loc = coords[district.toLowerCase()] || coords.anuradhapura;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FColombo`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    
    // Update your DOM elements
    document.querySelector('.temp-display').textContent = `${Math.round(data.current.temperature_2m)}°C`;
    document.querySelector('.humidity-display').textContent = `${data.current.relative_humidity_2m}%`;
    document.querySelector('.wind-display').textContent = `${data.current.wind_speed_10m} km/h`;
    
    console.log("Real weather loaded!");
  } catch (error) {
    console.error("Weather fetch failed:", error);
  }
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function escapeHTML(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function bindNav() {
  qsa('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      switchTab(link.dataset.tab);
    });
  });
}

function setupPricesControls() {
  const sort = qs('#price-sort');
  if (sort) {
    sort.value = APP.currentSort;
  }
}

function setupTaskInput() {
  const input = qs('#task-input');
  if (input) {
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
      }
    });
  }
}

function setupKeyboardSupport() {
  const miniInput = qs('#ai-mini-input');
  if (miniInput) {
    miniInput.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitMiniChat();
      }
    });
  }
}

function setLanguage(lang, persist = true) {
  APP.language = translations[lang] ? lang : 'en';
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.lang, APP.language);
  }

  document.documentElement.lang = APP.language;
  document.documentElement.dataset.lang = APP.language;
  document.title = translations[APP.language].title;

  qsa('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[APP.language][key];
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  qsa('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const value = translations[APP.language][key];
    if (value !== undefined) {
      el.setAttribute('placeholder', value);
    }
  });

  qsa('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.textContent.trim() === languageBadge(APP.language)));

  if (qs('#price-sort')) {
    qs('#price-sort').value = APP.currentSort;
  }

  updateDateDisplay();
  if (latestWeather) {
    renderWeather(latestWeather);
  }
  fetchPrices(false);
  renderReservoirs();
  toggleSeason(APP.season, false);
  renderTasks();
  renderPestAlerts();

  if (qs('#calc-results')?.style.display !== 'none') {
    calculateFertilizer();
  }
  if (qs('#irrigation-result')?.dataset.hasResult === 'true') {
    calculateIrrigation();
  }
}

function languageBadge(lang) {
  if (lang === 'si') return 'සිං';
  if (lang === 'ta') return 'தமிழ்';
  return 'EN';
}

function updateDateDisplay() {
  const locale = localeMap[APP.language] || 'en-LK';
  const today = new Date();
  const formatted = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(today);
  const target = qs('#current-date');
  if (target) target.textContent = formatted;
}

function switchTab(tabId) {
  APP.currentTab = tabId;
  qsa('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.tab === tabId));
  qsa('.tab-pane').forEach(pane => pane.classList.toggle('active', pane.id === `tab-${tabId}`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function fetchWeather(location, persist = false) {
  APP.weatherLocation = location;
  if (persist) localStorage.setItem(STORAGE_KEYS.district, location);

  const fallback = weatherProfiles[location] || weatherProfiles.anuradhapura;
  let data = fallback;

  try {
    const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
    if (response.ok) {
      const apiData = await response.json();
      data = normalizeWeather(apiData, fallback);
    }
  } catch (_) {
    // fallback used
  }

  latestWeather = data;
  renderWeather(data);
  renderPestAlerts();
}

function normalizeWeather(api, fallback) {
  return {
    location: api.location || fallback.location,
    zone: api.district || api.zone || fallback.zone,
    temp: Number(api.temperature ?? api.temp ?? fallback.temp),
    condition: String(api.condition || fallback.condition),
    humidity: Number(api.humidity ?? fallback.humidity),
    windSpeed: Number(api.windSpeed ?? fallback.windSpeed),
    rainfall: Number(api.rainfall ?? fallback.rainfall),
    uvIndex: Number(api.uvIndex ?? fallback.uvIndex),
    forecast: Array.isArray(api.forecast) && api.forecast.length ? api.forecast.map(day => ({
      day: day.day || day.name || '',
      condition: day.condition || 'Partly Cloudy',
      temp: day.temp || `${Math.round(fallback.temp)}°C`
    })) : fallback.forecast.map((condition, index) => ({
      day: dayNameFromIndex(index),
      condition,
      temp: `${Math.round(fallback.temp + tempOffset(index, condition))}°C`
    }))
  };
}

function dayNameFromIndex(index) {
  return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index] || 'Day';
}

function tempOffset(index, condition) {
  const base = [0, 1, 1, -1, 0, 1, -1][index] ?? 0;
  if (/rain|mist/i.test(condition)) return -2 + base;
  if (/wind/i.test(condition)) return -1 + base;
  return base;
}

function renderWeather(data) {
  const t = translations[APP.language];
  const locationName = data.location;
  const condition = data.condition;
  const tempText = `${Math.round(data.temp)}°C`;

  setText('#current-location', locationName);
  setText('#current-summary-temp', `${tempText} · ${condition}`);
  setText('#w-district-name', locationName);
  setText('#w-district-zone', data.zone);
  setText('#w-temp', tempText);
  setText('#w-condition', condition);
  setText('#w-humidity', `${Math.round(data.humidity)}%`);
  setText('#w-wind', `${Math.round(data.windSpeed)} km/h`);
  setText('#w-rainfall', `${Number(data.rainfall).toFixed(1)} mm`);
  setText('#w-uv', String(data.uvIndex));

  const iconHtml = getWeatherIcon(condition);
  setHTML('#home-weather-icon', iconHtml);
  setHTML('#w-large-icon', iconHtml);

  setText('#home-temp', tempText);
  setText('#home-condition', condition);
  setText('#home-humidity', `${Math.round(data.humidity)}%`);
  setText('#home-wind', `${Math.round(data.windSpeed)} km/h`);
  setText('#home-rainfall', `${Number(data.rainfall).toFixed(1)} mm`);

  const advice = getWeatherAdvice(condition, data, APP.language);
  setText('#w-agri-advice', advice);
  setText('#home-weather-advice', advice);

  renderForecast(data.forecast || []);
  renderWeatherTips(condition, data);
}

function getWeatherAdvice(condition, data, lang) {
  const cond = condition.toLowerCase();
  const heavyRain = cond.includes('rain');
  const windy = cond.includes('wind');
  const misty = cond.includes('mist') || cond.includes('cloud');
  const hot = Number(data.temp) >= 31 || Number(data.uvIndex) >= 9;

  const open = {
    en: 'Current conditions suggest: ',
    si: 'වර්තමාන තත්ත්වය අනුව: ',
    ta: 'தற்போதைய நிலைபடி: '
  }[lang] || 'Current conditions suggest: ';

  let main = tAdvice(lang, heavyRain ? 'rain' : windy ? 'wind' : hot ? 'dry' : misty ? 'mixed' : 'dry');
  return `${open}${main}`;
}

function tAdvice(lang, key) {
  const map = {
    dry: {
      en: 'keep water use efficient, irrigate early, and avoid fertilizer loss.',
      si: 'ජලය සුරක්ෂිතව භාවිත කරන්න, උදෑසන ජලය දෙන්න, සහ පොහොර නාස්තිය වළක්වන්න.',
      ta: 'நீரைப் பயனுள்ள முறையில் பயன்படுத்தி, காலை நேரத்தில் பாசனம் செய்து, உர இழப்பைத் தவிர்க்கவும்.'
    },
    rain: {
      en: 'delay spraying, clear field drains, and protect stored inputs from moisture.',
      si: 'ඉසින කාර්ය පමා කරන්න, කාණු පිරිසිදු කරන්න, සහ ගබඩා කළ ද්‍රව්‍ය තෙතමනයෙන් ආරක්ෂා කරන්න.',
      ta: 'தெளிப்பை தள்ளி வையுங்கள், வடிகால்களை சுத்தப்படுத்துங்கள், மற்றும் சேமித்த பொருட்களை ஈரப்பதத்திலிருந்து பாதுகாக்கவும்.'
    },
    wind: {
      en: 'secure seedlings, avoid overhead spraying, and check windbreaks.',
      si: 'බීජ පැළ ආරක්ෂා කරන්න, ඉහළින් ඉසිම වළක්වන්න, සහ සුළඟ වැළැක්වීම් පරීක්ෂා කරන්න.',
      ta: 'நாற்றுகளைப் பாதுகாக்கவும், மேலிருந்து தெளிப்பதைத் தவிர்க்கவும், மற்றும் காற்றுத்தடுப்புகளைச் சரிபார்க்கவும்.'
    },
    mixed: {
      en: 'monitor the field closely and follow the next 24-hour forecast before major work.',
      si: 'ක්ෂේත්‍රය නිරන්තරයෙන් නිරීක්ෂණය කරන්න සහ විශාල වැඩකට පෙර පැය 24ක අනාවැකිය බලන්න.',
      ta: 'வயலை நெருக்கமாகக் கண்காணித்து, பெரிய பணிக்கு முன் அடுத்த 24 மணி நேரக் கணிப்பைப் பாருங்கள்.'
    }
  };
  return (map[key] && map[key][lang]) || map[key].en;
}

function getWeatherIcon(condition) {
  const cond = String(condition).toLowerCase();
  if (cond.includes('sunny') || cond.includes('clear')) return '<i class="fa-solid fa-sun"></i>';
  if (cond.includes('mist') || cond.includes('fog')) return '<i class="fa-solid fa-smog"></i>';
  if (cond.includes('storm') || cond.includes('thunder')) return '<i class="fa-solid fa-cloud-bolt"></i>';
  if (cond.includes('rain')) return '<i class="fa-solid fa-cloud-showers-heavy"></i>';
  if (cond.includes('wind')) return '<i class="fa-solid fa-wind"></i>';
  return '<i class="fa-solid fa-cloud-sun"></i>';
}

function renderForecast(forecastData) {
  const grid = qs('#forecast-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const days = forecastData.length ? forecastData : Array.from({ length: 7 }, (_, i) => ({
    day: dayNameFromIndex(i),
    condition: 'Partly Cloudy',
    temp: `${Math.round((latestWeather?.temp || 30) + tempOffset(i, 'Partly Cloudy'))}°C`
  }));

  days.slice(0, 7).forEach((day, index) => {
    const card = document.createElement('div');
    card.className = 'forecast-card';
    card.innerHTML = `
      <div class="fc-day">${escapeHTML(day.day || dayNameFromIndex(index))}</div>
      <div class="fc-icon">${getWeatherIcon(day.condition)}</div>
      <div class="fc-temp">${escapeHTML(day.temp || '')}</div>
      <div class="fc-cond">${escapeHTML(day.condition || '')}</div>
    `;
    grid.appendChild(card);
  });
}

function renderWeatherTips(condition, data) {
  const list = qs('#w-dynamic-tips');
  if (!list) return;
  list.innerHTML = '';

  const cond = String(condition).toLowerCase();
  const lang = APP.language;
  let keys = ['weatherMixedTip1', 'weatherMixedTip2', 'weatherMixedTip3'];

  if (cond.includes('rain')) keys = ['weatherRainTip1', 'weatherRainTip2', 'weatherRainTip3'];
  else if (cond.includes('wind')) keys = ['weatherWindTip1', 'weatherWindTip2', 'weatherWindTip3'];
  else if (Number(data.temp) >= 31 || Number(data.uvIndex) >= 9) keys = ['weatherDryTip1', 'weatherDryTip2', 'weatherDryTip3'];

  keys.forEach(key => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${escapeHTML(translations[lang][key])}</span>`;
    list.appendChild(li);
  });
}

async function fetchPrices(forceFallback = false) {
  const searchInput = qs('#price-search');
  const searchVal = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const sortSelect = qs('#price-sort');
  if (sortSelect) {
    APP.currentSort = sortSelect.value;
    localStorage.setItem(STORAGE_KEYS.sort, APP.currentSort);
  }

  let data = [...priceCatalog];

  if (!forceFallback) {
    try {
      const response = await fetch(`/api/prices?category=${encodeURIComponent(APP.currentCategory)}&search=${encodeURIComponent(searchVal)}`);
      if (response.ok) {
        const apiData = await response.json();
        if (Array.isArray(apiData) && apiData.length) {
          data = apiData.map(normalizePriceRow).filter(Boolean);
        }
      }
    } catch (_) {}
  }

  data = data.filter(item => matchesCategory(item, APP.currentCategory) && matchesSearch(item, searchVal));
  data = sortPriceRows(data, APP.currentSort);

  latestPriceData = data;
  renderPriceTable(data);
  renderHomePrices(data);
}

function normalizePriceRow(item) {
  if (!item) return null;
  return {
    name: item.name || item.crop || 'Crop',
    si: item.sinhalaName || item.si || item.sinhala || item.name || 'බෝගය',
    ta: item.tamilName || item.ta || item.tamil || item.name || 'பயிர்',
    category: item.category || 'vegetables',
    price: Number(item.price ?? 0),
    unit: item.unit || 'kg',
    change: item.change || '0.0',
    trend: item.trend || 'neutral',
    hub: item.location || item.hub || 'Market'
  };
}

function matchesCategory(item, category) {
  if (category === 'all') return true;
  return item.category === category;
}

function matchesSearch(item, searchVal) {
  if (!searchVal) return true;
  const hay = [item.name, item.si, item.ta, item.category, item.hub].join(' ').toLowerCase();
  return hay.includes(searchVal);
}

function sortPriceRows(rows, sortKey) {
  const copy = [...rows];
  if (sortKey === 'price-asc') return copy.sort((a, b) => a.price - b.price);
  if (sortKey === 'price-desc') return copy.sort((a, b) => b.price - a.price);
  if (sortKey === 'trend') {
    const priority = { up: 0, stable: 1, down: 2, neutral: 3 };
    return copy.sort((a, b) => (priority[a.trend] ?? 3) - (priority[b.trend] ?? 3));
  }
  return copy.sort((a, b) => a.name.localeCompare(b.name));
}

function renderPriceTable(rows) {
  const tbody = qs('#price-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!rows.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-state">
          <div class="empty-card">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <p>${escapeHTML(getText('priceEmpty', 'No crops found matching your search. Try adjusting spelling or filters.'))}</p>
          </div>
        </td>
      </tr>`;
    return;
  }

  rows.forEach(item => {
    const tr = document.createElement('tr');
    const trendClass = item.trend === 'up' ? 'positive' : item.trend === 'down' ? 'negative' : 'neutral';
    const trendIcon = item.trend === 'up' ? '<i class="fa-solid fa-arrow-up"></i>' : item.trend === 'down' ? '<i class="fa-solid fa-arrow-down"></i>' : '<i class="fa-solid fa-minus"></i>';
    const categoryLabel = item.category === 'grains'
      ? getText('grainsCategory')
      : item.category === 'vegetables'
        ? getText('vegetablesCategory')
        : getText('fruitsCategory');

    tr.innerHTML = `
      <td>
        <div class="crop-name-cell">
          <span class="crop-en">${escapeHTML(item.name)}</span>
          <span class="crop-si">${escapeHTML(localizedCropName(item))}</span>
        </div>
      </td>
      <td><span class="badge ${item.category === 'grains' ? 'badge-online' : item.category === 'vegetables' ? 'badge-vegetable' : 'badge-fruit'}">${escapeHTML(categoryLabel)}</span></td>
      <td><span class="price-cell">LKR ${Number(item.price).toFixed(2)}</span></td>
      <td><span class="unit-cell">${escapeHTML(getText('unitPer', 'per'))} ${escapeHTML(item.unit)}</span></td>
      <td><span class="change-cell ${trendClass}">${escapeHTML(item.change)}</span></td>
      <td><span class="change-cell ${trendClass}">${trendIcon} ${escapeHTML(trendLabel(item.trend))}</span></td>
      <td><span class="unit-cell"><i class="fa-solid fa-shop"></i> ${escapeHTML(item.hub)}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function trendLabel(trend) {
  const lang = APP.language;
  const map = {
    up: { en: 'Up', si: 'ඉහළ යාම', ta: 'உயர்வு' },
    down: { en: 'Down', si: 'පහළ යාම', ta: 'குறைவு' },
    stable: { en: 'Stable', si: 'ස්ථාවර', ta: 'நிலையானது' },
    neutral: { en: 'Neutral', si: 'මධ්‍යස්ථ', ta: 'நடுநிலை' }
  };
  return (map[trend] && map[trend][lang]) || map.neutral[lang];
}

function localizedCropName(item) {
  const lang = APP.language;
  return lang === 'si' ? item.si : lang === 'ta' ? item.ta : item.name;
}

function renderHomePrices(rows) {
  if (!rows.length) return;
  const paddy = rows.find(r => /samba paddy/i.test(r.name)) || rows[0];
  const carrot = rows.find(r => /carrot/i.test(r.name)) || rows[1] || rows[0];
  setText('#stat-crop1-value', `LKR ${Number(paddy.price).toFixed(2)} / ${paddy.unit}`);
  setText('#stat-crop2-value', `LKR ${Number(carrot.price).toFixed(2)} / ${carrot.unit}`);
  setText('#txt-trend-up', `${carrot.change}`);
}

function filterCategory(category) {
  APP.currentCategory = category;
  localStorage.setItem(STORAGE_KEYS.category, category);
  qsa('.category-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.category === category));
  fetchPrices(true);
}

function calculateFertilizer() {
  const crop = qs('#calc-crop-type')?.value || 'paddy-nadu';
  const acres = Math.max(Number(qs('#calc-acreage')?.value || 1), 0.25);
  const plan = fertilizerPlans[crop] || fertilizerPlans['paddy-nadu'];
  const lang = APP.language;
  const totals = {
    urea: Math.round(plan.urea * acres),
    tsp: Math.round(plan.tsp * acres),
    mop: Math.round(plan.mop * acres),
    compost: Math.round(plan.compost * acres)
  };

  setText('#res-urea', `${totals.urea} kg`);
  setText('#res-tsp', `${totals.tsp} kg`);
  setText('#res-mop', `${totals.mop} kg`);
  setText('#res-compost', `${totals.compost} kg`);
  setText('#calc-note', localizeCalcNote(plan.note, lang));

  const box = qs('#calc-results');
  if (box) box.style.display = 'block';
}

function localizeCalcNote(note, lang) {
  const suffix = {
    en: translations.en.calcNote,
    si: translations.si.calcNote,
    ta: translations.ta.calcNote
  }[lang];
  return `${note} ${suffix}`;
}

function calculateIrrigation() {
  const crop = qs('#irrigation-crop-type')?.value || 'paddy';
  const acres = Math.max(Number(qs('#irrigation-area')?.value || 1), 0.25);
  const weather = latestWeather || weatherProfiles[APP.weatherLocation] || weatherProfiles.anuradhapura;

  const base = { paddy: 4500, vegetables: 3200, fruits: 2800, tea: 2200 }[crop] || 3000;
  const rainfallFactor = Math.max(0, 1 - Math.min(Number(weather.rainfall) / 10, 0.7));
  const humidityFactor = Math.max(0.7, 1 - ((Number(weather.humidity) - 50) / 200));
  const heatFactor = Number(weather.temp) >= 31 ? 1.15 : 1;
  const liters = Math.round(base * acres * rainfallFactor * humidityFactor * heatFactor);

  let summaryKey = 'irrigationResultNormal';
  const cond = String(weather.condition).toLowerCase();
  if (Number(weather.rainfall) >= 4 || cond.includes('rain')) summaryKey = 'irrigationResultSkip';
  else if (Number(weather.humidity) <= 65 || Number(weather.temp) >= 31) summaryKey = 'irrigationResultMorning';
  else if (Number(weather.humidity) >= 80 && Number(weather.temp) < 28) summaryKey = 'irrigationResultLight';

  const lang = APP.language;
  const summary = translations[lang][summaryKey];
  const extra = translations[lang].irrigationHint;
  const container = qs('#irrigation-result');
  if (container) {
    container.dataset.hasResult = 'true';
    container.innerHTML = `
      <div class="utility-output-head">
        <strong>${escapeHTML(summary)}</strong>
      </div>
      <p style="margin-top:8px;">${escapeHTML(localizeIrrigationDetail(weather, crop, liters, acres, lang))}</p>
      <p style="margin-top:8px; font-weight:700; color: var(--green-dark);">${escapeHTML(extra)}</p>
    `;
  }
}

function localizeIrrigationDetail(weather, crop, liters, acres, lang) {
  const cropNames = {
    paddy: { en: 'paddy', si: 'වී', ta: 'நெல்' },
    vegetables: { en: 'vegetables', si: 'එළවළු', ta: 'காய்கறிகள்' },
    fruits: { en: 'fruit crops', si: 'පළතුරු බෝග', ta: 'பழப் பயிர்கள்' },
    tea: { en: 'tea / upcountry crops', si: 'තේ / කඳුකර බෝග', ta: 'தேயிலை / மேட்டுநிலப் பயிர்கள்' }
  };
  const cropLabel = cropNames[crop][lang] || cropNames[crop].en;
  const weatherLine = `${Math.round(weather.temp)}°C, ${Math.round(weather.humidity)}% ${lang === 'en' ? 'humidity' : ''}`.trim();

  if (lang === 'si') {
    return `${cropLabel} සඳහා දළ වශයෙන් ${liters} ලීටර්/දිනක් (අක්කර ${acres}). වර්තමාන කාලගුණය: ${weatherLine}.`;
  }
  if (lang === 'ta') {
    return `${cropLabel} க்கு சுமார் ${liters} லிட்டர்/நாள் (ஏக்கர் ${acres}). தற்போதைய வானிலை: ${weatherLine}.`;
  }
  return `Approx. ${liters} liters per day for ${cropLabel} across ${acres} acre(s). Current weather: ${weatherLine}.`;
}

function toggleSeason(season, persist = true) {
  APP.season = season === 'yala' ? 'yala' : 'maha';
  if (persist) localStorage.setItem(STORAGE_KEYS.season, APP.season);
  qs('#btn-season-maha')?.classList.toggle('active', APP.season === 'maha');
  qs('#btn-season-yala')?.classList.toggle('active', APP.season === 'yala');

  const timeline = qs('#season-timeline-content');
  if (!timeline) return;
  timeline.innerHTML = '';
  const items = seasonTimelines[APP.season];

  items.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <div class="timeline-index">${index + 1}</div>
      <div class="timeline-body">
        <h4>${escapeHTML(item.month)}</h4>
        <p>${escapeHTML(localizeSeasonStage(item))}</p>
      </div>
    `;
    timeline.appendChild(div);
  });
}

function localizeSeasonStage(item) {
  const lang = APP.language;
  if (lang === 'si') return item.si;
  if (lang === 'ta') return item.ta;
  return item.stage;
}

function renderReservoirs() {
  const grid = qs('#reservoirs-grid');
  if (!grid) return;
  grid.innerHTML = '';

  reservoirData.forEach(item => {
    const pct = Math.max(0, Math.min(100, item.level));
    const statusKey = pct >= 65 ? 'reservoirGood' : pct >= 45 ? 'reservoirFair' : 'reservoirLow';
    const card = document.createElement('div');
    card.className = 'reservoir-card';
    card.innerHTML = `
      <div class="reservoir-top">
        <div>
          <h4 class="reservoir-name">${escapeHTML(item.name)}</h4>
          <p>${escapeHTML(getText('tableHub', 'Economic Hub'))}: ${escapeHTML(statusLabel(statusKey))}</p>
        </div>
        <strong>${pct}%</strong>
      </div>
      <div class="progress-bar"><span style="width:${pct}%"></span></div>
      <div class="reservoir-footer">
        <span>${escapeHTML(getText('reservoirStorage', 'Storage'))}</span>
        <span class="${pct < 45 ? 'low' : 'good'}">${escapeHTML(statusLabel(statusKey))}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function statusLabel(key) {
  return translations[APP.language][key] || translations.en[key] || key;
}

function addTask() {
  const input = qs('#task-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  APP.tasks.unshift({ id: Date.now(), text, done: false });
  saveTasks();
  input.value = '';
  renderTasks();
}

function toggleTask(id) {
  APP.tasks = APP.tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
  saveTasks();
  renderTasks();
}

function removeTask(id) {
  APP.tasks = APP.tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const list = qs('#task-list');
  if (!list) return;
  list.innerHTML = '';
  if (!APP.tasks.length) {
    list.innerHTML = `<li class="task-empty">${escapeHTML(getText('taskEmpty'))}</li>`;
    return;
  }

  APP.tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="task-text">
        <input type="checkbox" ${task.done ? 'checked' : ''} aria-label="${escapeHTML(task.text)}">
        <span style="${task.done ? 'text-decoration: line-through; opacity: 0.65;' : ''}">${escapeHTML(task.text)}</span>
      </div>
      <button type="button" title="${escapeHTML(getText('taskRemove'))}"><i class="fa-solid fa-trash"></i></button>
    `;
    li.querySelector('input').addEventListener('change', () => toggleTask(task.id));
    li.querySelector('button').addEventListener('click', () => removeTask(task.id));
    list.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(APP.tasks));
}

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.tasks) || '[]');
  } catch {
    return [];
  }
}

function renderPestAlerts() {
  const box = qs('#pest-alert-list');
  if (!box) return;
  box.innerHTML = '';

  const weather = latestWeather || weatherProfiles[APP.weatherLocation] || weatherProfiles.anuradhapura;
  const hotDry = Number(weather.temp) >= 31 && Number(weather.rainfall) <= 1;
  const humid = Number(weather.humidity) >= 75 || String(weather.condition).toLowerCase().includes('rain');
  const windy = Number(weather.windSpeed) >= 15 || String(weather.condition).toLowerCase().includes('wind');

  const items = [
    {
      title: 'Leaf fungal risk',
      si: 'කොළ දිලීර අවදානම',
      ta: 'இலை பூஞ்சை அபாயம்',
      icon: 'fa-spa',
      body: humid
        ? { en: 'Keep rows open, avoid late-day spraying, and inspect lower leaves.', si: 'පේළි විවෘතව තබන්න, සවස් ඉසිම වළක්වන්න, පහළ කොළ පරීක්ෂා කරන්න.', ta: 'வரிசைகளை திறந்தவையாக வைத்துக் கொண்டு, மாலை தெளிப்பை தவிர்க்கவும், கீழ் இலைகளைச் சரிபார்க்கவும்.' }
        : { en: 'Low risk right now. Keep a watch after rain or long dew periods.', si: 'දැනට අවදානම අඩුයි. වැසි පසු හෝ දිගු පිනි කාලයන්හි පරීක්ෂා කරන්න.', ta: 'இப்போது அபாயம் குறைவு. மழைக்கு பிறகு அல்லது நீண்ட பனி காலத்தில் கவனிக்கவும்.' }
    },
    {
      title: 'Water stress alert',
      si: 'ජල ආතති අවදානම',
      ta: 'நீர் அழுத்த எச்சரிக்கை',
      icon: 'fa-droplet',
      body: hotDry
        ? { en: 'Mulch the soil, irrigate early, and check drip lines for blockages.', si: 'පස ආවරණය කරන්න, උදෑසන ජලය දෙන්න, සහ පයිප්ප අවහිරතා පරීක්ෂා කරන්න.', ta: 'மண்ணை மூடி வைத்துக் கொள்ளவும், காலை நீர் அளிக்கவும், குழாய் அடைப்புகளைச் சரிபார்க்கவும்.' }
        : { en: 'Water stress is manageable. Keep observing field moisture.', si: 'ජල ආතතිය පාලනය කළ හැක. පස තෙතමනය නිරීක්ෂණය කරන්න.', ta: 'நீர் அழுத்தம் கட்டுப்பாட்டில் உள்ளது. மண் ஈரப்பதத்தை கவனிக்கவும்.' }
    },
    {
      title: 'Wind / lodging risk',
      si: 'සුළං / වැටීමේ අවදානම',
      ta: 'காற்று / சாய்வு அபாயம்',
      icon: 'fa-wind',
      body: windy
        ? { en: 'Support taller crops and avoid overhead spraying in strong wind.', si: 'උස බෝග වලට ආධාර දමන්න සහ ශක්තිමත් සුළඟේ ඉසිම වළක්වන්න.', ta: 'உயரமான பயிர்களுக்கு ஆதரவளிக்கவும், பலமான காற்றில் மேலிருந்து தெளிப்பதைத் தவிர்க்கவும்.' }
        : { en: 'Wind risk is low, but keep young plants protected.', si: 'සුළං අවදානම අඩුය, නමුත් නව පැළ ආරක්ෂා කරන්න.', ta: 'காற்று அபாயம் குறைவு, ஆனால் இளம் செடிகளைப் பாதுகாக்கவும்.' }
    }
  ];

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'alert-card';
    const title = APP.language === 'si' ? item.si : APP.language === 'ta' ? item.ta : item.title;
    const body = item.body[APP.language] || item.body.en;
    card.innerHTML = `
      <div class="alert-top">
        <div><h4><i class="fa-solid ${item.icon}"></i> ${escapeHTML(title)}</h4></div>
      </div>
      <p>${escapeHTML(body)}</p>
    `;
    box.appendChild(card);
  });
}

function parseMarkdown(text) {
  let html = escapeHTML(text);

  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/^> \[\!(TIP|IMPORTANT|NOTE|WARNING)\]\s*(.*$)/gim, '<blockquote><strong>$1:</strong> $2</blockquote>');
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
  html = html.replace(/^(<li>.*<\/li>)(?:\n(<li>.*<\/li>))*$/gim, match => `<ul>${match.replace(/\n/g, '')}</ul>`);

  return html.split('\n\n').map(chunk => {
    const trimmed = chunk.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h3>') || trimmed.startsWith('<h4>') || trimmed.startsWith('<ul>') || trimmed.startsWith('<blockquote>')) {
      return chunk;
    }
    return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
  }).join('');
}

async function sendMessage() {
  const inputEl = qs('#chat-input');
  if (!inputEl) return;
  const message = inputEl.value.trim();
  if (!message) return;

  appendMessage(message, 'outgoing');
  inputEl.value = '';
  inputEl.style.height = 'auto';

  const typingId = appendTypingIndicator();
  const reply = await getAssistantReply(message);
  removeTypingIndicator(typingId);
  appendMessage(reply, 'incoming');
}

async function getAssistantReply(message) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4500);

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
      signal: controller.signal
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.reply) return data.reply;
    }
  } catch (_) {
    // fallback below
  } finally {
    clearTimeout(timer);
  }

  return generateLocalReply(message);
}

function generateLocalReply(message) {
  const m = message.toLowerCase();
  if (m.includes('blast') || m.includes('බ්ලාස්ට්') || m.includes('பிளாஸ்ட்')) return localReplies.riceBlast[APP.language];
  if (m.includes('sena') || m.includes('සේනා') || m.includes('சேனா')) return localReplies.sena[APP.language];
  if (m.includes('fertil') || m.includes('පොහොර') || m.includes('உரம்')) return localReplies.fertilizer[APP.language];
  if (m.includes('water') || m.includes('irrig') || m.includes('ජල') || m.includes('நீர்')) return localReplies.irrigation[APP.language];
  if (m.includes('weather') || m.includes('කාලගුණ') || m.includes('வானிலை')) {
    const weather = latestWeather || weatherProfiles[APP.weatherLocation] || weatherProfiles.anuradhapura;
    return `${getText('weatherAdvisoryTitle')}: ${getWeatherAdvice(weather.condition, weather, APP.language)}`;
  }
  if (m.includes('price') || m.includes('මිල') || m.includes('விலை')) {
    return APP.language === 'si'
      ? 'වෙළඳපොළ මිල දර්ශකය යාවත්කාලීන කර ඇත. ඔබට බෝගය සොයා මිල, වෙනස සහ ප්‍රවණතාව බලන්න පුළුවන්.'
      : APP.language === 'ta'
        ? 'சந்தை விலை குறியீடு புதுப்பிக்கப்பட்டுள்ளது. நீங்கள் பயிரைத் தேடி விலை, மாற்றம் மற்றும் போக்கை பார்க்கலாம்.'
        : 'The market price index is updated. You can search a crop to see the price, change, and trend.';
  }
  return localReplies.generic[APP.language];
}

function appendMessage(text, type) {
  const container = qs('#chat-messages');
  if (!container) return;

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  const avatarHTML = type === 'incoming'
    ? '<div class="message-avatar"><i class="fa-solid fa-leaf"></i></div>'
    : '<div class="message-avatar"><i class="fa-solid fa-user"></i></div>';
  const contentHTML = type === 'incoming'
    ? `<div class="message-bubble">${parseMarkdown(text)}</div>`
    : `<div class="message-bubble"><p>${escapeHTML(text)}</p></div>`;
  messageDiv.innerHTML = avatarHTML + contentHTML;
  container.appendChild(messageDiv);
  container.scrollTop = container.scrollHeight;
}

function appendTypingIndicator() {
  const container = qs('#chat-messages');
  const indicatorDiv = document.createElement('div');
  const id = `typing-${Date.now()}`;
  indicatorDiv.id = id;
  indicatorDiv.className = 'message incoming';
  indicatorDiv.innerHTML = `
    <div class="message-avatar"><i class="fa-solid fa-leaf"></i></div>
    <div class="message-bubble" style="padding: 12px 16px;">
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>`;
  container.appendChild(indicatorDiv);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  qs(`#${CSS.escape(id)}`)?.remove();
}

function handleChatKey(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function useSuggestedQuery(query) {
  const chatInput = qs('#chat-input');
  if (chatInput) chatInput.value = query;
  switchTab('ai-helper');
  sendMessage();
}

function clearChat() {
  const container = qs('#chat-messages');
  if (!container) return;
  container.innerHTML = `
    <div class="message incoming" id="chat-welcome-msg">
      <div class="message-avatar"><i class="fa-solid fa-leaf"></i></div>
      <div class="message-bubble">
        <p>${escapeHTML(getText('chatWelcome'))}</p>
      </div>
    </div>
  `;
}

function submitMiniChat() {
  const mini = qs('#ai-mini-input');
  if (!mini || !mini.value.trim()) return;
  switchTab('ai-helper');
  const chatInput = qs('#chat-input');
  if (chatInput) chatInput.value = mini.value.trim();
  mini.value = '';
  sendMessage();
}

function askQuickQuery(query) {
  switchTab('ai-helper');
  const chatInput = qs('#chat-input');
  if (chatInput) chatInput.value = query;
  sendMessage();
}

function setupChatAutogrow() {
  const textarea = qs('#chat-input');
  if (!textarea) return;
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
  });
}

function getText(key, fallback = key) {
  return translations[APP.language][key] || translations.en[key] || fallback;
}

function setText(selector, value) {
  const el = qs(selector);
  if (el) el.textContent = value;
}

function setHTML(selector, value) {
  const el = qs(selector);
  if (el) el.innerHTML = value;
}

function setupChatAutogrow() {
  const textarea = document.querySelector('#chat-input');
  if (!textarea) return;
  
  textarea.addEventListener('input', function() {
    this.style.height = 'auto'; // Reset height
    this.style.height = `${Math.min(this.scrollHeight, 150)}px`; // Set to scroll height
  });
}

const baselinePrices = {
  "Carrot": 250, "Cabbage": 180, "Leeks": 220, "Tomato": 150, "Green Chilli": 400
};

function fetchPrices() {
  const marketGrid = document.querySelector('.market-grid');
  marketGrid.innerHTML = ''; // Clear old

  Object.keys(baselinePrices).forEach(crop => {
    // Generate a random daily fluctuation between -10% and +10%
    const fluctuation = 1 + ((Math.random() * 0.2) - 0.1); 
    const todayPrice = Math.round(baselinePrices[crop] * fluctuation);
    const trend = fluctuation > 1 ? "▲" : "▼";
    const trendClass = fluctuation > 1 ? "text-danger" : "text-green"; // Cheaper is green for buyers, red for sellers!

    const card = `
      <div class="price-card">
        <h4>${crop}</h4>
        <h2>Rs. ${todayPrice} <span style="font-size: 0.8rem">/kg</span></h2>
        <span class="${trendClass}">${trend} ${Math.abs(Math.round((fluctuation - 1) * 100))}% since yesterday</span>
      </div>
    `;
    marketGrid.innerHTML += card;
  });
}

window.setLanguage = setLanguage;
window.switchTab = switchTab;
window.fetchWeather = fetchWeather;
window.fetchPrices = fetchPrices;
window.filterCategory = filterCategory;
window.calculateFertilizer = calculateFertilizer;
window.calculateIrrigation = calculateIrrigation;
window.toggleSeason = toggleSeason;
window.addTask = addTask;
window.clearChat = clearChat;
window.sendMessage = sendMessage;
window.handleChatKey = handleChatKey;
window.useSuggestedQuery = useSuggestedQuery;
window.submitMiniChat = submitMiniChat;
window.askQuickQuery = askQuickQuery;