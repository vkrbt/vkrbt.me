"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const repository_1 = require("@loopback/repository");
const auth_1 = require("../auth");
const util_1 = require("util");
const { sign } = require('jsonwebtoken');
const signAsync = util_1.promisify(sign);
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(user) {
        return await this.userRepository.create(user);
    }
    async login(credentials) {
        if (!credentials.email || !credentials.password)
            throw new rest_1.HttpErrors.BadRequest('Missing Username or Password');
        const user = await this.userRepository.findOne({ where: { email: credentials.email } });
        if (!user)
            throw new rest_1.HttpErrors.Unauthorized('Invalid credentials');
        const isPasswordMatched = user.password === credentials.password;
        if (!isPasswordMatched)
            throw new rest_1.HttpErrors.Unauthorized('Invalid credentials');
        const tokenObject = { username: credentials.email };
        const token = await signAsync(tokenObject, auth_1.JWT_SECRET);
        const { id, email } = user;
        return {
            token,
            id: id,
            email,
        };
    }
};
__decorate([
    rest_1.post('/users'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    rest_1.post('/users/login'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map