const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const nestedFields = deconstruct(field);
    let rejectField = false;

    for (let index = 0; index < nestedFields.length; index++) {
      const reconstructedPortionOfField = reconstructPortion(nestedFields, index + 1);

      if (fieldIsInProjection(projection, reconstructedPortionOfField)) {
        rejectField = true;
        break;
      }
    }

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

const deconstruct = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};

const reconstructPortion = (nestedFields, end) => nestedFields.slice(0, end).join('.');

const fieldIsInProjection = (projection, field) => projection[field];

module.exports = { buildProjection };
