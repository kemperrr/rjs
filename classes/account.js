module.exports = class Account{

    constructor(){
    }

    /**
    * id property setter
    * @param {*} id
    */
    set id(id) {
        this._id = id
    }
    
    /**
    * id property getter
    * @returns {*}
    */
    get id() {
        return this._id
    }

    /**
    * username property setter
    * @param {*} username
    */
    set username(username) {
        this._username = username
    }
    
    /**
    * username property getter
    * @returns {*}
    */
    get username() {
        return this._username
    }

    /**
    * password property setter
    * @param {*} password
    */
    set password(password) {
        this._password = password
    }
    
    /**
    * password property getter
    * @returns {*}
    */
    get password() {
        return this._password
    }

    /**
    * email property setter
    * @param {*} email
    */
    set email(email) {
        this._email = email
    }
    
    /**
    * email property getter
    * @returns {*}
    */
    get email() {
        return this._email
    }

    /**
    * password_salt property setter
    * @param {*} password_salt
    */
    set password_salt(password_salt) {
        this._password_salt = password_salt
    }
    
    /**
    * password_salt property getter
    * @returns {*}
    */
    get password_salt() {
        return this._password_salt
    }

}