const db = require("../config/db");

class Users {
  constructor(username, password, email, role_id, status_id) {
    (this.username = username),
      (this.password = password),
      (this.email = email),
      (this.role_id = role_id);
    this.status_id = status_id;
  }

  save() {
    const sql =
      "INSERT INTO tbl_user(role_id,status_id,UserName,Password,Email) VALUES(?,?,?,?,?)";
    return db.execute(sql, [
      this.role_id,
      this.status_id,
      this.username,
      this.password,
      this.email,
    ]);
  }

  static findAll() {
    const sql = `SELECT *FROM V_findUsers `;
    return db.execute(sql);
  }

  static checkName(username) {
    const sql = `SELECT *FROM tbl_user WHERE UserName=?`;
    return db.execute(sql, [username]);
  }

  static checkEmail(email) {
    const sql = `SELECT *FROM tbl_user WHERE Email=?`;
    return db.execute(sql, [email]);
  }

  static user_login(credentail) {
    const sql = "CALL SP_Login(?)";
    return db.execute(sql, [credentail]);
  }

  //   static findByEmail(email) {
  //     const sql = `SELECT id,username,email,tblRoles.role_name,password FROM tblUsers
  //     INNER JOIN tblRoles ON tblUsers.role_id = tblRoles.role_id WHERE email = ? AND status_id =1`;
  //     return db.execute(sql, [email]);
  //   }

  //   static updateRefreshToken(id, refreshToken) {
  //     const sql = "UPDATE tblUsers SET token = ? WHERE id = ?";
  //     return db.query(sql, [refreshToken, id]);
  //   }

  //   static findByRefreshToken(refresh_token) {
  //     const sql = `SELECT username,email,id,tblRoles.role_name FROM tblUsers
  //     INNER JOIN tblRoles ON tblUsers.role_id = tblRoles.role_id
  //     WHERE token = ?`;
  //     return db.execute(sql, [refresh_token]);
  //   }

  //   static findByTokenAndId(token, id) {
  //     const sql = "SELECT *FROM tblUsers WHERE token = ? AND id=?";
  //     return db.execute(sql, [token, id]);
  //   }

  //   static updatePassword(password, id) {
  //     const sql = "UPDATE tblUsers SET password = ? WHERE id=?";
  //     return db.query(sql, [password, id]);
  //   }

  //   static findById(id) {
  //     const sql = `SELECT tblUsers.id,username,email,tblRoles.role_name,tblUsers.role_id,phone_number,password,tblUsers.status_id FROM tblUsers
  //     INNER JOIN tblRoles ON tblUsers.role_id = tblRoles.role_id
  //     INNER JOIN tblStatus ON tblUsers.status_id = tblStatus.id
  //     WHERE tblUsers.id = ?`;
  //     return db.execute(sql, [id]);
  //   }

  //   static deleteById(id) {
  //     const sql = "DELETE FROM tblUsers WHERE id = ?";
  //     return db.execute(sql, [id]);
  //   }

  //   static updateOne(username, email, phone_number, role_id, status_id, id) {
  //     const sql =
  //       "UPDATE tblUsers SET username=?,email=?,phone_number=?,role_id=?,status_id=? WHERE id = ?";
  //     return db.query(sql, [
  //       username,
  //       email,
  //       phone_number,
  //       role_id,
  //       status_id,
  //       id,
  //     ]);
  //   }

  //   static update_duplicate(id, userName) {
  //     const sql = "SELECT *FROM tblUsers WHERE NOT id = ? AND username = ?";
  //     return db.execute(sql, [id, userName]);
  //   }
}

module.exports = Users;
