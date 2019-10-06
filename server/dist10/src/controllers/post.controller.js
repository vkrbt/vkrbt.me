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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const auth_1 = require("../auth");
let PostController = class PostController {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async create(post) {
        return await this.postRepository.create(post);
    }
    async find(filter) {
        return await this.postRepository.find(filter);
    }
    async findById(id) {
        return await this.postRepository.findById(id);
    }
    async updateById(id, post) {
        await this.postRepository.updateById(id, post);
    }
    async deleteById(id) {
        await this.postRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/posts', {
        responses: {
            '200': {
                description: 'Post model instance',
                content: { 'application/json': { 'x-ts-type': models_1.Post } },
            },
        },
    }),
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Post]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    rest_1.get('/posts', {
        responses: {
            '200': {
                description: 'Array of Post model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Post } },
                    },
                },
            },
        },
    }),
    auth_1.secured(auth_1.SecuredType.DENY_ALL),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Post))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "find", null);
__decorate([
    rest_1.get('/posts/{id}', {
        responses: {
            '200': {
                description: 'Post model instance',
                content: { 'application/json': { 'x-ts-type': models_1.Post } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findById", null);
__decorate([
    rest_1.patch('/posts/{id}', {
        responses: {
            '204': {
                description: 'Post PATCH success',
            },
        },
    }),
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Post]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updateById", null);
__decorate([
    rest_1.del('/posts/{id}', {
        responses: {
            '204': {
                description: 'Post DELETE success',
            },
        },
    }),
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deleteById", null);
PostController = __decorate([
    __param(0, repository_1.repository(repositories_1.PostRepository)),
    __metadata("design:paramtypes", [repositories_1.PostRepository])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map