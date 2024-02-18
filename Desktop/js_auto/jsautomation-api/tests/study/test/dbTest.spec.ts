import { test, expect } from "@playwright/test";
import mysql from "mysql";

test.describe.only("Testing db", () => {
    let pool;
    test.beforeAll(() => {
        pool = mysql.createPool({
            host: "yh6.h.filess.io",
            user: "automation_heraction",
            password: "a15e5a47817c45a99ca9f32298e1cca90ea3c056",
            database: "automation_heraction",
            port: 3306,
        });
    });

    test("Get users", async () => {
        const connection = await new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) reject(err);
                resolve(connection);
            });
        });
        const queryResult = await new Promise((resolve, reject) => {
            connection.query(
                'SELECT * from users_dytynenko',
                function (error, results, fields) {
                    connection.release();
                    if (error) reject(error);
                    resolve(results);
                }
            );
        });
        console.log(queryResult);
        expect(queryResult.length).toEqual(4);
    });

    test("Update user", async () => {
        const userId = 5;
        const updatedUserData = {
            username: "put_user55",
            email: "user55@gmail.com",
            password: "user55"
        };

        const connection = await new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) reject(err);
                resolve(connection);
            });
        });
        const updateQuery = `
            UPDATE users_dytynenko 
            SET username='${updatedUserData.username}', email='${updatedUserData.email}', password='${updatedUserData.password}' 
            WHERE id=${userId}
        `;
        const updateResult = await new Promise((resolve, reject) => {
            connection.query(updateQuery, function (error, results, fields) {
                connection.release();
                if (error) reject(error);
                resolve(results);
            });
        });
        expect(updateResult.affectedRows).toEqual(1); // Check if exactly 1 row was affected
        // Check if user information is updated successfully by fetching user data from database
        const getUserQuery = `SELECT * FROM users_dytynenko WHERE id=${userId}`;
        const userDataAfterUpdate = await new Promise((resolve, reject) => {
            connection.query(getUserQuery, function (error, results, fields) {
                if (error) reject(error);
                resolve(results[0]);
            });
        });
        expect(userDataAfterUpdate.username).toEqual(updatedUserData.username);
        expect(userDataAfterUpdate.email).toEqual(updatedUserData.email);
        expect(userDataAfterUpdate.password).toEqual(updatedUserData.password);
    });

    test("Create new user", async () => {
        const newUserData = {
            username: "new_user",
            email: "new_user@example.com",
            password: "password"
        };
        const connection = await new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) reject(err);
                resolve(connection);
            });
        });
        const createUserQuery = `
            INSERT INTO users_dytynenko (username, email, password)
            VALUES ('${newUserData.username}', '${newUserData.email}', '${newUserData.password}')
        `;
        const createUserResult = await new Promise((resolve, reject) => {
            connection.query(createUserQuery, function (error, results, fields) {
                connection.release();
                if (error) reject(error);
                resolve(results);
            });
        });
        expect(createUserResult.affectedRows).toEqual(1); // Check if exactly 1 row was affected
        // Check if user is created successfully by fetching user data from database
        const getUserQuery = `SELECT * FROM users_dytynenko WHERE username='${newUserData.username}'`;
        const userDataAfterCreation = await new Promise((resolve, reject) => {
            connection.query(getUserQuery, function (error, results, fields) {
                if (error) reject(error);
                resolve(results[0]);
            });
        });
        expect(userDataAfterCreation.username).toEqual(newUserData.username);
        expect(userDataAfterCreation.email).toEqual(newUserData.email);
        expect(userDataAfterCreation.password).toEqual(newUserData.password);
    });

    test("Delete last user", async () => {
        // Отримання останнього id користувача
        const getLastUserIdQuery = `
            SELECT id FROM users_dytynenko ORDER BY id DESC LIMIT 1
        `;
        const connection = await new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) reject(err);
                resolve(connection);
            });
        });
        const lastUserIdResult = await new Promise((resolve, reject) => {
            connection.query(getLastUserIdQuery, function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            });
        });
        if (lastUserIdResult.length === 0) {
            throw new Error("No users found in the database");
        }
        const lastUserId = lastUserIdResult[0].id;
        // Видалення останнього користувача
        const deleteUserQuery = `
            DELETE FROM users_dytynenko
            WHERE id = ${lastUserId}
        `;
        const deleteUserResult = await new Promise((resolve, reject) => {
            connection.query(deleteUserQuery, function (error, results, fields) {
                connection.release();
                if (error) reject(error);
                resolve(results);
            });
        });
        expect(deleteUserResult.affectedRows).toEqual(1); // Перевірка, що видалено один запис
    });
});
