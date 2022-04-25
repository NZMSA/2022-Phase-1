# MSA 2022 SQL Relational DB Workshop

Welcome to the SQL Relational DB Workshop. By now, you should be familiar with Basic Relational Database and SQL queries.

Here is an assignment to help you review your knowledge.

> 1. Write an SQL statement that lists school names, student names, and their cities only if the school and the student are in the same city and the student is not from New York.

**Table: school**

| school_id | school_name        | city          |
| --------- | ------------------ | ------------- |
| 1         | Stanford           | Stanford      |
| 2         | University of Cali | San Francisco |
| 3         | Harvard University | New York      |
| 4         | MIT                | Boston        |
| 5         | Yale               | New Haven     |

**Table: student**

| student_id | student_name | city          | school_id |
| ---------- | ------------ | ------------- | --------- |
| 1001       | Peter Brebec | New York      | 1         |
| 1002       | John Goorgy  | San Francisco | 2         |
| 2003       | Brad Smith   | New York      | 3         |
| 1004       | Fabian Johns | Boston        | 5         |
| 1005       | Brad Cameron | Stanford      | 1         |
| 1006       | Geoff Firby  | Boston        | 5         |
| 1007       | Johnny Blue  | New Haven     | 2         |
| 1008       | Johse Brook  | Miami         | 2         |

> 2. Write an SQL statement that lists student names, subject names, subject lecturers, and the max amount of points for all subjects except Computer Science and any subjects with a max score between 100 and 200.

**Table: school**

| subject_id | subject_name     | max_score | lecturer        |
| ---------- | ---------------- | --------- | --------------- |
| 11         | Math             | 130       | Christena Solem |
| 12         | Computer Science | 150       | Jaime Pille     |
| 13         | Biology          | 300       | Carrol Denmark  |
| 14         | Geography        | 220       | Yuette Galang   |
| 15         | Physics          | 110       | Colton Rather   |
| 16         | Chemistry        | 400       | Nan Mongeau     |

**Table: student**

| student_id | student_name   | city          | subject_id |
| ---------- | -------------- | ------------- | ---------- |
| 2001       | Thurman Thorn  | New York      | 11         |
| 2002       | Sharda Clemens | San Francisco | 12         |
| 2003       | Buck Elkins    | New York      | 13         |
| 2004       | Fabian Johns   | Boston        | 15         |
| 2005       | Brad Cameron   | Stanford      | 11         |
| 2006       | Sofia Roles    | Boston        | 16         |
| 2007       | Rory Pietila   | New Haven     | 12         |
