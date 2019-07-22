import IUser from '../interface/IUser';
export default class User implements IUser {
    private Id?: number;
    private Name?: string;
    private Account?: string;
    constructor(id?: number, name?: string, account?: string) {
        this.Id = id;
        this.Name = name;
        this.Account = account;
    }
    public addUser(user: User): User {
        return user;
    }
}

