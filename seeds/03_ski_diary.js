/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ski_diary').del();
  await knex('ski_diary').insert([
    {
      user_id: 1,
      resort_id: 1,
      date: '2024-05-01',
      number_of_runs: 8,
      start_time: '09:00:00',
      end_time: '16:00:00',
    },
    {
      user_id: 1,
      resort_id: 2,
      date: '2024-05-02',
      number_of_runs: 5,
      start_time: '10:00:00',
      end_time: '15:00:00',
    },
    {
      user_id: 2,
      resort_id: 1,
      date: '2024-05-03',
      number_of_runs: 6,
      start_time: '08:30:00',
      end_time: '14:30:00',
    },
  ]);
};
