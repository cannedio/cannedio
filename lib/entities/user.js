'use strict';

const EntityBase = require('./entityBase');

/**
 * @classdesc User entity.
 * @class
 * @extends EntityBase
 * @memberof Entity
 */
class User extends EntityBase {

  /**
   * @constructor
   * @param {string} [id=null] Category UUID.
   * @param {string} [email=''] User e-mail. Size:  2-256 characters.
   * @param {string} [password=''] User password. Size:  3-256 characters. Notive, this server will be never returned by server.
   * @param {string} [firstName=''] User first name.
   * @param {string} [lastName=''] User last name.
   * @param {Date} [birthday=new Date()] User birthday.
   * @param {boolean} [isMale=true] User gender where: [true] male, [false] female.
   * @param {Date} [loginAt=new Date()] Last login date.
   * @param {Date} [createdAt=new Date()] Creation date.
   * @param {Date} [updatedAt=null] Last update Date.
   */

  constructor(
    id=null,
    email='',
    password='',
    firstName='',
    lastName='',
    birthday=new Date(),
    isMale=true,
    loginAt=new Date(),
    createdAt=new Date(),
    updatedAt=null,
    label=''
  ) {
    super();

    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.isMale = isMale;
    this.loginAt = loginAt;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.label = label;
  }

}

module.exports = User;
