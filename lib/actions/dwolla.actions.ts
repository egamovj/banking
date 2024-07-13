"use server";

import { Client } from "dwolla-v2";

export interface CreateFundingSourceOptions {
  customerId: string;
  fundingSourceName: string;
  plaidToken: string;
  _links: object;
}

const getEnvironment = (): "production" | "sandbox" => {
  const environment = process.env.DWOLLA_ENV as string;

  switch (environment) {
    case "sandbox":
      return "sandbox";
    case "production":
      return "production";
    default:
      throw new Error(
        "Dwolla environment should either be set to `sandbox` or `production`"
      );
  }
};

const dwollaClient = new Client({
  environment: getEnvironment(),
  key: process.env.DWOLLA_KEY as string,
  secret: process.env.DWOLLA_SECRET as string,
});

export const createFundingSource = async (
  options: CreateFundingSourceOptions
) => {
  try {
    return await dwollaClient.post(
      `customers/${options.customerId}/funding-sources`,
      {
        name: options.fundingSourceName,
        plaidToken: options.plaidToken,
      }
    );
  } catch (err) {
    console.error("Creating a Funding Source Failed: ", err);
  }
};

export const createOnDemandAuthorization = async () => {
  try {
    return await dwollaClient.post("on-demand-authorizations");
  } catch (err) {
    console.error("Creating an on Demand Authorization Failed: ", err);
  }
};
