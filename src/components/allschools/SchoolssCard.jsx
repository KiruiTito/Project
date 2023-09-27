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
    }
  ];
  
  
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
