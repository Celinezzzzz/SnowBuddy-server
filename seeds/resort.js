/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resorts').del()
  await knex('resorts').insert([
    {
      id: 1,
      resort_name: 'Whistler Blackcomb',
      city: 'Whistler',
      province: 'BC',
      country: 'Canada',
      trail_count: '235',
      base_altitude: '653',
      summit_altitude: '2284',
      vertical: '1631',
      website: 'https://www.whistlerblackcomb.com/',
      map_url: 'https://www.whistlerblackcomb.com/-/aemasset/sitecore/whistler-blackcomb/maps/20231020_WB_Winter_DigitalTrailMap_001.pdf',
    },
    {
      id: 2,
      resort_name: 'Silver Star Mountain Resort',
      city: 'Vernon',
      province: 'BC',
      country: 'Canada',
      trail_count: '132',
      base_altitude: '1153',
      summit_altitude: '1915',
      vertical: '762',
      website: 'https://www.skisilverstar.com/',
      map_url: 'https://cms.skisilverstar.com/sites/default/files/2023-11/202324SilverStar-AlpineMap-Final.jpg?_ga=2.47400676.230939685.1713914259-1359093273.1713914257',
    },
    {
      id: 3,
      resort_name: 'Cypress Mountain',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      trail_count: '53',
      base_altitude: '824',
      summit_altitude: '1436',
      vertical: '612',
      website: 'https://cypressmountain.com/',
      map_url: 'https://cypressmountain.com/Documents/Cypress/Trail%20Map%20PDFs/2023.24/Downhill%20Map%20WEB-a_13315.pdf',
    },
    {
      id: 4,
      resort_name: 'Sun Peaks Resort',
      city: 'Sun Peaks',
      province: 'BC',
      country: 'Canada',
      trail_count: '118',
      base_altitude: '1541',
      summit_altitude: '2318',
      vertical: '777',
      website: 'https://www.sunpeaksresort.com/',
      map_url: 'https://www.sunpeaksresort.com/sites/default/files/inline-files/2023%20Alpine%20Map_Web_0.pdf',
    },
    {
      id: 5,
      resort_name: 'Big White Ski Resort',
      city: 'kelowna',
      province: 'BC',
      country: 'Canada',
      trail_count: '235',
      base_altitude: '653',
      summit_altitude: '2284',
      vertical: '1631',
      website: 'https://www.bigwhite.com/',
      map_url: 'https://www.bigwhite.com/sites/default/files/inline-files/BigWhite-2023-FINAL-36x24in-min.pdf',
    },
  ]);
};
