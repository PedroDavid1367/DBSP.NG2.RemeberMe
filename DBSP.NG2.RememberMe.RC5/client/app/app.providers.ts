import { provide }                             from "@angular/core";  
import { XHRBackend }                          from "@angular/http";
import { OidcTokenManagerService }             from "./common.services/oidc-token-manager.service"
import { HttpExtendedService }                 from "./common.services/http-extended.service"
import { InMemoryBackendService, SEED_DATA }   from "angular2-in-memory-web-api";
import { AppMockedData }                       from "./mocked-data/app-mocked-data";

let $ = require("jquery");

export const APP_PROVIDERS = [
  provide("BASE_URL", { useValue: "https://localhost:44315" }),  // Gallery REST API Application
  provide("$", { useValue: $ }),
  OidcTokenManagerService,
  HttpExtendedService,  // Used until a proper interceptor has been implemented 
  { provide: XHRBackend, useClass: InMemoryBackendService },  // in-memory server
  { provide: SEED_DATA, useClass: AppMockedData }             // in-memory server data
];

