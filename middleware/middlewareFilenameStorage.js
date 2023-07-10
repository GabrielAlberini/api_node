const middlewareFilenameStorage = (req, res) => {
  try {
    const { file } = req;
    return {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`, // ubicación del archivo en local
    };
  } catch (error) {
    res.status("403");
    res.send({ error: "ERROR_CREATE_FILENAME" });
  }
};

module.exports = { middlewareFilenameStorage };
