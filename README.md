# Welcome to Finals!!!

# Collaborators
  - Oluwatobi Onipede
  - Andrew Li
  - Nathan Wiles
  - Caroline Olagunju

# Project Name
  - InvoiceForge


# Database Initialization
1.  Ensure that your .env has the following:
```
    DB_NAME=your_db_name
    DB_USER=your_db_user
    DB_PASSWORD= your_db_password
    DB_HOST=localhost
    DB_PORT=5432
```
2.  Ensure that you have a postgres database created with the name specified in your .env file
3. Ensure that you are in the backend directory:
```
    cd backend
```
4. run the following commands in the terminal:
```sh
    npx run db:migrate
    npx run db:seed
```
5. You should see two message in the terminal that confirm that the migration and seeding were successful
```sh
# lines preceeding
Using environment: development
Batch 1 run: 1 migrations
# lines in between
Using environment: development
Ran 3 seed files
```
6.  You should now have a database with the correct tables and some seed data
