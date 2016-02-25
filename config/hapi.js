"use strict";
import "dotenv";
import Hapi from "hapi";
import Path from "path";
import Good from "good";
import GoodConsole from "good-console";

export default function() {
  let server = new Hapi.Server();
  let serverConfig = {
    port: 3000,
    host: "localhost",
    routes: {
      files: {
        relativeTo: Path.join( Path.normalize(__dirname + '/../') , 'public')
      }
    }
  };

  server.connection(serverConfig);
  server.register(
  [{
    register: Good,
    options: {
      reporters: [
        {
          reporter: GoodConsole,
          events: {
            response: '*',
            log: '*'
          }
        }
      ]
    }
  }], (err) => {
    if (err) {
      throw err;
    } else {
      server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri)
      });
    }
  });

  return server;
};
