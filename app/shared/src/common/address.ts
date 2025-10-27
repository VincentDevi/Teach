import { Data } from "effect";

export interface Address {
  readonly street: string;
  readonly number: string;
  readonly city: string;
  readonly country: string;
  readonly postalCode: string;
}

export const Address = Data.case<Address>();
