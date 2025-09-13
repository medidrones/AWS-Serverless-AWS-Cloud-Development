#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ECommerceAwsStack } from "../lib/e_commerce_aws-stack";

const app = new cdk.App();
new ECommerceAwsStack(app, "ECommerceAwsStack", {});
