#!/bin/bash

# Token for authorization
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiYWRtaW5AdGhlZmFuc2l2ZS5jb20iLCJyb2xlIjoiQURNSU4iLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzYwODYzOTk3LCJleHAiOjE3NjE0Njg3OTd9.aA4OttGAPunPY0ZqvaICQD-XSOF6rjcxIQqjI3cede8"

# Base URL
BASE_URL="https://trading-desk.top/admin-panel/api/teams"

# 1. Real Madrid
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Real Madrid", "ru": "Реал Мадрид"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Real"},
  "description": {"en": "The most successful club in European football history", "ru": "Самый успешный клуб в истории европейского футбола"},
  "country": "Spain",
  "city": "Madrid",
  "foundedYear": 1902,
  "websiteUrl": "https://www.realmadrid.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1440&h=500&fit=crop&q=80"
}'

# 2. Barcelona
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "FC Barcelona", "ru": "Барселона"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Barça"},
  "description": {"en": "More than a club, a symbol of Catalan pride", "ru": "Больше чем клуб, символ каталонской гордости"},
  "country": "Spain",
  "city": "Barcelona",
  "foundedYear": 1899,
  "websiteUrl": "https://www.fcbarcelona.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1440&h=500&fit=crop&q=80"
}'

# 3. Manchester United
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Manchester United", "ru": "Манчестер Юнайтед"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Man Utd"},
  "description": {"en": "The Red Devils, one of the most iconic clubs in world football", "ru": "Красные дьяволы, один из самых культовых клубов мирового футбола"},
  "country": "England",
  "city": "Manchester",
  "foundedYear": 1878,
  "websiteUrl": "https://www.manutd.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1522778147829-1e5e64ab6aa2?w=1440&h=500&fit=crop&q=80"
}'

# 4. Liverpool
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Liverpool FC", "ru": "Ливерпуль"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Liverpool"},
  "description": {"en": "Six-time European champions with passionate fanbase", "ru": "Шестикратный чемпион Европы со страстными болельщиками"},
  "country": "England",
  "city": "Liverpool",
  "foundedYear": 1892,
  "websiteUrl": "https://www.liverpoolfc.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1440&h=500&fit=crop&q=80"
}'

# 5. Bayern Munich
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Bayern Munich", "ru": "Бавария Мюнхен"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Bayern"},
  "description": {"en": "The most successful club in German football history", "ru": "Самый успешный клуб в истории немецкого футбола"},
  "country": "Germany",
  "city": "Munich",
  "foundedYear": 1900,
  "websiteUrl": "https://fcbayern.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1577223625816-7546f8350a7c?w=1440&h=500&fit=crop&q=80"
}'

# 6. Juventus
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Juventus", "ru": "Ювентус"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Juve"},
  "description": {"en": "The Old Lady, Italys most successful club", "ru": "Старая синьора, самый успешный клуб Италии"},
  "country": "Italy",
  "city": "Turin",
  "foundedYear": 1897,
  "websiteUrl": "https://www.juventus.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1440&h=500&fit=crop&q=80"
}'

# 7. Paris Saint-Germain
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Paris Saint-Germain", "ru": "Пари Сен-Жермен"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "PSG"},
  "description": {"en": "The pride of Paris and French football powerhouse", "ru": "Гордость Парижа и французская футбольная держава"},
  "country": "France",
  "city": "Paris",
  "foundedYear": 1970,
  "websiteUrl": "https://www.psg.fr",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1623018035782-b269248df916?w=1440&h=500&fit=crop&q=80"
}'

# 8. Chelsea
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Chelsea FC", "ru": "Челси"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Chelsea"},
  "description": {"en": "The Blues, two-time Champions League winners", "ru": "Синие, двукратные победители Лиги чемпионов"},
  "country": "England",
  "city": "London",
  "foundedYear": 1905,
  "websiteUrl": "https://www.chelseafc.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1440&h=500&fit=crop&q=80"
}'

# 9. Manchester City
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Manchester City", "ru": "Манчестер Сити"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Man City"},
  "description": {"en": "The Citizens, recent treble winners and Premier League dominators", "ru": "Горожане, недавние обладатели требла и доминаторы Премьер-лиги"},
  "country": "England",
  "city": "Manchester",
  "foundedYear": 1880,
  "websiteUrl": "https://www.mancity.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1440&h=500&fit=crop&q=80"
}'

# 10. Arsenal
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Arsenal FC", "ru": "Арсенал"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Arsenal"},
  "description": {"en": "The Gunners, known for attractive attacking football", "ru": "Канониры, известные привлекательным атакующим футболом"},
  "country": "England",
  "city": "London",
  "foundedYear": 1886,
  "websiteUrl": "https://www.arsenal.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1541766703-8da9be2a8358?w=1440&h=500&fit=crop&q=80"
}'

# 11. AC Milan
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "AC Milan", "ru": "Милан"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Milan"},
  "description": {"en": "The Rossoneri, seven-time European champions", "ru": "Россонери, семикратные чемпионы Европы"},
  "country": "Italy",
  "city": "Milan",
  "foundedYear": 1899,
  "websiteUrl": "https://www.acmilan.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1624880357913-a8539238245b?w=1440&h=500&fit=crop&q=80"
}'

# 12. Inter Milan
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Inter Milan", "ru": "Интер Милан"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Inter"},
  "description": {"en": "The Nerazzurri, three-time European champions", "ru": "Нераззурри, трехкратные чемпионы Европы"},
  "country": "Italy",
  "city": "Milan",
  "foundedYear": 1908,
  "websiteUrl": "https://www.inter.it",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1440&h=500&fit=crop&q=80"
}'

# 13. Atletico Madrid
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Atletico Madrid", "ru": "Атлетико Мадрид"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Atletico"},
  "description": {"en": "Los Colchoneros, known for passionate play and strong defense", "ru": "Матрасники, известные страстной игрой и сильной защитой"},
  "country": "Spain",
  "city": "Madrid",
  "foundedYear": 1903,
  "websiteUrl": "https://www.atleticodemadrid.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1440&h=500&fit=crop&q=80"
}'

# 14. Borussia Dortmund
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Borussia Dortmund", "ru": "Боруссия Дортмунд"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "BVB"},
  "description": {"en": "The Black and Yellows, famous for the Yellow Wall and passionate fans", "ru": "Черно-желтые, известные Желтой стеной и страстными фанатами"},
  "country": "Germany",
  "city": "Dortmund",
  "foundedYear": 1909,
  "websiteUrl": "https://www.bvb.de",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?w=1440&h=500&fit=crop&q=80"
}'

# 15. Ajax
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Ajax Amsterdam", "ru": "Аякс Амстердам"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Ajax"},
  "description": {"en": "Four-time European champions and legendary youth academy", "ru": "Четырехкратные чемпионы Европы с легендарной академией"},
  "country": "Netherlands",
  "city": "Amsterdam",
  "foundedYear": 1900,
  "websiteUrl": "https://www.ajax.nl",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1440&h=500&fit=crop&q=80"
}'

# 16. Benfica
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "SL Benfica", "ru": "Бенфика"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Benfica"},
  "description": {"en": "The Eagles, Portugals most successful club", "ru": "Орлы, самый успешный клуб Португалии"},
  "country": "Portugal",
  "city": "Lisbon",
  "foundedYear": 1904,
  "websiteUrl": "https://www.slbenfica.pt",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1440&h=500&fit=crop&q=80"
}'

# 17. FC Porto
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "FC Porto", "ru": "Порту"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Porto"},
  "description": {"en": "The Dragons, two-time European champions", "ru": "Драконы, двукратные чемпионы Европы"},
  "country": "Portugal",
  "city": "Porto",
  "foundedYear": 1893,
  "websiteUrl": "https://www.fcporto.pt",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1440&h=500&fit=crop&q=80"
}'

# 18. Tottenham
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Tottenham Hotspur", "ru": "Тоттенхэм Хотспур"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Spurs"},
  "description": {"en": "The Lilywhites, known for attacking football and modern stadium", "ru": "Лилейные, известные атакующим футболом и современным стадионом"},
  "country": "England",
  "city": "London",
  "foundedYear": 1882,
  "websiteUrl": "https://www.tottenhamhotspur.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?w=1440&h=500&fit=crop&q=80"
}'

# 19. AS Roma
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "AS Roma", "ru": "Рома"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Roma"},
  "description": {"en": "I Giallorossi, one of Italys most passionate clubs", "ru": "Джаллоросси, один из самых страстных клубов Италии"},
  "country": "Italy",
  "city": "Rome",
  "foundedYear": 1927,
  "websiteUrl": "https://www.asroma.com",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=1440&h=500&fit=crop&q=80"
}'

# 20. Sevilla
curl --location "$BASE_URL" \
--header 'accept: */*' \
--header 'content-type: application/json' \
--header "Cookie: admin_token=$TOKEN" \
--data '{
  "name": {"en": "Sevilla FC", "ru": "Севилья"},
  "sportType": "FOOTBALL",
  "isActive": true,
  "isVerified": true,
  "shortName": {"en": "Sevilla"},
  "description": {"en": "Record seven-time Europa League winners", "ru": "Рекордные семикратные победители Лиги Европы"},
  "country": "Spain",
  "city": "Seville",
  "foundedYear": 1890,
  "websiteUrl": "https://www.sevillafc.es",
  "logoUrl": "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
  "coverImageUrl": "https://images.unsplash.com/photo-1473864148534-053b17afad8b?w=1440&h=500&fit=crop&q=80"
}'

echo ""
echo "✅ All 20 teams have been created!"
