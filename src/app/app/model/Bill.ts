export interface BillItem {
    product_ID: number;
    qty: number;
    total_Amount: number;
  }
  export interface Bill {
    customer_Id: number;
    bill_Total: number;
    billItems: BillItem[];
  }