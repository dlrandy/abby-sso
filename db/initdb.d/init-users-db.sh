#!/usr/bin/env bash

set -e
psql -v ON_ERROR_STOP=1  --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    DROP DATABASE sso_db;
    CREATE USER abby;
    CREATE DATABASE sso_db ENCODING UTF8;
    GRANT ALL PRIVILEGES ON DATABASE sso_db TO abby;
    ALTER USER abby WITH PASSWORD 'password123';
    ALTER USER abby WITH SUPERUSER;
   -- SCHEMA: sso_dev
   -- DROP SCHEMA sso_dev ;
    CREATE SCHEMA sso_dev
        AUTHORIZATION postgres;
    COMMENT ON SCHEMA sso_dev
        IS 'standard sso_dev schema';
    GRANT ALL ON SCHEMA sso_dev TO PUBLIC;
    GRANT ALL ON SCHEMA sso_dev TO postgres;
    GRANT ALL ON SCHEMA sso_dev TO abby;
    CREATE SEQUENCE user_seq;

    CREATE TABLE sso_dev.user (
    id smallint NOT NULL DEFAULT NEXTVAL ('user_seq') ,
    account_name varchar(24) NOT NULL ,
    real_name varchar(20) NOT NULL ,
    password varchar(100) NOT NULL ,
    password_salt char(6) NOT NULL ,
    mobile varchar(15) NOT NULL DEFAULT '0' ,
    email varchar(100),
    role smallint NOT NULL DEFAULT '3' ,
    status smallint NOT NULL DEFAULT '0' ,
    create_by smallint NOT NULL DEFAULT '0',
    createdAt timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updatedAt timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    update_by smallint NOT NULL DEFAULT '0' ,
    PRIMARY KEY (id)
    );

    ALTER SEQUENCE user_seq RESTART WITH 1;

    CREATE INDEX idx_m ON sso_dev.user (mobile);

    ALTER TABLE sso_dev.user
        OWNER to postgres;
EOSQL