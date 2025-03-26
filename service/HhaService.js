/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the SessionLogs's controller class.
It receives calls from the "SessionLogsRoutes" class and
passes the calls down to the "HhaRepository" class
*/

const HhaRepository = require("../repository/HhaRepository");

module.exports = class SessionLogsController {
  constructor() {}

  static insert(jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = HhaRepository.insert(jsonObject_);

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
      var myPromise = HhaRepository.get_all_records();

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
      var myPromise = HhaRepository.get_all_records_limit_1();

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

  static get_milk_records_limit_1() {
    return new Promise(function(resolve, reject) {
      var myPromise = HhaRepository.get_all_milk_records_limit_1();

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
      var myPromise = HhaRepository.get_specific_records(ColumnName, value_);

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
      var myPromise = HhaRepository.batch_update(jsonObject_);

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
      var myPromise = HhaRepository.individual_record_update(
          ColumnName,
          value_,
          jsonObject_
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
      var myPromise = HhaRepository.updateHasBeenFetched(QID)

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
      var myPromise = HhaRepository.updateMilkHasBeenFetched(QID)

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
      var myPromise = HhaRepository.delete_user_specic_record(
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
      var myPromise = HhaRepository.get_number_of_records(
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
      var myPromise = HhaRepository.user_specific_select_query(
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
      var myPromise = HhaRepository.getUserBySessionLogId(sessionLogId);

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
