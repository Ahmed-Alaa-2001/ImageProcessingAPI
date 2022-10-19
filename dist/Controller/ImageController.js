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
exports.resizingImage = exports.getOrginalImage = exports.getResizedImage = exports.valid = exports.getApi = void 0;
const express_validator_1 = require("express-validator");
const sharp_1 = __importDefault(require("sharp"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const output = path_1.default.resolve(__dirname, '../assets/images/thumbnails');
const input = path_1.default.resolve(__dirname, '../assets/images');
const valid = (width, height, filename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_extra_1.default.ensureDir(output);
        return yield fs_extra_1.default.pathExists(`${output}/${filename}_${width}_${height}.jpg`);
    }
    catch (error) {
        throw new Error('File not exists in the output folder');
    }
});
exports.valid = valid;
const getApi = (req, res) => {
    res.status(200).send("go to image Api");
};
exports.getApi = getApi;
const resizingImage = (width, height, filename) => __awaiter(void 0, void 0, void 0, function* () {
    const isImageExist = yield valid(width, height, filename);
    if (!isImageExist) {
        yield (0, sharp_1.default)(`${input}/${filename}.jpg`).resize(Number(width), Number(height)).toFile(`${output}/${filename}_${width}_${height}.jpg`);
    }
});
exports.resizingImage = resizingImage;
const getResizedImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const height = parseInt(req.query.height, 10);
    const width = parseInt(req.query.width, 10);
    const filename = req.query.filename;
    if ((0, express_validator_1.validationResult)(req).isEmpty()) {
        try {
            resizingImage(width, height, filename);
            res.status(200).render('resizeImage', {
                validationErrors: req.flash("validationErrors"),
                width,
                height,
                thumbnail: `${filename}_${width}_${height}.jpg`
            });
        }
        catch (err) {
            req.flash('authError', err);
            console.log(err);
            res.status(200).render('resizeImage', {
                validationErrors: req.flash("validationErrors"),
                width,
                height,
                authError: req.flash("authError")[0]
            });
        }
    }
    else {
        req.flash("validationErrors", (0, express_validator_1.validationResult)(req).array());
        res.status(200).render('resizeImage', {
            validationErrors: req.flash("validationErrors"),
            thumbnail: `${filename}_${width}_${height}.jpg`,
            width,
            height
        });
    }
});
exports.getResizedImage = getResizedImage;
const getOrginalImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.filename;
    if ((0, express_validator_1.validationResult)(req).isEmpty()) {
        try {
            res.status(200).render('index', {
                thumbnail: `${name}.jpg`,
                validationErrors: req.flash("validationErrors")
            });
        }
        catch (err) {
            req.flash('authError', err);
            res.status(200).render('index', {
                thumbnail: `${name}.jpg`,
                validationErrors: req.flash("validationErrors")
            });
        }
    }
    else {
        req.flash("validationErrors", (0, express_validator_1.validationResult)(req).array());
        res.status(200).render('index', {
            thumbnail: `${name}.jpg`,
            validationErrors: req.flash("validationErrors")
        });
    }
});
exports.getOrginalImage = getOrginalImage;
