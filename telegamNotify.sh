#!/bin/bash

while getopts w:s:p:r:b:a: option
do
case "${option}"
in
w) WEBHOOK=${OPTARG};;
s) SIGN=${OPTARG};;
p) PROJECT=${OPTARG};;
r) RESULT=${OPTARG};;
b) BRANCH=${OPTARG};;
a) AUTHOR=${OPTARG};;
esac
done

if [ "${RESULT}" = "success" ];
then
    STATE="🟢 *State:* ${RESULT}"
elif [ "${RESULT}" = "failure" ];
then
    STATE="🔴 *State:* ${RESULT}"
else
    echo "Error. -result must be success or failure"
    exit 1;
fi

curl -X POST ${WEBHOOK} \
-H 'Content-Type: text/plain' \
-H "X-Webhook-Signature: ${SIGN}" \
--data-raw $'👨‍🔧 *Travis CI* \n\n🔖 *Project:* '"${PROJECT}"$' \n'"${STATE}"$' \n🏷 *Ref:* '"${BRANCH}"$' \n\n👤 Triggered by *'"${AUTHOR}"'*'