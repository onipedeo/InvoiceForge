const { faker } = require('@faker-js/faker');
const moment = require('moment');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing appointments and invoices
  await knex('appointments').del();
  await knex('invoices').del();


  const randomFromArr = (arr) => {
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement;
  };

  // new seed data
  // write a loop to create 40 appointments
  const appointments = [];

  const first_date = moment('2023-11-13');
  let date = first_date.clone();
  const clients = await knex('clients').select('id');
  const users = await knex('users').select('id');
  const appointment_rate_cents = [null, 3000, 5000];
  const start_time = ["06:00:00", "07:00:00", "08:00:00", "09:00:00"];
  const end_time_morning = ["12:00:00", "13:00:00", "14:00:00", "15:00:00"];
  const end_time_afternoon = ["17:00:00", "18:00:00", "19:00:00", "20:00:00"];
  const notes = faker.lorem.sentence();

  //creates 2 appointments per day for 20 days
  for (let i = 1; i <= 20; i++) {
    const appointment = {
      id: i,
      user_id: randomFromArr(users).id,
      client_id: randomFromArr(clients).id,
      date: date.format('YYYY-MM-DD'),
      start_time: randomFromArr(start_time),
      end_time: randomFromArr(end_time_morning),
      confirmed_hours: null,
      reviewed: true,
      invoiced: false,
      appointment_rate_cents: randomFromArr(appointment_rate_cents),
      notes: randomFromArr(notes),
    };

    // set confirmed hours
    const startTime = moment(appointment.start_time, 'HH:mm:ss');
    const endTime = moment(appointment.end_time, 'HH:mm:ss');
    appointment.confirmed_hours = endTime.diff(startTime, 'hours');

    // make two appointments per day
    appointments.push(appointment);

    // the second appointment:
    const secondAppointment = {
      ...appointment,
      id: i + 20,
      start_time: endTime.add(1, 'hour').format('HH:mm:ss'),
      end_time: randomFromArr(end_time_afternoon),
      confirmed_hours: null,
      notes: randomFromArr(notes),
    };

    const secondStartTime = moment(secondAppointment.start_time, 'HH:mm:ss');
    const secondEndTime = moment(secondAppointment.end_time, 'HH:mm:ss');
    secondAppointment.confirmed_hours = secondEndTime.diff(secondStartTime, 'hours');

    appointments.push(secondAppointment);

    date.add(1, 'day');
  }

  // insert appointments into db
  await knex('appointments').insert(appointments);

  // reset the index of the appointments table
  await knex.raw('ALTER SEQUENCE appointments_id_seq RESTART WITH 21');
};
