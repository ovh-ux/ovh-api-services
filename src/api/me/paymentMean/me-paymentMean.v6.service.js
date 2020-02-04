import set from 'lodash/set';

angular
  .module('ovh-api-services')
  .service('OvhApiMePaymentMeanV6', (OvhApiMePaymentMeanBankAccount, OvhApiMePaymentMeanCreditCard, OvhApiMePaymentMeanPaypal, OvhApiMePaymentMeanDeferredPaymentAccount) => ({
    getDefaultPaymentMean() {
      return OvhApiMePaymentMeanCreditCard
        .v6()
        .getDefaultPaymentMean()
        .then((defaultPaymentMeanCreditCard) => {
          if (defaultPaymentMeanCreditCard) {
            set(defaultPaymentMeanCreditCard, 'paymentType', 'creditCard');
            return defaultPaymentMeanCreditCard;
          }
          return OvhApiMePaymentMeanPaypal
            .v6()
            .getDefaultPaymentMean()
            .then((defaultPaymentMeanPaypal) => {
              if (defaultPaymentMeanPaypal) {
                set(defaultPaymentMeanPaypal, 'paymentType', 'paypal');
                return defaultPaymentMeanPaypal;
              }
              return OvhApiMePaymentMeanBankAccount
                .v6()
                .getDefaultPaymentMean()
                .then((defaultPaymentMeanBankAccount) => {
                  if (defaultPaymentMeanBankAccount) {
                    set(defaultPaymentMeanBankAccount, 'paymentType', 'bankAccount');
                    return defaultPaymentMeanBankAccount;
                  }

                  return OvhApiMePaymentMeanDeferredPaymentAccount
                    .v6()
                    .getDefaultPaymentMean()
                    .then((defaultPaymentMeanDeferred) => {
                      if (defaultPaymentMeanDeferred) {
                        set(defaultPaymentMeanDeferred, 'paymentType', 'deferredPaymentAccount');
                        return defaultPaymentMeanDeferred;
                      }

                      return null;
                    });
                });
            });
        });
    },
  }));
