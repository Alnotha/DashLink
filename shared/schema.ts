import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  businessName: text("business_name").notNull(),
  ownerName: text("owner_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  storeCount: integer("store_count").notNull()
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  businessName: true,
  ownerName: true,
  email: true,
  phone: true,
  message: true,
  storeCount: true
}).extend({
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  storeCount: z.number().min(1)
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
