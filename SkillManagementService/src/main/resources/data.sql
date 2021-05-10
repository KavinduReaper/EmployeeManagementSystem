DROP TABLE IF EXISTS skills;

CREATE TABLE skills (
            id INT AUTO_INCREMENT  PRIMARY KEY,
            name VARCHAR(250) NOT NULL,
            skills VARCHAR(250) NOT NULL
);

INSERT INTO skills (name, skills) VALUES
('John', 'C++'),
('John', 'Python'),
('Roman', 'Python'),
('Natalia', 'Java');
