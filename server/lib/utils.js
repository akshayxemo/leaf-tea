const AddBase64Unit = (string) => {
  const base64 = `data:image/png;base64,${string}`;
  return base64;
};

module.exports = { AddBase64Unit };
