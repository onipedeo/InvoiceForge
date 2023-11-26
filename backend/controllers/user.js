const userService = require("../services/user");

class UserController {
  async create(req, res) {
    try {
      const id = await userService.create(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getByEmail(req, res) {
    try {
      const user = await userService.getByEmail(req.body);
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
      if (e.message === "User not found") {
        res.status(401).json({ error: "Unauthorized Credentials" });
      } else {
      res.status(500).json({ error: "Internal server error" });
      console.log(e)
      }
    }
  }
  async getById(req, res) {
    try {
      const user = await userService.getById(req.params.id);
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Internal server error" });

    }
  }

  async edit(req, res) {
    try {
      const id = await userService.edit(req.params.id, req.body);
      res.status(200).json({ message: "User updated successfully" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Internal server error" });

    }
  }

  async getInvoices(req, res) {
    try {
      const invoice = await userService.getInvoices(
        req.params.id,
      );
      res.status(200).json(invoice);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Internal server error" });

    }
  }

  async getAppointments(req, res) {
    try {
      const appointments = await userService.getAppointments(
        req.params.id,
      );
      res.status(200).json(appointments);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Internal server error" });

    }
  }


    async getClients(req, res) {
      try {
        const clients = await userService.getClients(
          req.params.id,
        );
        res.status(200).json(clients);
      } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" });
      }
    }

    async getUnreviewed(req, res) {
      try {
        const unreviewed = await userService.getUnreviewed(
          req.params.id,
        );
        res.status(200).json(unreviewed);
      } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" });

      }
    }

    async getObject(req, res) {
      try {
        const object = await userService.getObject(
          req.params.id,
        );
        res.status(200).json(object);
      } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" });

      }
    }
  }

  module.exports = new UserController();
