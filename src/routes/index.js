import express from "express";
import bodyParser from "body-parser";
import {runinvest} from "../control";
const route = express.Router();

	route.use(express.json());
    route.use(bodyParser.text({ type: "*/*" }));
	route.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	next();
    });
    
    route.post("/calculate",runinvest)
    module.exports = route;