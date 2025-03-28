/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the "fee" table's model
class.It receives any CRUD operation
requests and hands the over to class
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.
*/

const ModelMaster = require("./ModelMaster");
const TableName = "hha_dews";

module.exports = class SessionLogsModel {
  constructor() {}

  static insert(jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.insert(TableName, jsonObject_);

      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static get_all_records() {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.selectAll(TableName);
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static get_all_records_limit_1() {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.selectLimitToOne(TableName);
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static get_all_milk_records_limit_1() {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.selectLimitToOne("milk_production_dews");
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static get_specific_records(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.selectSpecific(TableName, ColumnName, value_);
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static batch_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.batch_update(TableName, jsonObject_);
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static individual_record_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.individual_update(
          TableName,
          jsonObject_,
          ColumnName,
          value_
      );
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static updateHasBeenFetched(QID) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.updateHasBeenFetched(QID);
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static updateMilkHasBeenFetched(QID) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.updateMilkHasBeenFetched(QID);
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static delete_user_specic_record(
      ColumnName,
      value_,
      UserIdColumnName,
      UserId
  ) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.delete(
          TableName,
          ColumnName,
          value_,
          UserIdColumnName,
          UserId
      );
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static get_number_of_records(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.get_number_of_records(
          TableName,
          ColumnName,
          value_
      );
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static user_specific_select_query(
      ColumnName,
      value_,
      UserIdColumnName,
      UserId
  ) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.user_specific_select_query(
          TableName,
          ColumnName,
          value_,
          UserIdColumnName,
          UserId
      );
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

  static getUserBySessionLogId(sessionLogId) {
    return new Promise(function(resolve, reject) {
      var myPromise = ModelMaster.getUserBySessionLogId(sessionLogId);
      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }

};
