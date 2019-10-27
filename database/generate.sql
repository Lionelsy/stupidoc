create table document
(
  document_id    int          not null
    primary key,
  document_title varchar(256) not null,
  document_type  varchar(256) not null,
  create_time    timestamp    not null,
  description    varchar(256) null
);

create table document_key
(
  key_id      int not null
    primary key,
  document_id int null,
  constraint fk_doc_key
    foreign key (document_id) references document (document_id)
);

create table document_version
(
  version_id    int       not null
    primary key,
  document_id   int       not null,
  content_src   blob      not null,
  content_pdf   blob      not null,
  last_modified timestamp not null,
  constraint fk_doc_ver
    foreign key (document_id) references document (document_id)
);

create table user
(
  user_id       int          not null
    primary key,
  user_name     varchar(256) not null,
  user_password varchar(256) not null
);

create table document_user_authority
(
  did        int null,
  uid        int null,
  permission int not null,
  constraint fk_did
    foreign key (did) references document (document_id),
  constraint fk_uid
    foreign key (uid) references user (user_id)
);

