'use strict';

const EntityBase = require('./entityBase');

/**
 * @classdesc User entity.
 * @class
 * @extends EntityBase
 * @author Bruno Morceli - pirofagista@gmail.com
 * @memberof Entity
 */
class UserEntity extends EntityBase {

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
   * @param {String} [label=''] A valid label using the following rule: first name and last name or email (sent only by API).
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

    /** @property {string} id Category UUID. */
    this.id = id;
    
    /** @property {string} email User e-mail. Size:  2-256 characters. */
    this.email = email;
    
    /** @property {string} firstName User first name. */
    this.firstName = firstName;
    
    /** @property {string} lastName User last name. */
    this.lastName = lastName;
    
    /** @property {Date} birthday User birthday. */
    this.birthday = birthday;
    
    /** @property {boolean} isMale User gender where: [true] male, [false] female. */
    this.isMale = isMale;
    
    /** @property {Date} loginAt Last login date. */
    this.loginAt = loginAt;
    
    /** @property {string} password User password. Size:  3-256 characters. Notive, this server will be never returned by server. */
    this.password = password;
    
    /** @property {Date} createdAt Creation date. */
    this.createdAt = createdAt;
    
    /** @property {Date} updatedAt Last update Date. */
    this.updatedAt = updatedAt;
    
    /** @property {String} label A valid label using the following rule: first name and last name or email (sent only by API). */
    this.label = label;
  }

}

module.exports = UserEntity;
