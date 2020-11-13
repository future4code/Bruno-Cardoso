export type Transaction = {
  purchasePrice: number;
  purchaseDate: Date;
  description: string;
};

export type UserAccount = {
  name: string;
  cpf: string;
  birthDate: Date;
  balance: number;
  spending: Transaction[];
};