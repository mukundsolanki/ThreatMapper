#!/bin/sh
set -e

until pg_isready -h "${DEEPFENCE_POSTGRES_USER_DB_HOST}" -p "${DEEPFENCE_POSTGRES_USER_DB_PORT}" -U "${DEEPFENCE_POSTGRES_USER_DB_USER}" -d "${DEEPFENCE_POSTGRES_USER_DB_NAME}"; 
do
  echo >&2 "Postgres is unavailable - sleeping"
  sleep 5
done

# check migrations complete
# psql -U ${DEEPFENCE_POSTGRES_USER_DB_USER} -d ${DEEPFENCE_POSTGRES_USER_DB_NAME} -t -c "SELECT EXISTS(SELECT name FROM role WHERE name = 'admin')"
export PGPASSWORD=${DEEPFENCE_POSTGRES_USER_DB_PASSWORD}
until psql -h "${DEEPFENCE_POSTGRES_USER_DB_HOST}" -U ${DEEPFENCE_POSTGRES_USER_DB_USER} -p "${DEEPFENCE_POSTGRES_USER_DB_PORT}" "${DEEPFENCE_POSTGRES_USER_DB_NAME}" -c '\q'; 
do
  echo >&2 "Database is unavailable - sleeping"
  sleep 5
done
echo >&2 "Database is available"

# wait for neo4j to start
until nc -z ${DEEPFENCE_NEO4J_HOST} ${DEEPFENCE_NEO4J_BOLT_PORT};
do 
  echo "neo4j is unavailable - sleeping"
  sleep 5; 
done

# wait for kafka connection
until kcat -L -b ${DEEPFENCE_KAFKA_BROKERS};
do
  echo "kafka is unavailable - sleeping"
  sleep 5;
done

# wait for file server to start
until nc -z ${DEEPFENCE_MINIO_HOST} ${DEEPFENCE_MINIO_PORT};
do
  echo "file server is unavailable - sleeping"
  sleep 5;
done

sed -i "s/https:\/\/petstore.swagger.io\/v2\/swagger.json/\/deepfence\/openapi.json/g" /usr/local/share/swagger-ui/swagger-initializer.js

exec "$@"
