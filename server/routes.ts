import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { sendContactNotification } from "./email";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      // Send email notification
      await sendContactNotification({
        businessName: contactData.businessName,
        ownerName: contactData.ownerName,
        email: contactData.email,
        phone: contactData.phone,
        message: contactData.message,
        storeCount: contactData.storeCount
      });

      res.json(contact);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error('Error processing contact:', error);
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}