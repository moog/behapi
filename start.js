"use strict";
import server from "./config/hapi.js";
import routes from "./config/routes.js";
routes(server());
