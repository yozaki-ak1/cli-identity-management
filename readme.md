# Akamai CLI for Identity Management

## Overview
- This tool is intended to be used for interacting with Akamai's Identity Management feature from command line.
- This CLI is mostly aligned with Akamai Identity Management API, which can be found the link below.  
https://techdocs.akamai.com/iam-api/reference/identity-management-api

## Useage
### self
- This lets you manage API credentials for your own API client
``` shell
akamai identity-management self <sub-command> [options]
```

### client
- This lets you manage other API clients based on your group roles and permissions.
``` shell
akamai identity-management client <sub-command> [options]
```

## Sub-Commands
- Specify [self] or [client] followed by "akamai identity-management"
### self
```shell
akamai identity-management <command> <args> [options]

self
  gcl|getYourClient                                                           Get your client
  lak|listYourAccountSwitchKeys                                               List your account switch keys
  lcr|listYourCredentials                                                     List your credentials
  ccr|createYourCredentials                                                   Create your credential
  dcrs|deactivateYourAllCredentials                                           Deactivate your all credentials
  rcr|removeYourCredential <credentialId>                                     Remove your credential
  gcr|getYourCredential <credentialId>                                        Get your credential
  ucr|updateYourCredential <credentialId> <expiresOn> <status> [description]  Update your credential
  dcr|deactivateYourCredential <credentialId>                                 Deactivate your credential

Command options:
  -c, --config <config>                      edgerc file location
  -s, --section <section>                    edgerc section
  -a, --accountSwitchKey <accountSwitchKey>  Swith account
  --verbose                                  enable verbose logging

Options:
  -v, --version  Show version number
  -h, --help     Show help
```
### client
```shell
akamai identity-management <command> <args> [options]

client
  gcl|getClient <clientId>                                                           Get a client
  lak|listAccountSwitchKeys <clientId>                                               List account switch keys
  lcr|listCredentials <clientId>                                                     List credentials
  ccr|createCredential <clientId>                                                    Create a credential
  dcrs|deactivateAllCredentials <clientId>                                           Deactivate all credentials
  rcr|removeCredential <clientId> <credentialId>                                     Remove a credential
  gcr|getCredential <clientId> <credentialId>                                        Get a credential
  ucr|updateCredential <clientId> <credentialId> <expiresOn> <status> [description]  Update a credential

clients
  dcr|deactivateCredential <clientId> <credentialId>  Deactivate a credential

Command options:
  -c, --config <config>                      edgerc file location
  -s, --section <section>                    edgerc section
  -a, --accountSwitchKey <accountSwitchKey>  Swith account
  --verbose                                  enable verbose logging

Options:
  -v, --version  Show version number
  -h, --help     Show help
```
