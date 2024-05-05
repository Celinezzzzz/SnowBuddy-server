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
      latitude: 50.10375,
      longitude: 122.91353,
      website: 'https://www.whistlerblackcomb.com/',
      map_url: 'https://lift.opensnow.com/trail-maps/cawhistler_23_2021-01-22-10-53-29_full.jpg',
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
      latitude: 50.3598,
      longitude: 119.0589,
      website: 'https://www.skisilverstar.com/',
      map_url: 'https://lift.opensnow.com/trail-maps/casilverstar_227_2021-01-22-11-22-46_full.jpg',
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
      latitude: 49.40093,
      longitude: 123.19856,
      website: 'https://cypressmountain.com/',
      map_url: 'https://lift.opensnow.com/trail-maps/cacypress_136_2020-11-23-11-27-29_full.jpg',
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
      latitude: 50.8837,
      longitude: 119.8891,
      website: 'https://www.sunpeaksresort.com/',
      map_url: 'https://lift.opensnow.com/trail-maps/casunpeaks_208_2021-01-22-10-53-29_full.jpg',
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
      latitude: 49.73556,
      longitude: 118.95083,
      website: 'https://www.bigwhite.com/',
      map_url: 'https://lift.opensnow.com/trail-maps/cabigwhite_211_2022-12-05-05-15-02_full.jpg',
    },
  ]);
};
