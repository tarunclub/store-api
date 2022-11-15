const app = require("./app");

require("./config/database").connect();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
