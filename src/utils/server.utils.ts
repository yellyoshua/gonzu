import { ServerResponse } from "http";

export const setUpCustomHeaders = (res: ServerResponse) => {
  res.setHeader("powered-by", "@yellyoshua");

  const headers = new Headers();
  headers.set("powered-by", "@yellyoshua");

  headers.forEach((v, k) => {
    res.setHeader(k, v);
  });

  return res;
};
