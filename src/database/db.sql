
    CREATE SEQUENCE user_seq;

    CREATE TABLE public.user (
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

    CREATE INDEX idx_m ON public.user (mobile);
