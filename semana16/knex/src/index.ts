import express, { Express, Request, Response } from "express";
import { AddressInfo } from "net"
import knex from "knex"

const app = express()