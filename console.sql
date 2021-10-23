CREATE TABLE news (
	id INT NOT NULL AUTO_INCREMENT,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	file varchar(255),
	publication_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE comments (
	id INT NOT NULL AUTO_INCREMENT,
	news_id INT NOT NULL,
	author TEXT,
	comment TEXT NOT NULL,
	PRIMARY KEY (id),
    constraint comments_news_id_fk
    foreign key (news_id)
    references news(id)
    ON DELETE CASCADE
);

insert into news (title, content, file)
values ('title1', 'content1', null),
       ('title2', 'content2', null),
       ('title3', 'content3', null);

insert into comments (news_id, author, comment)
values (1, 'author1', 'comment1'),
       (2, 'author2', 'comment2'),
       (3, 'author3', 'comment3');