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
  IngestersComplianceDoc,
  ModelScanTrigger,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    IngestersComplianceDocFromJSON,
    IngestersComplianceDocToJSON,
    ModelScanTriggerFromJSON,
    ModelScanTriggerToJSON,
} from '../models';

export interface IngestCompliancesRequest {
    ingestersComplianceDoc?: Array<IngestersComplianceDoc> | null;
}

export interface StartComplianceScanRequest {
    modelScanTrigger?: ModelScanTrigger;
}

/**
 * ComplianceApi - interface
 * 
 * @export
 * @interface ComplianceApiInterface
 */
export interface ComplianceApiInterface {
    /**
     * Ingest compliance issues found while scanning the agent
     * @summary Ingest Compliances
     * @param {Array<IngestersComplianceDoc>} [ingestersComplianceDoc] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    ingestCompliancesRaw(requestParameters: IngestCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Ingest compliance issues found while scanning the agent
     * Ingest Compliances
     */
    ingestCompliances(requestParameters: IngestCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Start Compliance Scan on agent or registry
     * @summary Start Compliance Scan
     * @param {ModelScanTrigger} [modelScanTrigger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    startComplianceScanRaw(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    startComplianceScan(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Stop Compliance Scan on agent or registry
     * @summary Stop Compliance Scan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    stopComplianceScanRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    stopComplianceScan(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class ComplianceApi extends runtime.BaseAPI implements ComplianceApiInterface {

    /**
     * Ingest compliance issues found while scanning the agent
     * Ingest Compliances
     */
    async ingestCompliancesRaw(requestParameters: IngestCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/ingest/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ingestersComplianceDoc?.map(IngestersComplianceDocToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ingest compliance issues found while scanning the agent
     * Ingest Compliances
     */
    async ingestCompliances(requestParameters: IngestCompliancesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestCompliancesRaw(requestParameters, initOverrides);
    }

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    async startComplianceScanRaw(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/scan/start/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanTriggerToJSON(requestParameters.modelScanTrigger),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    async startComplianceScan(requestParameters: StartComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.startComplianceScanRaw(requestParameters, initOverrides);
    }

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    async stopComplianceScanRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/scan/stop/compliance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    async stopComplianceScan(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.stopComplianceScanRaw(initOverrides);
    }

}
