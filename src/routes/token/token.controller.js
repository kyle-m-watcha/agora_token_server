import express from "express";
import { buildTokenWithUid, Role } from "./RtcTokenBuilder";
import dotenv from "dotenv";
dotenv.config();

const expirationTimeInSeconds = 3600;
const currentTimestamp = Math.floor(Date.now() / 1000);
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

let tmpToken =
  "006967c262fe6b8417bab8058645362e2daIAA7MeI/ixo7J8RNFMl3/SfWj+fqM5f75Akw5FD+0yv2wdfkF4QAAAAAEAC5X9YGmO1bYAEAAQCY7Vtg";

class TokenController {
  get = async (req, res, next) => {
    const {
      query: { channel, userId, isHost },
    } = req;
    const token = buildTokenWithUid(
      process.env.appID,
      process.env.appCertificate,
      channel,
      userId,
      isHost ? Role.PUBLISHER : Role.ATTENDEE,
      privilegeExpiredTs
    );

    res.json({
      ok: true,
      token: tmpToken,
    });
  };

  set = async (req, res, next) => {
    const {
      query: { token },
    } = req;
    tmpToken = token;

    res.json({
      ok: true,
      token: tmpToken,
    });
  };
}

export default new TokenController();
