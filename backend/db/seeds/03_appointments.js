const moment = require('moment');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing appointments and invoices
  await knex('appointments').del();
  await knex.raw('ALTER SEQUENCE appointments_id_seq RESTART WITH 1');

  const randomFromArr = (arr) => {
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement;
  };

  // new seed data
  // write a loop to create 40 appointments
  const appointments = [];

  const first_date = moment('2023-11-13');
  let date = first_date.clone();
  const clients = await knex('clients_users').select('client_id').where('user_id', 1);
  const appointment_rate_cents = [null, 3000, 5000];
  const start_time = ["06:00:00", "07:00:00", "08:00:00", "09:00:00"];
  const end_time_morning = ["12:00:00", "13:00:00", "14:00:00", "15:00:00"];
  const end_time_afternoon = ["17:00:00", "18:00:00", "19:00:00", "20:00:00"];
  const notes = ["sand and prep", 'install vanity', 'demo wall', 'paint', "mud & tape", "demo bathroom"];


  //creates 2 reviewed appointments per day for 20 day
  for (i = 0; i < 20; i++) {

    // get the user id, standard rate, and next invoice number
    const appointment = {
      client_id: null, // will be set later
      date: date.format('YYYY-MM-DD'),
      start_time: randomFromArr(start_time),
      end_time: randomFromArr(end_time_morning),
      confirmed_hours: null, // will be set later
      reviewed: true,
      invoiced: false,
      appointment_rate_cents: randomFromArr(appointment_rate_cents),
      notes: randomFromArr(notes),
    };
    // get the client and user ids
    appointment.client_id = randomFromArr(clients).client_id;


    // set confirmed hours
    const startTime = moment(appointment.start_time, 'HH:mm:ss');
    const endTime = moment(appointment.end_time, 'HH:mm:ss');

    appointment.confirmed_hours = endTime.diff(startTime, 'hours');
    appointments.push(appointment);

    // the second appointment:
    const secondAppointment = {
      ...appointment,

      start_time: endTime.add(1, 'hour').format('HH:mm:ss'),
      end_time: randomFromArr(end_time_afternoon),
      confirmed_hours: null,
      notes: randomFromArr(notes),
    };

    // ensure a different note is used for the second appointment
    while (secondAppointment.notes === appointment.notes) {
      secondAppointment.notes = randomFromArr(notes);
    }

    const secondStartTime = moment(secondAppointment.start_time, 'HH:mm:ss');
    const secondEndTime = moment(secondAppointment.end_time, 'HH:mm:ss');
    secondAppointment.confirmed_hours = secondEndTime.diff(secondStartTime, 'hours');

    appointments.push(secondAppointment);

    date.add(1, 'day');




  }


  // create 10 unreviewed appointments, 2 per day for random clients
  const unreviewedAppointments = [];
  for (let i = 0; i < 5; i++) {
    const unreviewedAppointment = {
      client_id: null, // will be set later
      date: date.format('YYYY-MM-DD'),
      start_time: randomFromArr(start_time),
      end_time: randomFromArr(end_time_morning),
      confirmed_hours: null, // will be set later
      reviewed: false,
      invoiced: false,
      appointment_rate_cents: randomFromArr(appointment_rate_cents),
      notes: randomFromArr(notes),
    };
    const endTime = moment(unreviewedAppointment.end_time, 'HH:mm:ss');

    // get the client and user ids
    unreviewedAppointment.client_id = randomFromArr(clients).client_id;
    unreviewedAppointments.push(unreviewedAppointment);

    // the second appointment:
    const secondUnreviewedAppointment = {
      ...unreviewedAppointment,
      start_time: endTime.add(1, 'hour').format('HH:mm:ss'),
      end_time: randomFromArr(end_time_afternoon),
      confirmed_hours: null,
      notes: randomFromArr(notes),
    };

    // ensure a different note is used for the second appointment
    while (secondUnreviewedAppointment.notes === unreviewedAppointment.notes) {
      secondUnreviewedAppointment.notes = randomFromArr(notes);
    }

    unreviewedAppointments.push(secondUnreviewedAppointment);

    date.add(1, 'day');

  }

  // insert appointments into db
  await knex('appointments').insert(appointments);
  await knex('appointments').insert(unreviewedAppointments);
};
