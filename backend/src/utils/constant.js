// constant.js
const Account_LIMIT = {
    'saving': 0,
    'current': 10,
};

const CARD_TYPE = {
    'basic': {
        max: 10,
        min: 0
    },
    'classic': {
        max: 100,
        min: 0
    },
    'platinum': {
        max: 1000,
        min: 0
    }
};

module.exports = {
    Account_LIMIT,
    CARD_TYPE
};
