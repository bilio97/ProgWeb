export function toLower(value) {
  return value.toLowerCase();
};
export function toUpper(value) {
  return value.toUpperCase();
};

export function showError(errors, field) {
  let mensagem;
  if (typeof errors != 'undefined') {
    errors.forEach(function (error) {
      if (error.path == field) {
        mensagem = error.message;
        return;
      }
    });
    return mensagem;
  }
}
