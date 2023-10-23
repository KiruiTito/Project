import React, { useEffect, useState } from "react";
import "./schools.css"; // Create a new CSS file for school cards

const SchoolsCard = () => {
  // Sample school data (you can replace this with your actual data)
  const sampleSchoolsData = [
    {
      "id": 1,
      "name": "MBAGATHI ROAD PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "KEMRI ROAD OFF MBAGATHI RD"
    },
    {
      "id": 2,
      "name": "NEMBU PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "MUTHAMA - KIKUYU RD"
    },
    {
      "id": 3,
      "name": "KAWANGWARE PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "KAWANGWARE NEAR CHIEF'S OFFICE"
    },
    {
      "id": 4,
      "name": "TOI PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "JOSEPH KANGETHE RD. NEAR WINNERS CHAPEL"
    },
    {
      "id": 5,
      "name": "RIRUTA HGM PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "NAIVASHA RD. AFTER PRECIOUS BLOOD RIRUTA"
    },
    {
      "id": 6,
      "name": "DAGORETTI MUSLIM PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "DAGORETTI MUSLIM - MUTHIORA ROAD"
    },
    {
      "id": 7,
      "name": "KINYANJUI ROAD PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "RIRUTA SATELLITE - KINYANJUI ROAD"
    },
    {
      "id": 8,
      "name": "JOSEPH KANGETHE PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "WOODLEY - BEFORE JOSEPH KANGETHE RD."
    },
    {
      "id": 9,
      "name": "JAMHURI PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "NGONG ROAD. NEXT TO UNIVERSITY OF NAIROBI KENYA SCIENCE CAMPUS"
    },
    {
      "id": 10,
      "name": "GATINA PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "KAWANGWARE GATINA"
    },
    {
      "id": 11,
      "name": "MUTUINI PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "DAGORETTI MARKET ALONG MUCHUGIA RD"
    },
    {
      "id": 12,
      "name": "MUKARARA",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "NEAR MUKARARA PCEA CHURCH"
    },
    {
      "id": 13,
      "name": "DAGORETTI GIRLS REHABILITATION",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "ON BOUNDARY OF KIAMBU WEST & DAGORETTI DISTRICT AFTER MUHURI ROAD FORMER ROUTE 87"
    },
    {
      "id": 14,
      "name": "DAGORETTI SPECIAL SCHOOL",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "CHILDREN CENTRE INSIDE THE FEED THE CHILDREN DAGORETTI MARKET"
    },
    {
      "id": 15,
      "name": "KAGIRA PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "AFTER RUTHIMITU PRIMARY SCHOOL"
    },
    {
      "id": 16,
      "name": "KIRIGU PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "DAGORETI - MUTUINI"
    },
    {
      "id": 17,
      "name": "RUTHIMITU PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "RUTHIMITU"
    },
    {
      "id": 18,
      "name": "WAITHAKA SPECIAL SCHOOL",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "MUTUINI - NEAR KIRIGU PRIMARY"
    },
    {
      "id": 19,
      "name": "DR. MUTHIORA PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "MUTUINI"
    },
    {
      "id": 20,
      "name": "GITIBA PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "WAITHAKA",
      "address": "BEFORE ST. JOSEPH CTHOLIC CHURCH"
    },
    {
      "id": 21,
      "name": "RIRUTA SATELLITE PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "RIRUTA SATELLITE"
    },
    {
      "id": 22,
      "name": "KABIRIA PRIMARY SCHOOL",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "OFF KABIRIA ROAD, WAITHAKA LOCATION"
    },
    {
      "id": 23,
      "name": "SHADRACK KIMALEL PRIMARY SCHOOL",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "KENYATTA GOLF COURSE NGUMMO LAINI SABA"
    },
    {
      "id": 24,
      "name": "NDURARUA PRIMARY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "NDURARUA GROUNDS ON KINYANJUI ROAD"
    },
    {
      "id": 25,
      "name": "UPPER HILL DAY NURSERY",
      "location": "DAGORETTI",
      "sub_location": "RIRUTA",
      "address": "UPPER HILL AREA ALONG ELGON ROAD"
    },
    {
      "id": 26,
      "name": "UMOJA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "UMOJA ESTATE PHASE I ALONG MOI DRIVE ROAD"
    },
    {
      "id": 27,
      "name": "RONALD NGALA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "DANDORA PHASE IV/V"
    },
    {
      "id": 28,
      "name": "USHIRIKA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "DANDORA PHASE V - NEXT TO RONALD NGALA PRIMARY"
    },
    {
      "id": 29,
      "name": "KARIOBANGI SOUTH PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "KARIOBANGI SOUTH ALONG MUTARAKWA ROAD"
    },
    {
      "id": 30,
      "name": "TOM MBOYA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "DANDORA"
    },
    {
      "id": 31,
      "name": "GITUAMBA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "RUAI SEWAGE"
    },
    {
      "id": 32,
      "name": "PETER KIBUKOSYA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "UMOJA II ESTATE - SITE STAGE"
    },
    {
      "id": 33,
      "name": "ATHI PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "5KM FROM MAIN KANGUNDO RD. IN NGUNDU/ATHI ZONE"
    },
    {
      "id": 34,
      "name": "RUAI PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "ALONG KANGUNDO RD. AT RUAI SHOPPING CENTRE"
    },
    {
      "id": 35,
      "name": "JEHOVAH JIREH PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "MAILI SABA"
    },
    {
      "id": 36,
      "name": "NGUNDU PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "KAMULU - NGUNDU ALONG KANGUNDO RD."
    },
    {
      "id": 37,
      "name": "UNITY PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "UMOJA INNERCORE"
    },
    {
      "id": 38,
      "name": "UTAWALA ACADEMY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "WITHIN ADMINISTRATION POLICE TRAINING COLLEGE - EMBAKASI"
    },
    {
      "id": 39,
      "name": "KAYOLE I PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KAYOLE OFF KANGUNDO ROAD"
    },
    {
      "id": 40,
      "name": "TUMAINI PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "UMOJA II OFF MOI DRIVE"
    },
    {
      "id": 41,
      "name": "OUR LADY OF NAZARETH PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "MUKURU KWA NJENGA"
    },
    {
      "id": 43,
      "name": "MAUA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KANGUNDO ROAD - NJIRU COKAA BURUBURU FARM"
    },
    {
      "id": 44,
      "name": "VISIONS PRIMARY (MIHANG'O)",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "MIHANG'O LOCATION"
    },
    {
      "id": 45,
      "name": "EMBAKASI GARRISON PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "EMBAKASI GARRISON BARRACKS COMPUND ALONG TO UTAWALA"
    },
    {
      "id": 46,
      "name": "MWANGAZA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KAYOLE"
    },
    {
      "id": 47,
      "name": "EMBAKASI PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "EMBAKASI VILLAGE"
    },
    {
      "id": 48,
      "name": "THAWABU PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KAYOLE"
    },
    {
      "id": 49,
      "name": "BONDENI PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KAYOLE SOUTH NEXT TO KAYOLE CATHOLIC CHURCH - (DIVEN WORD PARISH)"
    },
    {
      "id": 50,
      "name": "KOMAROCK PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KOMAROCK ESTATE OOF SPINE ROAD"
    },
    {
      "id": 51,
      "name": "KIFARU PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "UMOJA II - MOI DRIVE"
    },
    {
      "id": 52,
      "name": "EDELVALE PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "DOONHOLM PHASE V AT JACARANDA ESTATE ROUND ABOUT - TAKE THE EARTH ROAD"
    },
    {
      "id": 53,
      "name": "IMARA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KAYOLE SOWETO RD. OPP. KAYOLE CHIEF'S OFFICE - MUGENDI STAGE"
    },
    {
      "id": 54,
      "name": "DOONHOLM PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "DOONHOLM ESTATE NXT. TO RIKINA SUPERMARKETS"
    },
    {
      "id": 55,
      "name": "BUSARA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "UMOJA ESTATE - MOI DRIVE ROAD"
    },
    {
      "id": 56,
      "name": "A.E.F. REUBEN PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "OFF INTERPRISE AFTER HILL-LOCKS HOTEL IN REUBEN SLUMS"
    },
    {
      "id": 57,
      "name": "KWA NJENGA PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "KWA NJENGA WARD OFF AIRPORT ROAD AT A.A. OF KENYA HEADQUARTERS"
    },
    {
      "id": 58,
      "name": "DANDORA PRIMARY SCHOOL",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "DANDORA PHASE ONE, ALONG KOMAROCK RD. OPP. SENIORS SCH, ADJACENT TO TOTAL PETROL STATION"
    },
    {
      "id": 59,
      "name": "SIMBA DAY NURSERY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "UMOJA"
    },
    {
      "id": 60,
      "name": "MUGUMO DAY NURSERY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "NEAR PETER KIBUKOSYA PRIMARY SCHOOL"
    },
    {
      "id": 61,
      "name": "MWANGAZA DAY NURSERY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "NEAR PETER KIBUKOSYA PRIMARY SCHOOL"
    },
    {
      "id": 62,
      "name": "UNITY DAY NURSERY",
      "location": "EMBAKASI",
      "sub_location": "KAYOLE",
      "address": "UMOJA INNERCORE"
    },
    {
      "id": 63,
      "name": "UMOJA I DAY NURSERY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "IN UMOJA NEXT TO DIVISON OFFICE UMOJA I ESATE"
    },
    {
      "id": 64,
      "name": "ST. DOMINIC'S PRIMARY SCHOOL",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "MWIKI"
    },
    {
      "id": 65,
      "name": "KAYOLE NORTH PRIMARY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "KAYOLE NORTH (MATOPENI) AREA NEAR KAYOLE POLICE STATION"
    },
    {
      "id": 66,
      "name": "KANGUNDO ROAD PRY",
      "location": "EMBAKASI",
      "sub_location": "DANDORA",
      "address": "MAMA LUCY KIBAKI HOSPITAL"
    },
    {
      "name": "JAMES GICHURU PRIMARY",
      "subcounty": "EMBAKASI",
      "location": "DANDORA",
      "description": "DANDORA PHASE II"
    },
    {
      "name": "WANGU PRIMARY",
      "subcounty": "EMBAKASI",
      "location": "DANDORA",
      "description": "DANDORA PHASE II OPPOSITE CO-OPERATIVE BANK ON MUIGAI KENYATTA ROAD"
    },
    {
      "name": "DRUMVALE PRIMARY",
      "subcounty": "EMBAKASI",
      "location": "DANDORA",
      "description": "KAMULU OFF KANGUNDO ROAD, SIR HENRY'S DRIVE - PEARL STREET(Drumvale)"
    },
    {
      "name": "NJIRU PRIMARY",
      "subcounty": "EMBAKASI",
      "location": "DANDORA",
      "description": "ON YOUR WAY TO MWIKI BETWEEN NJIRU CHIEF'S CAMP / D.Os OFFICE AND QUARRY"
    },
    {
      "name": "EASTLEIGH AIRPORT PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "EASTLEIGH",
      "description": "2ND AVENUE OFF 3RD ST. NEXT TO MAINA WANJIGI SECONDARY"
    },
    {
      "name": "MUTHURWA PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "ALONG SAKWA RD. NEXT TO KMC"
    },
    {
      "name": "UHURU ESTATE PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "UHURU ESTATE ON UHURU RD. NEXT TO UHURU SECONDARY"
    },
    {
      "name": "HESHIMA ROAD PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "AMBIRA ROAD - MAKONGENI"
    },
    {
      "name": "OUR LADY OF MERCY GIRLS - SHAURI MOYO",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "AMBIRA RD. OFF JOGOO ROAD"
    },
    {
      "name": "BAHATI UHURU PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "HESHIMA AVENUE ZEMBAKASI CRESENT, ZEMBAKASI LANE"
    },
    {
      "name": "KIMATHI PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "KIMATHI ESTATE"
    },
    {
      "name": "MORRISON PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "BAHATI"
    },
    {
      "name": "DR. LIVINGSTONE PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "JERUSALEM ESTATE"
    },
    {
      "name": "NAIROBI RIVER PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "OUTERING RD. ESTATE OFF MUMIA SOUTH RD."
    },
    {
      "name": "NEW EASTLEIGH PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "EASTLEIGH",
      "description": "EASTLEIGH NORTH"
    },
    {
      "name": "ZAWADI PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "EASTLEIGH",
      "description": "EASTLEIGH SECTION 3 NEAR EASTMAT No. 4 BUS STAGE"
    },
    {
      "name": "MOI AIR BASE PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "EASTLEIGH",
      "description": "KENYA AIR FORCE EASTLEIGH - NAIROBI"
    },
    {
      "name": "MOI FORCES ACADEMY",
      "subcounty": "KAMUKUNJI",
      "location": "EASTLEIGH",
      "description": "NEXT TO MOI AIR BASE - JUJA ROAD"
    },
    {
      "name": "ST. TERESA'S BOYS PRIMARY SCHOOL",
      "subcounty": "KAMUKUNJI",
      "location": "EASTLEIGH",
      "description": "EASTLEIGH SECTION I WITHIN THE CATHOLIC CHURCH NEAR MLANGO KUBWA"
    },
    {
      "name": "BAHATI DAY NURSERY",
      "subcounty": "KAMUKUNJI",
      "location": "BAHATI",
      "description": "AT BAHATI SHOPPING CENTRE NEXT TO UHURU BAHATI PRIMARY SCHOOL"
    },
    {
      "name": "NEW PUMWANNI PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "EASTLEIGH",
      "description": "FROM RING ROAD NGARA CONNECT TO KINYANJUI ROAD - SCHOOL IS BEFORE THE KARIOKOR WWII COMMONWEALTH CEMETARY"
    },
    {
      "name": "BURUBURU I PRIMARY",
      "subcounty": "KAMUKUNJI",
      "location": "BURUBURU",
      "description": "BURUBURU PHASE I OFF MUMIAS ROAD NEXT TO ORANGE HOUSE"
    },
  
  ]
  
  
  
  
    // Add more school objects as needed
  
  const [schools, setSchools] = useState(sampleSchoolsData);

  return (
    <>
      <section className='schoolsCard'>
        <div className='container grid2'>
          {schools.map((school, index) => (
            <div className='items' key={index}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={school.image} alt={school.name} />
                  </div>
                </div>
                <div className='text'>
                  <h1>{school.name}</h1>
                  <div className='location'>
                    <i className='fa fa-map-marker'></i>
                    <span>{school.location}</span>
                  </div>
                  <p>{school.description}</p>
                  {/* You can add more details or links to the school's page */}
                </div>
              </div>
              <button className='outline-btn'>LEARN MORE</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SchoolsCard;
