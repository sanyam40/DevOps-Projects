#!/bin/bash

###############
# Author : Sanyam
# Date : 24 Jan
# Version : v1
# This Script will report the AWS Usuage
######################

set -x
# AWS S3,EC2,Lambda,IAM Users

echo "Print list of s3 buckets"
# list s3 buckets
aws s3 ls > resourceTracker

echo "Print list of ec2 instances"
# list ec2 instances
aws ec2 describe-instances > resourceTracker

echo "Print list of lambda functions"
# list lamda
aws lambda list-functions >> resourceTracker:q!

echo "Print list of IAM User"
# list IAM uSER
aws iam list-users
