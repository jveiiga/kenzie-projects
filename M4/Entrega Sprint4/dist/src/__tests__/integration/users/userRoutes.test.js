"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../../data-source"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mocks_1 = require("../../mocks");
describe("/users", () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.initialize().then((res) => {
            connection = res;
        }).catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test("POST /users -  Must be able to create a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/users').send(mocks_1.mockedUser);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("name");
        expect(response.body).toHaveProperty("email");
        expect(response.body).toHaveProperty("isAdm");
        expect(response.body).toHaveProperty("isActive");
        expect(response.body).toHaveProperty("createdAt");
        expect(response.body).toHaveProperty("updatedAt");
        expect(response.body).not.toHaveProperty("password");
        expect(response.body.name).toEqual("Joana");
        expect(response.body.email).toEqual("joana@mail.com");
        expect(response.body.isAdm).toEqual(false);
        expect(response.body.isActive).toEqual(true);
        expect(response.status).toBe(201);
    }));
    test("POST /users -  should not be able to create a user that already exists", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/users').send(mocks_1.mockedUser);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(400);
    }));
    test("GET /users -  Must be able to list users", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/users').send(mocks_1.mockedAdmin);
        const adminLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const response = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        expect(response.body).toHaveLength(2);
    }));
    test("GET /users -  should not be able to list users without authentication", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/users');
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    }));
    test("GET /users -  should not be able to list users not being admin", () => __awaiter(void 0, void 0, void 0, function* () {
        const userLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedUserLogin);
        const response = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${userLoginResponse.body.token}`);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(403);
    }));
    test("DELETE /users/:id -  should not be able to delete user without authentication", () => __awaiter(void 0, void 0, void 0, function* () {
        const adminLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const UserTobeDeleted = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        const response = yield (0, supertest_1.default)(app_1.default).delete(`/users/${UserTobeDeleted.body[0].id}`);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    }));
    test("DELETE /users/:id -  should not be able to delete user not being admin", () => __awaiter(void 0, void 0, void 0, function* () {
        const userLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedUserLogin);
        const adminLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const UserTobeDeleted = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        const response = yield (0, supertest_1.default)(app_1.default).delete(`/users/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${userLoginResponse.body.token}`);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(403);
    }));
    test("DELETE /users/:id -  Must be able to soft delete user", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/users').send(mocks_1.mockedAdmin);
        const adminLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const UserTobeDeleted = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        const response = yield (0, supertest_1.default)(app_1.default).delete(`/users/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        const findUser = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        expect(response.status).toBe(204);
        expect(findUser.body[0].isActive).toBe(false);
    }));
    test("DELETE /users/:id -  shouldn't be able to delete user with isActive = false", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/users').send(mocks_1.mockedAdmin);
        const adminLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const UserTobeDeleted = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        const response = yield (0, supertest_1.default)(app_1.default).delete(`/users/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
    }));
    test("DELETE -  should not be able to delete user with invalid id", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/users').send(mocks_1.mockedAdmin);
        const adminLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const response = yield (0, supertest_1.default)(app_1.default).delete(`/users/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
    }));
    test("PATCH /users/:id -  should not be able to update user without authentication", () => __awaiter(void 0, void 0, void 0, function* () {
        const adminLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const userTobeUpdate = yield (0, supertest_1.default)(app_1.default).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/users/${userTobeUpdate.body[0].id}`);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    }));
    test("PATCH /users/:id - should not be able to update user with invalid id", () => __awaiter(void 0, void 0, void 0, function* () {
        const newValues = { name: "Joana Brito", email: "joanabrito@mail.com" };
        const admingLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`;
        const userTobeUpdateRequest = yield (0, supertest_1.default)(app_1.default).get("/users").set("Authorization", token);
        const userTobeUpdateId = userTobeUpdateRequest.body[0].id;
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/users/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", token).send(newValues);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(404);
    }));
    test("PATCH /users/:id - should not be able to update isAdm field value", () => __awaiter(void 0, void 0, void 0, function* () {
        const newValues = { isAdm: false };
        const admingLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`;
        const userTobeUpdateRequest = yield (0, supertest_1.default)(app_1.default).get("/users").set("Authorization", token);
        const userTobeUpdateId = userTobeUpdateRequest.body[0].id;
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/users/${userTobeUpdateId}`).set("Authorization", token).send(newValues);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    }));
    test("PATCH /users/:id - should not be able to update isActive field value", () => __awaiter(void 0, void 0, void 0, function* () {
        const newValues = { isActive: false };
        const admingLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`;
        const userTobeUpdateRequest = yield (0, supertest_1.default)(app_1.default).get("/users").set("Authorization", token);
        const userTobeUpdateId = userTobeUpdateRequest.body[0].id;
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/users/${userTobeUpdateId}`).set("Authorization", token).send(newValues);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    }));
    test("PATCH /users/:id - should not be able to update id field value", () => __awaiter(void 0, void 0, void 0, function* () {
        const newValues = { id: false };
        const admingLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`;
        const userTobeUpdateRequest = yield (0, supertest_1.default)(app_1.default).get("/users").set("Authorization", token);
        const userTobeUpdateId = userTobeUpdateRequest.body[0].id;
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/users/${userTobeUpdateId}`).set("Authorization", token).send(newValues);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    }));
    test("PATCH /users/:id - should not be able to update another user without adm permission", () => __awaiter(void 0, void 0, void 0, function* () {
        const newValues = { isActive: false };
        const userLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedUser);
        const admingLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const userToken = `Bearer ${userLoginResponse.body.token}`;
        const adminToken = `Bearer ${admingLoginResponse.body.token}`;
        const userTobeUpdateRequest = yield (0, supertest_1.default)(app_1.default).get("/users").set("Authorization", adminToken);
        const userTobeUpdateId = userTobeUpdateRequest.body[1].id;
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/users/${userTobeUpdateId}`).set("Authorization", userToken).send(newValues);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    }));
    test("PATCH /users/:id -  should be able to update user", () => __awaiter(void 0, void 0, void 0, function* () {
        const newValues = { name: "Joana Brito", email: "joanabrito@mail.com" };
        const admingLoginResponse = yield (0, supertest_1.default)(app_1.default).post("/login").send(mocks_1.mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`;
        const userTobeUpdateRequest = yield (0, supertest_1.default)(app_1.default).get("/users").set("Authorization", token);
        const userTobeUpdateId = userTobeUpdateRequest.body[0].id;
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/users/${userTobeUpdateId}`).set("Authorization", token).send(newValues);
        const userUpdated = yield (0, supertest_1.default)(app_1.default).get("/users").set("Authorization", token);
        expect(response.status).toBe(200);
        expect(userUpdated.body[0].name).toEqual("Joana Brito");
        expect(userUpdated.body[0]).not.toHaveProperty("password");
    }));
});
//# sourceMappingURL=userRoutes.test.js.map