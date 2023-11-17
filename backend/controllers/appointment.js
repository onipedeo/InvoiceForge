const appointmentService = require("../services/appointment");

class AppointmentController {
  // Method to create a new appointment
  async create(req, res) {
    try {
      const [id] = await appointmentService.create(req.body);
      res.status(201).json(id);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Method to get a specific appointment
  async getById(req, res) {
    try {
      const appointmentId = req.params.id;
      const appointment = await appointmentService.getById(appointmentId);
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Method to edit an appointment
  async edit(req, res) {
    try {
      const appointmentId = req.params.id;
      await appointmentService.edit(appointmentId, req.body);
      res.status(200).json({ message: "Appointment updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Method to delete an appointment
  async delete(req, res) {
    try {
      const appointmentId = req.params.id;
      await appointmentService.delete(appointmentId);
      res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Method to set reviewed = true
  async reviewedById(req, res) {
    try {
      const appointmentId = req.params.id;
      await appointmentService.reviewedById(appointmentId);
      res.status(200).json({ message: "Appointment reviewed successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Method to set invoiced = true
  async invoicedById(req, res) {
    try {
      const appointmentId = req.params.id;
      await appointmentService.invoicedById(appointmentId);
      res.status(200).json({ message: "Appointment invoiced successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Method to confirm hours
  async confirmHours(req, res) {
    try {
      const appointmentId = req.params.id;
      await appointmentService.confirmHours(appointmentId);
      res.status(200).json({ message: "Appointment hours confirmed successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

}

module.exports = new AppointmentController();
