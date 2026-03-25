export default function buildDefinitionList(definitions) {
  let result;
  if (definitions.length === 0) {
    result = '';
  } else {
    result = '<dl>';
    for (let i = 0; i < definitions.length; i++) {
      let term = definitions[i][0];
      let description = definitions[i][1];
      result = result + '<dt>' + term + '</dt><dd>' + description + '</dd>';
    }
    result = result + '</dl>';
  }
  return result;
}