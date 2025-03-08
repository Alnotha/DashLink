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

  // Test endpoint for email configuration
  app.get("/api/test-email", async (_req, res) => {
    try {
      await sendContactNotification({
        businessName: "Test Business",
        ownerName: "Test Owner",
        email: "test@example.com",
        phone: "1234567890",
        message: "This is a test email",
        storeCount: 1
      });
      res.json({ message: "Test email sent successfully" });
    } catch (error) {
      console.error('Error sending test email:', error);
      res.status(500).json({ message: "Failed to send test email", error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}