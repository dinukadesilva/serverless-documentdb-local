const _ = require("lodash");
const BbPromise = require("bluebird");
const documentdb = require("documentdb");

class ServerlessDoumentdbLocal {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.service = serverless.service;
        this.serverlessLog = serverless.cli.log.bind(serverless.cli);
        this.config = this.service.custom && this.service.custom.documentdb || {};
        this.options = options;
        this.provider = "azure";
        this.commands = {
            documentdb: {
                commands: {
                    start: {
                        lifecycleEvents: ["startHandler"],
                        usage: "Starts Azure Cosmos DB Emulator",
                        options: {
                            port: {
                                shortcut: "p",
                                usage: "Default port is 8081"
                            }
                        }
                    },
                    install: {
                        usage: "Installs Azure Cosmos DB Emulator",
                        lifecycleEvents: ["installHandler"]
                    }
                }
            }
        };

        this.hooks = {
            "documentdb:install:installHandler": this.installHandler.bind(this),
            "documentdb:start:startHandler": this.startHandler.bind(this)
        };
    }

    get port() {
        const config = this.config;
        const port = _.get(config, "start.port", 8000);
        return port;
    }

    get host() {
        const config = this.config;
        const host = _.get(config, "start.host", "localhost");
        return host;
    }

    documentdbOptions() {
        //TODO
    }

    installHandler() {
        //TODO
    }

    startHandler() {
        //TODO
    }

}

module.exports = ServerlessDoumentdbLocal;
