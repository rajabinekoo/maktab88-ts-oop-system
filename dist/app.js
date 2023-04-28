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
class UserStorage {
    constructor() {
        this.users = [];
    }
}
class Person {
}
// type person = {
//     avatar?: string;
//     email?: string;
//     first_name?: string;
//     id?: number;
//     last_name?: string;
// }
const fetchUsers = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://reqres.in/api/users?page=${page}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        const result = yield response.json();
        return result;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
fetchUsers().then((result) => {
    var _a;
    console.log((_a = result === null || result === void 0 ? void 0 : result.data[0]) === null || _a === void 0 ? void 0 : _a.avatar);
});
const userStorage = new UserStorage();
