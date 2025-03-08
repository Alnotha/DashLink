import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import type { SpreadsheetRow } from '@shared/schema';

export class SpreadsheetService {
  private doc: GoogleSpreadsheet;
  
  constructor() {
    const credentials = {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    };

    const jwt = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, jwt);
  }

  async addRow(data: Omit<SpreadsheetRow, 'timestamp'>): Promise<void> {
    try {
      await this.doc.loadInfo();
      const sheet = this.doc.sheetsByIndex[0];
      
      await sheet.addRow({
        timestamp: new Date().toISOString(),
        ...data,
      });
    } catch (error) {
      console.error('Error adding row to spreadsheet:', error);
      throw new Error('Failed to add contact to spreadsheet');
    }
  }
}

export const spreadsheetService = new SpreadsheetService();
