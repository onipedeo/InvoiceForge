const userService = require("../services/user");

class UserController {
  async create(req, res) {
    try {
      const id = await userService.create(req.body);
      res.status(201).json(id);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getByEmail(req, res) {
    try {
      const user = await userService.getByEmail(req.body);
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error("ERROR: email must be in request body");
    }
  }
  async getById(req, res) {
    try {
      const user = await userService.getById(req.params.id);
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error(e);
    }
  }

  async edit(req, res) {
    try {
      const id = await userService.edit(req.params.id, req.body);
      res.status(200).json({ message: "User updated successfully" });
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error(e);
    }
  }

  async getClients(req, res) {
    try {
      const clients = await userService.getClients(req.params.id);
      res.status(200).json(clients);
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error(e);
    }
  }

  async getAppointments(req, res) {
    try {
      const appointments = await userService.getAppointments(req.params.id);
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error(e);
    }
  }

  async getAppointmentsInReview(req, res) {
    try {
      const appointments = await userService.getAppointmentsInReview(
        req.params.id
      );
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error(e);
    }
  }


  async getInvoices(req, res) {
    try {
      const invoices = await userService.getAllInvoices(req.params.id);
      res.status(200).json(invoices);
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error(e);
    }
  }

  async getInvoiceByNumber(req, res) {
    try {
      const invoice = await userService.getInvoiceByNumber(
        req.params.id,
        req.params.number
      );
      res.status(200).json(invoice);
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
      console.error(e);
    }
  }

}

module.exports = new UserController();
