/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  IngestersSecret,
  ModelScanTrigger,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    IngestersSecretFromJSON,
    IngestersSecretToJSON,
    ModelScanTriggerFromJSON,
    ModelScanTriggerToJSON,
} from '../models';

export interface IngestSecretsRequest {
    ingestersSecret?: Array<IngestersSecret> | null;
}

export interface StartSecretScanRequest {
    modelScanTrigger?: ModelScanTrigger;
}

/**
 * SecretScanApi - interface
 * 
 * @export
 * @interface SecretScanApiInterface
 */
export interface SecretScanApiInterface {
    /**
     * Ingest secrets found while scanning the agent
     * @summary Ingest Secrets
     * @param {Array<IngestersSecret>} [ingestersSecret] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecretScanApiInterface
     */
    ingestSecretsRaw(requestParameters: IngestSecretsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Ingest secrets found while scanning the agent
     * Ingest Secrets
     */
    ingestSecrets(requestParameters: IngestSecretsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Start Secret Scan on agent or registry
     * @summary Start Secret Scan
     * @param {ModelScanTrigger} [modelScanTrigger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecretScanApiInterface
     */
    startSecretScanRaw(requestParameters: StartSecretScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Start Secret Scan on agent or registry
     * Start Secret Scan
     */
    startSecretScan(requestParameters: StartSecretScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Stop Secret Scan on agent or registry
     * @summary Stop Secret Scan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecretScanApiInterface
     */
    stopSecretScanRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Stop Secret Scan on agent or registry
     * Stop Secret Scan
     */
    stopSecretScan(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class SecretScanApi extends runtime.BaseAPI implements SecretScanApiInterface {

    /**
     * Ingest secrets found while scanning the agent
     * Ingest Secrets
     */
    async ingestSecretsRaw(requestParameters: IngestSecretsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/ingest/secrets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ingestersSecret?.map(IngestersSecretToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ingest secrets found while scanning the agent
     * Ingest Secrets
     */
    async ingestSecrets(requestParameters: IngestSecretsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestSecretsRaw(requestParameters, initOverrides);
    }

    /**
     * Start Secret Scan on agent or registry
     * Start Secret Scan
     */
    async startSecretScanRaw(requestParameters: StartSecretScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/start/secret`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanTriggerToJSON(requestParameters.modelScanTrigger),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Start Secret Scan on agent or registry
     * Start Secret Scan
     */
    async startSecretScan(requestParameters: StartSecretScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.startSecretScanRaw(requestParameters, initOverrides);
    }

    /**
     * Stop Secret Scan on agent or registry
     * Stop Secret Scan
     */
    async stopSecretScanRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/stop/secret`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Stop Secret Scan on agent or registry
     * Stop Secret Scan
     */
    async stopSecretScan(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.stopSecretScanRaw(initOverrides);
    }

}
