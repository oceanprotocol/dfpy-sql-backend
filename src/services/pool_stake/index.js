const { selectQuery } = require("../querier");

const getStakes = ({ jsonsql, sort, limit, offset, group, fields }) => {
  return selectQuery(
    jsonsql,
    sort,
    limit,
    offset,
    "pool_stakes",
    group,
    fields
  );
};

module.exports = {
  getStakes,
};
