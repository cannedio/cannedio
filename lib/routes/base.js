'use strict';

class RouteBase {

  /**
   * Filter a request data from Axios.
   * @param {Promise} requestPromise Request promise generate by Axios.
   * @returns {Promise} Cleaned data.
   */
  filterRequest(requestPromise) {
    return new Promise((resolve,  reject) => {

      requestPromise
      .then(result => resolve(result.data))
      .catch(error => {
        if (
          !error.response || 
          !error.response.data || 
          !error.response.data.message
        ) {
          return reject('Unknown Error');
        }

        reject(error.response.data.message);
      });

    });
  }
}

module.exports = RouteBase;