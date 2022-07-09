#!/usr/bin/env node
'use strict';

const EdgeGrid = require('akamai-edgegrid')
const chalk = require('chalk');
const { decycle } = require('json-cyclic');

class idm {
    constructor(argv) {
        this._eg = new EdgeGrid({
            path: argv.config,
            section: argv.section
        })
    }

    // Self
    getYourClient(argv, urls) {
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    listYourCredentials(argv, urls) {
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    listYourAccountSwitchKeys(argv, urls) {
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    createYourCredential(argv, urls) {
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    deactivateYourCredentials(argv, urls) {
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(response.status, response.statusText)
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    removeYourCredential(argv, urls) {
        urls.url += "/" + argv.credentialId
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(response.status, response.statusText)
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
        return
    }

    getYourCredential(argv, urls) {
        urls.url += "/" + argv.credentialId
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
        return
    }

    updateYourCredential(argv, urls){
        let headers = {'Content-Type': "application/json"}
        let body = this.buildBody(argv, ["expiresOn","status","description"])
        urls.url += "/" + argv.credentialId
        this.makeRequest(urls,headers,body).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
        return
    }

    deactivateYourCredential(argv, urls){
        urls.url = urls.url.replace('{credentialId}',argv.credentialId)
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(response.status, response.statusText)
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
        return
    }



    // Clients
    getClient(argv, urls) {
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    listAccountSwitchKeys(argv, urls) {
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    listCredentials(argv, urls) {
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    createCredential(argv, urls) {
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    deactivateCredentials(argv, urls) {
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(response.status, response.statusText)
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    removeCredential(argv, urls) {
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId).replace('{credentialId}',argv.credentialId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(response.status, response.statusText)
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    getCredential(argv, urls) {
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId).replace('{credentialId}',argv.credentialId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
    }

    updateCredential(argv, urls){
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        let headers = {'Content-Type': "application/json"}
        let body = this.buildBody(argv, ["expiresOn","status","description"])
        urls.url = urls.url.replace('{clientId}',argv.clientId).replace('{credentialId}',argv.credentialId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls,headers,body).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(JSON.stringify((response.data),null,2))
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
        return
    }

    deactivateCredential(argv, urls){
        let queries = this.buildQuery(argv, ["accountSwitchKey"],"&")
        urls.url = urls.url.replace('{clientId}',argv.clientId).replace('{credentialId}',argv.credentialId)
        if(queries){
            urls.url += "?" + queries
        }
        this.makeRequest(urls).then(
            response => {
                argv.verbose==='' ? console.log(JSON.stringify(decycle(response),null,2)) : console.log(response.status, response.statusText)
            },
            err => {
                console.log(JSON.stringify(decycle(err[0]),null,2))
                console.log(chalk.red.bold(err[1]))
            }
        )
        return
    }


    // Build action query string from variables
    buildQuery(object, components) {
        let comparray = [];
        components.map(element => {
            if (object[element] != null) {
                comparray.push(element + "=" + object[element])
            }
        })
        if (comparray.length == 0) {
            return
        } else {
            return comparray.join('&').toString();
        }
    }

    // Build message body json from variables
    buildBody(object, components) {
        let comparray = [];
        components.map(element => {
            if (object[element] != null) {
                comparray.push(`"${element}"` + ":" + `"${object[element]}"`)
            }
        })
        if (comparray.length == 0) {
            return
        } else {
            return `{${comparray.join(',').toString()}}`
        }
    }


    makeRequest(urls,headers={},data="") {
        return new Promise ((resolve, reject) => {
            this._eg.auth({
                path: urls.url,
                method: urls.method,
                headers: headers,
                body: data
            })
            .send((error, response, data) => {
                let status = String(response.status)
                if(error){
                    reject([error.response, "Unable to complete action. " + error])
                }else if(String(status).indexOf("20")) {
                    reject("Unable to complete action.  Status code " + response.status)
                }else{
                    resolve(response)
                }
            })
        })
    }

}
module.exports = idm;
